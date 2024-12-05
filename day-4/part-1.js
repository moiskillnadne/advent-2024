const input = "XMXXMSSSMSXSXMMXSAMMXXSXMASMSSXXMAMXAMXSXMXSMAMMASXXASMMXMASXMSSXMMMXMXSXXSXMXXSAMXSXSXSAMXMSAMXMAXXXMXMAMSASXMSSXMSXSXXMAXXSSSMXMXMXMMAASXM\n" +
    "MSSMMAAXAMMSAAAXXAMSXMAMXMSMAMMXSAXMXMASAMASMAMMASXMAMAXXXMASAAAXMSMSMAMAMMAMAMMMMXMASMMXMXAMASXMAMMMMASMMSMMMMASAAXAAMMMMSMXAAMSAMSASMMMMAX\n" +
    "AAAXMMXMSMASXMMSMXMMASMAAMXMASAMMAXSAMASAMASXXSMASASMSMMMMASMMMMMMAAXMXSAMSAMASMASAMAMASMMMMSAMXMAXAASASAAXAAXMASMMMSMXAAXAAMSMMMAXMAXMAASMM\n" +
    "SSMMXSAAXMMSAXMAXAAXAMXXMSSSMSMAMAMXAMXXXMXSXMMMMSAMXAXXAMXAXXMAXMASMXASAXXMSAXXASAMAXAMXXAXMXXMSASXMMASMMSSMSMMSASAMXSSSSMSAAAXMMMMXMMSXSXA\n" +
    "XAAAAMMSMSXXMXAASXSMSMSMXXMAMXMASXSSMMXMAMAMMMAAMMAMMMXSSMSAMXSMSASMXXMSXMAAMAMMMSXMAMMSXSASASAMXASXAMAXMAAAAXXMSXMXMXMXMAXAMXSAXAAXAXAXAMXS\n" +
    "SXMMSXAXASXAMMMMSXMXMASXMMXMMSMAXXMAMAMXAMASASMSMXAMXMMAMASAMXSXMMXAXSXSAMXMMAMAAMXMASMAXAAMAMSMMXMMMMMSMMMSAMXAXMMMSXSASMMMSMMMSSSMMMMMAMSM\n" +
    "AAXAXMSMAMSMMAAMSMSAMMMAMAASASMASMSAMAMMASASASXMASMSMSAAMAMAMAMASXMMMAASXMAXSASMMXAXAMMMMMSMXMAXSASASAMXXSMMMSMMMAXAAASAXSAXXAAAMAMXSASMXMAS\n" +
    "SSMMSMAMSMSXMSMMSASXSXSAMSMMASASMMSASASMXMMXMMXMASAAAXAMMXSAMASMMMAXXMMMXSAMXXSAMSMMSSXXAAAMMSSMSASXMASMXMASAXAMSSMMMMMMMMXSSSMXSAMXSASXMSMS\n" +
    "XMAMAXMXXAMAMAMAMXMXXASAXAXMXMXASASAMASMSAMXXSSMMMMMMMAMXMSASXMMASMMSSMMMSMMMMMMMASMXAMSMSMSAMXAMAMAXAMMMMAMMMSAAXSASASASXMAMAAXMASXMMMMXSXS\n" +
    "SMASXSXASASAMAMXSSSSMASXMASMSMSAMXMAMXMASAMSXMAASAMSXXMMXASAMXMSAMAAXXAAAMAMMAAMXAXXMAXMAAXMAXMXMSMSMMMMAXMMSAAMXSMXSASAAMAMSXMMSXXAXAAXMSAS\n" +
    "XMAXMXAXSAMXXXMAMXAAXMMMXAAAAAXASMSSMXMXMAMXASAMMASMXSXMXMMAMAAMASMMSMSMXSAMXMMSMSSXSXMMSMSSSMXXAMAXMAXSAXMAMXSAMXXXMMMMMASXSMSXXMMMSMMMAMMM\n" +
    "SMSSSXSAMXMMSMSMXMSMMAAXXSXSMMSAMAMAXXXXSAMSAMASMXMMASAMXXMAMSSSMMAXAXAXXMMXSAMSAMAMXAXXMXAAXXAXMMSMMSAMXSMASAMAASAMSAMXXSMAXAMMXAAMAMXSMSMS\n" +
    "SAXAMAXAMAAASAAAAMAXMMXMMXMXAMXAMAMMMMMMSSXMAXAMAXAMMMMSAMSMXXMAMXMSXSMSMSAAXAMMAMMMSXMMXMMSMAMSMAMAAXMSAAXAMXSMMAMAAASXMMMMMSMMMSXSASMSAAAA\n" +
    "MMMAMMMSXSSMMSMSXSAMMSMMASXMSMSMSASXAXAXMXXSXMSSXSMXSXXXAXAMMMXAMAAXMSXAMMMSSMMSAMAMAAMSAMXAMAMXMAXMMSAMXSMMSAXASXXXSXMXXAAAAMAMAMXSAMAMSMMM\n" +
    "SSSSMMXMXMXAAMXMASAMSAMMAXXAAAAAXASXMSXSAMXMAXXAXXMASMSMMSMSAMMSSMMXAMSXSAMXAMAXXXASXMMAMMXXSXMAXMXSAMXMAMMXMASMMMSXMAMAXXSSMSAMSXMMSMMMMMMM\n" +
    "SAAXMMAMAXSSMSAXAMAMMAXMMSMSMMMSMSMMXAMMXAASMMMXMAMASAAAAAASMSAXAAAMMMMMSASMMMMSSMMXAXSMMSAMSAMAMSAMAMAXSXMAMAAXAAAMSXMASXAAMMMMAAMAMXXXAAAA\n" +
    "XMSMSMASMMMMASMMSSSMSSMSAAXXASAMXMAMMASMMSXSXAMXSXMAMXMSSXXMAMXSMMXSAAAASXMASXSAMMSSSMXAAMAMSAMSSMASXMSAMXSSSSSMXSAMXXSASMMMMAAMSSMAXASMSSSS\n" +
    "MXMAASMMMAASXMXXAAXMAAAMSSMSXMASAMAMSSMAAXAMMMXXMXMAXAXMAMXMXMXXXMASXSMXMMXAMXMASAXMMAMMMSMMMAMXAXAMMMMAMAMAAXXAMMMXXMMXMXSXSSMMAMMSMXMAMAMM\n" +
    "XAMMMSXAXSXSMMXMMMMMSMMMAMASXMAXXXXMXAMMXXASAXXAXMSAMSSMSAMXAMXMMMXSAMXAASMSSXSAMMSAXSMSAAAASAMXSMXXAXXXMAMMMMSXMAAMMMXAAXXAMXXMASAAMXMAMAMX\n" +
    "SASMAMMMMMASAMXMMXSAAXXMXMXMASXSMSMMSAMSSSSMAASMXMASMAAAMASMAMAAXMAMXSSMMMAXAAMXMXMMMXAMSSSMSAMXAAMSSSMMSXSXAXMAMXMMAXXMSMMMMAXSAAXASXSMMAXX\n" +
    "MASMMMAXAXAXXMXSXXMAMSAMMSXSAMAAAAAAXAMAAMMMXMAAAXAAXAAMMAMMAXASMXXMSMASMMMMMMMAXAASAMXMAMAXMXSMMXMAAAAAAASMMMMAMMSSXMXMAMAAXSMMXXXSAMXASMMS\n" +
    "AASAMMSXMAMSSMASMMMAXMASAAXMASMMSMMMMSMMSMSSSXMSMMMSAMMSXASXMSMXMAAMASAMXAXSMXSMMSXXMXSAMXXMSSMMXMMMSMMMMAMAMASXMAXMASMSMSSSXMAMAMSAXSAMXSAA\n" +
    "MASAMAXXXMAAAMAXAMXXXSAMMMMMMMXXXXXSAXAXMAAAMXMAXXXMAMAMMAMXAAAAMSSMAMMXMMMMAAXMAMMMMAMAXXMASXAXMXAAXMAMXASAXMAAASMMMMMAXAXXMXAMASAAMXXXAMMM\n" +
    "SASAMASASAMSSMASXMMSAMMMMASXMASMXMMMASAMXMMSMXSAXSMSAMASMMSMSMMMMAAMAMXSAMSSMMSMASAAMAMAMXASMMMMMSMMSASAMASASMMSMXAAAMMMMXMSMSSMXSMAAMMMXSAX\n" +
    "AAXAMXSAMMAAAMASAAAMXXXASASAMMAMAMAMMMMMMSMMMMMMSMASXSASAAAAAXAMMSSMSAAMAMAAXXXMAXMMSXSAMXSAXSAAXAAXMAXAAMMMMAAMASMMMSXXXAAXMAAXXMXMXAAMAMMS\n" +
    "MXSSSMMMMXMSXMASMMMSMMSXSASXMMMSXSXXXAXAAAAAMAAXAMMMAMAMMMMMMMMSAMMAMMXXMMSSMMAMSSMXAMMXSMMSXMASMMSMMAMXXSASXMMMAMMXAAMSMMXXMSSMXMASMMMSXSAS\n" +
    "XMMAAASAMXXAMMXXAMAXAAMXMAMAASXMAXMASMSMMXSMSXSXSSMMXMSMMSXXAAXMAXMXMMMSMAAAASMXAAMMAMSASXMXMSAMXAXXMSMMASAMXMAXSMSXMSAMXSAMMAAAASASMMMAAMAS\n" +
    "MMMMMSXMSASMSXSSSMAMSXSAMAMMMSAMXMXASAAMMMMASAMXMAMMMAXAAAMSSSSSMMAAAASAMXSSXMMXSMMSAMMMSASAMXMMMSMMMXAXAMXMSSXSAAXAMXXSAMASMSSSMXAMAASMMMAM\n" +
    "MASAMXMXSAMXAAXAMMXXMASASXSSSSMMMXMXSXXSAAMAMAMMAMASMMXMAMXAMXMASMXXSMSASMMMMASAMAXMAMAXXMMASMMAAAAAASAMXSAXAAMSMMSXMAXMASAMAXAAAMSMSMSAAMAS\n" +
    "SASMSAAAMASMMMMAMXMASAMXMAAXASXASAAMMXASMSMAMXMAMSAXSMAMXSMMMSMMMMAXXXSAMAAAXXMASMMMASMSSXSAMASMSSSMXMAMAXXSMXMXXASMMMXSAMXMMMMMXMMAXASMMSAS\n" +
    "MASXSMSXMSMMAXMXMASMMMSSMMMMMMMMSMXAAXMSXAMSMSXXAMXXMMMSMMASAMMXSMMMSAXMASXSSMMXXMASXAMXAMMMSXMMMAXMASMMSSMMXMXXMXXAXAAMASXAMAXMXMMSMMMXAMAS\n" +
    "MSMAMAMMXXASMSMXSMMXASAMXMXXAASXMMSMMMXMXMXMAMMSMMSMSAMAMMAMASXAXAAAMMMSXMAMMXSXMXMMXSASAMAXMAMSMMMSAMAAAAAMXSMMSASMMMMSMMMMSMSMXSAMXAXMMMAS\n" +
    "SAMXMXMMAMAMXXMAMAASMMMMSXMSSSSXAASAMSXMXXAMAMAAXMMASXXXSMXXAMMSSSMSSXXMASMXAASMXAAAMXMSASXXSAMXAAAMAMMMMSSMMMASXMAAXAAAXMAXAMAMXMASMMSSSMSS\n" +
    "AMMASXAMMSMSMSMSSSMXMASAMMMAMAMMMMSAAMAMSMMSSMSMSAMXMSMAMXSMXMMAXXMAMAMXMMXMMXSASMSSXSXSAMAASAMXSMSSMSSSMXXMAXSMAXSMMMSSSSSSSSSSXSAMAXAAAMAS\n" +
    "MXMAXMAXXAASAMAAAMMMSAMASAMASASXMASMMXAMXAXAXAMXMMMAAAMAMAXAAMMMSMMMSSXXAXAAMMMMMAAAASAMSMMMSASAAXXAAAXAXSSSSSMSSMXXAMMAMXAXXAMAASMSSMMSMMAS\n" +
    "XSMAXMSSMSMMAMMXSMAMMXXXSAMASXSXMXXASMXMMMMMXSSMAAXASMSSMMSSMSAMXXSMAMXMASMXSASXMMMMMMAMAXXXXAMMSMXMMMSMXMAAMXAAMAASXSMMMMMMMMMMMMAAXAXMAMMM\n" +
    "AMMAMSAAXMASXMXAMMASMMSMMMSXMAXAXAXAMMMSSMAXSMAMSMSAMXXMAXAAXSASMAMMAMASXSAASXSAXXXXSSSMMSSSMMMXMAMXMXAXMMMMMMMMXSXSASAMASAAXAAAAXMASMMMSSSM\n" +
    "AMAXMMASMXXMASAXMASAAASXAAMASMSXMMMMSXAAASMXXMXMAMMAMMSSMMSSMSAMMSMSXSMSAMMMSSSXMASXXAMXXAAAAASMXAAAMMXSAAAAAXAXXMSMASXMASMSMASXSSMMXAXXAAAS\n" +
    "SSMSMMMMMXSSXMASMMMSMMMMXMSAMXMAAXAAAMMSMMMXXSMMXMSAMXAASAMXMMSMXXAAAXAMAMAMMASXMMXMXMMMMMSMSMSASMSXSAXMMSSSSSMSAXXMAMAMXMXXAMXXAAXAXMMMMSMM\n" +
    "XAASASAAXSAMXMASAAXAXMASAXMXSASXMMMSSSXMASMSMAASAAXMASMAMSMXXAAXAMXMMMSMASASMAMMMAXSMXAXAAMMMXMAMAXAXMMXXMAXAAASMMSMXSMMASMMSMSMSMMMMSASAMXS\n" +
    "MMMSAMMSSMMMXMASMMXMMSAMXMASMAXXAXXAAMXSMAAAMXMMAXXXMMXSSMSMMSSMMAAXMAASASAMMAXAMSSMASASMMSASMMAMXMMMSAMSMSMSMMMMSMXAMAMASMAAXAMMXAAAAAMXSAS\n" +
    "SMXMAMAMXXXMAMASAMXSAMMSSMMMMAMMSMMXMAMMSMSXSMSSMMSSSMAXAAAXAAAMSSXSASMMMMMSSSSSSMAMXMAAXAXXXAXXXAASAMASXAXAXAAAMASMXSAMMSMSMSMAXASMSSMSXMAS\n" +
    "SAXSAMXSASMSASASAMXMASAAXAAXMAMAAXMAMSMAXXXAMXAASXXAMMSSMSMSSMSMMAAAMXXAMSMMAAXMAMAMXMXMMMSSSSMSSSXMASXMMSMSMSXMSAMMXSXSXXAAAMXMSMXAMMMXAMAM\n" +
    "MXMMMAAMASASASMSAMSMSSMMSSMSMAMSSMMMXMMSMMMMAMSSMXMXMAXXAXXAASAAMMMMXMMXXAAMMMMMAMXSSMAXAXMAAAXAAXXSMMMMAXAXAAXXMXSMMMMMMMSMSMAMMXMSMSXSXMAS\n" +
    "MAMXSMMMAMMMAMASXMAXAXMXMAMAMAXMAMXAMMAMAXASAAMAMMMSMMSMXMMXMMSXMXXMXMASXSMMXSAMXXSAXSASXSSMMMMMSMMXASAMXMMMMMSXAMXMAAAMAMXMMMXSMAXXAMXMAMAX\n" +
    "SMSAXAASMSSMMMAMASMMMSSSSSMSSMSMASXSXMAMMSMSAXSAMAAAAMXXSXAMSAMXMASXSMMSAMAMAMAXASAMXMMXAXAAMXMXMAMSXMAXXAXASMMMSMAMSXMSSSMMAMXMMMSMAMASXMSS\n" +
    "XAMMSSMSAAMXXMSSMXXXXAAMAXAAAXAMMMMXAMASAMXXMAXAMMXXSMASXMXSAASAMAMMAAMMXMSMMSSMMSSXMSSSMSSMMMSMSAMMXSAMSMMMXAAAASMXMXMMXAMMMMAMAMXMAMMSAAXA\n" +
    "MMMMAMMMMMSSSXAAXXMMMMSMAMMMMXXMAAAXXMAMMSSMMSSSMSXMMMMMAAXXXMMAMASXSXMAXXXAXAMAXXASAMXAXAAAMAAXSMSAAMAMAASMSSMSXMXAMASXSXMASMMSXSASASXSMMMM\n" +
    "XXAMSSMXAXAASMSSMMMAAAAMMMXXXMSXSMXSAMXSMAXAXMAXAAMSASXSSMSMSSSXMXSXMAMMSMSMMXSXMAMMXXXMMSSMMMXXXAMMMSXSMSMAAMMXXMSXSAXAMASASAXAAXASAXMXSAAX\n" +
    "SSMSAAMSSMMMMMAAXAXSXXSSSMSSMMSAAAASAMASMSMMMMAMMMXSASAAMAAASAMXMASMSAMSAAAASMMMSAXSSSSSMXMAASXSMMMSXMXMMMMMMXXAMMMAMMMSMAMASMMMSMXMXMMAMXMS\n" +
    "AAXXMMMAMXAMXMXMMSMXAAMAMAMXAAMSMMMXAMASMAASAMXSASAMMMMMMXASMXSASMXAXASMMMMXMAAAXAXXAAAMMAMXMAAXAXASAMMMASXSMMMMSAMXMXAMMXSXSXMAXAMXXXMASAXM\n" +
    "SSMSXXMAXSAMXMXXAXAMMMSAMXMMMMXMXXASXMASMSMXASASASMMAMAXMMMMMMSASXSSMXSMAAMASMMSSSMMMMMMSSSSSMMSSMASAMAMAMXAAAAXMMSMMMMSAMXMMMMAXXMXMMSAMASX\n" +
    "MAAXMXMMMMSMXAAMXMMXMASAMASXASAMXXMAXSXSAXMSMMXSAMXSASMSMSAAAAMAMAXAAXMMSSMASAAAAAMSMXSAAXXAXXXXMMMMAMSMASXSSMMSXAAAXAXMAXSAASMSSSMASXMXMSAX\n" +
    "SMXMAAXSAXAXXMXXXAXSMMMAXAMMAMXSXSXMXSAMAAASAMAMAMASMSAAASMXSSMSMSMMXSAAAAMSMMSMSSMXSAMMMSMMMSAMXAMMSMXMASAMXXMAMSSSSSMSAMXSXSAAAASXMAXAXAAX\n" +
    "SAASXSXSXSMSMMASMMMASASMMSMSSSMMMSAMXMAMSAMXAMXSAMXSXXAMMMXMAMXAAASXASMMSSMXAXXAAMXMMMXAAAAAAXMASASAAXAMXSAMAMMMMAMXXXXMASAMMMMMSMMMSSMMXMSM\n" +
    "MSMSAXXMMXXAXAAMAAAAMMSMAXAAAAXMASXMASAMMSXSXMAMXSXMXXXXSAMMASXMSMSMMSAAXAASXMMMMSAMASMMXSMMMMAMSAMXSSXSASAMXMAMMAMMMMXXAMAXAXAAAAAXAMXSAAXM\n" +
    "MAXMMMXSASXMSMSMSAMXSASMXMMMSMMMMSASXSXSAXXMASXMAMAMMMMMMASMASAXAAXXMMMMSAMXMXAMASXXAXAXAXMAMXSAMMXSAMAAAXXMAMASMMMAASAMSSMMSMMMSSMSSMASMSMS\n" +
    "MSMAMAAMXMAAAAAMXSXXMASMMMAMXMASMSAMAMAMMSMSMSAMXXAMAAAAMXMMASMMMSMSSXMXSXSAMMSSXMMASXMMXMASMMXAMAMMAMMMSSSSSMMMAASMSMMMAAAAXASAMXAAXMAXXXAX\n" +
    "MAMAMMSXMXMMMMMSAMXMMXMAXXAMXAMXMMXMAMAMXAAAASAMASXSSSSSSXXMASAXXXXAAXSASMSASAAMMXAXXAXXAMAMMAMAMAMMAMXXAAAXAASMSMMXXAAMMSMAXAMXXMMMMMXMAMSM\n" +
    "SASASXAMSSSMXAAMAXXAMXSAMMXSASXSXAXMASXSMMMMMMAMMSAAAMAAMAXMXMAMXXMMMMMASAMAMMSMASMMSSMSMSAXMASXSXSMSMMAMMMMMMMAMSMMSSMSXMASMMMSSSMSAASMSMAS\n" +
    "SASASMASAAAMSMSMSSSSMAMASXMAXMAXMMXSASAMASAXAXXMXSMMMMMMMMXSSMSSXSAXXSMAMMMSMMMAXAAXAAAAAMMSMMSAXAAXMAMXMMSSSXMXMAXAAXAXASAXAMAAMAASMSMAAAAS\n" +
    "MAMXMAMMMSMMMAXMAAAXMAXAMXXMSMSMSAAMAMAMAMASXSAMAMSXXSMMXSAMAAXAASMMAXMMSMMMASXSSSSMSSSMSMAAXSMXMMMASAMXMMAAAXSXSSMSSMMSAMASAMMSSMXMXAMAMMXS\n" +
    "MXMMMSXXAAAXMAMMMMMMSMSMSMMXSAAAMMSMSSMMSSXAMSAMSSSXMMASAMXSMMMMMMMMXXAXMAMSAMXMAAMMMAAXXMMSXSASXSXAXAMAXMMXMMXAAAAXXAMMXMASAMSAMXAMXMSMXSAM\n" +
    "SAMXAXMMSSSSMSSSMASXAMAAXAMAMXMSMXXXMAXAMXMMXMAMMXMXMSAMMSMMMXAXXMASMXMSSSMMAMXMMMMMMSMMXSMMAMAMASMXSASASMSSXSXSMMXMASXAXMXSXMMMSSXSAAAAAMAS\n" +
    "SASMMMAAXAAAAAAASASXMSAXMSMMSMMMXMSXSAMMSAAXMMSMMASAXMAMAAAAMSASMSASAMXAAAMXAMXXAXXAAMASASAMAMXMAMAASAMMSAAXAXAXAXSSSMMMSMAMAMAXAAASMSMXXMAM\n" +
    "SAMASMSMMMSMMMSMMXSAMAMAAXXAMAAXAMAAMAMMSASAXAMASASASMSMSXSMXAMXMMXSXAMMSMMMSMSMSSSMSMMMMMASXMAMXMXMMXMAXMMMMMXMXAMMAAXXAMAXAMXMMAMXMXMASMMS\n" +
    "MAMSMMAAAXMAMXAMXAMAMASXSSMMSSMSSMMSMSAAMXMMMXMAMASAXAXAXAMMSSMAXSAMXMAMXXSXMASAMAAXMASASXXMMSAMAMAXASMSMXXASMMAXMSSSMMSXSMSSSXXSASAMXMAMAMX\n" +
    "SSMMASMMMMASXMAMMAMAMXMMAAAAAAAAMMXXAMMXSAMAXMASMMMXSMMAMXMAXASXSMASXMSMMMAAMAMXMSMMSASASMAMXSASMSASMSAAMXSXXMASXMAXAMXAXMXAAAAMMAXMXAMAMSMM\n" +
    "XMAMAMXAAXMAASMMMSSMSSSMSMMMMSMMXXXMAMXASASMSMAXAXAASXSXSMMMMXMMXMAMMAAAASMMMXMXMAMXXXMAMMAMAMXMXAMSAMMMSASAASMMAMMSSMMMSSMMSMXMMAMMSMSMXXAS\n" +
    "ASXMSSSMMXMSMMMAAAAMAAXAAMASXXAXXMXSSMMMSAMXXMMSMMMXSASAMAAXMMXXMASAMSMSMSAMSASXSASXXXAASMMSXSXXXSSMMMXXMAXAXMAMMMXAAAAAAAAAXAXXMAMXAXXMASXM\n" +
    "XSXAXAMXSXMMSAXMMSSMMSMSMSASASXMASAXAXMMMMMMAMXAMXMAMXMAMMMXSAXAASXSMMXMAMXMSAAASAMMMSSXSAMXXMMXAXMAXAXSMSMASMXMSSMSSMMSSSMMSXMXMASXMMSMASAM\n" +
    "XMMMMAMAMAMASMMSMMAXAXAMXMAXMAMXXMMSMMMAMXAAAXMSSSMXMASAMXAXXSXMXAAAXSAMXMSASAMXMAAMMAMMSAMXAAMMMMSMMASXAMXAMMMMAAXMAMAAAAAASAMXMASAAAMMASAM\n" +
    "MMAMSAMAXAMXSMAMAMAMMSXMXSMSXMSMAAAAXASASMMSMSAAAXSAMXMMXMASMMMSMMMMXMXXAXMAMMXXMSSMAASASMMSMSXAAMASASMMSMMMSAAMSSMMSMMMSMMASMMMMXSAMMSMAMXM\n" +
    "XSAMSXSSSXMXXMAMAMXSXSAXAXAMXMAMSMSSMMAMXMXAAXMMMMSMSAAXAMXXAAAAAXXXASMSMSMSMSMSMAAMSMMMXAMXAMMSXSAMSAXAAMAMMMMMMAAAXASXXXMAXMASXMMMSXXMSSSM\n" +
    "MSXMMAMMAMSMSMMSSMXMASAMMMXXASAMMAAXXAXMAMSMSMXXSASMSAMMASAMSMSSSMXMAXXAXXXAAXAAMXMXXXXXXMMMXMAXXMAMXMMSSSSSSMSASXMMXMMAMXMXMMAMMAAAMXAXAAXA\n" +
    "AXMAMAMXAAAXMAMAXSXMAMXXXAMSXSXSMMMSMMASAMAAXAXXMASAMASXMMMMMAXAMMMSSMXSMSXMSMSMSMXMXMMSMSASAMXMMMMMXXAAXXXAAAMXMMSSSXMXMAXASMMSSSMSMSAMMSMM\n" +
    "AAAAXAMMXSXSSSMASXSMASAAMAXMASAMXAAMMAAXMSMSMMSASMMAMAMAXAXAMMMMXSAAAMAMMSAXMAMXAAASMMMAASAMXMXMAMMMSMMSSSMMMMSMMXXMAASXMXSXMASMMXAXMXAXMMMM\n" +
    "SMSSSMMSAMAMAXMSMAXMMMMXSMSXMXSXSMSMSMSSMXAAAASASMSXMASMSXSXSXXXAMMSMMMSASMMMAMSMSASAAMMXMXMASAMSXAAAAMXAXAXMXAAMSMMSMMAXMAXSMMAAXMMMSMMSAMX\n" +
    "XMMAAAAMAMSMSMXAMXMMSMMAAAXAMSMXSAXAAXMAMSXMSMMXMAAXXAXXMXSAMMMMMSAMXSXMMMMASAXXXMASMMXSAMMSASASAXMXSSMXMSMMXSMSMAAXAAXMMSAXXSSSMMSAXAMMXASA\n" +
    "XAMSMMMSSMXAAASMMMAXAAMSSMXSMAMAMAMXMXMAMXMXXXAXMAMAMXSAAAMAMAXAAMASAMAMAMSASMSMXMMMXXMMASAMXSXMMXSAMXXAXAASAMXAXXMSASMSAMXSAAMAAAMXMMXXMASX\n" +
    "SMMMAMAAMAMXXXMXXASXMSMAAMAMSMSSMAMSMSMASXAXSMSMSAXMAXSAMXSSMSSSSSXMMMAMMMMXSAAXAXMAMMSSXMMSAMAMXAMASAMMSSMMASXXMMAMAMAXMMXMAMSXMMSSMSAMSAMX\n" +
    "SXMSAMMSXXMSMMMSXMXAAMMXXMAMAXMAAAXAAXSAMMSMMAAASXSASXXAAAMAAAXXAXAXXXAMXASAMXMSXSMMSAAAXXMMASASMMXXMASAAAASAMMAMSASAMMMSSMSSXMXMXXXAAAMMASM\n" +
    "MAASXSSXXMMAXAAAAXXMSXAMSMMSAXSMMMXMXMMMXAAASXMXMMMMMXSAMXSMMMSMMMSMSSSSSXMMSAMXXXMAMMSMMSMSMSASXSXMMAMMSMMMAMXAXSAMXMSAMXAXMASXMMMSAMXMSSMM\n" +
    "SSMXMMAMXSSMSMSSMMXXAMAMMAXAMXSAAXASMSASXSSXMMSXXAAAAXXXSASMAASAAAAMXAAXMAMASMMMSSMSSMAMXXAAAMXMASMXMASXAXMMAMSMXMSMMXMSSMMMXXMAASASXXMMSAMX\n" +
    "AXMASMAXXAAMAAAAAXXMMMXMSSMSMASMMSAMAMXXAAMXMASXSSSMXSXMMASAMAXXMASMMMMMSAMXSMSMAMAAAAASAMXMMMXMMMAASXSMSSSMMMASAAAMMSMAMAMSXSMSMMASMMAXXAMX\n" +
    "MAMXXMASMMSMSSSXMMMMSSSXAMAXMAMXMAMMAMMSMMMASMXAMXMXAMXMMMXMASXXXMAXAAAXSMSXSASMSMSMSSMSASXSMMMSMMSMSMSAMAMXXSASMSMSMAAASAMXAXAAAMAMASMMSAMX\n" +
    "XSSXSAMXAXMAXXMASXSAAAMMMSSMMMSMSAMXXMAAAASXSXMMMAAMMSAXAMAAAXMASXAXSMSMSXSXMAMXXAXAMMXXAMASAMASAAXAXAMAMAMXXMXMAMAAXSSMSASMMMSMSMMSXMAXSMMX\n" +
    "XAAAMASMSMMXMMMXXAMMXXMAXMAMXMAAMASXMMMSXMMAMXAAMAXSXSXXXMXMMMMMMMMMMMMMMASXMAMMMMMMMSAMXMAMAMXSMMSMMXSMMAMSMMAMMMSMXMAMXXMAMAMAXMASXMXMSAMX\n" +
    "MMAMMAMAAXMAMMMSSSSXSAMXXAMMAMMSMAMAXXXXXSMSMAXSXSASMMASMMSMSASASMXAMAAAMAMXSAXAAXSSMXSMAMMSXMXXAAAXMXSXSAXAAMSMMAAXAAAMMMSXMASXMASXMSXXXAMX\n" +
    "AMAXMAXXMASAXAMXAAAASAMSSSXSSSMMMSSXMXXXAMAMXMSAAXASMSMMAAAASASASAMSSSMSMXMXSXXSMMMAMAMMAXMAMXASMXXSXAMAXXXSMMAAMSSSXSMSXAXAMASASXXAXXMMSSMM\n" +
    "SASMSMSMXAMMMSXMAMMMMAMAAAAAAAAMAMAMXMMMXMXSAMMMSMASAAXXXMMMMMMMMAMMAXAXAASXMXXAASXSMAXMASMMMMMMMSMMMXSMSSMMXSSXMXAXMXAXMMSXSAMAMASMMMMAAXSA\n" +
    "ASMAMXAXSXXSAXXSAMAXSXMMSMMMSSMMXSAMAAAASMMMMSMAXMAMXMSASMXXXAAAXXMAMMMMMMSAASMMMMAXSXSMMMMAAAXAAAAASAMXAXXAXMASMMMMMMXMAMAXAMMAMXMMAAMSSMAS\n" +
    "SXMAMSSMSAAMASMMASXMMAMXMXSMXMMAMSASMSMXSAAMXAMXSMMSMMAXMASMSSSSSSXAXAXAAMMMMMXSAMXMXMSAAASMSMSMSXSAMAXMAXSMMXAAXAMAASXMSAXAMSSSSXASXMXAXAMX\n" +
    "AXMSXXAAMMMMXSASAMXXSAMASXSAAXMAXXMMXAMMMXMMXMSMMAMMMXSAMXSXMXAMAMSSSXSSSXMSAXMAMXMMMASXMMSXMASAMXXMMMSXSAXMASMSSXXMSSMAMMMMXAAAMXXMAXMXSXXM\n" +
    "MASXMSMMMXXXAMMMXMMMMASAMXMMSMSMSXSSSSMAMMSSSXSMSAMAAXMMSMMAMMXMAMAXMAXXXAASMSXMASAAAXMSSMSAMXSASMSMSAAAAMMMAXSAXXMXMMMAAAAMMMSMAMXMAMSASAMX\n" +
    "XMXAXAMASXMMMSSMAMXAXXMMSSMAMASASXAAAXMAMXAAMASASMSMSXSASASAMAMSSSXMSMSAMMMMASMXXASXMSAMXAMMMAXAMAAAMMSMMXXMSXMXMASAAXSSSMXXAAAXAMMXSXMAXXAA\n" +
    "MXSMSMSASAAXAAAMAXMSMMAAAAMAXAMAMMMMMMSASMMMMAMXMASXMAMAMAMMMMMMASXAXAMAMXMMXMAMXMMSMMXMMMMSMSSSMSMMMXMAXXAMXAMXMAXMSMAAMMMSSSSSSXXAMAMAMSSM\n" +
    "AMAMAMMMXMMMMSSSMSAMASMMSXMXSSMMMMXSXMXAMXASMMSMMMMASXMSMSMXSMAMAMMXMMMMMAMSAMAMXMASXAXXXXAXXAAAMXMSXXSXMSXAXAMMMMMXAXSMXAMXXAXAAXMASAMAAAAM\n" +
    "SSMSASMMXMAMXAXAMMMSMMAXMMSAMXAXMAASXMMSMMMSAAMAAMSXMSAAAAASAMXMXXMAMAAAMXXSAXMSXMMSMMSMMMMSMMSMMAMXMAMMXMMXSAMAAMASAMXSSMSXMXMXMMSASXSMMSSM\n" +
    "XAASASAAASXSMMXXMAMXASAMMAMAMSXMMMXMAMAMASASMMSSMMAAXASMMAMMMXAMAMXMMSSSMXASAMSXXSAMXMAXAAMSMXAASXSASXSMAXMXSASMMXAMASAAMXMXASXMXAMXXMXMAAAX\n" +
    "SMMMAMMMMSMAAAASMSSSXMAMMAMAMXMMSMSSSMASXMAXXXAMXAXXMMXMXMSMXXMMASAAXMAXAMXMXMAAAMASXSASMXXXSSSXMAXASAAXMXMAXXMASMSMAMXMSASMSAXAXSMXXSAMMXSM\n" +
    "SAXMXMMXMXMMMMXSAAAXMASXSSSMSAMMSAAAXXAMAMXMSMMSSXMMSMASAAAMAMXSASMSMMAMXMAMMSMSMSAMAMMAMMASAMXMASMAMMMMSAMSSXMAMAXMXMSXSAXSMXMSMAMAXMAMSAXX\n" +
    "MMSMMMSAMMSMXMSMMMMMMAXXAMAMSMSAMMMMMMSAMXAAAASAMASAAMASMXMXMAMMASAAAMMMXXMXAXAAAMMMXMMAAXXMASMXAXMXSAMASXSAAXSSMSMMMMMMMMMMMMAAMAMXSSMMMASA\n" +
    "MAAXAMSASAAMAMXMAXXAMXSAXSAMXMMMSSXXXAXAXSMSSSMASAMSSMXMXAXXSXXMAMXXSAAAXSSSSMSMSMAXAXSXMXXXMAMMSSXAXAMASXMAMMXMAAXAAAAMASAAAMSMSMSSMASXMMMM\n" +
    "MSSSXXXXMXMMMXASMSSSSXMMMXXSXXSXAMMMMMMMMXAAMAMAMXMAXXAASXSAAASMMSXMMMMSSMAAXMXMMXMSMMMAXSSMSSSMAXMMSMMMXMASXASMSMSSSSXMAXXSMXAAAMXAMAMXAAMX\n" +
    "MMAAXSSSMSXMXSASAAAMAAMXSXMMMMMMAXAAAASMMMMMXSMXMXMSSSMXMAXMSMMAMAMASAMXAMMMSSXMAXXXMAMXMAAAAAMMMMSAMAAXXAMXMSMAAXXMAXAMMSAMXSMSMMMXMASXSMMS\n" +
    "XMMMMAAAASMMAAMMMMMMSSMAMAAAAAXSAMSMSMMAASMSXAXXXAMMAMXAMMMXMXSXMAMXSAXXAMXMMMMMSSMXSMXAXMMMMMMSXAMASXSSSMXXMAMXMSSXMMXMAAAMXMXXAASXMSXMAAXA\n" +
    "MXSAMXSMMMAMMSXSXXXXAXMAMASXMXMMMMMAMASMMMAAXMMASASMAMSMSAAAMXMXSSSMSXXMSMXMAMXAMAMXMASMXXAMXXAMMASXMAXAASAMXMSAMAMMSMMMMSMMAMMMSMSAXMASXMMA\n" +
    "AMXXMAAAXSMMXAMAXMAMMMSSXMXMASXSXAMAMAMAAMXMXSAMAMXMAMXXMXXASAMMXAAASXMSAAMSSMMXSAMSMAAMXSSSSMSSMMSAMMMXMMMSAXSAMMSAAASXMAASAMMAMXSAMSXMAMMX\n" +
    "SSSSMMMSMMSMMMAMSAXXSMAXSAMXAAASMMXAMSSSMMMSAMXXASXMXSXMSSSXSXSSMSMMMAXSMSMXMASAMAMXXSMSAAAAXMAAXASAMSMSXXAMMMSAMAXXSXMAMXXSASMMXAMXMXMSXMXS\n" +
    "AAAMASMAXMAXAXSXSXMASMAMMMMSAMXSASMXXAAAXXXMASASASAMASAMAAXAMMMAAAAMXMMXMXMASAMASASXAMAMMSMMMMMSMMSAMAASAMMMSASXMXSMMASMMMMMAMAMSAMMMAXXAMMS\n" +
    "MMMSAMSAMSMSSXXXMAMMXMASXAAAXXXSAMASMMMMMMXSXMMSASMMASAMMMMXMASMMMMMSXMXMAXMMSAAMASMMMXMXMXMASAAAMMMMSSMAMAMMASXSXSASAAMSASMMMXMAMSASXMXAMAM\n" +
    "XXXMXMMMXAMAXMXSMXMMAMAMMMSMMMAMSMAMAXMSMSASAAAMAMAMASMMSAMXMXMAXXMASAMXSMSMMMMMMXMXXMAMXMAMAXSMMMAAAXAMXMXSMAMASAMXMMMASASXMSSSMASASAMXAMAS\n" +
    "XSAMXSAMAAMAMMASAXASASAMSAMAAXXXAMXSSMSAAMASXMMSASXMAXMAMASMMSSMMMMAXAMMMMAAAXAXXMASMXAMAMAMSMMMSXSSMSAMSMXMMAMXMAMXXXXXMAMXXAAAXMMMMAMSXSAS\n" +
    "MMAAAXAMSMMSSMAXMSXSXXAAMAMSAMXMMXXAMXMMSMXMMXXMXXAMMMMXSAMAAMAMSSMMXAMAAXSSMMSMMMXXAXSSMSASXAMAMXAMXSAMMAAMMXXXAMSMMMSMSMMMMMSMMXSAMAMAXMAS\n" +
    "ASXMSMXMMMAMAMXMXMAMAMSMMMMMSMXSXMXMASMXMASXMASMSSMMSAMXMASMMMAMMMASMMSSSMAXAAMMSASMSMAAASXSMMMASAXXAXAMXSMSMMXMAMAAAAAAAMAAAMXXXAXXXSMSMSAS\n" +
    "MMMAXMMSMMASXMMAAMXMAXAAXSAAMXAAAXMMMMMXXAMASAXXAAXASMXAMAMASMMSXMXMAAAAXMAMMMMAXAMAAMMMMMMSAMMMSXMMSSSMXXMXASMMMSSSMSMSMSSSSSSMMAMSMXAXAMAS\n" +
    "MAMAMMASASXSAAMSSMXSASMSXXMSSMSSXMAAAMXMMMMXMSSMSMMXXMMMMAXXMAAMAMXSMMMSMMXSXAMSMSMSMMXXAXAMAMSXMAMXXAMMSAMSXMASAAXMAMAAAXAAAAAXASAAAMAMMMMM\n" +
    "SAMXSMASXMAMMSMAAMXMXXMAMMAAXAAMAMMSMMAXAMMXAXXAAXXMXSAMSSMASXMMAMASAMXMAMAMMXMXAXAXASMMSSMMAMXASAMMMMSASAMAXXAMMSMMSMMMSMMMMSMSAXSMMMSMMAAX\n" +
    "SASAAMMMAMXMAMMSSMAXMXMAXMAMMMMSSMAXMSSSXSASXXMXMSSMAMMMAASAMXASXSXSXMASAMASMMSMSMMMMMXAMAMXSMMMSASXAMMASMMMSSXXSXMAAAMAMAXXAAAMMXAXSXMASXSS\n" +
    "SAMXMAXSXMXMAXAXAMSSMAMSXSASXMAXMMMSAAMAAMAXAASXXAAMXMXMSMMXSSXMASAMMSAMAXAXAAAAAXMAMXMXMASAMAAXXAMMXSMAMAAXMAXMSAMSSSMASMMSAMXMSSMMXAMMMAXM\n" +
    "MXMMXSXMASXXMMXSAMASMAMXASAXAMSXSAMXMMSMMMMMSAMAMMSAMXSAMAAXXXMXAXASXSMSSMMSMSMSMSXSXMAXSAMASXMSMSXSMSMSMSMSAMXXSAMXMAMASAMXXMASXAXSMSMAMMMS\n" +
    "SMSXAMMXAMXMSSMSAMAXSASMMMSMSMAASMMXAXXAXAXAMAMMXMAMMASAXMASMMSMMMXMAMXAXSXMAAAMXMXXAMSAMXSMMAAXAMAMXXAMXXXSAXXAMAMXSMMMXAMXXXXSMMMSAAXSAMXA\n" +
    "MAMMMMAMSSXXAAXSXMSXMXSAXAXMASMMMSSMMMMMMMMXXAMXMMMXSASAMXSXAAAASASMSMXMASMMSMSMAXAXAMXMSASMSMMMMMMSAMMMMXASXMMMSSMMXMAXMMMMSSMSAAAMXMMMAMAM\n" +
    "MAMAMMSMMAMMXSMXMMMAMMSXMAMSMSXSAMXAAAASAMMXSASXXAAXMAMXMMAMMSMSXASAASAMAMAMAAAMMMMXMMMMMAMXMAMASAAXMXMAMMMMMSXMAAAXXMAMXASXSAASMMXMMMASAMXA\n" +
    "SAMMSAMASAMSAXMSXSSSMASMSMASMMMMAMSXMSMSASAAXAMXSMSSMMMASXAXAXXMMMMXMXXXXMXMMSMMSMSAMAASMSMXSAMXSMSXXAXASAMMASAMSXMMSMAXSAMSSMMMASXSAMASAMMS\n" +
    "SMSAMXSASAMXASASAAAAMAMAAMAMAAXXMMSAMXMSAMXSMAMXXMAAXAMAXSMMMMMSAAAXXSSMSMSXMAAXAASASMMSAXAAXXMMXMMMSXSASASMAMAMXMSASMAMMAMXMXMASMAAMMASAMAA\n" +
    "XAAMSMMXSMSMAMAMMMMMXXMMMMASMMSXMASAMMMMXSAMXSMSAMXSSMMSMMXXSAAXSMSXMXAAAASMSSSMMXMMXMAMXMMMSSSMSAMXAASXSXMMMXMMMAMASMMXSMMXSXXMASXMXSASMMXS\n" +
    "MMMAMXMMSASXXMSMSXXXAMSMMSMSMASXMAMAMAAAXMASXAMAMXAAAXAXAXMASMSXMXAXSSMMMXMAXXAMXMSSXMXMASXMAXAAMAMMMXMAMXSXMASAMAMAMASMMAAAXXMMAMXXXMMMASMA\n" +
    "XMMAMAAAMAMMMMXAXSSMMMAAXAMXMAMMMMSSXSMSSMSSMMMAMMMMMMAXSXMAMXMASMMAXAMXSSXSMSSMSAAASXMSASAMSXMMSAMAMSMSMASASAMAMXMXSAMASMMXSASMSSSMSSMSAMXS\n" +
    "MAMAMXMMMAMAAAMMMXMASXMSSXMAMMMXAAAAXXXMXMAMAXSXSASASMXXMXMASASMMAXMSAMASMAMAAAAAXSMMXXMASXMMAXMMASXSXXAMASAMXSXMSXXMAMXMAAXSAMAXAAAAAMMSMXM\n" +
    "ASXSSXSASMSSMXSAMXMSMMAAAASMSMSSSSSMXMAMSMMMSMMASAMAXMAMMAXMSASMSSMXSAMXSMAMMMMSMAXXSXSMMSAMSXMSSMMMMXMMMAMXMASAAXAMSSXMMMMXMMMXMSMMMSMAXMMX\n" +
    "SXAAAXSAMAAAAMSXMMSXAMMMXMXAAAAAXAMXAMAMXASAXXMAMAMSMSAASAMXMMMAAAMASAMXSMMSXXXAMASAMXXAAMAMMSMAAASXSAMXMMSMMASMMMXMAMAMSAMXXMMSXMASXMMSMMSM\n" +
    "MMMMMMMMMMMMMMMAMSMMSMASASMSMMMMMMMSMSAXSAMXSMMMMMMXASXXMMSAAASMSSMASAMXMAMXMXMAAXMMMSSMMSXMAAMSSMXASXXAXAXAMAMAXASMSXSMSMSMSSXMASMMMMAMAASA\n" +
    "AAXAXXAXXXSASASAMAMMMMMXAAAXMASAAAMXAAMAAAMAXMASAAAMXMSXAAMMXMXXMAMASAMMSAMMMASXMASXAXAMXAAMXSMMAASMMMSAXSSMMSSMMMSXMAXAMMAAAMASMMXASMAMMMMS\n" +
    "SSSMSSMSMMSASMXAXXSAXXSMSMSMSASMSMSMMMMXMAXXXSASXSMXMAMMMMSSXMMMSXMMMAMASMSXSASAXASMSSXMMSXMAMASMMSAAXMSMAAAAMAMXMMAMAMAMSMMASXXAXSAMMSSMXAX\n" +
    "XAAXAAMAAMMMMXMXSAMXSXMAAAAMMMSAXASAMXXMXXAMXSXMAXAAMAMAAXAMMSAAXXMXSAMXSAAAMXSAMXSAAAAXXMAMASAMMASMMMAMMSMMSSSMSASXMSSXMXXMAMMSSMMXXAXAAMMX\n" +
    "MSMMSSMMMSAAAAXMAXMAMMMSMMMSAAMMMAMAXXSMSMSMAMASXMSXSASMSMMSASMSMSAASMMMMMMSMXSASXMMMSXMASAMAMMMMAXASXXSAAAAAAMASAAXAXAAMXSMSSMAMAXMASMMMSSS\n" +
    "AAXAAAAXXSMMSSSXAMSAMXAAAAXSASAMMAMSAMXAAAAMASAMAAXMAXSAAASMMSAXAMMXMAMSAMXAXMSAMMAAAAXAXSXMMSXXMASAMMAMXSSMMSMAMSMAMMSMMSAMXAMASMMASXAAAAAA\n" +
    "SSSSSSMMXMAMMMXMAMSMMMSSSMXXMMMXSXSMSXMAMSMSXMXSMMMXMASXXSMSMMMMXMAMXAXSXMSAMXMXMSSMSXMSAMXASMXMAMAMXMMMMMAMXXMXXAXXXAXSXXXMSAMAXXASMSSMMMSM"

const grid = input
    .split("\n")
    .map((line) => line.split(''))
    .filter((arr) => arr.length > 0);

const rows = grid.length
const cols = grid[0].length

const MATCH = "XMAS"
let xmasCount = 0

const incrementXmasCount = () => xmasCount++

const validateHorizontal = ({ letterIndex, lineIndex, direction }) => {
    const isRightDirection = direction === 'right' // Can be right or left

    const lastLetterIndex = isRightDirection ? letterIndex + (MATCH.length - 1) : letterIndex - (MATCH.length - 1)
    const lastLetterIndexInBound = 0 <= lastLetterIndex && lastLetterIndex < grid[lineIndex].length

    if(!lastLetterIndexInBound) {
        return {
            isOK: false,
            processedCoordinates: [],
        }
    }

    let isMatch = false;
    const processedCoordinates = [] // Coordinates of processed entries

    for(let i = 0; i < MATCH.length; i++) {
        const actualLetterIndex = isRightDirection ? letterIndex + i : letterIndex - i

        const letter = grid[lineIndex][actualLetterIndex]

        if(letter !== MATCH[i]) {
            isMatch = false;
            break
        }

        isMatch = true

        processedCoordinates.push({ lineIndex, letterIndex: actualLetterIndex, letter })
    }


    return {
        isOK: isMatch,
        processedCoordinates,
    }
}

const validateDiagonal = ({ letterIndex, lineIndex, directionVertical, directionHorizontal }) => {
    const isUpDirection = directionVertical === 'up'
    const isRightDirection = directionHorizontal === 'right'

    const lastLineIndex = isUpDirection ? lineIndex - (MATCH.length - 1) : lineIndex + (MATCH.length - 1)
    const lastLineIndexInBound = 0 <= lastLineIndex && lastLineIndex < rows

    const lastLetterIndex = isRightDirection ? letterIndex + (MATCH.length - 1) : letterIndex - (MATCH.length - 1)
    const lastLetterIndexInBound = 0 <= lastLetterIndex && lastLetterIndex < grid[lineIndex].length

    if(!lastLineIndexInBound || !lastLetterIndexInBound) {
        return {
            isOK: false,
            processedCoordinates: [],
        }
    }

    let isMatch = false
    const processedCoordinates = [] // Coordinates of processed entries

    for(let i = 0; i < MATCH.length; i++) {
        const actualLineIndex = isUpDirection ? lineIndex - i : lineIndex + i
        const actualLetterIndex = isRightDirection ? letterIndex + i : letterIndex - i

        const letter = grid[actualLineIndex][actualLetterIndex]

        if(letter !== MATCH[i]) {
            isMatch = false
            break
        }

        isMatch = true

        processedCoordinates.push({ lineIndex: actualLineIndex, letterIndex: actualLetterIndex, letter })
    }


    return {
        isOK: isMatch,
        processedCoordinates,
    }
}

const validateVertical  = ({ letterIndex, lineIndex, direction }) => {
    const isUpDirection = direction === 'up' // Can be right or left

    const lastLineIndex = isUpDirection ? lineIndex - (MATCH.length - 1) : lineIndex + (MATCH.length - 1)
    const lastLineIndexInBound = 0 <= lastLineIndex && lastLineIndex < rows

    if(!lastLineIndexInBound) {
        return {
            isOK: false,
            processedCoordinates: [],
        }
    }

    let isMatch = false
    const processedCoordinates = [] // Coordinates of processed entries

    for(let i = 0; i < MATCH.length; i++) {
        const actualLineIndex = isUpDirection ? lineIndex - i : lineIndex + i

        const letter = grid[actualLineIndex][letterIndex]

        if(letter !== MATCH[i]) {
            isMatch = false
            break
        }

        isMatch = true

        processedCoordinates.push({ lineIndex: actualLineIndex, letterIndex, letter })
    }


    return {
        isOK: isMatch,
        processedCoordinates,
    }
}

const directions = [
    'right', 'left',
    'up', 'down',
    'up-left', 'up-right',
    'down-left', 'down-right'
]

const validationManager = (type, lineIndex, letterIndex) => {
    switch(type) {
        case 'left':
            return validateHorizontal({ direction: 'left',  letterIndex, lineIndex })
        case 'right':
            return validateHorizontal({ direction: 'right',  letterIndex, lineIndex })
        case 'up':
            return validateVertical({ direction: 'up',  letterIndex, lineIndex })
        case 'down':
            return validateVertical({ direction: 'down',  letterIndex, lineIndex })
        case 'down-left':
            return validateDiagonal({ directionVertical: 'down', directionHorizontal: 'left', letterIndex, lineIndex })
        case 'down-right':
            return validateDiagonal({ directionVertical: 'down', directionHorizontal: 'right', letterIndex, lineIndex })
        case 'up-left':
            return validateDiagonal({ directionVertical: 'up', directionHorizontal: 'left', letterIndex, lineIndex })
        case 'up-right':
            return validateDiagonal({ directionVertical: 'up', directionHorizontal: 'right', letterIndex, lineIndex })
    }
}

const t0 = performance.now()
for (let row = 0; row < rows; row++) {
    for(let col = 0; col < cols; col++) {

        directions.forEach((direction) => {
            const result = validationManager(direction, row, col)

            if(result.isOK) {
                incrementXmasCount()
            }
        })
    }
}
const t1 = performance.now()


console.log(`XMAS Matches: ${xmasCount}. Found for: ${t1 - t0}ms}`)