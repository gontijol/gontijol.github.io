'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "866def920b19361ff737ad92f02493cc",
".git/config": "2e5f3c647ea9125e7a7c76d8e5e1e00d",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "3cf93047146df37b335c8318704bfab0",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "20d84349f1fd3677538a8e7d399f0ea3",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "3b2329642e07e25dab58f5493a01a916",
".git/logs/refs/heads/main": "72b6c32f2f6bec38f70f52940a6f8fb6",
".git/logs/refs/heads/teste": "35a3583600cce514a1fbb6e3133f4d70",
".git/logs/refs/remotes/origin/main": "884665d31d0dd9573c27e32b03a1577d",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/04/485978d98a7a61b849b36a60b718cc0b35c8b2": "9a749c0d2a5b95fdde3c37367140a65c",
".git/objects/04/c32286f5022fa35781b30893c3727ab58d6e6c": "3dcceb939c6690402c06de8d48a7d3e0",
".git/objects/06/37a088a01e8ddab3bf3fa98dbe804cbde1a0dc": "2fedb3e87c69aac3dea537cfcd7943b2",
".git/objects/08/6ac2b120a787f8b472593b80c92dbcefd83de8": "21c964d1a848e43daa68b1462af1437f",
".git/objects/08/c51b32269dcd6489243a69a92d3ce5b7561d9b": "81927ce5487197698f70ff50788ebc12",
".git/objects/09/720817c19c4955fa6955fba8e0589e10620cee": "1ce1fdaf5c0ea9f95e1bd533d538835a",
".git/objects/09/e09ef6347e4e0e75f10f8cdcb666f9d83af9fa": "cef2b1d99b850fe6bdf7dafc98b185a9",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/0c/146b5f070c19c9223d174a6ad9fea44068eefe": "ac16b2903a941644846562a2c4c1e590",
".git/objects/0c/81042c4f327ee2b8d250902ff760007d464130": "88855f852451fdb7364455259230e958",
".git/objects/0d/54b87531cec95b1e1a01a2ce815dc59222295f": "084f8e39dd8e2ea03f4510a007016ae2",
".git/objects/17/fb3db629929e19ded45d36f60c0be031cf6969": "2227d44750e10847243904a2dd131a63",
".git/objects/1a/7a98f21569685b7567f14d1bbb7e8d6493f907": "2b0878604b963375179a2f7b197cb97a",
".git/objects/1a/d62093ec10feefde3449d73cb616d218952df9": "b29ec1db6d95aedf3fbf5ce174cef770",
".git/objects/1d/51ace3742890bfd5bce22b107bf03235e4917c": "8aa48602ebc2074f14e1ba35902c0c64",
".git/objects/1d/e9012f472a7fa3999dbf33255c419001f807c6": "e6360ca515d6f9cbe8cf19018327c2a2",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/1f/5981e0b5e6c694e91f6873aa0eec286f295aae": "eaa57804c5cf5b0ff44e96e95eec0a6b",
".git/objects/20/202d8eb574c85154ac25a26724434de3734ad3": "1cca2c5472ed859e40dc7079f2eb2818",
".git/objects/21/4dc346178bfea82cdc6f3848a98036e0eb7561": "f6d8d31d102768a162ef086756100904",
".git/objects/2a/95263829f0979daba65c0af3961e2358e4b36f": "3b0dadfff729bc38b65ab1f8cbc5ebda",
".git/objects/2a/b2f111964433136e0c4d0a354df54171273f11": "cf897a7058ea7f255f38e03dfc5eb548",
".git/objects/2b/0ce874039ab70038239165761d98da602cdae2": "804589b82dba8cacc148ac5edf3c9a57",
".git/objects/2b/690601926acaa670732bb5c0e82558f508c859": "0e9f3e9daf6c3edacc856cb9f7803188",
".git/objects/2c/a66d4af3cf3d0f6d01c253165606e5e41bf06e": "7396d617ca7548975f67a77e2bb7daf1",
".git/objects/2e/1b23769171de4b8fc5de3ba361b7b1e2373008": "b8638a27964283f2358a44df1ac201c8",
".git/objects/31/02fbc7516d0907db7226e3fc7e8506592bdf76": "7c012e5a3348050d13fc15596dc7f5e5",
".git/objects/32/0b5e7d8b4290e5d81a4a627dd19dd0b06f1f0e": "b4eacaabab10f6cd116d3fcad1ec8067",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/39/d64f2ddb0b7516e9d5c0f61ce7f8c8e13154de": "65fbe1889d806de126c3d73e3e9c77f7",
".git/objects/3b/afaeb05d7d9e531dd2f6b796269a9b0326fcc6": "d28fe54351e57f01372907860b3ada16",
".git/objects/3d/06849d8f56940e0e54c902dd8c5ec7699d9f68": "5d694ab226c94b4821ca5d06f311f808",
".git/objects/40/4ebeeb8ddd23e577f51c60ebcef6d86a404baa": "4b71aa9c25bdad379f24ee69be8e5e87",
".git/objects/40/803477afb47b6fa51aefbe92f1fe2e8020d750": "e7e41ff07319d88a41b73ba78a50f804",
".git/objects/40/c85ce23db8a3a3204916b7990c3a433ea2c66d": "ed8e3e4d9c696f3a070fa2867947912d",
".git/objects/41/1970d59e0c6abcdd8f609c926bac2a81387f48": "a652006047ef26e3ac6c53e4522d3f2b",
".git/objects/42/897803d5913550053e6a385d2008d172c4cf04": "890e3324cc00d7538e33ef8cb1bfc8f8",
".git/objects/43/68a13431392188a330091cb8d48a8ba55e6e3d": "9e4021fdbc4095c35931a740c41b7c78",
".git/objects/44/40e4c49f37b7eb66ddf6f7493a7cf146435ac4": "cb82767877d2aeb4df69294bcb0c217b",
".git/objects/44/b61906f92f98272cfcbdec2d9de15da8aa4ed7": "95e35737bdd929a834f01c92b5ba7779",
".git/objects/49/ddbe076948372e510746e066aa33545357a6fb": "a20c71504b8576965b857b6380284ad1",
".git/objects/4a/0ef24c9c091fefe54106fe3185bba7546559ec": "bfb95de2dcd37f74a036243533c93e82",
".git/objects/4a/8c5459884d95556ea4f53d005ef0ceecc0c574": "2fc3c30b69edafed6f3516ac5bf0fbe8",
".git/objects/4a/a1e6721550eeac52f7b5553ad1a2e018395c4c": "a4b2f8681075e6fe58e104c1a099dce8",
".git/objects/4b/168723e452e7b6c690dee6cb6c3d491adddffd": "697374feefbce733547bffce325e2596",
".git/objects/4b/b5dd2aa9c10717f9ed0d92b01736d7e39c5403": "93f9ddfd5ea4bd8410d23eee47319865",
".git/objects/4c/45b8821210f1fe1d551e1a6cd0c5d9c01aaa9a": "ee2a4d0de8538011b7b6c85f25e07b82",
".git/objects/4d/784e584c6d1dbbc90e0f3e3040c95eaa6d6371": "4a53feaa16dad7c2d271cd21a4aa0cd2",
".git/objects/4d/d9f3508d53efcca784c72c49338b3ef081103e": "963ed32b240e462c474d92493f58c2dc",
".git/objects/4e/ff5d0005d32e35861d48a268959082b441d1c1": "4adb283e0ff000cb5f11f8fa936fa52d",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/53/a8ddaeee66b80ef9565188b83356fef6a3d6ca": "baf34503f7ef1c166e974033e8e19cfe",
".git/objects/53/aeb6d73e49bb89dee473fb32710c978f503027": "2f0725b5e40ec81122f9def1bbdab9a8",
".git/objects/56/3416ef54faf39d8cf16bc3ef887c4a5f4c7780": "1849d26cc40f3f23179f29387492210f",
".git/objects/56/f3e91420c963168b84f21cac207ed915fb7764": "5133db3b62e01267da344d45d7f26958",
".git/objects/5a/ac6598f07243b130c5bc4deea39fcb274f593b": "b5c9994673824b04fa0d53755c9807b8",
".git/objects/5b/1796aeaf34dfe22a43d3083a02c6a2be255420": "7804eddd86e444774a5090c8b2d8f1ad",
".git/objects/5b/35d8d533d8df02f13c4411c38522da63383d93": "96f1835973cba106ee1e6482f5300dc4",
".git/objects/5d/66ddbb893cf40d40442dd4ea6f181a7a903bff": "de16f3d357eef151d7f3c6414dc02a40",
".git/objects/5d/c3a9f99d76168a06015c913ed732218612231c": "437dfdb64a5df2201bb91a9c49ee77a3",
".git/objects/5e/1b2ec4d344dd18437bdffe7418d9b40bff3a17": "50fe96b13a64446f28ef51731e61a587",
".git/objects/60/a10552083ca83c9aa3cead76486129994fc58d": "90f6515d057e6d6314dd931919c7d9d9",
".git/objects/60/bd6abeb95db900de26737d4a297cca07a161a7": "ba0d979b552028a8de12536f7afef7c9",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/63/e77228b49cf3887dcdde92c7aaa176fafe234a": "7c8c1bd1065464e0c1f10eacf1abc027",
".git/objects/64/5912356791294a24bbc8a0b9bf5d4c60fa7836": "20fdef22dfea7c9afed418150a356b8b",
".git/objects/65/267c3a3c1fbebe8867840f8ca3a242c690b46f": "e427b3d1d4e2a3d908ee2ef7b85a2b61",
".git/objects/66/ee40e88d249bda5f94e2aa42913a74f1342505": "75640d9e852301a871ca1aef2ef9fdd7",
".git/objects/6a/102046f4f1fd13e678a261d1a7e242872be29d": "cffc83da2c97f394f70597460949b954",
".git/objects/6a/64dc77c78e7a6808aa68180b4fdee52f0d5a35": "bdddeed19125153bac55a86253b70e18",
".git/objects/6e/c393ca30c0d5a37de156652e3691a67bf496a1": "7ed7f378225d69a2e4741295e5d2f6f0",
".git/objects/73/6730380cf00698fcd333e1aa844fb538b71bc8": "39cd1d689645f904382a922d8fa5ab78",
".git/objects/75/84caada15d48b1afd8db58f4c9851249776900": "633de53e79d485e148e1d40c1b09b7b9",
".git/objects/76/49af48666da2e340c316b795a2efa6009027f7": "209eafcb2a2f7fc3320d4e30babee968",
".git/objects/79/81773e0e499319126554f3f0723f45bd787497": "0736f593ac70f911e4d8f61317f740e2",
".git/objects/7d/7ef417a9f4e2e4401543bdcc01f86baddaf05a": "b82b6f5d9bf8399163d19370b1fe2d28",
".git/objects/7e/56376987661c0fd63ff413404712b9c2265245": "8ea00ea53883197daba9a3ac64dd0ffd",
".git/objects/82/37c9ccf0f3b40e931cdaed93097ffea199091d": "b7ca9a091e7af206da70325f97f29afe",
".git/objects/85/f6e4a336f99a22b6a8aa58c9ad40775bf5e408": "a6b92116d3c18dbf9743387a204379f8",
".git/objects/88/df0dc51be44f329e53568003bfe2686262850c": "0f13254012c946764a9dccf79ca9964e",
".git/objects/89/7805dc7ea076107bc80180f7ee9372cf1016f3": "57faa68bd342c2b9205adcf9b3ad35da",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8f/3d1f387d50647eabcea5e142363e68aa82e43b": "f7a85d8746a1548cd6954dc08cd43c17",
".git/objects/94/3c48c75ff930610fb6db365f8b0279696c0464": "acb592688e0e636eef3c62de3304c675",
".git/objects/95/fe8251f46c9da1b26f5e45434ba06974b7f9c4": "a1b5bac2458bcf6b879bce507e00ea2d",
".git/objects/97/2b7579770f89bc9902e1bc4a96a93f9c478008": "51ef4fd6dcb461ec545628527bb9817c",
".git/objects/98/fc445dd929e2633a2b000860132171fa521876": "887f8519ca540929a6eed49a03fcdd20",
".git/objects/9c/7f802fa216dd338bf2111f9f8b5b09e17bdcf6": "383940f041518a7b4f04cedd694b3b29",
".git/objects/9c/e7b4fad96753ab5c8386638123c4dbeab6e692": "a55b563114ebbef14cc3a8c0ccdf2680",
".git/objects/9f/76f7592c6cf6e0c18a61dc6e660e490f526751": "ba551cb86892268a382727ea2a592667",
".git/objects/a0/d265b2c626e81042f4912dd2c3882978341999": "9ae95416dcac072ffe51f5479a323914",
".git/objects/a5/1156f74542da22545521c55cfa577216bed403": "ede645213e3b3cbf347e8f7bf0bfdfec",
".git/objects/a9/fcbb75656e16561a5b79f57b5d9320bf18fe69": "f3fb675a71ebc63cdac8ad8352f96017",
".git/objects/aa/5352dad671dbc658c393f3e3189efbd289cb70": "26b625c768b1c69daa04d59f159d39a2",
".git/objects/ad/2211be4c8fc0a3c67bd365d609954de859fd8b": "97c6b3cac917ecb7b337dbf2b36f9313",
".git/objects/b1/1f227127e8dd041f9960b32097cd714ea930d6": "139d6e1512078a6c3c0581734b1f4de5",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/b3/6f083845ea72a36ea1e437f58ee938c6282838": "2118e2df6ea9aaf930255bc32dd8e006",
".git/objects/b3/b2fbba28ddc30e00b4796300c1768019b67254": "862bbd08bb8d9e396e1d4e7e6c800f86",
".git/objects/b5/faa7494340b4b60e720119b4207c8e46654270": "b1f23cd2e2d8f8dfa90feaea72cda1e7",
".git/objects/bc/9f6ac6e40db46d5caddbef858d3ef2635f0516": "e110037a85b7dc4b7168303965d54d1c",
".git/objects/be/b67a03f8a01880127c674c2b1e3fefe1d6e9bd": "a7901f5554c2762712ca6248eff511dc",
".git/objects/be/e5249df0a3bab7ede745a676a80aab7ec2d081": "ec4732866df95d80a51d434b847da9a2",
".git/objects/bf/716d6afa303ff00580547f15906fb14ee84ebd": "ce7cf0482cf9dc796ad6de2c2ab95099",
".git/objects/c1/11f4624d607f6ffb4a30c570c4bc48781a488d": "83650c0e6517ac5678371aadd389ce03",
".git/objects/c1/7f115c9451abc3297d95fafc750fffd1e0eeba": "169f1bebd4c2e3a43a5852ed3ad5ece5",
".git/objects/c2/fe63f66da83e9ec45c78c06c19ba8dfb2c6393": "87fb856d35fafec38ebb53c8e591ae86",
".git/objects/c3/dbf9a4cfd7788a0a2cbbcedcad4e6cffba35e9": "8d81be33634bdcf5442acca404cdd827",
".git/objects/c5/cfd2db9235e1ceeb38825d0dde866d202fa3a3": "f5342edaf5d87239d3c98379284e0771",
".git/objects/c7/05943144123b59e83f44178af8314fef0eed8f": "1f8db719fa2b6ad32ca54d105237e8b7",
".git/objects/c8/ec17493bd39ff12694e6aa9f4962e0159abff7": "61ef38c4dd7760004a6db3e6b6a651e2",
".git/objects/ca/44138592eec6ba98c26c58e46b4399b927f2ec": "dd53cf5eda58a1a1af00444ff1f500e6",
".git/objects/ca/cf492babed1a2c0446309acb27087e660d3cc7": "8105947d2504ddd62e9f758d91553950",
".git/objects/cb/b045ffef951d16b149eeae4cbfc33160968747": "f7273ba8dd4a90bb0096f8448d6c6948",
".git/objects/cb/b8947d99fcfd980e98c8391ab7007fecb3f7b9": "24ec29b907a954f5ef0da88d4d0d14ee",
".git/objects/cc/a374d4e729e90f712ca5459c0506a8ba956cc7": "2b16d859f2a626947c8c56269abe25bf",
".git/objects/cd/ef70d536fc4a5ec6eb3d2f35366418ad6d5c43": "76070bd122caf4f081ca6c139d5d5d38",
".git/objects/d0/54308e0464086031b442dd5c59562e85701833": "3e05ca661f875bff1b37920aeb0a6112",
".git/objects/d1/161a00fc5c375b60ac0dd0acd62346cdc42cd0": "b5ce77e2179b6a08e60a3a5951c2a44a",
".git/objects/d3/1aafb802c299b7364a19b8812d814de0f3527d": "518961fe7c34e3ec39b5640f849cc463",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d8/f6ff888bc143e4ecfb8deb5ee3cb1c93142f82": "e15221cc793571ad7f1e2be340cb7ad5",
".git/objects/dc/bd7347aab878e0679976859f5dfbe38d92e31f": "c54b6b0e4a4233443c4afc0573ac9186",
".git/objects/dc/d59d8b3b2bd8cf044ba7e1c8edcd3165f9d85e": "3e4892743025fdbe9e5ea1baa06f906b",
".git/objects/df/76a62916afd19b8d145f486c19b001db3a1d2e": "3b123ea3fb099305a51dea86135f5e52",
".git/objects/e0/adf7b8adae91fcc64bcad5f2615c7f2562b51e": "7e1db091c6ef74433d0adcc1c328789a",
".git/objects/e1/661a1e55a6d5ebb620fba3ab773ce22bf5507c": "e99ba783e04e0de30fe4be7dcd15e380",
".git/objects/e4/7f968c4d21d99c212e6b7a92c9304d80b31067": "7c3b11ec1346e5637f4edc57d33ac98a",
".git/objects/e4/b39153828f5beecadc3c85d712331f3be43efc": "5d70770ffd8314b4c7287e2e5bdf45b2",
".git/objects/e7/6ef634d51c4c8e36b91fd4359d8fa3f8aca8e8": "4d273a60bf67a67dec3520a3d01b1568",
".git/objects/e9/148d373dd2b97adebb4a877ab218a8edda19fd": "dfaba2e197e25cdfe565667154c9e1c8",
".git/objects/ea/5ccf85c0a6fe41bf2ca8552bb5a82ae679783c": "08f6de4f3d0c90dec6801332666c41eb",
".git/objects/ec/743b2413bc5b8b91f886e444356f11b957e370": "cfd064fb991846a89432006b8034a143",
".git/objects/ef/03947747709b5ba80e5b13e9183ec41df74623": "32a058c8512505624f8ca4980193c1d8",
".git/objects/f0/21166910eee54a46e58dc8527df874ddcf9fde": "48b5d460193f0d82a1196d6309b33edc",
".git/objects/f0/9e33112211c4110917262f76c9e438f5823bc1": "f8bc3bfe1e3f32445f4b6f48919a5c70",
".git/objects/f1/46c5d05583f2f3940914b67b908926c647d6a9": "1cf2b4cf1f18e773d6261abb47f9d64a",
".git/objects/f6/2dc5ff5d35fa739382c0302c8b75e6aecbf1af": "4818e42d58709d6b1aa5b17ad8d95b01",
".git/objects/f7/b0b82f428e9f32982ec5609b184e6ca78b6fb3": "c2a9384f58c47b7c99e1d64f011aaee8",
".git/objects/f7/e448759a2c0ae6c43c788fa9fc60e9d2cc18f6": "dfc809f99d2151b8cb0fe45bc7a99946",
".git/objects/fa/ff95ce4ad160b0d8b349e0061cd891e2741793": "aa6daef2d320736a5cbb8ef5d874858c",
".git/objects/fc/3a494644d47847fc8a99c11094a66e91f52b57": "85b2caa8d244d5d7ecd581cfa968830f",
".git/objects/fe/ad1c7d96f8174b1e14d4c1974e37ce510343e3": "5dcd58a75f732acb9b0e234509801a46",
".git/refs/heads/main": "2bd23fbfd5037c2103510162acd819e5",
".git/refs/heads/teste": "2a6f64f09e297c881fa79a153cced219",
".git/refs/remotes/origin/main": "bb9eb862d363728efe01c11042eed201",
"assets/AssetManifest.bin": "60dacc8abd7bbd5cfd7ba66055ad86f9",
"assets/AssetManifest.json": "8772eeb47d37d13d36906e43d1cecf08",
"assets/assets/audio/ambient.mp3": "e9e3586d69e47565beead68b052f8661",
"assets/assets/images/arrow.png": "1f1431d6968034ee1fe07b0d1cc62a01",
"assets/assets/images/background.png": "881637677f44ef7db2bb81b0a7ba7a12",
"assets/assets/images/bar_stats.png": "c34101e9565250fee5cad254175ecacb",
"assets/assets/images/blue_button1.png": "c5ac9ffc08055cdbb731e6bfb0d2593a",
"assets/assets/images/blue_button2.png": "b2ac54312d3b566d324f461aa50b8f5b",
"assets/assets/images/bullet.png": "f35b61944969e005d6077b91e2020b9e",
"assets/assets/images/direction_attack.png": "04fa54924d587beff5005965f2caa4b8",
"assets/assets/images/enemy/atack_effect_bottom.png": "aaeb1a8e791a0f15ba911e1d2540ab32",
"assets/assets/images/enemy/atack_effect_left.png": "9c99ad913fcc75ce253f8db53faa846f",
"assets/assets/images/enemy/atack_effect_right.png": "15831f9ccee22a845e854ccb3d18f6e5",
"assets/assets/images/enemy/atack_effect_top.png": "df3eeb246450bf06de6dfc325d0bdbd0",
"assets/assets/images/enemy/goblin_idle.png": "8c97e935786b994c3cff4008212381b9",
"assets/assets/images/enemy/goblin_idle_left.png": "a7563675f85ed259b2d0aae50ded196b",
"assets/assets/images/enemy/goblin_run_left.png": "05863189b562610b17a062114c7849a9",
"assets/assets/images/enemy/goblin_run_right.png": "565c2f9a0bb01a9c56975664f8cd375c",
"assets/assets/images/furniture.png": "63948b94a5eaca29b9e523ba1d3bbaf2",
"assets/assets/images/health_ui.png": "219e39516312f2f6bc264357497b99cb",
"assets/assets/images/health_ui_dumont.png": "ea203a1e7522ed9d852b072004324308",
"assets/assets/images/hs8336.png": "1cc62972007516187089dd514597ddce",
"assets/assets/images/itens/barrel.png": "dc4d5a9e456b6f1c6ec6fdcc66af7727",
"assets/assets/images/itens/bookshelf.png": "ce2fc17cb8251da9966a3e91bb0b2272",
"assets/assets/images/itens/chest_spritesheet.png": "bcc8785d27d816e23eca114dd4e708ed",
"assets/assets/images/itens/column.png": "2ccdc666f36fef12bb99345d4c6c9d66",
"assets/assets/images/itens/flag_green.png": "1a5a7df4b10a84b0a722b3b6600198dd",
"assets/assets/images/itens/flag_red.png": "6aca7b9e01f86f1b1a45e262e65821b8",
"assets/assets/images/itens/potion_life.png": "825b71a3532854e849d512683dba06b0",
"assets/assets/images/itens/prisoner.png": "45dcdd9a419bcd1f39cfd78024865578",
"assets/assets/images/itens/spikes.png": "8ee92dd121da5fc50964a6a68e3e262c",
"assets/assets/images/itens/table.png": "5e22fb237c60943f46ba18d5e176c10c",
"assets/assets/images/itens/torch_spritesheet.png": "858f57abd642f0303de50d719532f198",
"assets/assets/images/joystick_atack.png": "0f5325cb2ddcba703e4c9d7d2dd266df",
"assets/assets/images/joystick_atack_range.png": "8994f23fc67442c8361432f0cc9a2fa1",
"assets/assets/images/joystick_background.png": "8c9aa78348b48e03f06bb97f74b819c9",
"assets/assets/images/joystick_knob.png": "bb0811554c35e7d74df6d80fb5ff5cd5",
"assets/assets/images/lpc/body/brown.png": "348cde94f6fbf7cca65441ae19bccfbd",
"assets/assets/images/lpc/body/light.png": "3d41d5018dc1a56537d3376a6451641c",
"assets/assets/images/lpc/body/orc1.png": "c69e7396b657d44f57afd9f3f54b1151",
"assets/assets/images/lpc/body/skeleton.png": "de95019a45f5939391e4a49ff88f8046",
"assets/assets/images/lpc/feet/1.png": "2ed974e03ae8ac6df7b8a90988e6c1ef",
"assets/assets/images/lpc/gloves/2.png": "41a8a35710ac3befbab29f5b0cb07ad5",
"assets/assets/images/lpc/hair/curly.png": "2457c495445802029febfdde40884920",
"assets/assets/images/lpc/hair/longknot.png": "fafd02037d781328ae6ceb81cebc4f7e",
"assets/assets/images/lpc/hair/single.png": "b9e9111f8bd9288a9b903c271a5251e9",
"assets/assets/images/lpc/hair/xlong.png": "8e7f9106bf942f17b215aa58e62f4198",
"assets/assets/images/lpc/head/1.png": "85d7057dada8a67b14e0b4ebd691d897",
"assets/assets/images/lpc/leg/1.png": "50190606e97dc98ff93156dcf95c3a4c",
"assets/assets/images/lpc/torco/arms.png": "7834f862fa0aae30488fb285dbccce70",
"assets/assets/images/lpc/torco/chest.png": "31cb64fb657680a0c20226eae7fc3539",
"assets/assets/images/multi_scenario/hero/hero_multi_biome.png": "08730d084495a7ccc2c7c283c3822d25",
"assets/assets/images/multi_scenario/tile/biome1.png": "ec2cc3e413fecc22cedad090324fb1b9",
"assets/assets/images/multi_scenario/tile/biome1_tileset.json": "6ad3ca3beda0df8ee950a1b9d506ab95",
"assets/assets/images/multi_scenario/tile/biome2.png": "491e506fbfa06177ad91771b74f86d01",
"assets/assets/images/multi_scenario/tile/biome2_tileset.json": "89a9d4fa226f4bf58486454301b09995",
"assets/assets/images/multi_scenario/tile/map_biome1.json": "b98d2d6d518dd4bdab6ca4057c7d21fe",
"assets/assets/images/multi_scenario/tile/map_biome2.json": "ee905b1ade79fa34bb2dac7072158b57",
"assets/assets/images/mx2090.png": "9aceb70a832e97e50de370e110ed7e08",
"assets/assets/images/npc/critter_idle.png": "609755d64e5a0dbcd7b6507ab816e55a",
"assets/assets/images/npc/critter_run_left.png": "145c02015fea8ed28f964ec0ca686d84",
"assets/assets/images/npc/critter_run_right.png": "fe08ed1dcc559998705239d5925a6ab1",
"assets/assets/images/npc/wizard_idle.png": "b05bbd5361ae3eac51138a70c8278efc",
"assets/assets/images/planet_life.png": "03e240dc5e3988b9884ec2595718e3b1",
"assets/assets/images/player/atack_effect_bottom.png": "e2406062be291971a034123fdd1757f9",
"assets/assets/images/player/atack_effect_left.png": "5b5475da758d76f79c34429f70f7f6af",
"assets/assets/images/player/atack_effect_right.png": "39b3d8583205c90284cd60f0e018f29d",
"assets/assets/images/player/atack_effect_top.png": "7b01845d595c3803a07567ee87710658",
"assets/assets/images/player/crypt.png": "8e55febc1e2563a9d7ba4b48625ba88d",
"assets/assets/images/player/emote_exclamacao.png": "8b1897ae92f3a077e0aadaef2626d65a",
"assets/assets/images/player/explosion_fire.png": "81a3691935a18a30572870b759ad1683",
"assets/assets/images/player/fireball_bottom.png": "05522f950d8d60e15615ee9705ff2ef0",
"assets/assets/images/player/fireball_left.png": "cb3370c9039ec112af7bee6edf3e342d",
"assets/assets/images/player/fireball_right.png": "aaa2c18fe241c16e95be131619693b80",
"assets/assets/images/player/fireball_top.png": "e9a76f3ea950d6bc22f8f4cd3a22d7e3",
"assets/assets/images/player/knight_idle.png": "191737282656dd3c8851a2dd3dfc1c0c",
"assets/assets/images/player/knight_idle_left.png": "e4ddca181210b0cf9555331aaf2af512",
"assets/assets/images/player/knight_run.png": "9cac5c91f943ba81915573bd93060d4d",
"assets/assets/images/player/knight_run_left.png": "ce9f3ad71135b459f6b66c892b5b9e30",
"assets/assets/images/player/pirate.png": "3129a70b4ba971c0b0f99c386fb4b2ab",
"assets/assets/images/rk_6761.png": "53c15304d9b9751dc4505b378e3fc8ac",
"assets/assets/images/robot.png": "b696d8a120962de4bde2ff8b7319786c",
"assets/assets/images/smoke_explosin.png": "555a8a42b72e662af232dc2092103c2a",
"assets/assets/images/soldier.png": "ce7013efe144160b1210e355a926aaf6",
"assets/assets/images/tile/floor_1.png": "00c3bd0c3d76a954f3f0a648cb13c3b3",
"assets/assets/images/tile/floor_10.png": "baf86a2272c83bd904bc25b4af03aa29",
"assets/assets/images/tile/floor_2.png": "10968e74b671f14aab19e13a76da334d",
"assets/assets/images/tile/floor_3.png": "3fa52d5af2a38dede0142f5c3dcaab55",
"assets/assets/images/tile/floor_4.png": "2685b25c2471a762ff6f900b496c9e29",
"assets/assets/images/tile/floor_5.png": "6d63b1d77dcc35d4f7beb91125851e29",
"assets/assets/images/tile/floor_6.png": "d464c18724611d109498d4c4e57316c4",
"assets/assets/images/tile/floor_7.png": "7ba4503a62a1b242f05b5244e7b0dae4",
"assets/assets/images/tile/floor_8.png": "28692ad0c494efc5bc0f9669579006fe",
"assets/assets/images/tile/floor_9.png": "2b4e26d91d8f632bf4eaa5400cb7d748",
"assets/assets/images/tile/wall.png": "7a6ce85ad0ebd6694dd57e9fdca7535b",
"assets/assets/images/tile/wall_bottom.png": "31d2b04aca916c16bd31574d7134a853",
"assets/assets/images/tile/wall_bottom_left.png": "7e83621a422ddd0e7b4425abe8ac3ec8",
"assets/assets/images/tile/wall_bottom_right.png": "dd6772364441f0f2ea76c532fb4031dc",
"assets/assets/images/tile/wall_left.png": "b4ee6ba9d296a18fa532119ef8cb6157",
"assets/assets/images/tile/wall_left_and_bottom.png": "6583c02205abb0c84aef143379eb9bed",
"assets/assets/images/tile/wall_left_and_top.png": "5e7c81163a737dad7ed4a626d76a0b73",
"assets/assets/images/tile/wall_right.png": "aca869be30facbfd420754e870a78f58",
"assets/assets/images/tile/wall_right_and_bottom.png": "533d830adf7d86b810481118ed7aa2f9",
"assets/assets/images/tile/wall_top.png": "845ed35ef1482e21857c8bd70061c810",
"assets/assets/images/tile/wall_top_inner_left.png": "484e3c33e8559ff61f560e5f32791c5a",
"assets/assets/images/tile/wall_top_inner_right.png": "b26bd1cad50d0201d41ab18200976cfc",
"assets/assets/images/tile/wall_turn_left_top.png": "c9d8c9116dd5570fb87b6e1328cb0ee3",
"assets/assets/images/tiled/bigMap.json": "3fa9268a37d7c31c48d602bb00f42393",
"assets/assets/images/tiled/image_bg.jpeg": "baac8674ee1595c79ac2ad933bf296d5",
"assets/assets/images/tiled/mapa1.json": "fa913810ac143114678101bc26d37675",
"assets/assets/images/tiled/mapa2.json": "2a66279464e5063a5e83fc3b20617612",
"assets/assets/images/tiled/map_tiled1.8.tmj": "7e03fc396f9add52d10cb75e86f0319c",
"assets/assets/images/tiled/tileset/0x72_DungeonTilesetII_v1.3.png": "99ee27544da829bed54efd1f22e5a588",
"assets/assets/images/tiled/tileset/0x72_DungeonTilesetII_v1.json": "4ff2b5a15607fe7bd92f708093d0021e",
"assets/assets/images/tiled/tileset/tileset1.8.tsj": "57a43cb70d463bbcab6c64b56d146ce8",
"assets/assets/images/tiled/top_down/map.json": "73957553a68d3d24620660a435a39c5a",
"assets/assets/images/tiled/top_down/tilesheet.json": "03d43534a53b04a4a761aaffc7a3ff71",
"assets/assets/images/tiled/top_down/tilesheet.png": "bbd9628ccc0e7734c82ca71591f15c7e",
"assets/assets/images/tile_random/earth_to_grass.png": "7504d7c5abb15cc963686ffce67b2be1",
"assets/assets/images/tile_random/earth_to_water.png": "457993098c6762efe45dd296b3255dc6",
"assets/assets/images/tile_random/tile_types.png": "3f54b0b25f73b3270ddcd943480fdd3a",
"assets/assets/images/tile_random/tree.png": "373b98c4cf13e3eba31aeb556e10d8d9",
"assets/assets/images/tw3337.png": "d3afeee43abfa7d617b66f17f91743ec",
"assets/assets/images/yq0000.png": "41b58ff6484e86cd948fbbe3273b482e",
"assets/assets/images/zombie.png": "41ebd5de73051a779ea2aa8be90b95af",
"assets/FontManifest.json": "d751713988987e9331980363e24189ce",
"assets/NOTICES": "bb7758b16c219acb60029b59d1c3a328",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"gontijol.github.io/.git/COMMIT_EDITMSG": "866def920b19361ff737ad92f02493cc",
"gontijol.github.io/.git/config": "2e5f3c647ea9125e7a7c76d8e5e1e00d",
"gontijol.github.io/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"gontijol.github.io/.git/FETCH_HEAD": "3cf93047146df37b335c8318704bfab0",
"gontijol.github.io/.git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
"gontijol.github.io/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"gontijol.github.io/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"gontijol.github.io/.git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
"gontijol.github.io/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"gontijol.github.io/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"gontijol.github.io/.git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
"gontijol.github.io/.git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
"gontijol.github.io/.git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
"gontijol.github.io/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"gontijol.github.io/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"gontijol.github.io/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"gontijol.github.io/.git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
"gontijol.github.io/.git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
"gontijol.github.io/.git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
"gontijol.github.io/.git/index": "3b8527066c72cff969f0deb41fc836f5",
"gontijol.github.io/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"gontijol.github.io/.git/logs/HEAD": "ac52041e2c697e1b8f9644a8920e06b1",
"gontijol.github.io/.git/logs/refs/heads/main": "086982e28a01c839882174b0dc18acaf",
"gontijol.github.io/.git/logs/refs/remotes/origin/main": "fffaf0577f25c6f5560ba9cb91b0450b",
"gontijol.github.io/.git/objects/00/0455d1060377468e8243fa8f066bbdfc0dc4c2": "c53ef5f9eabe643abfdef440e7733cec",
"gontijol.github.io/.git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
"gontijol.github.io/.git/objects/04/485978d98a7a61b849b36a60b718cc0b35c8b2": "9a749c0d2a5b95fdde3c37367140a65c",
"gontijol.github.io/.git/objects/04/c32286f5022fa35781b30893c3727ab58d6e6c": "3dcceb939c6690402c06de8d48a7d3e0",
"gontijol.github.io/.git/objects/06/37a088a01e8ddab3bf3fa98dbe804cbde1a0dc": "2fedb3e87c69aac3dea537cfcd7943b2",
"gontijol.github.io/.git/objects/08/6ac2b120a787f8b472593b80c92dbcefd83de8": "21c964d1a848e43daa68b1462af1437f",
"gontijol.github.io/.git/objects/08/c51b32269dcd6489243a69a92d3ce5b7561d9b": "81927ce5487197698f70ff50788ebc12",
"gontijol.github.io/.git/objects/09/720817c19c4955fa6955fba8e0589e10620cee": "1ce1fdaf5c0ea9f95e1bd533d538835a",
"gontijol.github.io/.git/objects/09/e09ef6347e4e0e75f10f8cdcb666f9d83af9fa": "cef2b1d99b850fe6bdf7dafc98b185a9",
"gontijol.github.io/.git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
"gontijol.github.io/.git/objects/0c/146b5f070c19c9223d174a6ad9fea44068eefe": "ac16b2903a941644846562a2c4c1e590",
"gontijol.github.io/.git/objects/0c/81042c4f327ee2b8d250902ff760007d464130": "88855f852451fdb7364455259230e958",
"gontijol.github.io/.git/objects/0d/54b87531cec95b1e1a01a2ce815dc59222295f": "084f8e39dd8e2ea03f4510a007016ae2",
"gontijol.github.io/.git/objects/0f/2bd69a64ec88aab4086aa086edb5742c7cba57": "3488e7f77c102b2d51f2b3116fec2805",
"gontijol.github.io/.git/objects/12/b1874ec69667065aac4e5c9fc3b5ce1a95375e": "8e9a20323ee1465491d8698510504023",
"gontijol.github.io/.git/objects/17/fb3db629929e19ded45d36f60c0be031cf6969": "2227d44750e10847243904a2dd131a63",
"gontijol.github.io/.git/objects/19/c9588ec0048c72bbc0b2243976f11b93c51c60": "d16c1db3eef90028592ea70ef1f7f01d",
"gontijol.github.io/.git/objects/1a/7a98f21569685b7567f14d1bbb7e8d6493f907": "2b0878604b963375179a2f7b197cb97a",
"gontijol.github.io/.git/objects/1a/d62093ec10feefde3449d73cb616d218952df9": "b29ec1db6d95aedf3fbf5ce174cef770",
"gontijol.github.io/.git/objects/1d/51ace3742890bfd5bce22b107bf03235e4917c": "8aa48602ebc2074f14e1ba35902c0c64",
"gontijol.github.io/.git/objects/1d/e9012f472a7fa3999dbf33255c419001f807c6": "e6360ca515d6f9cbe8cf19018327c2a2",
"gontijol.github.io/.git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
"gontijol.github.io/.git/objects/1f/5981e0b5e6c694e91f6873aa0eec286f295aae": "eaa57804c5cf5b0ff44e96e95eec0a6b",
"gontijol.github.io/.git/objects/1f/686edd1465272558af328ca43cb7189a0059e6": "5e83820f6d3e5392693d45bc239b2b61",
"gontijol.github.io/.git/objects/20/202d8eb574c85154ac25a26724434de3734ad3": "1cca2c5472ed859e40dc7079f2eb2818",
"gontijol.github.io/.git/objects/21/4dc346178bfea82cdc6f3848a98036e0eb7561": "f6d8d31d102768a162ef086756100904",
"gontijol.github.io/.git/objects/23/b2d04acbed1bc01a9fa8443193c2d0c1e387cc": "420438563756f45f4fa7bc0b6e1c65e3",
"gontijol.github.io/.git/objects/2a/95263829f0979daba65c0af3961e2358e4b36f": "3b0dadfff729bc38b65ab1f8cbc5ebda",
"gontijol.github.io/.git/objects/2a/b2f111964433136e0c4d0a354df54171273f11": "cf897a7058ea7f255f38e03dfc5eb548",
"gontijol.github.io/.git/objects/2b/0ce874039ab70038239165761d98da602cdae2": "804589b82dba8cacc148ac5edf3c9a57",
"gontijol.github.io/.git/objects/2b/690601926acaa670732bb5c0e82558f508c859": "0e9f3e9daf6c3edacc856cb9f7803188",
"gontijol.github.io/.git/objects/2c/a66d4af3cf3d0f6d01c253165606e5e41bf06e": "7396d617ca7548975f67a77e2bb7daf1",
"gontijol.github.io/.git/objects/2e/1b23769171de4b8fc5de3ba361b7b1e2373008": "b8638a27964283f2358a44df1ac201c8",
"gontijol.github.io/.git/objects/31/02fbc7516d0907db7226e3fc7e8506592bdf76": "7c012e5a3348050d13fc15596dc7f5e5",
"gontijol.github.io/.git/objects/32/0b5e7d8b4290e5d81a4a627dd19dd0b06f1f0e": "b4eacaabab10f6cd116d3fcad1ec8067",
"gontijol.github.io/.git/objects/33/cec9c2f445fc85987553fa11dfd29769d5030c": "02fe9938802fa7447e190244a12a12c2",
"gontijol.github.io/.git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
"gontijol.github.io/.git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
"gontijol.github.io/.git/objects/39/d64f2ddb0b7516e9d5c0f61ce7f8c8e13154de": "65fbe1889d806de126c3d73e3e9c77f7",
"gontijol.github.io/.git/objects/3b/afaeb05d7d9e531dd2f6b796269a9b0326fcc6": "d28fe54351e57f01372907860b3ada16",
"gontijol.github.io/.git/objects/3d/06849d8f56940e0e54c902dd8c5ec7699d9f68": "5d694ab226c94b4821ca5d06f311f808",
"gontijol.github.io/.git/objects/40/4ebeeb8ddd23e577f51c60ebcef6d86a404baa": "4b71aa9c25bdad379f24ee69be8e5e87",
"gontijol.github.io/.git/objects/40/803477afb47b6fa51aefbe92f1fe2e8020d750": "e7e41ff07319d88a41b73ba78a50f804",
"gontijol.github.io/.git/objects/40/c85ce23db8a3a3204916b7990c3a433ea2c66d": "ed8e3e4d9c696f3a070fa2867947912d",
"gontijol.github.io/.git/objects/41/1970d59e0c6abcdd8f609c926bac2a81387f48": "a652006047ef26e3ac6c53e4522d3f2b",
"gontijol.github.io/.git/objects/41/679c6f8aa5dd2f6d379ccedd1a31790b9e4494": "054ec7b2f3af246ef0b529066a821027",
"gontijol.github.io/.git/objects/42/167af65de9d853edf8989d52c24cd8ad18b65e": "82c85639eec91785cdc88b3dc64cdaa3",
"gontijol.github.io/.git/objects/42/897803d5913550053e6a385d2008d172c4cf04": "890e3324cc00d7538e33ef8cb1bfc8f8",
"gontijol.github.io/.git/objects/43/68a13431392188a330091cb8d48a8ba55e6e3d": "9e4021fdbc4095c35931a740c41b7c78",
"gontijol.github.io/.git/objects/44/40e4c49f37b7eb66ddf6f7493a7cf146435ac4": "cb82767877d2aeb4df69294bcb0c217b",
"gontijol.github.io/.git/objects/44/b61906f92f98272cfcbdec2d9de15da8aa4ed7": "95e35737bdd929a834f01c92b5ba7779",
"gontijol.github.io/.git/objects/49/ddbe076948372e510746e066aa33545357a6fb": "a20c71504b8576965b857b6380284ad1",
"gontijol.github.io/.git/objects/4a/0ef24c9c091fefe54106fe3185bba7546559ec": "bfb95de2dcd37f74a036243533c93e82",
"gontijol.github.io/.git/objects/4a/8c5459884d95556ea4f53d005ef0ceecc0c574": "2fc3c30b69edafed6f3516ac5bf0fbe8",
"gontijol.github.io/.git/objects/4a/a1e6721550eeac52f7b5553ad1a2e018395c4c": "a4b2f8681075e6fe58e104c1a099dce8",
"gontijol.github.io/.git/objects/4b/168723e452e7b6c690dee6cb6c3d491adddffd": "697374feefbce733547bffce325e2596",
"gontijol.github.io/.git/objects/4b/b5dd2aa9c10717f9ed0d92b01736d7e39c5403": "93f9ddfd5ea4bd8410d23eee47319865",
"gontijol.github.io/.git/objects/4c/45b8821210f1fe1d551e1a6cd0c5d9c01aaa9a": "ee2a4d0de8538011b7b6c85f25e07b82",
"gontijol.github.io/.git/objects/4d/784e584c6d1dbbc90e0f3e3040c95eaa6d6371": "4a53feaa16dad7c2d271cd21a4aa0cd2",
"gontijol.github.io/.git/objects/4d/d9f3508d53efcca784c72c49338b3ef081103e": "963ed32b240e462c474d92493f58c2dc",
"gontijol.github.io/.git/objects/4e/ff5d0005d32e35861d48a268959082b441d1c1": "4adb283e0ff000cb5f11f8fa936fa52d",
"gontijol.github.io/.git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
"gontijol.github.io/.git/objects/53/a8ddaeee66b80ef9565188b83356fef6a3d6ca": "baf34503f7ef1c166e974033e8e19cfe",
"gontijol.github.io/.git/objects/53/aeb6d73e49bb89dee473fb32710c978f503027": "2f0725b5e40ec81122f9def1bbdab9a8",
"gontijol.github.io/.git/objects/56/3416ef54faf39d8cf16bc3ef887c4a5f4c7780": "1849d26cc40f3f23179f29387492210f",
"gontijol.github.io/.git/objects/56/f3e91420c963168b84f21cac207ed915fb7764": "5133db3b62e01267da344d45d7f26958",
"gontijol.github.io/.git/objects/58/2aed4b1703ccb588cd87b3db68fa85251b9f12": "e8268d1ce32a87ee7558fa232a6e64a0",
"gontijol.github.io/.git/objects/5a/ac6598f07243b130c5bc4deea39fcb274f593b": "b5c9994673824b04fa0d53755c9807b8",
"gontijol.github.io/.git/objects/5a/ce6e806e9432876aa7486af840384312452ed1": "296ec5fdd7c2ee9b6be0d098160a149f",
"gontijol.github.io/.git/objects/5b/1796aeaf34dfe22a43d3083a02c6a2be255420": "7804eddd86e444774a5090c8b2d8f1ad",
"gontijol.github.io/.git/objects/5b/35d8d533d8df02f13c4411c38522da63383d93": "96f1835973cba106ee1e6482f5300dc4",
"gontijol.github.io/.git/objects/5c/95e5f6ba0c5bd705e3f5f54dc24b3156d6367e": "f28b378e6f96e87ac0217dc2a1efa7d8",
"gontijol.github.io/.git/objects/5d/66ddbb893cf40d40442dd4ea6f181a7a903bff": "de16f3d357eef151d7f3c6414dc02a40",
"gontijol.github.io/.git/objects/5d/c3a9f99d76168a06015c913ed732218612231c": "437dfdb64a5df2201bb91a9c49ee77a3",
"gontijol.github.io/.git/objects/5e/1b2ec4d344dd18437bdffe7418d9b40bff3a17": "50fe96b13a64446f28ef51731e61a587",
"gontijol.github.io/.git/objects/60/a10552083ca83c9aa3cead76486129994fc58d": "90f6515d057e6d6314dd931919c7d9d9",
"gontijol.github.io/.git/objects/60/bd6abeb95db900de26737d4a297cca07a161a7": "ba0d979b552028a8de12536f7afef7c9",
"gontijol.github.io/.git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
"gontijol.github.io/.git/objects/63/e77228b49cf3887dcdde92c7aaa176fafe234a": "7c8c1bd1065464e0c1f10eacf1abc027",
"gontijol.github.io/.git/objects/64/5912356791294a24bbc8a0b9bf5d4c60fa7836": "20fdef22dfea7c9afed418150a356b8b",
"gontijol.github.io/.git/objects/65/267c3a3c1fbebe8867840f8ca3a242c690b46f": "e427b3d1d4e2a3d908ee2ef7b85a2b61",
"gontijol.github.io/.git/objects/66/ee40e88d249bda5f94e2aa42913a74f1342505": "75640d9e852301a871ca1aef2ef9fdd7",
"gontijol.github.io/.git/objects/6a/102046f4f1fd13e678a261d1a7e242872be29d": "cffc83da2c97f394f70597460949b954",
"gontijol.github.io/.git/objects/6a/64dc77c78e7a6808aa68180b4fdee52f0d5a35": "bdddeed19125153bac55a86253b70e18",
"gontijol.github.io/.git/objects/6a/782467c96021386c1d45cb04f4d05d3c9403b8": "d9d38afdfa7647740191c24e421abeaa",
"gontijol.github.io/.git/objects/6e/c393ca30c0d5a37de156652e3691a67bf496a1": "7ed7f378225d69a2e4741295e5d2f6f0",
"gontijol.github.io/.git/objects/70/010cc4761157d9d7cc2d082cf342e63fe1190a": "baf21d1dacab382149ee93266543ff40",
"gontijol.github.io/.git/objects/73/6730380cf00698fcd333e1aa844fb538b71bc8": "39cd1d689645f904382a922d8fa5ab78",
"gontijol.github.io/.git/objects/75/84caada15d48b1afd8db58f4c9851249776900": "633de53e79d485e148e1d40c1b09b7b9",
"gontijol.github.io/.git/objects/76/49af48666da2e340c316b795a2efa6009027f7": "209eafcb2a2f7fc3320d4e30babee968",
"gontijol.github.io/.git/objects/79/81773e0e499319126554f3f0723f45bd787497": "0736f593ac70f911e4d8f61317f740e2",
"gontijol.github.io/.git/objects/7e/56376987661c0fd63ff413404712b9c2265245": "8ea00ea53883197daba9a3ac64dd0ffd",
"gontijol.github.io/.git/objects/81/75fcd0ee4be8cb88ea18018e2435e062359c83": "4d3ca460bcc81ff189c1c045a048dd4d",
"gontijol.github.io/.git/objects/82/37c9ccf0f3b40e931cdaed93097ffea199091d": "b7ca9a091e7af206da70325f97f29afe",
"gontijol.github.io/.git/objects/85/f6e4a336f99a22b6a8aa58c9ad40775bf5e408": "a6b92116d3c18dbf9743387a204379f8",
"gontijol.github.io/.git/objects/88/b0091d435ac3ca44c4e22fc5096d2c3b405f33": "90f5147a9314ee5817fc5610abe3f689",
"gontijol.github.io/.git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
"gontijol.github.io/.git/objects/88/df0dc51be44f329e53568003bfe2686262850c": "0f13254012c946764a9dccf79ca9964e",
"gontijol.github.io/.git/objects/89/7805dc7ea076107bc80180f7ee9372cf1016f3": "57faa68bd342c2b9205adcf9b3ad35da",
"gontijol.github.io/.git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
"gontijol.github.io/.git/objects/8f/3d1f387d50647eabcea5e142363e68aa82e43b": "f7a85d8746a1548cd6954dc08cd43c17",
"gontijol.github.io/.git/objects/91/c08d4eb8c0bba8c661fdf39e1806dcf411ec12": "7daa0f871f470a16edeeed180fe8cef4",
"gontijol.github.io/.git/objects/94/3c48c75ff930610fb6db365f8b0279696c0464": "acb592688e0e636eef3c62de3304c675",
"gontijol.github.io/.git/objects/97/2b7579770f89bc9902e1bc4a96a93f9c478008": "51ef4fd6dcb461ec545628527bb9817c",
"gontijol.github.io/.git/objects/98/fc445dd929e2633a2b000860132171fa521876": "887f8519ca540929a6eed49a03fcdd20",
"gontijol.github.io/.git/objects/9c/7f802fa216dd338bf2111f9f8b5b09e17bdcf6": "383940f041518a7b4f04cedd694b3b29",
"gontijol.github.io/.git/objects/9c/e7b4fad96753ab5c8386638123c4dbeab6e692": "a55b563114ebbef14cc3a8c0ccdf2680",
"gontijol.github.io/.git/objects/9f/76f7592c6cf6e0c18a61dc6e660e490f526751": "ba551cb86892268a382727ea2a592667",
"gontijol.github.io/.git/objects/9f/dc0541bc502982f6d8dd3e4d1e7e135357562e": "a9ae08089962c032e32fd4437caa2325",
"gontijol.github.io/.git/objects/a0/d265b2c626e81042f4912dd2c3882978341999": "9ae95416dcac072ffe51f5479a323914",
"gontijol.github.io/.git/objects/a5/1156f74542da22545521c55cfa577216bed403": "ede645213e3b3cbf347e8f7bf0bfdfec",
"gontijol.github.io/.git/objects/a5/d0b0ebf71a1089693ef7f3ce19bf31e4535315": "57d84bfea0e2973ce02c1115f79d613d",
"gontijol.github.io/.git/objects/a6/8bf4f065dde110e744e145a7611680c6d37ad2": "dd72e154bf8023dcaefa3e3f0690e1f8",
"gontijol.github.io/.git/objects/a7/5e84820e66a2a4af88096a0cc9dd1fc8ae12e6": "06416b99a12f05b8afc2f9f19fff27bc",
"gontijol.github.io/.git/objects/a9/80669c33496183f923e0cb07385b6a8a0a348c": "3e78d18b9481118493ae2b264722db0a",
"gontijol.github.io/.git/objects/a9/fcbb75656e16561a5b79f57b5d9320bf18fe69": "f3fb675a71ebc63cdac8ad8352f96017",
"gontijol.github.io/.git/objects/aa/5352dad671dbc658c393f3e3189efbd289cb70": "26b625c768b1c69daa04d59f159d39a2",
"gontijol.github.io/.git/objects/ad/2211be4c8fc0a3c67bd365d609954de859fd8b": "97c6b3cac917ecb7b337dbf2b36f9313",
"gontijol.github.io/.git/objects/b1/1f227127e8dd041f9960b32097cd714ea930d6": "139d6e1512078a6c3c0581734b1f4de5",
"gontijol.github.io/.git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
"gontijol.github.io/.git/objects/b3/6f083845ea72a36ea1e437f58ee938c6282838": "2118e2df6ea9aaf930255bc32dd8e006",
"gontijol.github.io/.git/objects/b3/b2fbba28ddc30e00b4796300c1768019b67254": "862bbd08bb8d9e396e1d4e7e6c800f86",
"gontijol.github.io/.git/objects/b5/faa7494340b4b60e720119b4207c8e46654270": "b1f23cd2e2d8f8dfa90feaea72cda1e7",
"gontijol.github.io/.git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
"gontijol.github.io/.git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
"gontijol.github.io/.git/objects/b9/ea05b2b797b144d64c3936c13564a5471aa1ae": "35755cf18c8971c171789e22f0ff0300",
"gontijol.github.io/.git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
"gontijol.github.io/.git/objects/bc/9f6ac6e40db46d5caddbef858d3ef2635f0516": "e110037a85b7dc4b7168303965d54d1c",
"gontijol.github.io/.git/objects/be/b67a03f8a01880127c674c2b1e3fefe1d6e9bd": "a7901f5554c2762712ca6248eff511dc",
"gontijol.github.io/.git/objects/be/e5249df0a3bab7ede745a676a80aab7ec2d081": "ec4732866df95d80a51d434b847da9a2",
"gontijol.github.io/.git/objects/bf/716d6afa303ff00580547f15906fb14ee84ebd": "ce7cf0482cf9dc796ad6de2c2ab95099",
"gontijol.github.io/.git/objects/c1/11f4624d607f6ffb4a30c570c4bc48781a488d": "83650c0e6517ac5678371aadd389ce03",
"gontijol.github.io/.git/objects/c1/7f115c9451abc3297d95fafc750fffd1e0eeba": "169f1bebd4c2e3a43a5852ed3ad5ece5",
"gontijol.github.io/.git/objects/c1/f664573081b557f6040f0ec418bd581b418819": "de3e84fc5c365d98eeebe4817329c6c9",
"gontijol.github.io/.git/objects/c2/fe63f66da83e9ec45c78c06c19ba8dfb2c6393": "87fb856d35fafec38ebb53c8e591ae86",
"gontijol.github.io/.git/objects/c3/a729098d6f3282a2fbf782876dba7220120cd6": "4804ce7bd1bd658bde2976d2f293ce6e",
"gontijol.github.io/.git/objects/c3/dbf9a4cfd7788a0a2cbbcedcad4e6cffba35e9": "8d81be33634bdcf5442acca404cdd827",
"gontijol.github.io/.git/objects/c5/cfd2db9235e1ceeb38825d0dde866d202fa3a3": "f5342edaf5d87239d3c98379284e0771",
"gontijol.github.io/.git/objects/c7/05943144123b59e83f44178af8314fef0eed8f": "1f8db719fa2b6ad32ca54d105237e8b7",
"gontijol.github.io/.git/objects/c8/ec17493bd39ff12694e6aa9f4962e0159abff7": "61ef38c4dd7760004a6db3e6b6a651e2",
"gontijol.github.io/.git/objects/ca/44138592eec6ba98c26c58e46b4399b927f2ec": "dd53cf5eda58a1a1af00444ff1f500e6",
"gontijol.github.io/.git/objects/ca/cf492babed1a2c0446309acb27087e660d3cc7": "8105947d2504ddd62e9f758d91553950",
"gontijol.github.io/.git/objects/cb/b045ffef951d16b149eeae4cbfc33160968747": "f7273ba8dd4a90bb0096f8448d6c6948",
"gontijol.github.io/.git/objects/cb/b8947d99fcfd980e98c8391ab7007fecb3f7b9": "24ec29b907a954f5ef0da88d4d0d14ee",
"gontijol.github.io/.git/objects/cc/a374d4e729e90f712ca5459c0506a8ba956cc7": "2b16d859f2a626947c8c56269abe25bf",
"gontijol.github.io/.git/objects/cd/ef70d536fc4a5ec6eb3d2f35366418ad6d5c43": "76070bd122caf4f081ca6c139d5d5d38",
"gontijol.github.io/.git/objects/d0/54308e0464086031b442dd5c59562e85701833": "3e05ca661f875bff1b37920aeb0a6112",
"gontijol.github.io/.git/objects/d1/161a00fc5c375b60ac0dd0acd62346cdc42cd0": "b5ce77e2179b6a08e60a3a5951c2a44a",
"gontijol.github.io/.git/objects/d1/54f25e93885c84bcfaa38b3fe71e745cadc900": "2039a5b200a9c0a255bc6da37312526b",
"gontijol.github.io/.git/objects/d3/1aafb802c299b7364a19b8812d814de0f3527d": "518961fe7c34e3ec39b5640f849cc463",
"gontijol.github.io/.git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
"gontijol.github.io/.git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
"gontijol.github.io/.git/objects/d8/f6ff888bc143e4ecfb8deb5ee3cb1c93142f82": "e15221cc793571ad7f1e2be340cb7ad5",
"gontijol.github.io/.git/objects/dc/bd7347aab878e0679976859f5dfbe38d92e31f": "c54b6b0e4a4233443c4afc0573ac9186",
"gontijol.github.io/.git/objects/dc/d59d8b3b2bd8cf044ba7e1c8edcd3165f9d85e": "3e4892743025fdbe9e5ea1baa06f906b",
"gontijol.github.io/.git/objects/df/76a62916afd19b8d145f486c19b001db3a1d2e": "3b123ea3fb099305a51dea86135f5e52",
"gontijol.github.io/.git/objects/e0/adf7b8adae91fcc64bcad5f2615c7f2562b51e": "7e1db091c6ef74433d0adcc1c328789a",
"gontijol.github.io/.git/objects/e1/661a1e55a6d5ebb620fba3ab773ce22bf5507c": "e99ba783e04e0de30fe4be7dcd15e380",
"gontijol.github.io/.git/objects/e4/04d7922505dc43a661617cc6b2ce5771a589eb": "551c18e58398f81c0d83f8891a9b83ff",
"gontijol.github.io/.git/objects/e4/7f968c4d21d99c212e6b7a92c9304d80b31067": "7c3b11ec1346e5637f4edc57d33ac98a",
"gontijol.github.io/.git/objects/e4/b39153828f5beecadc3c85d712331f3be43efc": "5d70770ffd8314b4c7287e2e5bdf45b2",
"gontijol.github.io/.git/objects/e7/6ef634d51c4c8e36b91fd4359d8fa3f8aca8e8": "4d273a60bf67a67dec3520a3d01b1568",
"gontijol.github.io/.git/objects/e8/6fb837c76e086065fcea96c803244d2dead791": "444eb69af3f538f30d109c87877e4bac",
"gontijol.github.io/.git/objects/e9/148d373dd2b97adebb4a877ab218a8edda19fd": "dfaba2e197e25cdfe565667154c9e1c8",
"gontijol.github.io/.git/objects/ea/5ccf85c0a6fe41bf2ca8552bb5a82ae679783c": "08f6de4f3d0c90dec6801332666c41eb",
"gontijol.github.io/.git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
"gontijol.github.io/.git/objects/ec/743b2413bc5b8b91f886e444356f11b957e370": "cfd064fb991846a89432006b8034a143",
"gontijol.github.io/.git/objects/ef/03947747709b5ba80e5b13e9183ec41df74623": "32a058c8512505624f8ca4980193c1d8",
"gontijol.github.io/.git/objects/f0/21166910eee54a46e58dc8527df874ddcf9fde": "48b5d460193f0d82a1196d6309b33edc",
"gontijol.github.io/.git/objects/f0/9e33112211c4110917262f76c9e438f5823bc1": "f8bc3bfe1e3f32445f4b6f48919a5c70",
"gontijol.github.io/.git/objects/f1/46c5d05583f2f3940914b67b908926c647d6a9": "1cf2b4cf1f18e773d6261abb47f9d64a",
"gontijol.github.io/.git/objects/f2/67b961941aff5b28cc11e6872477ea8c577713": "2065a53e5e6ef3308829e68053696d64",
"gontijol.github.io/.git/objects/f3/63ad4e7e9785734668e58541d8f17bbbba1f8d": "43fdfacf70f552a3f28312194d90eeac",
"gontijol.github.io/.git/objects/f6/2dc5ff5d35fa739382c0302c8b75e6aecbf1af": "4818e42d58709d6b1aa5b17ad8d95b01",
"gontijol.github.io/.git/objects/f7/086ef2537a142855edbe1c72363baacd733aa7": "6cde094f9826326aa5d8e42fe0038468",
"gontijol.github.io/.git/objects/f7/2ee95d598a03ed704ec18fe973511ce92d4cea": "f0445ba35501bbfd0a3b7278985d88b7",
"gontijol.github.io/.git/objects/f7/b0b82f428e9f32982ec5609b184e6ca78b6fb3": "c2a9384f58c47b7c99e1d64f011aaee8",
"gontijol.github.io/.git/objects/f7/e448759a2c0ae6c43c788fa9fc60e9d2cc18f6": "dfc809f99d2151b8cb0fe45bc7a99946",
"gontijol.github.io/.git/objects/fa/ff95ce4ad160b0d8b349e0061cd891e2741793": "aa6daef2d320736a5cbb8ef5d874858c",
"gontijol.github.io/.git/objects/fc/3a494644d47847fc8a99c11094a66e91f52b57": "85b2caa8d244d5d7ecd581cfa968830f",
"gontijol.github.io/.git/objects/fe/ad1c7d96f8174b1e14d4c1974e37ce510343e3": "5dcd58a75f732acb9b0e234509801a46",
"gontijol.github.io/.git/ORIG_HEAD": "aa7a64d9456dffd0621427212d637793",
"gontijol.github.io/.git/refs/heads/main": "aa7a64d9456dffd0621427212d637793",
"gontijol.github.io/.git/refs/remotes/origin/main": "bb9eb862d363728efe01c11042eed201",
"gontijol.github.io/assets/AssetManifest.bin": "60dacc8abd7bbd5cfd7ba66055ad86f9",
"gontijol.github.io/assets/AssetManifest.json": "8772eeb47d37d13d36906e43d1cecf08",
"gontijol.github.io/assets/assets/audio/ambient.mp3": "e9e3586d69e47565beead68b052f8661",
"gontijol.github.io/assets/assets/images/arrow.png": "1f1431d6968034ee1fe07b0d1cc62a01",
"gontijol.github.io/assets/assets/images/background.png": "881637677f44ef7db2bb81b0a7ba7a12",
"gontijol.github.io/assets/assets/images/bar_stats.png": "c34101e9565250fee5cad254175ecacb",
"gontijol.github.io/assets/assets/images/blue_button1.png": "c5ac9ffc08055cdbb731e6bfb0d2593a",
"gontijol.github.io/assets/assets/images/blue_button2.png": "b2ac54312d3b566d324f461aa50b8f5b",
"gontijol.github.io/assets/assets/images/bullet.png": "f35b61944969e005d6077b91e2020b9e",
"gontijol.github.io/assets/assets/images/direction_attack.png": "04fa54924d587beff5005965f2caa4b8",
"gontijol.github.io/assets/assets/images/enemy/atack_effect_bottom.png": "aaeb1a8e791a0f15ba911e1d2540ab32",
"gontijol.github.io/assets/assets/images/enemy/atack_effect_left.png": "9c99ad913fcc75ce253f8db53faa846f",
"gontijol.github.io/assets/assets/images/enemy/atack_effect_right.png": "15831f9ccee22a845e854ccb3d18f6e5",
"gontijol.github.io/assets/assets/images/enemy/atack_effect_top.png": "df3eeb246450bf06de6dfc325d0bdbd0",
"gontijol.github.io/assets/assets/images/enemy/goblin_idle.png": "8c97e935786b994c3cff4008212381b9",
"gontijol.github.io/assets/assets/images/enemy/goblin_idle_left.png": "a7563675f85ed259b2d0aae50ded196b",
"gontijol.github.io/assets/assets/images/enemy/goblin_run_left.png": "05863189b562610b17a062114c7849a9",
"gontijol.github.io/assets/assets/images/enemy/goblin_run_right.png": "565c2f9a0bb01a9c56975664f8cd375c",
"gontijol.github.io/assets/assets/images/furniture.png": "63948b94a5eaca29b9e523ba1d3bbaf2",
"gontijol.github.io/assets/assets/images/health_ui.png": "219e39516312f2f6bc264357497b99cb",
"gontijol.github.io/assets/assets/images/health_ui_dumont.png": "ea203a1e7522ed9d852b072004324308",
"gontijol.github.io/assets/assets/images/hs8336.png": "1cc62972007516187089dd514597ddce",
"gontijol.github.io/assets/assets/images/itens/barrel.png": "dc4d5a9e456b6f1c6ec6fdcc66af7727",
"gontijol.github.io/assets/assets/images/itens/bookshelf.png": "ce2fc17cb8251da9966a3e91bb0b2272",
"gontijol.github.io/assets/assets/images/itens/chest_spritesheet.png": "bcc8785d27d816e23eca114dd4e708ed",
"gontijol.github.io/assets/assets/images/itens/column.png": "2ccdc666f36fef12bb99345d4c6c9d66",
"gontijol.github.io/assets/assets/images/itens/flag_green.png": "1a5a7df4b10a84b0a722b3b6600198dd",
"gontijol.github.io/assets/assets/images/itens/flag_red.png": "6aca7b9e01f86f1b1a45e262e65821b8",
"gontijol.github.io/assets/assets/images/itens/potion_life.png": "825b71a3532854e849d512683dba06b0",
"gontijol.github.io/assets/assets/images/itens/prisoner.png": "45dcdd9a419bcd1f39cfd78024865578",
"gontijol.github.io/assets/assets/images/itens/spikes.png": "8ee92dd121da5fc50964a6a68e3e262c",
"gontijol.github.io/assets/assets/images/itens/table.png": "5e22fb237c60943f46ba18d5e176c10c",
"gontijol.github.io/assets/assets/images/itens/torch_spritesheet.png": "858f57abd642f0303de50d719532f198",
"gontijol.github.io/assets/assets/images/joystick_atack.png": "0f5325cb2ddcba703e4c9d7d2dd266df",
"gontijol.github.io/assets/assets/images/joystick_atack_range.png": "8994f23fc67442c8361432f0cc9a2fa1",
"gontijol.github.io/assets/assets/images/joystick_background.png": "8c9aa78348b48e03f06bb97f74b819c9",
"gontijol.github.io/assets/assets/images/joystick_knob.png": "bb0811554c35e7d74df6d80fb5ff5cd5",
"gontijol.github.io/assets/assets/images/lpc/body/brown.png": "348cde94f6fbf7cca65441ae19bccfbd",
"gontijol.github.io/assets/assets/images/lpc/body/light.png": "3d41d5018dc1a56537d3376a6451641c",
"gontijol.github.io/assets/assets/images/lpc/body/orc1.png": "c69e7396b657d44f57afd9f3f54b1151",
"gontijol.github.io/assets/assets/images/lpc/body/skeleton.png": "de95019a45f5939391e4a49ff88f8046",
"gontijol.github.io/assets/assets/images/lpc/feet/1.png": "2ed974e03ae8ac6df7b8a90988e6c1ef",
"gontijol.github.io/assets/assets/images/lpc/gloves/2.png": "41a8a35710ac3befbab29f5b0cb07ad5",
"gontijol.github.io/assets/assets/images/lpc/hair/curly.png": "2457c495445802029febfdde40884920",
"gontijol.github.io/assets/assets/images/lpc/hair/longknot.png": "fafd02037d781328ae6ceb81cebc4f7e",
"gontijol.github.io/assets/assets/images/lpc/hair/single.png": "b9e9111f8bd9288a9b903c271a5251e9",
"gontijol.github.io/assets/assets/images/lpc/hair/xlong.png": "8e7f9106bf942f17b215aa58e62f4198",
"gontijol.github.io/assets/assets/images/lpc/head/1.png": "85d7057dada8a67b14e0b4ebd691d897",
"gontijol.github.io/assets/assets/images/lpc/leg/1.png": "50190606e97dc98ff93156dcf95c3a4c",
"gontijol.github.io/assets/assets/images/lpc/torco/arms.png": "7834f862fa0aae30488fb285dbccce70",
"gontijol.github.io/assets/assets/images/lpc/torco/chest.png": "31cb64fb657680a0c20226eae7fc3539",
"gontijol.github.io/assets/assets/images/multi_scenario/hero/hero_multi_biome.png": "08730d084495a7ccc2c7c283c3822d25",
"gontijol.github.io/assets/assets/images/multi_scenario/tile/biome1.png": "ec2cc3e413fecc22cedad090324fb1b9",
"gontijol.github.io/assets/assets/images/multi_scenario/tile/biome1_tileset.json": "6ad3ca3beda0df8ee950a1b9d506ab95",
"gontijol.github.io/assets/assets/images/multi_scenario/tile/biome2.png": "491e506fbfa06177ad91771b74f86d01",
"gontijol.github.io/assets/assets/images/multi_scenario/tile/biome2_tileset.json": "89a9d4fa226f4bf58486454301b09995",
"gontijol.github.io/assets/assets/images/multi_scenario/tile/map_biome1.json": "b98d2d6d518dd4bdab6ca4057c7d21fe",
"gontijol.github.io/assets/assets/images/multi_scenario/tile/map_biome2.json": "ee905b1ade79fa34bb2dac7072158b57",
"gontijol.github.io/assets/assets/images/mx2090.png": "9aceb70a832e97e50de370e110ed7e08",
"gontijol.github.io/assets/assets/images/npc/critter_idle.png": "609755d64e5a0dbcd7b6507ab816e55a",
"gontijol.github.io/assets/assets/images/npc/critter_run_left.png": "145c02015fea8ed28f964ec0ca686d84",
"gontijol.github.io/assets/assets/images/npc/critter_run_right.png": "fe08ed1dcc559998705239d5925a6ab1",
"gontijol.github.io/assets/assets/images/npc/wizard_idle.png": "b05bbd5361ae3eac51138a70c8278efc",
"gontijol.github.io/assets/assets/images/planet_life.png": "03e240dc5e3988b9884ec2595718e3b1",
"gontijol.github.io/assets/assets/images/player/atack_effect_bottom.png": "e2406062be291971a034123fdd1757f9",
"gontijol.github.io/assets/assets/images/player/atack_effect_left.png": "5b5475da758d76f79c34429f70f7f6af",
"gontijol.github.io/assets/assets/images/player/atack_effect_right.png": "39b3d8583205c90284cd60f0e018f29d",
"gontijol.github.io/assets/assets/images/player/atack_effect_top.png": "7b01845d595c3803a07567ee87710658",
"gontijol.github.io/assets/assets/images/player/crypt.png": "8e55febc1e2563a9d7ba4b48625ba88d",
"gontijol.github.io/assets/assets/images/player/emote_exclamacao.png": "8b1897ae92f3a077e0aadaef2626d65a",
"gontijol.github.io/assets/assets/images/player/explosion_fire.png": "81a3691935a18a30572870b759ad1683",
"gontijol.github.io/assets/assets/images/player/fireball_bottom.png": "05522f950d8d60e15615ee9705ff2ef0",
"gontijol.github.io/assets/assets/images/player/fireball_left.png": "cb3370c9039ec112af7bee6edf3e342d",
"gontijol.github.io/assets/assets/images/player/fireball_right.png": "aaa2c18fe241c16e95be131619693b80",
"gontijol.github.io/assets/assets/images/player/fireball_top.png": "e9a76f3ea950d6bc22f8f4cd3a22d7e3",
"gontijol.github.io/assets/assets/images/player/knight_idle.png": "191737282656dd3c8851a2dd3dfc1c0c",
"gontijol.github.io/assets/assets/images/player/knight_idle_left.png": "e4ddca181210b0cf9555331aaf2af512",
"gontijol.github.io/assets/assets/images/player/knight_run.png": "9cac5c91f943ba81915573bd93060d4d",
"gontijol.github.io/assets/assets/images/player/knight_run_left.png": "ce9f3ad71135b459f6b66c892b5b9e30",
"gontijol.github.io/assets/assets/images/player/pirate.png": "3129a70b4ba971c0b0f99c386fb4b2ab",
"gontijol.github.io/assets/assets/images/rk_6761.png": "53c15304d9b9751dc4505b378e3fc8ac",
"gontijol.github.io/assets/assets/images/robot.png": "b696d8a120962de4bde2ff8b7319786c",
"gontijol.github.io/assets/assets/images/smoke_explosin.png": "555a8a42b72e662af232dc2092103c2a",
"gontijol.github.io/assets/assets/images/soldier.png": "ce7013efe144160b1210e355a926aaf6",
"gontijol.github.io/assets/assets/images/tile/floor_1.png": "00c3bd0c3d76a954f3f0a648cb13c3b3",
"gontijol.github.io/assets/assets/images/tile/floor_10.png": "baf86a2272c83bd904bc25b4af03aa29",
"gontijol.github.io/assets/assets/images/tile/floor_2.png": "10968e74b671f14aab19e13a76da334d",
"gontijol.github.io/assets/assets/images/tile/floor_3.png": "3fa52d5af2a38dede0142f5c3dcaab55",
"gontijol.github.io/assets/assets/images/tile/floor_4.png": "2685b25c2471a762ff6f900b496c9e29",
"gontijol.github.io/assets/assets/images/tile/floor_5.png": "6d63b1d77dcc35d4f7beb91125851e29",
"gontijol.github.io/assets/assets/images/tile/floor_6.png": "d464c18724611d109498d4c4e57316c4",
"gontijol.github.io/assets/assets/images/tile/floor_7.png": "7ba4503a62a1b242f05b5244e7b0dae4",
"gontijol.github.io/assets/assets/images/tile/floor_8.png": "28692ad0c494efc5bc0f9669579006fe",
"gontijol.github.io/assets/assets/images/tile/floor_9.png": "2b4e26d91d8f632bf4eaa5400cb7d748",
"gontijol.github.io/assets/assets/images/tile/wall.png": "7a6ce85ad0ebd6694dd57e9fdca7535b",
"gontijol.github.io/assets/assets/images/tile/wall_bottom.png": "31d2b04aca916c16bd31574d7134a853",
"gontijol.github.io/assets/assets/images/tile/wall_bottom_left.png": "7e83621a422ddd0e7b4425abe8ac3ec8",
"gontijol.github.io/assets/assets/images/tile/wall_bottom_right.png": "dd6772364441f0f2ea76c532fb4031dc",
"gontijol.github.io/assets/assets/images/tile/wall_left.png": "b4ee6ba9d296a18fa532119ef8cb6157",
"gontijol.github.io/assets/assets/images/tile/wall_left_and_bottom.png": "6583c02205abb0c84aef143379eb9bed",
"gontijol.github.io/assets/assets/images/tile/wall_left_and_top.png": "5e7c81163a737dad7ed4a626d76a0b73",
"gontijol.github.io/assets/assets/images/tile/wall_right.png": "aca869be30facbfd420754e870a78f58",
"gontijol.github.io/assets/assets/images/tile/wall_right_and_bottom.png": "533d830adf7d86b810481118ed7aa2f9",
"gontijol.github.io/assets/assets/images/tile/wall_top.png": "845ed35ef1482e21857c8bd70061c810",
"gontijol.github.io/assets/assets/images/tile/wall_top_inner_left.png": "484e3c33e8559ff61f560e5f32791c5a",
"gontijol.github.io/assets/assets/images/tile/wall_top_inner_right.png": "b26bd1cad50d0201d41ab18200976cfc",
"gontijol.github.io/assets/assets/images/tile/wall_turn_left_top.png": "c9d8c9116dd5570fb87b6e1328cb0ee3",
"gontijol.github.io/assets/assets/images/tiled/bigMap.json": "3fa9268a37d7c31c48d602bb00f42393",
"gontijol.github.io/assets/assets/images/tiled/image_bg.jpeg": "baac8674ee1595c79ac2ad933bf296d5",
"gontijol.github.io/assets/assets/images/tiled/mapa1.json": "fa913810ac143114678101bc26d37675",
"gontijol.github.io/assets/assets/images/tiled/mapa2.json": "2a66279464e5063a5e83fc3b20617612",
"gontijol.github.io/assets/assets/images/tiled/map_tiled1.8.tmj": "7e03fc396f9add52d10cb75e86f0319c",
"gontijol.github.io/assets/assets/images/tiled/tileset/0x72_DungeonTilesetII_v1.3.png": "99ee27544da829bed54efd1f22e5a588",
"gontijol.github.io/assets/assets/images/tiled/tileset/0x72_DungeonTilesetII_v1.json": "4ff2b5a15607fe7bd92f708093d0021e",
"gontijol.github.io/assets/assets/images/tiled/tileset/tileset1.8.tsj": "57a43cb70d463bbcab6c64b56d146ce8",
"gontijol.github.io/assets/assets/images/tiled/top_down/map.json": "73957553a68d3d24620660a435a39c5a",
"gontijol.github.io/assets/assets/images/tiled/top_down/tilesheet.json": "03d43534a53b04a4a761aaffc7a3ff71",
"gontijol.github.io/assets/assets/images/tiled/top_down/tilesheet.png": "bbd9628ccc0e7734c82ca71591f15c7e",
"gontijol.github.io/assets/assets/images/tile_random/earth_to_grass.png": "7504d7c5abb15cc963686ffce67b2be1",
"gontijol.github.io/assets/assets/images/tile_random/earth_to_water.png": "457993098c6762efe45dd296b3255dc6",
"gontijol.github.io/assets/assets/images/tile_random/tile_types.png": "3f54b0b25f73b3270ddcd943480fdd3a",
"gontijol.github.io/assets/assets/images/tile_random/tree.png": "373b98c4cf13e3eba31aeb556e10d8d9",
"gontijol.github.io/assets/assets/images/tw3337.png": "d3afeee43abfa7d617b66f17f91743ec",
"gontijol.github.io/assets/assets/images/yq0000.png": "41b58ff6484e86cd948fbbe3273b482e",
"gontijol.github.io/assets/assets/images/zombie.png": "41ebd5de73051a779ea2aa8be90b95af",
"gontijol.github.io/assets/FontManifest.json": "d751713988987e9331980363e24189ce",
"gontijol.github.io/assets/NOTICES": "bb7758b16c219acb60029b59d1c3a328",
"gontijol.github.io/assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"gontijol.github.io/canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"gontijol.github.io/canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"gontijol.github.io/canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"gontijol.github.io/canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"gontijol.github.io/canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"gontijol.github.io/canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"gontijol.github.io/canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"gontijol.github.io/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"gontijol.github.io/flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"gontijol.github.io/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"gontijol.github.io/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"gontijol.github.io/icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"gontijol.github.io/icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"gontijol.github.io/index.html": "ad0a2a9a07fe32e2ae505c758cdf1ac7",
"/": "e7e9c8bad6549d1ebea6be6eb93d186b",
"gontijol.github.io/main.dart.js": "50e713457ba381b8d8b1c56953dcca15",
"gontijol.github.io/manifest.json": "618f940e0f99502f90fe052305bc0a05",
"gontijol.github.io/README.md": "9c2ad3f4b1025fed176d4f399c415236",
"gontijol.github.io/version.json": "1f639e81b25a20a32d4ea37c4654b421",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "e7e9c8bad6549d1ebea6be6eb93d186b",
"main.dart.js": "50e713457ba381b8d8b1c56953dcca15",
"manifest.json": "618f940e0f99502f90fe052305bc0a05",
"version.json": "1f639e81b25a20a32d4ea37c4654b421"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
