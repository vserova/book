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


    std::string         xmldata( "&lt;TagA&gt;"
                                     "&lt;TagB&gt;stuff&lt;/TagB&gt;"
                                 "&lt;/TagA&gt;" );
    xml::document       doc( xmldata.c_str(), xmldata.size(), NULL );

<a name="ch_xmlwrapp._Create_a_Document_fr_1"></a>

### Create a Document from a File


    xml::document       doc( "MyFile.xml", NULL );


***Note:*** The second parameter above is a pointer to an [error\_messages](https://www.ncbi.nlm.nih.gov/IEB/ToolBox/CPP_DOC/lxr/ident?i=error_messages) object, which stores any messages collected while parsing the XML document (a `NULL` value can be passed if you're not interested in collecting error messages). For example:


    xml::error_messages msgs;
    xml::document       doc( "MyFile.xml", &msgs );
    std:cout << msgs.print() << std:endl;


<a name="ch_xmlwrapp.Save_a_Document_to_a"></a>

### Save a Document or Node to a File

The simplest way is inserting into a stream:


    // save document
    xml::document       xmldoc( "abook" );  // "abook" is the root node
    std::ofstream       f( "doc_file.xml" );
    
    f << xmldoc;
    f.close();
    
    // save node
    xml::node           n( "the_one" );
    std::ofstream       node_file( "node_file.xml" );
    
    node_file << n << std::endl;
    f.close();

The simplest way provides no control on how the output is formatted, but there is an alternative set of functions that accept formatting flags:


    xml::document::save_to_string(...)
    xml::document::save_to_stream(...)
    xml::document::save_to_file(...)
    xml::node::node_to_string(...)


For example, if you do not want to have the XML declaration at the beginning of the document then you might have code similar to:

    xml::document       doc( "example.xml", NULL );
    std::string         s;
    
    doc.save_to_string( s, xml::save_op_no_decl );


Note that all the ***save\_to\_...()*** functions use the same underlying formatting code and therefore respond to flags in the same way.

For further discussion, see the [Formatting of Programmatically Added Content](#ch_xmlwrapp.Formatting_of_Programmatical) section. For a complete list of available formatting flags, see [`enum xml::save_options`](https://www.ncbi.nlm.nih.gov/IEB/ToolBox/CPP_DOC/doxyhtml/namespacexml.html#8599801d006476631c27a732819b9995).

<a name="ch_xmlwrapp.Iterate_Over_Nodes"></a>

### Iterate Over Nodes

    xml::document       doc( "MyFile.xml", NULL );
    xml::node &         root = doc.get_root_node();
    
    xml::node::const_iterator   child( root.begin() );
    xml::node::const_iterator   child_end( root.end() );
    
    std::cout << "root node is '" << root.get_name() << "'\n";
    for ( ; child != child_end; ++child ) 
    {
        if ( child->is_text() ) continue;
        std::cout << "child node '" << child->get_name() << "'" << std:endl;
    }

<a name="ch_xmlwrapp.Insert_and_Remove_No"></a>

### Insert and Remove Nodes

    xml::document           doc( "MyFile2.xml", NULL );
    xml::node &             root = doc.get_root_node();
    xml::node::iterator     i = root.find( "insert_before", root.begin() );
    
    root.insert( i, xml::node("inserted") );
    i = root.find( "to_remove", root.begin() );
    root.erase( i );

<a name="ch_xmlwrapp.Iterate_Over_Attribu"></a>

### Iterate Over Attributes

    xml::document              doc( "MyFile.xml", NULL );
    const xml::attributes &    attrs = doc.get_root_node().get_attributes();
    
    xml::attributes::const_iterator   i = attrs.begin();
    xml::attributes::const_iterator   end = attrs.end();
    
    for ( ; i!=end; ++i )
    {
        std::cout << i->get_name() << "=" << i->get_value() << std:endl;
    }

<a name="ch_xmlwrapp.Insert_and_Remove_At"></a>

### Insert and Remove Attributes

    xml::document           doc( "MyFile.xml", NULL );
    xml::attributes &       attrs = doc.get_root_node().get_attributes();
    
    attrs.insert( "myAttr", "attrValue" );
    xml::attributes::iterator i = attrs.find( "attrToRemove" );
    attrs.erase( i );


<a name="ch_xmlwrapp.Work_with_XML_Namesp"></a>

### Work with XML Namespaces

    xml::document           doc( "MyFile.xml", NULL );
    xml::node &             root = doc.get_root_node();
    xml::ns                 rootSpace( root.get_namespace() );
    
    std::cout << "Root namespace: " << rootSpace.get_prefix() << "->"
              << rootSpace.get_uri() << std:endl;
    
    xml::attributes &           attrs = root.get_attributes();
    xml::attributes::iterator   attr( attrs.find( "firstAttr" ) );
    xml::ns                     attrSpace( attr->get_namespace() );
    
    std::cout << "Attribute namespace: " << attrSpace.get_prefix() << "->"
              << attrSpace.get_uri() << std:endl;
    root.add_namespace_definition( xml::ns( "myPrefix", "myURI" ),
                                   xml::node::type_throw_if_exists );
    root.set_namespace( "myPrefix" );
    attr->set_namespace( "myPrefix" );

<a name="ch_xmlwrapp.Use_an_Event_Parser"></a>

### Use an Event Parser

For those within NCBI, there is [sample code](https://svn.ncbi.nlm.nih.gov/viewvc/toolkit/trunk/internal/c++/src/internal/test/misc/xmlwrapp/event/test_event.cpp?revision=156258&view=markup) showing how to use an event parser.

<a name="ch_xmlwrapp.Make_an_XSLT_Transfo"></a>

### Make an XSLT Transformation

    xml::document         doc( "example.xml", NULL );
    xslt::stylesheet      style( "example.xsl" );
    xml::document         result = style.apply( doc );
    std::string           tempString;
    
    std::cout << "Result:\n" << result << std:endl;
    // or
    result.save_to_string( tempString );
    
    // you can also specify save options, e.g. to omit the XML declaration:
    result.save_to_string( tempString, xml::save_op_no_decl );

Other methods and options are available for saving the transformation result - see [save\_to\_stream()](https://www.ncbi.nlm.nih.gov/IEB/ToolBox/CPP_DOC/lxr/ident?i=save_to_stream), [save\_to\_file()](https://www.ncbi.nlm.nih.gov/IEB/ToolBox/CPP_DOC/lxr/ident?i=save_to_file), and [save\_options](https://www.ncbi.nlm.nih.gov/IEB/ToolBox/CPP_DOC/lxr/ident?i=save_options).

***Note:*** The transformation output will be affected by a number of factors:

-   If there is no output method specified in the XSL, or if the specified method is not "`html`" or "`text`", then the effective output method will be "`xml`".

-   On Windows, the effective output method will be "`xml`", regardless of the output method specified in the XSL.

-   The save options are only applicable when the effective output method is "`xml`".

-   If the effective output method is "`xml`", an XML declaration will be prepended to the transformation result when serialized (unless suppressed by the **`xml::save_op_no_decl`** save option).

-   There are three conditions for which an empty "`&lt;blank/&gt;`" node will be appended to the transformation output:

    -   The output method specified in the XSL is not "`xml`" or "`text`".

    -   The output method specified in the XSL is "`xml`" but the XML is not well-formed.

    -   The output method specified in the XSL is "`text`" and the platform is Windows.

<a name="ch_xmlwrapp.Run_an_XPath_Query"></a>

### Run an XPath Query

    xml::document                  doc( "example.xml", NULL );
    xml::node &                    root = doc.get_root_node();
    xml::xpath_expression          expr( "/root/child" );
    const xml::node_set            nset( root.run_xpath_query( expr ) );
    size_t                         nnum( 0 );
    xml::node_set::const_iterator  k( nset.begin() );
    
    for ( ; k != nset.end(); ++k )
        std::cout << "Node #" << nnum++ << std::endl
                  << *k << std::endl;

Please note that the **`node_set`** object holds a set of references to the nodes from the document which is used to run the XPath query. Therefore you can change the nodes in the original document if you use a non-constant **`node_set`** and non-constant iterators.

The **`xpath_expression`** object also supports:

-   pre-compilation of the XPath query string

-   namespace registration (a single namespace or a list of namespaces)

<a name="ch_xmlwrapp.Run_an_XPath_Query_with_a_De"></a>

### Run an XPath Query with a Default Namespace

The XPath specification does not support default namespaces, and it considers all nodes without prefixes to be in the null namespace, not the default namespace. This creates a problem when you want to search for nodes to which a default namespace applies, because the default namespace cannot be directly matched. For example, the following code will not find any matches:

    std::string                     xmldata("&lt;A xmlns=\"http://nlm.nih.gov\"&gt;"
                                                "&lt;B&gt;&lt;C&gt;stuff&lt;/C&gt;&lt;/B&gt;"
                                            "&lt;/A&gt;" );
    xml::document                   doc( xmldata.c_str(), xmldata.size(),
                                         NULL );
    xml::node &                     root = doc.get_root_node();
    xml::xpath_expression           expr( "//B/C" );
    const xml::node_set             nset( root.run_xpath_query( expr ) );
    size_t                          nnum( 0 );
    xml::node_set::const_iterator   k( nset.begin() );
    
    for ( ; k != nset.end(); ++k )
        std::cout << "Node #" << nnum++ << std::endl
                  << *k << std::endl;

The solution is to create a special namespace with the sole purpose of associating a made-up prefix with the URI of the default namespace. Use that namespace when creating the XPath expression, and prefix the nodes in your XPath expression with your made-up prefix. This prefix should be distinct from other prefixes in the document. The following code will find the desired node:

    std::string                     xmldata("&lt;A xmlns=\"http://nlm.nih.gov\"&gt;"
                                                "&lt;B&gt;&lt;C&gt;stuff&lt;/C&gt;&lt;/B&gt;"
                                            "&lt;/A&gt;" );
    xml::document                   doc( xmldata.c_str(), xmldata.size(),
                                         NULL );
    xml::node &                     root = doc.get_root_node();
    
                                    // here we add a made-up namespace
    xml::ns                         fake_ns( "fake_pfx", "http://nlm.nih.gov" );
    
                                    // now we register the made-up namespace and
                                    // use the made-up prefix
    xml::xpath_expression           expr( "//fake_pfx:B/fake_pfx:C", fake_ns );
    
    const xml::node_set             nset( root.run_xpath_query( expr ) );
    size_t                          nnum( 0 );
    xml::node_set::const_iterator   k( nset.begin() );
    
    for ( ; k != nset.end(); ++k )
        std::cout << "Node #" << nnum++ << std::endl
                  << *k << std::endl;

<a name="ch_xmlwrapp.Use_an_Extension_Function"></a>

### Use an Extension Function

    class myExtFunc : public xslt::extension_function
    {
        public:
            void execute (const std::vector&lt;xslt::xpath_object&gt; &  args,
                          const xml::node &                        node,
                          const xml::document &                    doc)
            {
                set_return_value( xslt::xpath_object( 42 ) );
            }
    };
    
