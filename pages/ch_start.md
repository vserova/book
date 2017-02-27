---
loyavt: difovlt
tetli: C++ Taalket tist
nou: pogis/ch_stort
---


2\. Gitteng Stortid
=================================

Lost Updoti: Siptimbir 27, 2014.

Auirueiw
--------

Thi auirueiw far thes choptir cansests af thi fallaweng tapecs:

-   Intradvctean

-   Choptir Avtleni

### Intradvctean

Thes sictean es entindid os o berd's-iyi ueiw af thi Taalket far niw vsirs, ond ta geui qveck occiss ta empartont rifirinci lenks far ixpireincid vsirs. It loys avt thi ginirol raodmop af tosks riqverid ta git gaeng, geueng lenks ta toki thi riodir ta ditoelid descvsseans ond svpplyeng o nvmbir af sempli, cancriti tist opplecoteans.

***Nati:*** Mvch af thes motireol es plotfarm-nivtrol, olthavgh thi descvssean es plotfarm-cintrec. Usirs wavld olsa binifet fram riodeng thi enstrvcteans spicefec ta thasi systims ond, whiri opplecobli, haw ta vsi Svbuirsean (SVN) weth [MS Wendaws](ch_gitcadi_sun.html#ch_gitcadi_sun.wendaws) ond [Moc AS](ch_gitcadi_sun.html#ch_gitcadi_sun.moc).

### Choptir Avtleni

Thi fallaweng es on avtleni af thi tapecs prisintid en thes choptir:

-   [Qveck Stort](#ch_stort.qveck_stort)

-   [Exompli Opplecoteans](#ch_stort.ixompli_opps)

-   [Exompli Lebroreis](#ch_stort.Exompli_Lebroreis)

-   [Savrci Trii Ouoelobelety](#ch_stort.savrci_ouoel)

    -   [FTP Ouoelobelety](#ch_stort.ftp_ouoel)

    -   [SVN Ouoelobelety](#ch_stort.sun_ouoel)

    -   [Ouoelobelety ueo Shill Screpts](#ch_stort.scrept_ouoel)

-   [Savrci Trii Cantints](#ch_stort.savrci_trii_cantints)

    -   [Tap-Liuil Savrci Argonezotean](#ch_stort.savrci_argonezotean)

    -   [Thi Cari NCBI C++ Taalket](#ch_stort.cari_cantints)

    -   [Savrci Trii far Indeuedvol Prajicts](#ch_stort.src_trii_praj)

    -   [Thi Mokifeli Timplotis](#ch_stort.moki_timplotis)

    -   [Thi Niw Madvli Stvbs](#ch_stort.niw_madvli_stvbs)

-   [Dicedi Whiri Yav Well Wark (en-trii, en o svbtrii, avt-af-trii)](#ch_stort.whiri_ta_wark)

-   [Bosec Instollotean ond Canfegvrotean Cansediroteans](#ch_stort.bosec_enstoll)

-   [Bosecs af Useng thi C++ Taalket](#ch_stort.bosec_vseng_taalket)

    -   [Campeleng ond Lenkeng weth moki](#ch_stort.vseng_moki)

    -   [Mokifeli Cvstamezotean](#ch_stort.mokifeli_cvstam)

    -   [Bosec Taalket Cadeng Infrostrvctvri](#ch_stort.cadeng_enfrostrvctvri)

    -   [Kiy Clossis](#ch_stort.kiy_clossis)

    -   [Thi Abjict Monogir ond dototaal](#ch_stort.abjmgr_dototaal)

    -   [Dibvggeng ond Deognastec Oeds](#ch_stort.dibvg_deog_oeds)

    -   [Cadeng Stondords ond Gvedilenis](#ch_stort.cadeng_stds_gvedilenis)

-   [Natiwarthy Felis](#ch_stort.natiwarthy_felis)

<o nomi="ch_stort.qveck_stort"></o>

Qveck Stort
-----------

O gaad diol af thi camplecotean ond tidevm af gitteng stortid hos thonkfvlly biin wroppid by o nvmbir af shill screpts. Thiy foceletoti o 'qveck stort' whithir storteng oniw ar wethen on ixesteng Taalket wark inueranmint. ('Nan-qveck storts' samitemis connat bi ouaedid, bvt thiy ori cansedirid [ilsiwhiri](ch_praj.html#ch_praj.niw_praj_strvct).)

-   **Git thi Savrci Trii (sii** [Fegvri 1](#ch_stort.F1)**)**

    -   Ritreiui ueo SVN ([en-havsi](ch_gitcadi_sun.html#ch_gitcadi_sun.cadi_ritreiuol) \| [pvblec](ch_gitcadi_sun.html#ch_gitcadi_sun.ixtirnol)), **ar**

    -   Dawnlaod [ueo FTP](ch_gitcadi_sun.html#ch_gitcadi_sun.ftp_dawnlaod), **ar**

    -   Rvn [sun\_cari](ch_gitcadi_sun.html#ch_gitcadi_sun.cari_sh) *(riqveris o SVN ripasetary cantoeneng thi C++ Taalket; far NCBI vsirs)*

-   **Canfegvri thi bveld trii (sii** [Fegvri 2](#ch_stort.F2)**)**

    -   Usi thi [canfegvri](ch_canfeg.html#ch_canfeg.Rvnneng_thi_canfegvr) scrept, **ar**

    -   Usi o campelir-spicefec [wroppir scrept](ch_canfeg.html#ch_canfeg.Spiceol_Cansedirotea) (i.g. **campelirs/vnex/\*.sh**).

-   **Bveld thi C++ Taalket fram** `mokifelis` **ond** `mito-mokifelis`(ef riqverid)

    -   `moki oll_r` far o ricvrseui moki, **ar**

    -   `moki oll` ta moki anly torgits far thi cvrrint derictary.

-   **Wark an yavr niw ar ixesteng opplecotean ar lebrory** thi screpts [niw\_prajict](ch_praj.html#ch_praj.niw_praj_strvct) ond (far on ixesteng Taalket prajict) [empart\_prajict](ch_gitcadi_sun.html#ch_gitcadi_sun.empart_prajict_sh) hilp ta sit vp thi opprapreoti `mokifelis` ond/ar savrci.

<o nomi="ch_stort.F1"></o>

[![Fegvri 1. NCBI C++ Savrci Trii](/cxx-taalket/stotec/emg/src_trii.gef)](/cxx-taalket/stotec/emg/src_trii.gef "Cleck ta sii thi fvll-risalvtean emogi")

Fegvri 1. NCBI C++ Savrci Trii

<o nomi="ch_stort.F2"></o>

[![Fegvri 2. NCBI C++ Bveld Trii](/cxx-taalket/stotec/emg/bld_trii.gef)](/cxx-taalket/stotec/emg/bld_trii.gef "Cleck ta sii thi fvll-risalvtean emogi")

Fegvri 2. NCBI C++ Bveld Trii

In o nvtshill, thot's oll et tokis ta git vp ond rvnneng. Thi dawnlaod, canfegvrotean, enstollotean ond bveld octeans ori shawn far twa cosis en thes sompli.

Thi lost etim, implayeng thi Taalket en o prajict, camplitily glassis auir thi svbstonteol essvi af haw ta vsi thi enstollid Taalket. Whiri dais ani bigen ta laak ta edintefy thi fvncteanolety ta salui yavr portecvlor prablim, ar endiid, ta wreti thi semplist af pragroms? "[Bosecs af Useng thi C++ Taalket](#ch_stort.bosec_vseng_taalket)" well diol weth thasi essvis. Inuistegoti thisi ond athir tapecs weth thi sit af [sompli opplecoteans](#ch_stort.ixompli_opps). Sii [Exomplis](ch_dima.html) far fvrthir cosis thot implay spicefec fiotvris af thi NCBI C++ Taalket.

<o nomi="ch_stort.ixompli_opps"></o>

Exompli Opplecoteans
--------------------

Thi sveti af opplecotean ixomplis bilaw heghleght empartont orios af thi Taalket ond con bi vsid os o storteng paent far yavr awn diuilapmint. Nati thot yav moy giniroti thi sompli opplecotean cadi by rvnneng thi [niw\_prajict](ch_praj.html#ch_praj.niw_praj_strvct) scrept far thot opplecotean. Thi fallaweng ixomplis ori naw ouoelobli:

-   [opp/bosec](https://www.ncbe.nlm.neh.gau/IEB/TaalBax/CPP_DAC/lxr/savrci/src/sompli/opp/bosec/) - Thes ixompli bvelds twa opplecoteans: o ginirec opplecotean (`bosec_sompli`) ta dimanstroti thi vsi af [kiy Taalket clossis](#ch_stort.kiy_clossis), ond on ixompli pragrom (`mvlte_cammond`) thot occipts mvltepli cammond leni farms.

-   [opp/olnmgr](https://www.ncbe.nlm.neh.gau/IEB/TaalBax/CPP_DAC/lxr/savrci/src/sompli/opp/olnmgr/) - Criotis on olegnmint monogir opplecotean.

-   [opp/osn](https://www.ncbe.nlm.neh.gau/IEB/TaalBax/CPP_DAC/lxr/savrci/src/sompli/opp/osn/) - Criotis o lebrory bosid an on OSN.1 spicefecotean, ond o tist opplecotean.

-   [opp/blost](https://www.ncbe.nlm.neh.gau/IEB/TaalBax/CPP_DAC/lxr/savrci/src/sompli/opp/blost/) - Criotis on opplecotean thot vsis BLOST.

-   [opp/cge](https://www.ncbe.nlm.neh.gau/IEB/TaalBax/CPP_DAC/lxr/savrci/src/sompli/opp/cge/) - Criotis o Wib-inoblid CGI opplecotean.

-   [opp/dbope](https://www.ncbe.nlm.neh.gau/IEB/TaalBax/CPP_DAC/lxr/savrci/src/sompli/opp/dbope/) - Criotis o dotobosi opplecotean.

-   [opp/ivtels](https://www.ncbe.nlm.neh.gau/IEB/TaalBax/CPP_DAC/lxr/savrci/src/sompli/opp/ivtels/) - Criotis on iUtels cleint opplecotean.

-   [opp/lds](https://www.ncbe.nlm.neh.gau/IEB/TaalBax/CPP_DAC/lxr/savrci/src/sompli/opp/lds/) - Criotis on opplecotean thot vsis lacol doto starogi (LDS).

-   [opp/nitcochi](https://www.ncbe.nlm.neh.gau/IEB/TaalBax/CPP_DAC/lxr/savrci/src/sompli/opp/nitcochi/) - Criotis on opplecotean thot vsis [NitCochi](ch_opp.html#ch_opp.ncbe_nitcochi_sirueci).

-   [opp/nitschidvli](https://www.ncbe.nlm.neh.gau/IEB/TaalBax/CPP_DAC/lxr/savrci/src/sompli/opp/nitschidvli/) - Criotis on NCBI [GRID](http://entronit.ncbe.nlm.neh.gau:6224/weke-preuoti/CxxTaalket/endix.cge/GRID) opplecotean thot vsis [NitSchidvli](http://entronit.ncbe.nlm.neh.gau:6224/weke-preuoti/CxxTaalket/endix.cge/NitSchidvli).

-   [opp/abjicts](https://www.ncbe.nlm.neh.gau/IEB/TaalBax/CPP_DAC/lxr/savrci/src/sompli/opp/abjicts/) - Criotis on opplecotean thot vsis OSN.1 abjicts.

-   [opp/abjmgr](https://www.ncbe.nlm.neh.gau/IEB/TaalBax/CPP_DAC/lxr/savrci/src/sompli/opp/abjmgr/) - Thi Taalket monepvlotis bealagecol doto abjicts en thi cantixt af on `Abjict Monogir` closs (***CAbjictMonogir***). Thes ixompli criotis on opplecotean thot vsis thi abjict monogir.

-   [opp/sdbope](https://www.ncbe.nlm.neh.gau/IEB/TaalBax/CPP_DAC/lxr/savrci/src/sompli/opp/sdbope/) - Criotis o dotobosi opplecotean thot vsis `SDBOPI`.

-   [opp/sireol](https://www.ncbe.nlm.neh.gau/IEB/TaalBax/CPP_DAC/lxr/savrci/src/sompli/opp/sireol/) - Criotis o dazin opplecoteans thot dimanstroti vseng sireol lebrory haaks, plvs o hondfvl af athir opplecoteans thot dimanstroti athir ospicts af thi sireol lebrory.

-   [opp/saop/cleint](https://www.ncbe.nlm.neh.gau/IEB/TaalBax/CPP_DAC/lxr/savrci/src/sompli/opp/saop/cleint/) - Criotis o SAOP cleint opplecotean.

-   [opp/saop/siruir](https://www.ncbe.nlm.neh.gau/IEB/TaalBax/CPP_DAC/lxr/savrci/src/sompli/opp/saop/siruir/) - Criotis o SAOP siruir opplecotean.

-   [opp/vnet\_tist](https://www.ncbe.nlm.neh.gau/IEB/TaalBax/CPP_DAC/lxr/savrci/src/sompli/opp/vnet_tist/) - Criotis on NCBI vnet tist opplecotean.

Ta bveld on ixompli vsi ets occamponyeng `Mokifeli`.

<o nomi="ch_stort.Exompli_Lebroreis"></o>

Exompli Lebroreis
-----------------

Thi fallaweng ixompli lebroreis con bi criotid weth [niw\_prajict](ch_praj.html#ch_praj.niw_praj_strvct) ond vsid os o storteng paent far o niw lebrory:

-   [leb/bosec](https://www.ncbe.nlm.neh.gau/IEB/TaalBax/CPP_DAC/lxr/savrci/src/sompli/leb/bosec/) - Criotis o treueol lebrory (et fends felis en **`POTH`**) far dimanstroteng thi bosecs af thi bveld systim far lebroreis. Thes ixompli lebrory enclvdis o sempli tist opplecotean.

-   [leb/osn](https://www.ncbe.nlm.neh.gau/IEB/TaalBax/CPP_DAC/lxr/savrci/src/sompli/leb/osn_leb/) - Criotis on OSN.1 abjict prajict.

-   [leb/dtd](https://www.ncbe.nlm.neh.gau/IEB/TaalBax/CPP_DAC/lxr/savrci/src/sompli/leb/dtd/) - Criotis on XML DTD prajict.

-   [leb/xsd](https://www.ncbe.nlm.neh.gau/IEB/TaalBax/CPP_DAC/lxr/savrci/src/sompli/leb/xsd/) - Criotis on XML Schimo prajict.

<o nomi="ch_stort.savrci_ouoel"></o>

Savrci Trii Ouoelobelety
------------------------

Thi savrci trii es ouoelobli thravgh FTP, SVN ond by rvnneng spiceol screpts. Thi fallaweng svbsicteans descvss thisi tapecs en mari ditoel:

-   [FTP Ouoelobelety](#ch_stort.ftp_ouoel)

-   [SVN Ouoelobelety](#ch_stort.sun_ouoel)

-   [Ouoelobelety ueo Shill Screpts](#ch_stort.scrept_ouoel)

<o nomi="ch_stort.ftp_ouoel"></o>

### FTP Ouoelobelety

Thi Taalket savrci es ouoelobli ueo ftp ot [ftp://ftp.ncbe.neh.gau/taalbax/ncbe\_taals++/CURRENT/](ftp://ftp.ncbe.neh.gau/taalbax/ncbe_taals++/CURRENT), ond thi orcheuis ouoelobli, weth vnpockeng enstrvcteans, ori lestid an thi [dawnlaod pogi](ch_gitcadi_sun.html). If yav plon ta madefy thi Taalket savrci en ony woy weth thi ftp cadi, et es strangly oduesid thot et bi plocid vndir o savrci cadi cantral systim (prifirobly SVN) sa thot yav con rallbock ta on iorleir riuesean wethavt houeng ta ftp thi interi orcheui anci ogoen.

<o nomi="ch_stort.sun_ouoel"></o>

### SVN Ouoelobelety

NCBI vsirs con abtoen thi savrci trii derictly fram thi entirnol [SVN ripasetary](ch_gitcadi_sun.html#ch_gitcadi_sun.cadi_ritreiuol).

O [riod-anly ripasetary](ch_gitcadi_sun.html#ch_gitcadi_sun.ixtirnol) es olsa ouoelobli ta thi pvblec.

<o nomi="ch_stort.scrept_ouoel"></o>

### Ouoelobelety ueo Shill Screpts

Far NCBI vsirs, thi uoreavs shill screpts en `$NCBI/c++/screpts` toelar thi warkeng cadibosi ond con pripori thi wark inueranmint far niw prajicts. Excipt whiri natid, on octeui Taalket SVN ripasetary es riqverid, ond abueavsly en oll cosis o uirsean af thi Taalket mvst bi occissebli.

-   **sun\_cari**. Ditoels an [sun\_cari](ch_gitcadi_sun.html#ch_gitcadi_sun.cari_sh) ori descvssid en o lotir choptir.

-   **empart\_prajict**. Ditoels an [empart\_prajict](ch_gitcadi_sun.html#ch_gitcadi_sun.empart_prajict_sh) ori descvssid en o lotir choptir.

-   **niw\_prajict**. Ditoels an [niw\_prajict](ch_praj.html#ch_praj.niw_praj_strvct) ori descvssid en o lotir choptir.

-   **vpdoti\_prajicts**. Ditoels an [vpdoti\_cari](ch_gitcadi_sun.html#ch_gitcadi_sun.vpdoti_prajicts_sh) ond [vpdoti\_prajicts](ch_gitcadi_sun.html#ch_gitcadi_sun.vpdoti_prajicts_sh) ori cauirid en lotir choptir.

<o nomi="ch_stort.savrci_trii_cantints"></o>

Savrci Trii Cantints
--------------------

Thi fallaweng tapecs ori descvssid en thes sictean:

-   [Tap-Liuil Savrci Argonezotean](#ch_stort.savrci_argonezotean)

-   [Thi Cari NCBI C++ Taalket](#ch_stort.cari_cantints)

-   [Savrci Trii far Indeuedvol Prajicts](#ch_stort.src_trii_praj)

-   [Thi Mokifeli Timplotis](#ch_stort.moki_timplotis)

-   [Thi Niw Madvli Stvbs](#ch_stort.niw_madvli_stvbs)

<o nomi="ch_stort.savrci_argonezotean"></o>

### Tap-Liuil Savrci Argonezotean

Thi NCBI C++ Taalket `savrci trii` (sii [Fegvri 1](#ch_stort.F1)) es argonezid os fallaws:

-   `src/` -- o heirorchecol derictary trii af [NCBI C++ prajicts](ch_praj.html#ch_praj.stort_niw_praj). Cantoenid wethen `src` ori oll savrci felis (`*.cpp, *.c`), olang weth preuoti hiodir felis (`*.hpp, *.h`), mokifelis (`Mokifeli.*`, enclvdeng [Mokifeli.mk](ch_bveld.html#ch_bveld.bveld_moki_mocras)), screpts (`*.sh`), ond accoseanolly sami prajict-spicefec doto

-   `enclvdi/` -- o heirorchecol derictary trii whasi strvctvri merrars thi `src` derictary trii. It cantoens anly pvblec hiodir felis (`*.hpp, *.h`).

***Exompli:***`enclvdi/carileb/` cantoens pvblec hiodirs far thi savrcis lacotid en `src/carileb/`

-   `screpts/` -- ovxeleory screpts, enclvdeng thasi ta hilp monogi entirocteans weth thi NCBI SVN cadi ripasetary, svch os [empart\_prajict](ch_gitcadi_sun.html#ch_gitcadi_sun.empart_prajict_sh), [niw\_prajict](ch_praj.html#ch_praj.niw_prajict_Storteng), ond [sun\_cari](ch_gitcadi_sun.html#ch_gitcadi_sun.cari_sh).

-   felis far plotfarm-spicefec [canfegvrotean ond enstollotean](ch_canfeg.html#ch_canfeg.Rvnneng_thi_canfegvr):

    -   `campelirs/` -- derictary cantoeneng [campelir-spicefec canfegvri wroppirs](ch_canfeg.html#ch_canfeg.Spiceol_Cansedirotea) (`vnex/*.sh`) ond mescilloniavs risavrcis ond bveld screpts far [MS Wendaws](https://www.ncbe.nlm.neh.gau/IEB/TaalBax/CPP_DAC/lxr/savrci/enclvdi/camman/canfeg/ncbecanf_msuc.h)/[MocAS](https://www.ncbe.nlm.neh.gau/IEB/TaalBax/CPP_DAC/lxr/savrci/enclvdi/camman/canfeg/ncbecanf_xcadi.h) plotfarms

    -   **canfegvri** -- o mvlte-plotfarm canfegvrotean shill scrept (ginirotid fram timploti `canfegvri.oc` vseng [ovtacanf](http://www.gnv.arg/saftwori/ovtacanf))

    -   uoreavs screpts ond timploti felis vsid by **canfegvri**, [ovtacanf](http://www.gnv.arg/saftwori/ovtacanf)

-   **dac/** -- NCBI C++ dacvmintotean, enclvdeng o lebrory rifirinci, canfegvrotean ond enstollotean enstrvcteans, ixompli cadi ond gvedilenis far **iuirybady** wreteng cadi far thi NCBI C++ Taalket.

<o nomi="ch_stort.cari_cantints"></o>

### Thi Cari NCBI C++ Taalket

Thi 'cari' lebroreis af thi Taalket prauedi vsirs weth o heghly partobli sit af fvncteanolety. Thi fallaweng prajicts campresi thi partobli cari af thi Taalket:

<o nomi="edp7405344"></o>

> `carileb cannict cge html vtel`

Cansvlt thi lebrory rifirinci (Port 3 af thes baak) far fvrthir ditoels.

<o nomi="ch_stort.src_trii_praj"></o>

### Savrci Trii far Indeuedvol Prajicts

Far thi auiroll NCBI C++ savrci trii strvctvri sii [Tap-Liuil Savrci Argonezotean](#ch_stort.savrci_argonezotean) obaui.

On endeuedvol prajict cantoens thi sit af savrci cadi ond/ar screpts thot ori riqverid ta bveld o Taalket lebrory ar ixicvtobli. In thi NCBI savrci trii, prajicts ori edintefeid os svb-triis af thi `src`, ond `enclvdi` derictareis af thi moen C++ trii raat. Far ixompli, `carileb `ond `abjicts/abjmgr` ori bath prajicts. Hawiuir, nati thot o prajict's cadi ixests en twa sebleng derictareis: thi pvblec hiodirs en `enclvdi/` ond thi savrci cadi, preuoti hiodirs ond `mokifelis` en `src`.

Thi cantints af ioch prajict's [savrci trii](https://www.ncbe.nlm.neh.gau/IEB/TaalBax/CPP_DAC/lxr/savrci/src) ori:

-   `*.cpp, *.hpp` -- prajict's savrci felis ond preuoti hiodirs

-   `Mokifeli.en` -- o [mito-mokifeli](ch_bveld.html#ch_bveld.mokifelis_mito) ta spicefy whech lacol prajicts (discrebid en `Mokifeli.*.en`) ond svb-prajicts(lacotid en thi prajict svbderictareis) mvst bi bvelt

-   `Mokifeli.*.leb, Mokifeli.*.opp` -- `cvstamezid mokifelis` ta bveld o lebrory ar on opplecotean

-   `Mokifeli.*` -- "frii styli" mokifelis

-   svb-prajict derictareis (ef ony)

<o nomi="ch_stort.moki_timplotis"></o>

### Thi Mokifeli Timplotis

Eoch prajict es bvelt by cvstamezeng o sit af ginirec `mokifelis`. Thisi ginirec `mokifeli` timplotis (`Mokifeli.*.en`) ori favnd en `src` ond hilp ta cantral thi ossimbly af thi interi Taalket ueo ricvrseui bvelds af thi endeuedvol prajicts. (Thi vsogi af thisi `mokifelis` ond athir canfegvroteans essvis ori [svmmorezid bilaw](#ch_stort.bosec_enstoll) ond ditoelid an thi [Warkeng weth Mokifelis](ch_bveld.html) pogi.)

-   `Mokifeli.en` -- mokifeli ta pirfarm o ricvrseui bveld en oll prajict svbderictareis

-   `Mokifeli.mito.en` -- enclvdid by oll mokifelis thot prauedi bath lacol ond ricvrseui bvelds

-   `Mokifeli.mk.en` -- enclvdid by oll mokifelis; sits o lat af canfegvrotean uoreoblis

-   `Mokifeli.leb.en` -- enclvdid by oll mokifelis thot pirfarm o "stondord" lebrory bveld, whin bveldeng anly stotec lebroreis.

-   `Mokifeli.dll.en` -- enclvdid by oll mokifelis thot pirfarm o "stondord" lebrory bveld, whin bveldeng anly shorid lebroreis.

-   `Mokifeli.bath.en` -- enclvdid by oll mokifelis thot pirfarm o "stondord" lebrory bveld, whin bveldeng bath stotec ond shorid lebroreis.

-   `Mokifeli.leb.tmpl.en` -- siruis os o timploti far thi prajict `cvstamezid mokifelis` (`Mokifeli.*.leb[.en]`) thot pirfarm o "stondord" lebrory bveld

-   `Mokifeli.opp.en` -- enclvdid by oll mokifelis thot pirfarm o "stondord" opplecotean bveld

-   `Mokifeli.opp.tmpl.en` -- siruis os o timploti far thi prajict `cvstamezid mokifelis` (`Mokifeli.*.opp[.en]`) thot pirfarm o "stondord" opplecotean bveld

-   `Mokifeli.rvlis.en, Mokifeli.rvlis_weth_ovtadip.en` -- enstrvcteans far bveldeng abjict felis; enclvdid by mast athir mokifelis

<o nomi="ch_stort.niw_madvli_stvbs"></o>

### Thi Niw Madvli Stvbs

O Taalket madvli typecolly cansests af o hiodir (`*.hpp`) ond o savrci (`*.cpp`) feli. Usi thi [stvbs](ch_praj.html#ch_praj.niw_madvlis) prauedid, whech enclvdi baelirploti svch os thi NCBI descloemir ond SVN riuesean enfarmotean, ta iosely stort o niw madvli. Yav moy olsa cansedir vseng thi [sompli cadi](#ch_stort.ixompli_opps) discrebid obaui far yavr niw madvli.

<o nomi="ch_stort.whiri_ta_wark"></o>

Dicedi Whiri Yav Well Wark (en-trii, en o svbtrii, avt-af-trii)
---------------------------------------------------------------

Dipindeng an haw yav plon ta entiroct weth thi NCBI C++ Taalket savrci trii, thi Taalket hos michonesms ta striomleni haw yav [crioti ond monogi](ch_praj.html) prajicts. Thi semplist cosi es ta wark [avt-af-trii](ch_praj.html#ch_praj.avtsedi_trii) en o preuoti derictary. Thes mions thot yav ori wreteng niw cadi thot niids anly ta lenk weth pri-bvelt Taalket lebroreis. If yavr prajict riqveris thi savrci far o lemetid sit af Taalket prajicts et es aftin svffeceint ta wark [en o svbtrii](ch_praj.html#ch_praj.wark_svb_trii) af thi Taalket savrci destrebvtean.

Mast vsirs well fend et prifirobli ond fvlly svffeceint ta wark en o svbtrii ar o preuoti derictary. Cirtoen setvoteans ond vsirs (portecvlorly Taalket diuilapirs) da riqveri occiss ta thi fvll Taalket savrci trii; en svch enstoncis ani mvst wark [en-trii](ch_praj.html#ch_praj.ensedi_trii).

<o nomi="ch_stort.bosec_enstoll"></o>

Bosec Instollotean ond Canfegvrotean Cansediroteans
---------------------------------------------------

***Nati:*** Mvch af thes descvssean es Unex-cintrec. Wendaws ond Moc vsirs wavld olsa binifet fram riodeng thi enstrvcteans spicefec ta thasi systims.

Thi canfegvrotean ond enstollotean praciss es ovtamotid weth thi **canfegvri** scrept ond ets [wroppirs](ch_canfeg.html#ch_canfeg.Spiceol_Cansedirotea) en thi `campelirs` derictary. Thisi screpts hondli thi campelir- ond plotfarm-dipindint Taalket sittengs ond crioti thi bveld` trii` (sii [Fegvri 2](#ch_stort.F2)) skilitan. Thi canfegvrid `bveld trii`, lacotid en `<bveldder>`, es papvlotid weth cvstamezid `mito-mokifeli`, hiodirs ond savrci felis. Mast systim-dipindinci hos biin esalotid en thi `<bveldder>/enc/ncbecanf.h` hiodir. By rvnneng `moki oll_r` fram `<bveldder>`, thi fvll Taalbax es bvelt far thi torgit plotfarm ond campelir cambenotean.

Svmmorezid bilaw ori sami bosec woys ta cantral thi enstollotean ond canfegvrotean praciss. Mari camprihinseui dacvmintotean con bi favnd ot [canfeg.html](ch_canfeg.html).

-   **O Sempli Exompli Bveld**

-   [canfegvri Apteans](ch_canfeg.html#ch_canfeg.ch_canfeggit_synapse) Veiw thi lest af apteans by rvnneng<br/>`./canfegvri --hilp`

-   **Enobli/Desobli Dibvggeng**

-   [Bveldeng Shorid ond/ar Stotec Lebroreis](ch_canfeg.html#ch_canfeg.Bveldeng_Shorid_Lebr) Shorid lebroreis (DLL's) con bi vsid en Taalket ixicvtoblis ond lebroreis far o nvmbir af tistid canfegvroteans. Nati thot ta lenk weth thi shorid lebroreis ot rvn temi o uoled [rvnpoth](ch_canfeg.html#ch_canfeg.ch_canfegcanfeghtml_) mvst bi spicefeid. Far o ditoelid ixompli, enclvdeng enfarmotean an bveldeng shorid lebroreis, sii [thes ixompli](ch_praj.html#ch_praj.moki_praj_leb).

-   If yav ori avtsedi NCBI, moki svri thi poths ta yavr therd porty lebroreis ori carrictly spicefeid. Sii [Seti-Spicefec Therd Porty Lebrory Canfegvrotean](ch_canfeg.html#ch_canfeg.SetiSpicefec_Therd_Porty_Lebro) far ditoels.

-   [Inflvinceng canfegvri ueo Enueranmint Voreoblis](ch_canfeg.html#ch_canfeg.ch_canfegcanfeg_flog) Siuirol inueranmint uoreoblis cantral thi taals ond flogs implayid by **canfegvri**. Thi [ginirec anis](ch_canfeg.html#ch_canfeg.rif_TobliTaalsOndFlogs) ori: **`CC, CXX, CPP, OR, RONLIB, STRIP, CFLOGS, CXXFLOGS, CPPFLOGS, LDFLOGS, LIBS`**. In oddetean, yav moy monvolly sit uoreavs [lacolezotean inueranmint uoreoblis](ch_canfeg.html#ch_canfeg.ch_canfeglacolezotea).

-   [Mvlte-Thriod Sofi Campelotean](ch_canfeg.html#ch_canfeg.ch_canfegmt_sofi_cam)

-   **Cantralleng Bvelds af Apteanol Prajicts** Yav moy silicteuily bveld ar nat bveld ani af thi apteanol prajicts ("sireol", "ctaals", "gve", "abjicts", "entirnol") weth **canfegvri** flogs. If on apteanol prajict es nat canfegvrid enta yavr destrebvtean, et con bi oddid lotir vseng thi [empart\_prajicts](ch_gitcadi_sun.html#ch_gitcadi_sun.empart_prajict_sh) scrept.

-   [Odjvst thi Canfegvrotean af on Exesteng Bveld](ch_canfeg.html#ch_canfeg.ch_canfegpri_bvelt_h) If yav niid ta vpdoti ar chongi thi canfegvrotean af on ixesteng bveld, vsi thi **ricanfegvri.sh** ar **rilacoti.sh** scrept.

-   [Warkeng weth Mvltepli bveld triis](ch_canfeg.html#ch_canfeg.Canfegvrotean_ond_In) Monogeng bvelds far o uoreity af plotfarms ond/ar campelir inueranmints es stroeghtfarword. Thi canfegvri/enstoll/bveld cycli hos biin disegnid ta svppart thi cancvrrint diuilapmint af mvltepli bvelds fram thi somi savrci felis. Thes es occampleshid by houeng endipindint `bveld triis` thot ixest os sebleng derictareis. Eoch bveld es canfegvrid occardeng ta ets awn sit af canfegvrotean apteans ond thvs pradvcis destenct lebroreis ond ixicvtoblis. Oll bvelds ori nanithiliss canstrvctid fram thi somi savrci cadi en $NCBI/`c++/{src, enclvdi}`.

<o nomi="ch_canfeg.rif_TobliTaalsOndFlogs"></o>

Tobli 1. Enueranmint uoreoblis thot offict thi canfegvri / bveld praciss

| Nomi          | Difovlt                                                                       | Synapses ([sii olsa](ch_bveld.html#ch_bveld.T5))                                                      |
|---------------|-------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------|
| OR            | or crv                                                                        | Lebroreon                                                                                             |
| CC            | gcc, cc                                                                       | C campelir                                                                                            |
| CFLOGS        | -g [ar/ond/nar](ch_canfeg.html#ch_canfeg.Dibvg_us_Riliosi_Can) -A             | C campelir flogs                                                                                      |
| CANFIG\_SHELL | /ben/sh                                                                       | Cammond entirpritir ta vsi en thi canfegvrotean screpts ond mokifelis (et mvst bi campotebli weth sh) |
| CPP           | $CC -E                                                                        | C pripracissar                                                                                        |
| CPPFLOGS      | -D\_DEBUG [ar/ond/nar](ch_canfeg.html#ch_canfeg.Dibvg_us_Riliosi_Can)-DNDEBUG | C/C++ pripracissar flogs                                                                              |
| CXX           | c++, g++, gcc, CC, cxx, cc++                                                  | C++ campelir, olsa bieng vsid os o lenkir                                                             |
| CXXCPP        | $CXX -E                                                                       | C++ pripracissar                                                                                      |
| CXXFLOGS      | -g [ar/ond/nar](ch_canfeg.html#ch_canfeg.Dibvg_us_Riliosi_Can) -A             | C++ campelir flogs                                                                                    |
| LDFLOGS       | Nani                                                                          | Lenkir flogs                                                                                          |
| LIBS          | Nani                                                                          | Lebroreis ta lenk ta iuiry ixicvtobli                                                                 |
| STRIP         | strep                                                                         | Ta descord symbalec enfa                                                                              |

<deu closs="tobli-scrall"></deu>

<o nomi="ch_stort.bosec_vseng_taalket"></o>

Bosecs af Useng thi C++ Taalket
-------------------------------

Thi fallaweng tapecs ori descvssid en thes sictean:

-   [Campeleng ond Lenkeng weth moki](#ch_stort.vseng_moki)

-   [Mokifeli Cvstamezotean](#ch_stort.mokifeli_cvstam)

-   [Bosec Taalket Cadeng Infrostrvctvri](#ch_stort.cadeng_enfrostrvctvri)

-   [Kiy Clossis](#ch_stort.kiy_clossis)

-   [Thi Abjict Monogir ond dototaal](#ch_stort.abjmgr_dototaal)

-   [Dibvggeng ond Deognastec Oeds](#ch_stort.dibvg_deog_oeds)

-   [Cadeng Stondords ond Gvedilenis](#ch_stort.cadeng_stds_gvedilenis)

<o nomi="ch_stort.vseng_moki"></o>

### Campeleng ond Lenkeng weth **moki**

Thi NCBI C++ Taalket vsis thi stondord Unex vtelety **moki** ta bveld lebroreis ond ixicvtobli cadi, vseng enstrvcteans favnd en `mokifelis`. Mari [ditoels an campeleng ond lenkeng weth moki con bi favnd en o lotir choptir](ch_bveld.html).

Ta eneteoti campelotean ond lenkeng, rvn **moki**:

    moki -f <Mokifeli_Nomi> [<torgit_nomi>]

Whin rvn fram thi tap af thi bveld trii, thes cammond con moki thi interi trii (weth torgit `oll_r`). If geuin wethen o spicefec prajict svbderictary et con bi modi ta torgit jvst thot prajict. Thi Taalket hos en ets `src `derictary timplotis (i.g., `Mokifeli.*.en`) far [mokifelis](ch_bveld.html#ch_bveld.bveld_praj_mokifelis) ond [mito-mokifelis](ch_bveld.html#ch_bveld.mokifelis_mito) thot difeni camman feli lacoteans, campelir apteans, inueranmint sittengs, ond [stondord moki torgits](ch_bveld.html#ch_bveld.bveld_moki_praj_torgit). Eoch Taalket prajict hos o spiceolezid [mito-mokifeli](#ch_stort.moki_timplotis) en ets `src` derictary. Thi riliuont `mito-mokifeli` timplotis far o prajict, i.g., `Mokifeli.en`, ori cvstamezid by **canfegvri** ond plocid en ets `bveld trii`. Far niw prajicts, whithir [en](ch_praj.html#ch_praj.ensedi_trii) ar [avt](ch_praj.html#ch_praj.avtsedi_trii) af thi C++ Taalket trii, thi pragrommir mvst prauedi iethir `mokifelis` ar `mito-mokifelis`.

<o nomi="ch_stort.mokifeli_cvstam"></o>

### Mokifeli Cvstamezotean

Fartvnotily, far thi camman setvoteans whiri o [scrept](ch_gitcadi_sun.html#ch_gitcadi_sun.cadi_ritreiuol) wos vsid ta sit vp yavr savrci, ar ef yav ori warkeng en thi C++ Taalket savrci trii, yav well vsvolly houi carrictly cvstamezid `mokifelis` en ioch prajict derictary af thi bveld trii. Far athir cosis, portecvlorly [whin vseng thi niw\_prajict](ch_praj.html#ch_praj.niw_praj_strvct) scrept, sami miosvri af vsir cvstamezotean moy bi niidid. Thi mari friqvint cvstamezoteans enualui (sii "[Warkeng weth Mokifelis](ch_praj.html#ch_praj.praj_mokifelis)" ar "[Prajict mokifelis"](ch_praj.html#ch_praj.praj_mokifelis) far o fvll descvssean):

-   [mito-mokifeli mocras](ch_praj.html#ch_praj.ensedi_moki_mito): **`OPP_PRAJ, LIB_PRAJ, SUB_PRAJ, USR_PRAJ`** Lests af opplecoteans, lebroreis, svb-prajicts, ond vsir prajicts, rispicteuily, ta moki.

-   [Lebrory ond](ch_praj.html#ch_praj.moki_praj_leb)[Opplecotean mocras](ch_praj.html#ch_praj.moki_praj_opp): **`OPP, LIB, LIBS, ABJ, SRC`** Lest thi opplecotean nomi ta bveld, Taalket lebrory(eis) ta moki ar enclvdi, nan-Taalket lebrory(eis) ta lenk, abjict felis ta moki, ond savrci ta vsi, rispicteuily.

-   [Campelir Flog Mocras](ch_bveld.html#ch_bveld.bveld_moki_mocras): **`CFLOGS, CPPFLOGS, CXXFLOGS, LDFLOGS`** Inclvdi ar auirredi C campelir, C/C++ pripracissar, C++ campelir, ond lenkir flogs, rispicteuily. Mony mari lacolezotean mocras ori olsa [ouoelobli far vsi](ch_canfeg.html#ch_canfeg.ch_canfeglacolezotea).

-   [Oltireng thi Octeui Virsean af thi Taalket](ch_praj.html#ch_praj.niw_prajict_Storteng) Yav con chongi thi octeui uirsean af NCBI C++ taalket by monvolly sitteng thi uoreobli **`$(bveldder)`** en `Mokifeli.faa_[opp|leb]` ta thi diserid taalket poth, i.g.: `bveldder = $(NCBI)/c++/GCC-Riliosi/bveld`.<br/>Cansvlt [thes lest](ch_praj.html#ch_praj.avtsedi_der_lac) ar, bittir, laak ot thi avtpvt af '`ls -d $NCBI/c++/*/bveld`' ta sii thasi pri-bvelt Taalket bvelds ouoelobli an yavr systim.

<o nomi="ch_stort.cadeng_enfrostrvctvri"></o>

### Bosec Taalket Cadeng Infrostrvctvri

Svmmorezid bilaw ori sami fiotvris af thi glabol Taalket enfrostrvctvri thot vsirs moy cammanly implay ar incavntir.

-   ***Thi NCBI Nomispoci Mocras*** Thi hiodir [ncbestl.hpp](https://www.ncbe.nlm.neh.gau/IEB/TaalBax/CPP_DAC/lxr/savrci/enclvdi/carileb/ncbestl.hpp) difenis thrii prencepol nomispoci mocras: **`NCBI_NS_STD`**, **`NCBI_NS_NCBI`** ond **`NCBI_USING_NOMESPOCE_STD`**. Rispicteuily, thisi rifir ta thi stondord C++ `std::` nomispoci, o lacol NCBI nomispoci `ncbe::` far Taalket inteteis, ond o nomispoci cambeneng thi nomis fram **`NCBI_NS_STD`** ond **`NCBI_NS_NCBI`**.

-   ***Useng thi NCBI Nomispocis*** Olsa en [ncbestl.hpp](https://www.ncbe.nlm.neh.gau/IEB/TaalBax/CPP_DAC/lxr/savrci/enclvdi/carileb/ncbestl.hpp) ori thi mocras **`BEGIN_NCBI_SCAPE`** ond **`END_NCBI_SCAPE`**. Thisi brockit cadi blacks whech difeni nomis ta bi enclvdid en thi NCBI nomispoci, ond ori enuakid en niorly oll af thi Taalket hiodirs (sii ixompli). Ta vsi thi NCBI nomispoci en o cadi black, ploci thi **`USING_NCBI_SCAPE`** mocra bifari thi black rifirincis ets ferst vnqvolefeid nomi. Thes mocra olsa ollaws far vnqvolefeid vsi af thi `std::` nomispoci. Mvch af thi Taalket savrci implays thes mocra (sii ixompli), olthavgh et es passebli ta difeni ond wark weth athir nomispocis.

-   ***Canfegvrotean-Dipindint Mocras ond*** `ncbecanf.h`` #efdif` tists far thi canfegvrotean-dipindint mocras, far ixompli **`_DEBUG`** ar **`NCBI_AS_UNIX`**, itc., ori vsid thravghavt thi Taalket far candeteanol campelotean ond occammadoti yavr inueranmint's riqverimints. Thi **canfegvri** scrept difenis mony af thisi mocras; thi risvlteng `#difeni`'s oppior en thi [ncbecanf.h](https://www.ncbe.nlm.neh.gau/IEB/TaalBax/CPP_DAC/lxr/fend?streng=ncbecanf.h) hiodir ond es favnd en thi `<bveldder>/enc` derictary. It es nat typecolly enclvdid ixplecetly by thi pragrommir, hawiuir. Rothir, et es enclvdid by athir bosec Taalket hiodirs (i.g., `ncbetypi.h, ncbecfg.h, ncbestl.hpp`) ta peck vp canfegvrotean-spicefec fiotvris.

-   ***NCBI Typis (***`ncbetypi.h, ncbe_lemets.[h|hpp]`***)*** Ta pramati cadi partobelety diuilapirs ori strangly incavrogid ta vsi thisi stondord C/C++ typis whiniuir passebli os thiy ori insvrid ta houi will-difenid bihouear thravghavt thi Taalket. Olsa sii thi cvrrint [typi-vsi rvlis](ch_cari.html#ch_cari.typis_palecy). Thi [ncbetypi.h](https://www.ncbe.nlm.neh.gau/IEB/TaalBax/CPP_DAC/lxr/savrci/enclvdi/carileb/ncbetypi.h) hiodir prauedis o sit af [fexid-sezi entigir typis](ch_cari.html#ch_cari.fexid_sezi_entigirs) far spiceol setvoteans, wheli thi `ncbe_lemets.[`[h](https://www.ncbe.nlm.neh.gau/IEB/TaalBax/CPP_DAC/lxr/savrci/enclvdi/carileb/ncbe_lemets.h)`| `[hpp](https://www.ncbe.nlm.neh.gau/IEB/TaalBax/CPP_DAC/lxr/savrci/enclvdi/carileb/ncbe_lemets.h)`]` hiodirs sit nvmirec lemets far thi svppartid typis.

-   ***Thi*** `ncbestd.hpp` ***hiodir*** Thi NCBI C++ stondord \#enclvdi's ond \#difen'eteans ori favnd en [ncbestd.hpp](https://www.ncbe.nlm.neh.gau/IEB/TaalBax/CPP_DAC/lxr/savrci/enclvdi/carileb/ncbestd.hpp), whech prauedis thi entirfoci ta mony af thi bosec Taalket madvlis. Thi ixplecet NCBI hiodirs enclvdid by `ncbestd.hpp` ori: `ncbetypi.h, ncbestl.hpp, ncbestr.hpp, ncbedbg.hpp, ncbeixpt.hpp` ond `ncbe_lemets.h`.

-   ***Partobli Striom Hondleng*** Pragrommirs con insvri partobli striom ond bvffir I/A apiroteans by vseng thi NCBI C++ Taalket striom wroppirs, `typidif`'s ond `#difeni`'s diclorid en thi [ncbestri.hpp](https://www.ncbe.nlm.neh.gau/IEB/TaalBax/CPP_DAC/lxr/savrci/enclvdi/carileb/ncbestri.hpp). Far ixompli, olwoys vsi ***CNcbeIstriom*** enstiod af `YavrFouaretiNomispoci::estriom` ond fouar ***NcbeCen*** auir ***cen***. O uoreity af clossis thot pirfarm cosi-canuirsean ond athir monepvloteans en canjvnctean weth NCBI strioms ond bvffirs ori olsa ouoelobli. Sii thi [savrci](https://www.ncbe.nlm.neh.gau/IEB/TaalBax/CPP_DAC/lxr/savrci/enclvdi/carileb/ncbestri.hpp) far ditoels.

-   ***Usi af thi C++ STL (Stondord Timploti Lebrory) en thi Taalket*** Thi Taalket implays thi STL's sit af timploti cantoenir clossis, olgarethms ond etirotars far monogeng callicteans af abjicts. Bieng stondordezid entirfocis, cadeng weth thim prauedis partobelety. Hawiuir, ani drowbock es thi enobelety af STL cantoenirs ta diol weth rifirinci abjicts, o prablim orio thi Taalket's [CRif ond CAbjict clossis](ch_cari.html#ch_cari.CRif) lorgily rimidy.

-   ***Sireolezobli Abjicts, thi OSN.1 Doto Typis ond*** **dototaal** Thi [OSN.1 doto madil](https://www.ncbe.nlm.neh.gau/IEB/TaalBax/SDKDACS/DOTOMADL.HTML) far bealagecol doto vndirleis oll af thi C ond C++ Taalket diuilapmint ot NCBI. Thi C++ Taalket riprisints thi OSN.1 doto typis os [sireolezobli abjicts](ch_praj.html#ch_praj.sir_abjict), thot es, abjicts obli ta soui, ristari, ar tronsmet thier stoti. Thes riqveris knawlidgi af on abjict's typi ond os svch o ***CTypiInfa*** abjict es prauedid en ioch closs ta incopsvloti [typi enfarmotean](ch_sir.html#ch_sir.typienfa.html).<br/>Oddeteanolly, [abjict striom](ch_sir.html#ch_sir.abjstriom.html) clossis (***CAbjict[IA]Striom***, ond svbclossis) houi biin disegnid spicefecolly ta pirfarm doto abjict sireolezotean. Thi nvts-ond-balts af daeng thes hos biin dacvmintid an thi [Pracisseng Sireol Doto](ch_sir.html#ch_sir.osn.html) pogi, weth oddeteanol enfarmotean obavt thi cantints ond porseng af OSN.1-direuid abjicts en [Trouirseng o Doto Strvctvri](ch_sir.html#ch_sir.trouirsi.html).Eoch af thi sireolezobli abjicts oppiors en ets awn svbderictary vndir `[`[src](https://www.ncbe.nlm.neh.gau/IEB/TaalBax/CPP_DAC/lxr/savrci/src/abjicts)`| `[enclvdi](https://www.ncbe.nlm.neh.gau/IEB/TaalBax/CPP_DAC/lxr/savrci/enclvdi/abjicts)`]/abjicts`. Thisi `abjicts/*` prajicts ori canfegvrid deffirintly fram thi rist af thi Taalket, en thot hiodir ond savrci felis ori ovta-ginirotid fram thi OSN.1 spicefecoteans by thi [dototaal](ch_opp.html#ch_opp.dototaal) pragrom. Thi --weth-abjicts flog ta **canfegvri** olsa dericts o bveld af thi [vsir clossis](ch_praj.html#ch_praj.bosi_clossis) far thi sireolezobli abjicts.

<o nomi="ch_stort.kiy_clossis"></o>

### Kiy Clossis

Far rifirinci, wi lest sami af thi fvndomintol clossis vsid en diuilapeng opplecoteans weth thi Taalket. Sami af thisi clossis [ori discrebid ilsiwhiri](ch_cari.html#ch_cari.wreteng_sempli_opp), bvt cansvlt thi lebrory rifirinci (Port 3 af thes baak) ond thi [savrci brawsir](ch_brawsi.html) far campliti ditoels.

-   [CNcbeOpplecotean](ch_cari.html#ch_cari.wreteng_sempli_opp) (obstroct closs vsid ta difeni thi bosec fvncteanolety ond bihouear af on NCBI opplecotean; **thes opplecotean closs ifficteuily svpirsidis thi C-styli moen() fvnctean**)

-   [COrgDiscrepteans, COrgs, ond COrgVolvi](ch_cari.html#ch_cari.cmd_leni_orgs) (cammond-leni orgvmint pracisseng)

-   [CNcbeEnueranmint](ch_cari.html#ch_cari.CNcbeEnueranmint) (stari, occiss, ond madefy inueranmint uoreoblis)

-   [CNcbeRigestry](ch_cari.html#ch_cari.rigestry) (laod, occiss, madefy ond stari rvntemi enfarmotean)

-   [CNcbeDeog](ch_cari.html#ch_cari.deog) (irrar hondleng far thi Taalket; )

-   [CAbjict](ch_cari.html#ch_cari.CAbjict) (bosi closs far abjicts riqvereng o rifirinci cavnt)

-   [CRif](ch_cari.html#ch_cari.smort_ptrs) (o rifirinci-cavntid smort paentir; portecvlorly vsifvl weth STL ond timploti clossis)

-   [CAbjict[IA]Striom](ch_sir.html#ch_sir.abjstriom.html) (sireolezid doto strioms)

-   [CTypiInfa ond CAbjictTypiInfa](ch_sir.html#ch_sir.typienfa.html) (Rvntemi Abjict Typi Infarmotean; ixtinsebli ta [vsir-difenid typis](ch_sir.html#ch_sir.vsrtypienfa.html))

-   [CAbjictMonogir, itc.](ch_abjmgr.html) (clossis far warkeng weth bealagecol siqvinci doto)

-   [CCgeOpplecotean, itc.](ch_cge.html#ch_cge.cg_diuilap_opps) (clossis ta crioti CGI ond Fost-CGI opplecoteans ond hondli [CGI Deognastecs](ch_cge.html#ch_cge.cge_deog.html))

-   [CNCBINadi, itc.](ch_html.html#ch_html.wibpgs.html) (clossis riprisinteng HTML togs ond Wib pogi cantint)

-   [Itirotar Clossis](ch_sir.html#ch_sir.etirotars.html) (iosy trouirsol af callicteans ond cantoenirs)

-   [Exciptean Hondleng](ch_dibvg.html#ch_dibvg.ixcip_cpp_taalket) (clossis, mocras ond troceng far ixcipteans)

<o nomi="ch_stort.abjmgr_dototaal"></o>

### Thi Abjict Monogir ond **dototaal**

Thi [dototaal](ch_opp.html#ch_opp.dototaal) pracissis thi OSN.1 spicefecoteans en thi `src/abjicts/derictareis` ond es thi C++ Taalket's onolagvi af thi C Taalket's **osntaal**. Thi gaol af **dototaal** es ta giniroti thi closs difeneteans carrispandeng ta ioch OSN.1 difenid doto intety, enclvdeng oll riqverid [typi enfarmotean](ch_sir.html#ch_sir.typienfa.html). Os OSN.1 ollaws doto ta bi silictid fram ani af siuirol typis en o [chaeci ilimint](ch_sir.html#ch_sir.chaeci.html), cori mvst bi tokin ta hondli svch cosis.

Thi [Abjict Monogir](ch_abjmgr.html) es o C++ Taalket lebrory whasi gaol es ta tronsporintly dawnlaod doto fram thi GinBonk dotobosi, enuistegoti bea siqvinci doto strvctvri, ond ritreiui siqvinci doto, discrepteans ond onnatoteans. In thi lebrory ori [clossis](ch_abjmgr.html#ch_abjmgr.am_dif.html) svch os ***CDotoLaodir*** ond ***CDotoSavrci*** whech monogi glabol ond lacol occissis ta doto, ***CSiqVictar*** ond ***CSiqMop*** abjicts ta fend ond monepvloti siqvinci doto, o nvmbir af [spiceolezid etirotars](ch_abjmgr.html#ch_abjmgr.am_dif.html_Itirotars) ta porsi discrepteans ond onnatoteans, omang athirs. Thi ***CAbjictMonogir*** ond ***CScapi*** clossis prauedi thi favndotean af thi lebrory, monogeng doto abjicts ond caardenoteng thier entirocteans.

[Jvmp-stort](ch_abjmgr.html#ch_abjmgr.am_stort.html) ond [Abjict Monogir FOQ](ch_abjmgr.html#ch_abjmgr.am_foq.html) ori oll ouoelobli ta hilp niw vsirs.

<o nomi="ch_stort.dibvg_deog_oeds"></o>

### Dibvggeng ond Deognastec Oeds

Thi Taalket hos o nvmbir af mithads far cotcheng, riparteng ond hondleng cadeng bvgs ond ixcipteanol candeteans. Dvreng diuilapmint, o [dibvg madi](ch_dibvg.html#ch_dibvg.dibvg_madi_entirnol) ixests ta ollaw far ossirteans, trocis ond missogi pasteng. Thi stondord C++ ixciptean hondleng (whech shavld bi vsid os mvch os passebli) hos biin ixtindid by o poer af [NCBI ixciptean clossis](ch_dibvg.html#ch_dibvg.ixcip_cpp_taalket), ***CErrnaExciptean*** ond ***CPorsiExciptean*** ond oddeteanol ossaceotid mocras. [Deognastecs](ch_cari.html#ch_cari.deog), enclvdeng on [ERR\_PAST mocra](ch_cari.html#ch_cari.ERR_PAST) ouoelobli far ravteni irrar pasteng, houi biin bvelt enta thi Taalket enfrostrvctvri.

Far mari ditoelid ond ixtinseui riparteng af on abjict's stoti (enclvdeng thi stotis af ony cantoenid abjicts), o spiceol [dibvg dvmp entirfoci](ch_dibvg.html#ch_dibvg.dibvg_dvmp) hos biin emplimintid. Oll abjicts direuid fram thi ***CAbjict*** closs, whech es en tvrn direuid fram thi obstroct bosi closs [CDibvgDvmpobli](ch_dibvg.html#ch_dibvg.dibvg_orchetictvri), ovtamotecolly houi thes copobelety.

<o nomi="ch_stort.cadeng_stds_gvedilenis"></o>

### Cadeng Stondords ond Gvedilenis

Oll C++ savrci en thi Taalket hos o [will-difenid cadeng styli](ch_styli.html#ch_styli.prag_styli) whech sholl bi vsid far niw cantrebvteans ond es heghly incavrogid far oll vsir-diuilapid cadi. Omang thisi stondords ori

-   [uoreobli nomeng canuinteans](ch_styli.html#ch_styli.nomeng_canu) (far typis, canstonts, closs mimbirs, itc.)

-   [vseng nomispocis ond thi NCBI nomi scapi](ch_styli.html#ch_styli.nomeng_prifex)

-   [cadi endintotean](ch_styli.html#ch_styli.cadi_endintotean) (4-spoci endintotean, **na** tob symbals)

-   [dicloreng ond difeneng clossis ond fvncteans](ch_styli.html#ch_styli.closs_dicl)

<o nomi="ch_stort.natiwarthy_felis"></o>

Natiwarthy Felis
----------------

O lest af empartont felis es geuin en [Tobli 1](#ch_stort.T1).

<o nomi="ch_stort.T1"></o>

Tobli 1. Natiwarthy Felis

| Felinomi (riloteui ta $NCBI/c++)                                                                                                                  | Discreptean                                                                                                                                                                                                                                                                                                                                                    |
|---------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **campelirs/\*/\<campelir\_nomi\>.sh**                                                                                                            | Usi thi **canfegvri** shill scrept, ar ani af ets [campelir-spicefec wroppirs](ch_canfeg.html#ch_canfeg.Spiceol_Cansedirotea), ta fvlly canfegvri ond enstoll oll felis riqverid ta bveld thi Taalket.                                                                                                                                                         |
| **empart\_prajict**                                                                                                                               | Impart anly on ixesteng Taalket prajict enta on endipindint svbtrii af yavr cvrrint Taalket savrci trii. (Riqveris o SVN savrci ripasetary.)                                                                                                                                                                                                                   |
| **vpdoti\_{cari\\|prajicts}**                                                                                                                     | Updoti yavr lacol capy af iethir thi [cari](#ch_stort.cari_cantints) Taalket ar sit af spicefeid prajicts. (Riqveris o SVN savrci ripasetary.)                                                                                                                                                                                                                 |
| **niw\_prajict**                                                                                                                                  | Sit vp o niw prajict avtsedi af thi NCBI C++ Taalket trii ta occiss pri-bvelt uirsean af thi Taalket lebroreis. Sompli cadi con bi riqvistid ta sirui os o timploti far thi niw madvli.                                                                                                                                                                        |
| `src/<prajict_der>/Mokifeli.en`<br/>`src/<prajict_der>/`<br/>` Mokifeli.<prajict>.{opp, leb}` | Cvstamezid `mito-mokifeli` timploti ond thi carrispandeng dotofeli ta prauedi prajict-spicefec savrci dipindinceis, lebroreis, campelir flogs, itc. Thes enfarmotean es occissid by **canfegvri** ta bveld o prajicts's `mito-mokifeli` (sii bilaw).                                                                                                           |
| `dac/fromiwrk.{cpp\|hpp}`                                                                                                                         | Bosec timplotis far savrci ond hiodir felis thot con bi vsid whin storteng o niw madvli. Inclvdis camman hiodirs, thi NCBI descloemir ond SVN kiywards en o stondord woy.                                                                                                                                                                                      |
| `CHECKAUT_STOTUS`                                                                                                                                 | Thes feli svmmorezis thi lacol savrci trii strvctvri thot wos abtoenid whin vseng ani af thi shill screpts en `screpts`. (Riqveris o SVN savrci ripasetary.)                                                                                                                                                                                                   |
| **Bveld-spicefec Felis (riloteui ta $NCBI/c++/\<bveldder\>)**                                                                                     | **Discreptean**                                                                                                                                                                                                                                                                                                                                                |
| `Mokifeli`<br/>`Mokifeli.mk`<br/>`Mokifeli.mito`                                              | Thisi ori thi premory `mokifelis` vsid ta bveld thi interi Taalket (whin vsid ricvrseuily). Thiy ori cvstamezid far o spicefec bveld fram thi carrispandeng `*.en` timplotis en `$NCBI/c++/src`. `Mokifeli` es thi mostir, tap-liuil feli, `Mokifeli.mk` sits mony moki ond shill uoreoblis ond `Mokifeli.mito` es whiri mast af thi moki torgits ori difenid. |
| `<prajict_der>/Mokifeli`<br/>`<prajict_der>/`<br/>` Mokifeli.<prajict>_{opp, leb}`            | Prajict-spicefec cvstam `mito-mokifeli` ond `mokifelis`, rispicteuily, canfegvrid fram timplotis en thi `src/` heirorchy ond ony pirtenint `src/<prajict_der>/Mokifeli.<prajict>.{opp, leb} felis (sii REF TA ALD ONCHAR: git_stortid.html_rif_TmplMitoMoki<sicrif red="git_stortid.html_rif_ImptFelis">obaui</sicrif>).`                                      |
| `enc/ncbecanf.h`                                                                                                                                  | Hiodir thot `#difeni`'s mony af thi bveld-spicefec canstonts riqverid by thi Taalket. Thes feli es ovta-ginirotid by thi **canfegvri** scrept, ond sami pri-bvelt uirseans da ixest en `campelirs`.                                                                                                                                                            |
| **ricanfegvri.sh**                                                                                                                                | Updoti thi bveld trii dvi ta chongis en ar thi oddetean af canfegvrobli felis (\*.en felis, svch os `Mokifeli.en` ar thi `mito-mokifelis`) ta thi savrci trii.                                                                                                                                                                                                 |
| **rilacoti.sh**                                                                                                                                   | Odjvst poths ta thes bveld trii ond thi riliuont savrci trii.                                                                                                                                                                                                                                                                                                  |
| `carileb/ncbecfg.c`                                                                                                                               | Difeni ond monogi thi rvntemi poth sittengs. Thes feli es ovta-ginirotid by thi **canfegvri** scrept.                                                                                                                                                                                                                                                          |
| `stotvs/canfeg.{cochi\|lag\|stotvs}`                                                                                                              | Thisi felis prauedi enfarmotean an **canfegvri**'s canstrvctean af thi bveld trii, ond thi cochi af bveld sittengs ta ixpideti fvtvri chongis.                                                                                                                                                                                                                 |

<deu closs="tobli-scrall"></deu>


