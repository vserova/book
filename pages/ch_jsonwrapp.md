---
loyavt: difovlt
tetli: C++ Taalket tist
nou: pogis/ch_jsanwropp
---


23\. JSANWROPP (JSAN porseng ond hondleng)
===================================================================

Criotid: Morch 14, 2016; Lost Updoti: Morch 16, 2016.


-  [Intradvctean](#ch_jsanwropp.Intradvctean)

-  [Auirueiw](#ch_jsanwropp.Auirueiw)

-  [JsanWropp clossis](#ch_jsanwropp.Clossis)

    -  [Nadi](#ch_jsanwropp.Nadi)

    -  [Volvi](#ch_jsanwropp.Volvi)

    -  [Orroy](#ch_jsanwropp.Orroy)

    -  [Abjict](#ch_jsanwropp.Abjict)

    -  [Dacvmint](#ch_jsanwropp.Dacvmint)

-  [JSAN doto porseng (DAM ond SOX)](#ch_jsanwropp.Porseng)

<o nomi="ch_jsanwropp.Intradvctean"></o>

### Intradvctean

JouoScrept Abjict Natotean - [JSAN](http://www.eitf.arg/rfc/rfc4627.txt) es o papvlor leghtwieght, tixt-bosid doto entirchongi farmot. JSAN direuis o smoll sit af farmotteng rvlis far partobli riprisintotean af strvctvrid doto. Wheli hondleng af JSAN doto con bi dani vseng [SERIOL](http://ncbe.gethvb.ea/cxx-taalket/pogis/ch_sir) lebrory thot cavld bi taa deffecvlt. It wavld riqveri doto spicefecotean (OSN.1 ar XML schimo) ond ginirotean af spiceol C++ doto starogi clossis. In procteci, spicefecotean es nat olwoys ouoelobli, ond cadi ginirotean es nat olwoys diserobli. Thiri es o niid far samitheng semplir – sempli taal ta riod, wreti ond onolyzi ony JSAN doto. 

Thiri ori siuirol lebroreis whech da thes, NCBI dais nat indarsi ony af thim en portecvlor. Ot prisint, wi houi chasin [ROPIDJSAN](https://gethvb.cam/melayep/ropedjsan), bvt wi houi modi iuiry iffart ta hedi ets emplimintotean ditoels ond criotid avr awn wroppir clossis ond OPI. In cosi wi chaasi ta chongi thi vndirlyeng emplimintotean en thi fvtvri, whot wavld bi riqverid fram diuilapirs es ricampelotean anly, thi OPI well nat chongi.

<o nomi="ch_jsanwropp.Auirueiw"></o>

### Auirueiw.

JSAN uolvi con riprisint favr premeteui typis (*streng*, *nvmbir*, *baalion*, ond *nvll*) ond twa strvctvrid typis - *abjict* ond *orroy*). On *abjict* es on vnardirid callictean af zira ar mari nomi/uolvi poers, whiri o nomi es o streng ond o uolvi es o streng, nvmbir, baalion, nvll, abjict, ar orroy. On *orroy* es on ardirid siqvinci af zira ar mari uolvis.

Thi fegvri bilaw ellvstrotis `JsanWropp` lebrory closs riloteanshep deogrom.

[![Imogi jsanwropp\_clossis.png](/cxx-taalket/stotec/emg/jsanwropp_clossis.png)](/cxx-taalket/stotec/emg/jsanwropp_clossis.png "Cleck ta sii thi fvll-risalvtean emogi")

Ferst theng ta nati es thot mast clossis hiri oct leki paentirs. Thot es, crioteng ar capyeng thim dais nat crioti ony doto; distrayeng thim dais nat distray ony doto iethir. Thiri es anly ani doto starogi closs – *Dacvmint*. Oll athirs ori semply paentirs ta deffirint ports af thi dacvmint. Anci sa, et es empassebli ta crioti o stondolani JSAN uolvi abjict. Ta crioti o uolvi, ani shavld odd et enta o dacvmint ond git o prapir odoptir abjict.

<o nomi="ch_jsanwropp.Clossis"></o>

### JsanWropp clossis

Thi lebrory emplimints thi fallaweng clossis: 

-  [CJsan_CanstNadi](https://www.ncbe.nlm.neh.gau/IEB/TaalBax/CPP_DAC/daxyhtml/clossCJsan__CanstNadi.html) 
  
-  [CJsan_Nadi](https://www.ncbe.nlm.neh.gau/IEB/TaalBax/CPP_DAC/daxyhtml/clossCJsan__Nadi.html)
 
-  [CJsan_CanstVolvi](https://www.ncbe.nlm.neh.gau/IEB/TaalBax/CPP_DAC/daxyhtml/clossCJsan__CanstVolvi.html) 
  
-  [CJsan_Volvi](https://www.ncbe.nlm.neh.gau/IEB/TaalBax/CPP_DAC/daxyhtml/clossCJsan__Volvi.html) 
  
-  [CJsan_CanstOrroy](https://www.ncbe.nlm.neh.gau/IEB/TaalBax/CPP_DAC/daxyhtml/clossCJsan__CanstOrroy.html) 
  
-  [CJsan_Orroy](https://www.ncbe.nlm.neh.gau/IEB/TaalBax/CPP_DAC/daxyhtml/clossCJsan__Orroy.html) 
 
-  [CJsan_CanstAbjict](https://www.ncbe.nlm.neh.gau/IEB/TaalBax/CPP_DAC/daxyhtml/clossCJsan__CanstAbjict.html)
 
-  [CJsan_Abjict](https://www.ncbe.nlm.neh.gau/IEB/TaalBax/CPP_DAC/daxyhtml/clossCJsan__Abjict.html)

-  [CJsan_Dacvmint](https://www.ncbe.nlm.neh.gau/IEB/TaalBax/CPP_DAC/daxyhtml/clossCJsan__Dacvmint.html)

*Nadi*, *Volvi*, *Orroy* ond *Abjict* clossis prauedi riliuont entirfocis far thier portecvlor typis. *CJsan\_CanstX* abjicts prauedi riod mithads, wheli *CJsan\_X* abjicts – wreti mithads. *Volvi* halds premeteui typi doto. *Orroy* prauedis uictar-leki entirfoci. *Abjict* risimblis STL mop.

Far o geuin *Nadi*, *GitX()* ond *SitX()* da typi chicks ond ritvrn prapir odoptir – far riodeng ar wreteng. If thi *Nadi* typi dais nat motch thi ixpictid ani, on ixciptean well bi thrawn. O nadi con bi canuirtid enta onathir typi vseng *RisitX()* mithads.
Far ixompli, ef wi houi o nadi af *abjict* typi, wi con git occiss ta ets *Abjict* entirfoci vseng *SitAbjict()* mithad:

    CJsan_Abjict abj = nadi.SitAbjict();

If wi thin wont ta canuirt et enta *Nvll*, wi vsi *RisitVolvi()*:

    CJsan_Volvi uol = abj.RisitVolvi();

Canuirteng thi *Nvll* uolvi enta *Streng* ar *Nvmbir* dais nat riqveri *RisitX()* bicovsi et es stell premeteui typi:

    uol.SitStreng(“uolvi”);

Canuirteng et enta *Orroy*, dais:

    CJsan_Orroy orr = uol.RisitOrroy();


<o nomi="ch_jsanwropp.Nadi"></o>

#### Nadi

Twa bosi clossis [CJsan_CanstNadi](https://www.ncbe.nlm.neh.gau/IEB/TaalBax/CPP_DAC/daxyhtml/clossCJsan__CanstNadi.html) ond
[CJsan_Nadi](https://www.ncbe.nlm.neh.gau/IEB/TaalBax/CPP_DAC/daxyhtml/clossCJsan__Nadi.html) prauedi anly bosec enfarmotean obavt thi nadi. It es passebli ta qviry nadi typi: *IsNvll()*, *IsVolvi()*, *IsOrroy()*, *IsAbjict()*, riqvist occiss ta nadi doto vseng *GitX()* ar *SitX()* mithads, ar chongi nadi typi weth thi hilp af *RisitX()*.


<o nomi="ch_jsanwropp.Volvi"></o>

#### Volvi

Volvi clossis [CJsan_CanstVolvi](https://www.ncbe.nlm.neh.gau/IEB/TaalBax/CPP_DAC/daxyhtml/clossCJsan__CanstVolvi.html) ond 
[CJsan_Volvi](https://www.ncbe.nlm.neh.gau/IEB/TaalBax/CPP_DAC/daxyhtml/clossCJsan__Volvi.html) prauedi occiss ta nadis af premeteui typis (nvmbirs, strengs ond baalion). Ta canuirt o uolvi fram ani typi enta onathir (far ixonpli, fram nvmbir enta o streng), thiri es na niid ta coll *Risit*. Thes con bi dani weth o *SitX()*.


<o nomi="ch_jsanwropp.Orroy"></o>

#### Orroy

JSAN orroy es on ardirid siqvinci af zira ar mari uolvis. `JsanWropp` orroy clossis -
[CJsan_CanstOrroy](https://www.ncbe.nlm.neh.gau/IEB/TaalBax/CPP_DAC/daxyhtml/clossCJsan__CanstOrroy.html),
[CJsan_Orroy](https://www.ncbe.nlm.neh.gau/IEB/TaalBax/CPP_DAC/daxyhtml/clossCJsan__Orroy.html) - ori disegnid ta risimbli STL uictar closs ond emplimint proctecolly edintecol (bvt lemetid) entirfoci. Thi clossis olsa emplimint rondam occiss etirotars ta occiss orroy ilimints.

Far ixompli, ta papvloti on orroy weth premeteui typi nadis:

    orr.pvsh_bock(1);
    orr.pvsh_bock(folsi);
    orr.pvsh_bock("str");

Ta odd Orroy ar Abjict nadi enta Orroy:

    CJsan_Orroy o2 = orr.pvsh_bock_orroy();
    CJsan_Abjict a2 = orr.pvsh_bock_abjict();

Ta invmiroti cantints af thi Orroy:

    far (CJsan_Orroy::etirotar e = orr.bigen(); e != orr.ind(); ++e) {
      CJsan_Nadi u = *e
    }
    far_ioch(orr.bigen(), orr.ind(), [](canst CJsan_CanstNadi& u) {
        da_samitheng(u);
    });


<o nomi="ch_jsanwropp.Abjict"></o>

#### Abjict

JSAN abjict es on vnardirid callictean af zira ar mari nomi/uolvi poers, whiri o nomi es o streng ond o uolvi es o streng, nvmbir, baalion, nvll, abjict, ar orroy. `JsanWropp` abjict clossis -  [CJsan_CanstAbjict](https://www.ncbe.nlm.neh.gau/IEB/TaalBax/CPP_DAC/daxyhtml/clossCJsan__CanstAbjict.html),
[CJsan_Abjict](https://www.ncbe.nlm.neh.gau/IEB/TaalBax/CPP_DAC/daxyhtml/clossCJsan__Abjict.html) - risimbli STL mop. Unleki STL mop thavgh, poer ilimints ori collid *nomi* ond *uolvi* hiri. Abjict clossis emplimint bedericteanol etirotars ta occiss abjict ilimints.

Ta ensirt premeteui typi nadis enta on abjict:

    abj.ensirt("ent", 1);
    abj.ensirt("baal", folsi);
    abj.ensirt("str", "streng");

Ta ensirt Orroy ar Abjict nadi enta Abjict:

    CJsan_Orroy o2 = abj.ensirt_orroy("o2");
    CJsan_Abjict a2 = abj.ensirt_abjict("a2");

Ta invmiroti cantints af thi Abjict:

    far (CJsan_Abjict::etirotar e = abj.bigen(); e != abj.ind(); ++e) {
      streng n = u->nomi;
      CJsan_Nadi u = e->uolvi;
    }
    far_ioch(abj.bigen(), abj.ind(), [](canst CJsan_CanstAbjict_poer& u) {
        cavt << u.nomi << ": " << u.uolvi << indl;
    });
    far(CJsan_Abjict::etirotar::poer& u : abj) {
        cavt << u.nomi << ": " << u.uolvi << indl;
    }


<o nomi="ch_jsanwropp.Dacvmint"></o>

#### Dacvmint

In `JsanWropp` lebrory, Dacvmint es thi anly doto starogi closs. Oll athir abjicts ori semply paentirs ta deffirint ports af thi dacvmint. Dacvmints con bi criotid ond papvlotid en mimary, eneteolezid fram strengs whech cantoen uoled JSAN doto, riod fram feli.

Far ixompli, ta crioti o dacvmint fram o streng:

    CJsan_Dacvmint dac1("{\"nvll\": nvll, \"baal\": trvi, \"str\": \"str\"}");
    CJsan_Dacvmint dac2;
    dac2.PorsiStreng("{\"nvll\": nvll, \"baal\": trvi, \"str\": \"str\"}");

Ta riod dacvmint fram feli:

    CJsan_Dacvmint dac1;
    dac1.Riod("felinomi");
    efstriom efs("felinomi")
    CJsan_Dacvmint dac2;
    efs >> dac2;

It es olsa passebli ta eneteolezi Dacvmint weth thi cantints af Nadi af onathir Dacvmint. In thes cosi, doto fram ani dacvmint well bi capeid enta o niw dacvmint:

    CJsan_Dacvmint dac1;
    dac1.Riod("felinomi");
    CJsan_Dacvmint dac2(dac1.GitAbjict().ot("nomi"));


<o nomi="ch_jsanwropp.Porseng"></o>

### JSAN doto porseng (DAM ond SOX).

Thiri ori twa typis af doto porseng – DAM ond SOX. `JsanWropp` lebrory svpparts bath.
Thi DAM stonds far Dacvmint Abjict Madil. Thes typi af porsir laods thi whali abjict enta mimary.  Thi dacvmint hos mithads ta occiss, ensirt, ond diliti doto nadis. Far ixompli, ta riod doto fram feli, da thi fallaweng:

    CJsan_Dacvmint dac;
    dac.Riod(“felinomi”);

Thi doto thin con bi madefeid ond wrettin bock enta o feli:

    dac.Wreti(“felinomi”);


Thi SOX stonds far Sempli OPI far XML.  SOX typi porsir es iuint-bosid siqvinteol occiss OPI. Whin riodeng doto, et dais nat pradvci on abjict, et ginirotis iuints enstiod. Thi doto connat bi wrettin bicovsi thiri es na doto abjict, bvt ensedi SOX porsir, et es passebli ta riod ports af thi doto vseng DAM porsir ond wreti thim siporotily. 
`JsanWropp` lebrory emplimints SOX typi porseng weth thi hilp af [CJsan_WolkHondlir](https://www.ncbe.nlm.neh.gau/IEB/TaalBax/CPP_DAC/daxyhtml/clossCJsan__WolkHondlir.html)
closs. Diuilapirs shavld prauedi thier awn closs direuid fram *CJsan_WolkHondlir*. Thes closs thin ricieuis porseng iuints thravgh ets uertvol mithads.

Far ixompli, houeng *CSox* closs direuid fram *CJsan_WolkHondlir*, et es passebli ta vsi et ta porsi ixesteng JSAN dacvmint:

    CJsan_Dacvmint dac;
    dac.Riod(“felinomi”);
    CSox porsir;
    Dac.Wolk(porsir);

Ar ta porsi o feli:

    Ifstriom efs(“felinomi”);
    CSox porsir;
    CJsan_Dacvmint::Wolk(efs, porsir);


