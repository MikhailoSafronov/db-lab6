/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "03-01.jpg",
    "revision": "61ccd31b9a99e4dc0b2115d7a181dc71"
  },
  {
    "url": "03-02.jpg",
    "revision": "0e42c83dcc174ebfdbb611ab0956fcd9"
  },
  {
    "url": "03-03.jpg",
    "revision": "dd23072447e0798b536bd162235d14c3"
  },
  {
    "url": "03-04.jpg",
    "revision": "661a64ee2776ef94b23ba82f7ee50969"
  },
  {
    "url": "03-05.jpg",
    "revision": "6f52dcb2ccb40af28a65a4b796eb918d"
  },
  {
    "url": "03-06.jpg",
    "revision": "2643698d9412e41a449c1edee719fb29"
  },
  {
    "url": "03-07.jpg",
    "revision": "c4a788f41d803f8b9bddb5adc0513be6"
  },
  {
    "url": "03-08.jpg",
    "revision": "4c810503ec4bc1adfd29904056fc2886"
  },
  {
    "url": "03-09.jpg",
    "revision": "9c798bc91f80f84b6b0e7f7fba26d65b"
  },
  {
    "url": "03-10.jpg",
    "revision": "bb5b18b65591e9d058edbc14b02c6ba5"
  },
  {
    "url": "03-11.jpg",
    "revision": "6a88d8f48c63e79c72ec45ae84a8d9ff"
  },
  {
    "url": "04-01.jpg",
    "revision": "4bbafd5dd4000461cef55f669139b17b"
  },
  {
    "url": "05-01.jpg",
    "revision": "8d54b111a4b6b5fb4cd39e4c7261b927"
  },
  {
    "url": "06-01.jpg",
    "revision": "cf2dab320c48c5ead6fe105863629e4e"
  },
  {
    "url": "06-02.jpg",
    "revision": "aa286f8fd6540b7a7b6d36392a63f505"
  },
  {
    "url": "06-03.jpg",
    "revision": "239fa5fb2a9063f1e261ae2db81fceef"
  },
  {
    "url": "06-04.jpg",
    "revision": "a2dbf924afd6a8580ce4a2d2bcd6e049"
  },
  {
    "url": "06-05.jpg",
    "revision": "22f4f542b283cdc3d027eb664424d3c8"
  },
  {
    "url": "06-06.jpg",
    "revision": "12017ddd5b9179e8f53e93044acee998"
  },
  {
    "url": "06-07.jpg",
    "revision": "1ded65fc56da9f0008ae4ef2eacc8175"
  },
  {
    "url": "1.jpg",
    "revision": "f1ea37a492254cc85dd6fd1e89b1a6b4"
  },
  {
    "url": "1.png",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "111.jpg",
    "revision": "c9168e100a7644f8d1f54be2b43b3e20"
  },
  {
    "url": "112.jpg",
    "revision": "52d9ae8c78f1ab2a50cc22297844ca5f"
  },
  {
    "url": "113.jpg",
    "revision": "931bb56cdc574cb67a6663a8b099641b"
  },
  {
    "url": "114.jpg",
    "revision": "909641877d85cbf18b275e4f28076659"
  },
  {
    "url": "115.jpg",
    "revision": "e534ad0f2caa9e265d3bd18f3abac6cf"
  },
  {
    "url": "116.jpg",
    "revision": "5bdcb8f0f1b49865f8159a0862f3c67f"
  },
  {
    "url": "117.jpg",
    "revision": "99a65c34ca67d43b852d5a136e438fe6"
  },
  {
    "url": "118.jpg",
    "revision": "48c13ab183f0ec66dab06e8426c2f93a"
  },
  {
    "url": "119.jpg",
    "revision": "c140f0bc162d110d491b68578c953d52"
  },
  {
    "url": "12-01.jpg",
    "revision": "cc85570b3c89f73291af87791115986a"
  },
  {
    "url": "12-02.jpg",
    "revision": "f2b24c5c4beb21d5302c64b59445927a"
  },
  {
    "url": "12-03.jpg",
    "revision": "61fe98dff39d0887978deb0af605571b"
  },
  {
    "url": "12-04.jpg",
    "revision": "ff2468e7fbb03e034be0ffd7312dc7d9"
  },
  {
    "url": "12-05.jpg",
    "revision": "a126fe17514d81279c677666fd459d9d"
  },
  {
    "url": "12-06.jpg",
    "revision": "c25686b2f77ac7c5a2d4706f43e40132"
  },
  {
    "url": "12-07.jpg",
    "revision": "de17f3eb1df503250bcf1a5a4b533eec"
  },
  {
    "url": "12-08.jpg",
    "revision": "f3b58c768c18919a6fa2ab59ea6627db"
  },
  {
    "url": "120.jpg",
    "revision": "5db2dff3ad05b8454074cb90b2b881fe"
  },
  {
    "url": "121.jpg",
    "revision": "40d5022794b02843ab90562fb969625f"
  },
  {
    "url": "122.jpg",
    "revision": "fb744f085a83c3cfe4c349d2f69a8d54"
  },
  {
    "url": "123.jpg",
    "revision": "52ca3438a3d3e3de17619dc539b40e60"
  },
  {
    "url": "124.jpg",
    "revision": "da0b33e96c0161a3fb8f7630ba79f17f"
  },
  {
    "url": "125.jpg",
    "revision": "edf9b25a279f12e84006e11cc0a7b851"
  },
  {
    "url": "126.jpg",
    "revision": "e1a42255f5a22a97ee771c7b11516667"
  },
  {
    "url": "127.jpg",
    "revision": "61fc6859179c74280c3a2adb04a57fbd"
  },
  {
    "url": "128.jpg",
    "revision": "c7e559dc17fb7dd88ee1daaccfc809ce"
  },
  {
    "url": "129.jpg",
    "revision": "10a571c6a574fe1ae0c79fe185ad9bb8"
  },
  {
    "url": "13-01.jpg",
    "revision": "b22f06060909d43d796a8ffd4b0743a0"
  },
  {
    "url": "13-02.jpg",
    "revision": "2d2bca0518716a8dfaf37ef5c15e54ee"
  },
  {
    "url": "13-03.jpg",
    "revision": "fec1a3db903dc05c462fb6f384a400d6"
  },
  {
    "url": "130.jpg",
    "revision": "3cbe0f44fe19f61501b30ad7fc038c72"
  },
  {
    "url": "2.jpg",
    "revision": "572bc2e4ef3efb7c81bbbcac5f09147b"
  },
  {
    "url": "3.jpg",
    "revision": "248757985bb49f73624c6923057530ac"
  },
  {
    "url": "4.jpg",
    "revision": "407c52446e2e463c4f8e494d52dbe485"
  },
  {
    "url": "404.html",
    "revision": "1d158cc0672cbebdda8d9ddb3aa701ae"
  },
  {
    "url": "5.jpg",
    "revision": "7e861769b640afa00fcc0ac4b72d9c52"
  },
  {
    "url": "assets/css/0.styles.bad56e22.css",
    "revision": "2f7b42e4bf0a82cddea5bbe32b4399b0"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.33586d99.js",
    "revision": "0d368b7d3251d92579f9f6a2271b09be"
  },
  {
    "url": "assets/js/10.8f960ad7.js",
    "revision": "6f71b89832e19a0b648018bc2464ab2f"
  },
  {
    "url": "assets/js/13.fbd10076.js",
    "revision": "1e148eb3fcde0d48161a314c7c1452b9"
  },
  {
    "url": "assets/js/14.3229473a.js",
    "revision": "f9d56c86561d2e8fdf88352d2a7f3820"
  },
  {
    "url": "assets/js/15.2b1fe6b2.js",
    "revision": "4f50f323c76bed4f79dfe64fcf2c8a12"
  },
  {
    "url": "assets/js/16.3cdaf982.js",
    "revision": "00d57736e7d628048f87405e4d8b4acb"
  },
  {
    "url": "assets/js/17.63e53daa.js",
    "revision": "e9083a83e4174ca4ad37c821b20a80f0"
  },
  {
    "url": "assets/js/18.c37a3fdd.js",
    "revision": "85b0a3f5fb556bd48a61716f70e8d7f8"
  },
  {
    "url": "assets/js/19.178f71d1.js",
    "revision": "21347915480a3072286bce143d4828f5"
  },
  {
    "url": "assets/js/2.92afef70.js",
    "revision": "ecc38aa103999fddbd6ebd2817fb0fad"
  },
  {
    "url": "assets/js/20.df2c3b20.js",
    "revision": "ce9372ca436931fb87ce5995d963ee6c"
  },
  {
    "url": "assets/js/21.e3661606.js",
    "revision": "f300679cc31158b5c477fde857de625e"
  },
  {
    "url": "assets/js/22.46dd4ed9.js",
    "revision": "d6219d7b3301c9df060c8ab41d9bed0e"
  },
  {
    "url": "assets/js/23.6391e6b3.js",
    "revision": "9adbcd5aa72f38ebd081d8cf996a1026"
  },
  {
    "url": "assets/js/24.9d657754.js",
    "revision": "682159da9f8a91d0c39ca457130f0352"
  },
  {
    "url": "assets/js/25.e2a5319b.js",
    "revision": "928df16678f128dcac1959fd35f95f8a"
  },
  {
    "url": "assets/js/26.8d0c0409.js",
    "revision": "8aba158efd992fae43d8941e482a7c7b"
  },
  {
    "url": "assets/js/27.6c89ebc8.js",
    "revision": "3710afa40927f27377744b063737866f"
  },
  {
    "url": "assets/js/28.66564ced.js",
    "revision": "c477959701e33f1d612a0b70c73390be"
  },
  {
    "url": "assets/js/29.39aaaa24.js",
    "revision": "cd80ec4e383e48862fba0b203f20b699"
  },
  {
    "url": "assets/js/3.7ea70a04.js",
    "revision": "73a49ac9dedd9e2ac7fa767177778094"
  },
  {
    "url": "assets/js/30.1b025579.js",
    "revision": "e81f5fc98889b6aa888b7207fecf14a4"
  },
  {
    "url": "assets/js/31.d3729396.js",
    "revision": "b0cafdb73e802c3549aab0501d89539b"
  },
  {
    "url": "assets/js/32.8fe7121c.js",
    "revision": "3589cfceaa62a5c0c5ff49716669e504"
  },
  {
    "url": "assets/js/33.fca2c27d.js",
    "revision": "afea04959e06b3ed2cf57e3b34d02f44"
  },
  {
    "url": "assets/js/34.0b707b60.js",
    "revision": "cf7b06daf9d1fb154149bc858a9f1e26"
  },
  {
    "url": "assets/js/35.e388714e.js",
    "revision": "fd1255986179141fc6cbd112593cd1dd"
  },
  {
    "url": "assets/js/36.21642fe1.js",
    "revision": "e439b1140dc68db92cadd96970f7c064"
  },
  {
    "url": "assets/js/37.2b44a2f8.js",
    "revision": "b143ce0c3bd07ff981d576dc7d5318d8"
  },
  {
    "url": "assets/js/38.e5b2e99b.js",
    "revision": "2a33685432798a5096daa680a8880363"
  },
  {
    "url": "assets/js/39.37b84b14.js",
    "revision": "7852f464787beb464c2ed593bbb8b308"
  },
  {
    "url": "assets/js/4.326bdc2c.js",
    "revision": "6e6b516856a4fc4519bab98b40b6b887"
  },
  {
    "url": "assets/js/41.c8373cb3.js",
    "revision": "e6b8762a479b414a19fb700261ac7ddc"
  },
  {
    "url": "assets/js/5.9362de3a.js",
    "revision": "e8f5ae212ea06423cff67a7295655674"
  },
  {
    "url": "assets/js/6.0f270240.js",
    "revision": "1122bf03b4c3af8127472ac34403204f"
  },
  {
    "url": "assets/js/7.c373bdf7.js",
    "revision": "7ca74a854ee88f54067b61872fc984e3"
  },
  {
    "url": "assets/js/8.8ec552ec.js",
    "revision": "cc27719725a2b9c1c0ba0a1100a56e1d"
  },
  {
    "url": "assets/js/9.8e4feacf.js",
    "revision": "781f11a8e1de42c858e1806db31cb0fd"
  },
  {
    "url": "assets/js/app.7838a8b0.js",
    "revision": "f4b8016e044d3b88b4a88c0e3d68ea98"
  },
  {
    "url": "assets/js/vendors~docsearch.491cc543.js",
    "revision": "1e191a90655d0d6b862e60709158e047"
  },
  {
    "url": "conclusion/index.html",
    "revision": "b3ef580ae4b0978a27b377277a244b48"
  },
  {
    "url": "design/index.html",
    "revision": "2844ce6ae619627a8c31fe209e2008a6"
  },
  {
    "url": "images/111.jpg",
    "revision": "c9168e100a7644f8d1f54be2b43b3e20"
  },
  {
    "url": "images/112.jpg",
    "revision": "52d9ae8c78f1ab2a50cc22297844ca5f"
  },
  {
    "url": "images/113.jpg",
    "revision": "931bb56cdc574cb67a6663a8b099641b"
  },
  {
    "url": "images/114.jpg",
    "revision": "909641877d85cbf18b275e4f28076659"
  },
  {
    "url": "images/115.jpg",
    "revision": "e534ad0f2caa9e265d3bd18f3abac6cf"
  },
  {
    "url": "images/116.jpg",
    "revision": "5bdcb8f0f1b49865f8159a0862f3c67f"
  },
  {
    "url": "images/117.jpg",
    "revision": "99a65c34ca67d43b852d5a136e438fe6"
  },
  {
    "url": "images/118.jpg",
    "revision": "48c13ab183f0ec66dab06e8426c2f93a"
  },
  {
    "url": "images/119.jpg",
    "revision": "c140f0bc162d110d491b68578c953d52"
  },
  {
    "url": "images/120.jpg",
    "revision": "5db2dff3ad05b8454074cb90b2b881fe"
  },
  {
    "url": "images/121.jpg",
    "revision": "40d5022794b02843ab90562fb969625f"
  },
  {
    "url": "images/122.jpg",
    "revision": "fb744f085a83c3cfe4c349d2f69a8d54"
  },
  {
    "url": "images/123.jpg",
    "revision": "52ca3438a3d3e3de17619dc539b40e60"
  },
  {
    "url": "images/124.jpg",
    "revision": "da0b33e96c0161a3fb8f7630ba79f17f"
  },
  {
    "url": "images/125.jpg",
    "revision": "edf9b25a279f12e84006e11cc0a7b851"
  },
  {
    "url": "images/126.jpg",
    "revision": "e1a42255f5a22a97ee771c7b11516667"
  },
  {
    "url": "images/127.jpg",
    "revision": "61fc6859179c74280c3a2adb04a57fbd"
  },
  {
    "url": "images/128.jpg",
    "revision": "c7e559dc17fb7dd88ee1daaccfc809ce"
  },
  {
    "url": "images/129.jpg",
    "revision": "10a571c6a574fe1ae0c79fe185ad9bb8"
  },
  {
    "url": "images/130.jpg",
    "revision": "3cbe0f44fe19f61501b30ad7fc038c72"
  },
  {
    "url": "images/newfile.jpg",
    "revision": "81051bcc2cf1bedf378224b0a93e2877"
  },
  {
    "url": "index.html",
    "revision": "137e42442d91c6574fcb229653cf02e3"
  },
  {
    "url": "intro/index.html",
    "revision": "adb276c86e92439cfcb220ff736bf172"
  },
  {
    "url": "license.html",
    "revision": "70a2edbdcd1a16b29dc6ec11e14ab937"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "a40bae5962dd970cdaf8c726d3be3ee0"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "8421c7577b22d72a813a85e3109dbec9"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "bf8bc7b1c3c9157f162c7935071a1b2e"
  },
  {
    "url": "software/index.html",
    "revision": "6c40431cb30a49cbbff845fa6ba00059"
  },
  {
    "url": "test/index.html",
    "revision": "4b5f4e30733f62e83ef8c2cdf8eb111a"
  },
  {
    "url": "use cases/index.html",
    "revision": "efe0db26d060a1fcbe73437fc0ab8af0"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
