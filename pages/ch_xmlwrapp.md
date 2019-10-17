---
layout: default
title: XmlWrapp (XML parsing and handling, XSLT, XPath)
nav: pages/ch_xmlwrapp
---


{{ page.title }}
===================================================================

## Introduction

The NCBI C++ Toolkit has forked and enhanced the open-source [xmlwrapp](http://vslavik.github.io/xmlwrapp/) project, which provides a simplified way for developers to work with XML. This chapter discusses the NCBI fork (also available as [ncbi-xmlwrapp on GitHub](https://github.com/ncbi/ncbi-xmlwrapp)) and how to use it. This chapter refers to NCBI's project as "XmlWrapp" and the open-source project as "xmlwrapp". Both projects produce a library named `libxmlwrapp`.

## Chapter Outline

The following is an outline of the topics presented in this chapter:

-   [General Information](#ch_xmlwrapp.General_Information)

-   [XmlWrapp Classes](#ch_xmlwrapp.XmlWrapp_Classes)

-   [How To](#ch_xmlwrapp.How_To)

    -   [Create a Document from an std::string Object](#ch_xmlwrapp._Create_a_Document_fr)

    -   [Create a Document from a File](#ch_xmlwrapp._Create_a_Document_fr_1)

    -   [Save a Document or Node to a File](#ch_xmlwrapp.Save_a_Document_to_a)

    -   [Iterate Over Nodes](#ch_xmlwrapp.Iterate_Over_Nodes)

    -   [Insert and Remove Nodes](#ch_xmlwrapp.Insert_and_Remove_No)

    -   [Iterate Over Attributes](#ch_xmlwrapp.Iterate_Over_Attribu)

    -   [Insert and Remove Attributes](#ch_xmlwrapp.Insert_and_Remove_At)

    -   [Work with XML Namespaces](#ch_xmlwrapp.Work_with_XML_Namesp)

    -   [Use an Event Parser](#ch_xmlwrapp.Use_an_Event_Parser)

    -   [Make an XSLT Transformation](#ch_xmlwrapp.Make_an_XSLT_Transfo)

    -   [Run an XPath Query](#ch_xmlwrapp.Run_an_XPath_Query)

    -   [Run an XPath Query with a Default Namespace](#ch_xmlwrapp.Run_an_XPath_Query_with_a_De)

    -   [Use an Extension Function](#ch_xmlwrapp.Use_an_Extension_Function)

    -   [Use an Extension Element](#ch_xmlwrapp.Use_an_Extension_Element)

    -   [Use an XML Catalog](#ch_xmlwrapp.Use_an_XML_Catalog)

-   [Warning: Collaborative Use of XmlWrapp and libxml2](#ch_xmlwrapp.Warning_Collaborative_Use_of)

-   [Implementation Details](#ch_xmlwrapp.Implementation_Details)

    -   [Copying and Referencing Nodes](#ch_xmlwrapp.Copying_and_Referencing_Node)

    -   [XPath Expressions and Namespaces](#ch_xmlwrapp.Using_Namespaces_with_XPath)

    -   [Containers of Attributes - Iteration and Size](#ch_xmlwrapp.Containers_of_Attributes__It)

    -   [Changing Default Attributes](#ch_xmlwrapp.Changing_Default_Attributes)

    -   [Event Parser and Named Entities](#ch_xmlwrapp.Event_Parser_and_Named_Entit)

    -   [Safe and Unsafe Namespaces](#ch_xmlwrapp.Safe_and_Unsafe_Namespaces)

    -   [Thread Safety](#ch_xmlwrapp.Thread_Safety)

    -   [Safe libxml2 and libxslt Cleanup](#ch_xmlwrapp.Safe_libxml2_and_libxslt_Cle)

    -   [Formatting of The Output](#ch_xmlwrapp.Formatting_of_Programmatical)

-   [FAQ](#ch_xmlwrapp.FAQ)

<a name="ch_xmlwrapp.General_Information"></a>

General Information
-------------------

Both NCBI's XmlWrapp project and the open-source [xmlwrapp](http://vslavik.github.io/xmlwrapp/) project produce the `libxmlwrapp` library which is a generic XML handling C++ library built on top of widespread [libxml2](http://xmlsoft.org/) / [libxslt](http://xmlsoft.org/XSLT/) C libraries. The main features of `libxmlwrapp` are:

-   Tree parser (DOM)

-   Event parser (SAX)

-   Creation / removal of nodes, attributes and documents

-   Searching nodes and attributes

-   XSLT transformation support

-   DTD validation support

-   XML catalog support

XmlWrapp was created by forking [xmlwrapp](http://vslavik.github.io/xmlwrapp/) and making these enhancements:

-   Adding support for XPath.

-   Implementing full-featured XML namespace support for both nodes and attributes.

-   Adding XSD validation support.

-   Extending the functionality of some existing classes.

-   Adapting the demo code and test cases to work within the NCBI framework.

-   Adding support for XSLT extension functions and extension elements.

-   Adding the ability to transparently work with default attributes.

-   Fixing some bugs that were in [xmlwrapp](http://vslavik.github.io/xmlwrapp/).

The figure below illustrates the relationship between your C++ application and the XML libraries:

[![Image Overview.png](/cxx-toolkit/static/img/Overview.png)](/cxx-toolkit/static/img/Overview.png "Click to see the full-resolution image")

One goal of the `libxmlwrapp` library is to be a very thin wrapper around `libxml2` / `libxslt` and to provide a simple yet powerful C++ interface without compromising speed. To achieve this goal, the library does not implement expensive run-time validity checks, and it is possible to write compilable C++ code that will cause a segmentation fault. For example, it is possible to create an unsafe XmlWrapp namespace object that points to an existing `libxml2` namespace, then destroy the pointed-to namespace. This results in the unsafe `libxmlwrapp` namespace object containing a dangling pointer. Subsequent access of the pointer will cause an exception or abnormal termination.

The original open-source [libxmlwrapp](http://vslavik.github.io/xmlwrapp/) 0.6.0 was extended and modified to fit the NCBI C++ Toolkit build framework and API functionality requirements. Later, the functional changes introduced in 0.6.1 and 0.6.2 were patched into the NCBI code. Specific enhancements that NCBI incorporated into XmlWrapp include:

-   XPath support:

    -   XPath queries can be run based on XPath expressions. The queries return node sets which can be iterated.

-   A new class, ***xml***::***schema***, was added for XSD support.

-   Implementing a full-featured XML namespace class, ***xml***::***ns***, for use by both nodes and attributes, with these features:

    -   Each node and attribute may be assigned to a namespace, or have their assignment removed. The assigned namespace can be retrieved.

    -   Each node and attribute may contain a list of namespace definitions. Namespace definitions can be added to or removed from this list. The list can be retrieved.

    -   XmlWrapp namespace objects can be either safe or unsafe. Safe namespace objects prevent program crashes by eliminating potentially invalid pointers. Using unsafe namespace objects requires less time and memory, but may result in invalid pointers and may cause a crash. See the [safe and unsafe namespaces](#ch_xmlwrapp.Safe_and_Unsafe_Namespaces) section for more details.

    -   Nodes and attributes can now be searched by namespace as well as by name.

-   Error handling was enhanced (or added) for tree and event parsing, and for DTD and XSD validation. Previously, only the last message was retained and processing stopped on the first error. Now all messages are retained and processing only stops if a fatal error is encountered.

-   Adapting the demo code and test cases to work within the NCBI framework.

-   Fixing some bugs that were in `libxmlwrapp`:

    -   `libxmlwrapp` 0.6.0 did not copy the namespace when it copied an attribute. When XmlWrapp copies an attribute, it also copies the assigned namespace and all namespace definitions contained by the attribute.

    -   The Sun WorkShop compiler failed to compile `libxmlwrapp` 0.6.0 because it was missing a definition for the STL distance algorithm. XmlWrapp conditionally defines this template for this compiler.

    -   The XML parser in `libxmlwrapp` 0.6.0 failed to detect a certain form of mal-formed document. NCBI found and fixed this bug. The patch was submitted to the `libxmlwrapp` project and was accepted.

    -   In `libxmlwrapp` 0.6.0 it was possible that using a reference to a node that was created by dereferencing an iterator could cause a core dump or unexpected data if the iterator was used after the reference was created.

The NCBI enhancements retain the generic nature of `libxmlwrapp`, and are not tailored to any particular application domain.

XmlWrapp demo [applications](https://svn.ncbi.nlm.nih.gov/viewvc/toolkit/trunk/internal/c++/src/internal/demo/misc/xmlwrapp) and [unit tests](https://svn.ncbi.nlm.nih.gov/viewvc/toolkit/trunk/internal/c++/src/internal/test/misc/xmlwrapp) are available inside NCBI, but the most common and basic usage examples are given in the [next section](#ch_xmlwrapp.How_To).

All the XmlWrapp functionality resides in the C++ namespaces [xml::](https://www.ncbi.nlm.nih.gov/IEB/ToolBox/CPP_DOC/doxyhtml/namespacexml.html) and [xslt::](https://www.ncbi.nlm.nih.gov/IEB/ToolBox/CPP_DOC/doxyhtml/namespacexslt.html), and all the code is Doxygen-style commented.

<a name="ch_xmlwrapp.XmlWrapp_Classes"></a>

XmlWrapp Classes
----------------

[![Image ch\_xmlwrapp\_classes.png](/cxx-toolkit/static/img/ch_xmlwrapp_classes.png)](/cxx-toolkit/static/img/ch_xmlwrapp_classes.png "Click to see the full-resolution image")

The figure above shows the most important classes in XmlWrapp. XML can be parsed from a file, memory buffer, or stream, creating a document object. One of the most important things you can get from the document object is the document root node.

Several classes in the figure are marked with the small "circled-i" symbol in the corner. This mark means that the class supports iterators and const iterators. The node class is a container of other nodes and you can iterate over immediate node children similar to how you do with STL containers.

A node may have an XML namespace and also may define namespaces. To support this, XmlWrapp provides the XML namespace class, ***xml***::***ns***.

An XML node may have attributes as well, so XmlWrapp provides the ***xml***::***attributes*** class. This class is a container of attributes so both const and non-const iterators are provided.

The XPath support includes the ***xml***::[xpath\_expression](https://www.ncbi.nlm.nih.gov/IEB/ToolBox/CPP_DOC/lxr/ident?i=xpath_expression) and ***xml***::[node\_set](https://www.ncbi.nlm.nih.gov/IEB/ToolBox/CPP_DOC/lxr/ident?i=node_set) classes. [xpath\_expression](https://www.ncbi.nlm.nih.gov/IEB/ToolBox/CPP_DOC/lxr/ident?i=xpath_expression) objects hold a single expression. [node\_set](https://www.ncbi.nlm.nih.gov/IEB/ToolBox/CPP_DOC/lxr/ident?i=node_set) objects are created as the result of executing an XPath query for a given node. The [node\_set](https://www.ncbi.nlm.nih.gov/IEB/ToolBox/CPP_DOC/lxr/ident?i=node_set) class is a container so it supports iterators.

To support XSD schema validation and DTD validation, XmlWrapp provides the ***xml***::***schema*** and ***xml***::***dtd*** classes. These classes work together with the ***xml***::***document*** class.

Warnings, errors and fatal errors may occur during the parsing and validating. To collect them, XmlWrapp provides the ***xml***::[error\_messages](https://www.ncbi.nlm.nih.gov/IEB/ToolBox/CPP_DOC/lxr/ident?i=error_messages) class. The [error\_messages](https://www.ncbi.nlm.nih.gov/IEB/ToolBox/CPP_DOC/lxr/ident?i=error_messages) class includes the ***print()*** method, which returns a string containing a newline-separated list of messages. It also includes the [has\_warnings()](https://www.ncbi.nlm.nih.gov/IEB/ToolBox/CPP_DOC/lxr/ident?i=has_warnings), [has\_errors()](https://www.ncbi.nlm.nih.gov/IEB/ToolBox/CPP_DOC/lxr/ident?i=has_errors), and [has\_fatal\_errors()](https://www.ncbi.nlm.nih.gov/IEB/ToolBox/CPP_DOC/lxr/ident?i=has_fatal_errors) methods in case you are interested in the presence of a specific type of message. Note that errors and fatal errors are considered separately, so [has\_fatal\_errors()](https://www.ncbi.nlm.nih.gov/IEB/ToolBox/CPP_DOC/lxr/ident?i=has_fatal_errors) may return `true` while [has\_errors()](https://www.ncbi.nlm.nih.gov/IEB/ToolBox/CPP_DOC/lxr/ident?i=has_errors) returns `false`.

<a name="ch_xmlwrapp.How_To"></a>

How To
------

This section includes compact code fragments that show the essence of how to achieve typical goals using XmlWrapp. The examples do not illustrate all the features of XmlWrapp and are not intended to be complete and compilable. Your code will need to include the necessary headers, use try-catch blocks, check for errors, and validate the XML document.

<a name="ch_xmlwrapp._Create_a_Document_fr"></a>

### Create a Document from an std::string Object

```

    std::string         xmldata( "<TagA>"
                                     "<TagB>stuff</TagB>"
                                 "</TagA>" );
    xml::document       doc( xmldata.c_str(), xmldata.size(), NULL );
	
```

