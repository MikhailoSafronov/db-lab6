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
    "revision": "4360d6617fc20411b4b0d2dcdf6ec06e"
  },
  {
    "url": "5.jpg",
    "revision": "7e861769b640afa00fcc0ac4b72d9c52"
  },
  {
    "url": "assets/css/0.styles.5b0b1dc7.css",
    "revision": "c2471e9652679020020916275b29bd44"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.6d638270.js",
    "revision": "863f0f13a6836c55b2fd9f3b7ef3ce34"
  },
  {
    "url": "assets/js/10.98c0975e.js",
    "revision": "dc759e689d4f51455429a374daaa68d0"
  },
  {
    "url": "assets/js/11.b3c9df81.js",
    "revision": "3f4715a1b9e03f48b4723ad0d8f32207"
  },
  {
    "url": "assets/js/12.fc2ac8e4.js",
    "revision": "a733d738ad4e7fae8765debbe2e694f6"
  },
  {
    "url": "assets/js/13.0a395756.js",
    "revision": "3baf2a199dc3626abbdf14d8253c093e"
  },
  {
    "url": "assets/js/14.e4b13473.js",
    "revision": "62d622f5033f26236eef1b8906779610"
  },
  {
    "url": "assets/js/15.1abde0e5.js",
    "revision": "b925375aba7c43262ec4dba785f662c8"
  },
  {
    "url": "assets/js/16.ab8f4ad1.js",
    "revision": "199b3f64002752b8ceaa0fe3c2b3b27a"
  },
  {
    "url": "assets/js/17.6e26bf83.js",
    "revision": "03347f6a2220aec2218c1ee17449bc36"
  },
  {
    "url": "assets/js/18.90b36a3d.js",
    "revision": "d6f3b9c3cb53224b9ce5f8eb7f721a09"
  },
  {
    "url": "assets/js/19.cdca5709.js",
    "revision": "1f4971d962ea1ae7d4e4edc2cff350f7"
  },
  {
    "url": "assets/js/2.7935e5fa.js",
    "revision": "621b51b7bd4a844f9f50ded94177c0c5"
  },
  {
    "url": "assets/js/20.f1b3c41f.js",
    "revision": "bb52ac99dd65011ebb0f56886a97aeb2"
  },
  {
    "url": "assets/js/21.cbbb8dc6.js",
    "revision": "2a3d30c1feda9232dfa0b07493ec00fd"
  },
  {
    "url": "assets/js/22.5ecbff44.js",
    "revision": "41a43b83f81734e8bdbaa37ff0986a7e"
  },
  {
    "url": "assets/js/23.31d32b90.js",
    "revision": "8bb279ae3bd1aac0dd0dd018d2c9644e"
  },
  {
    "url": "assets/js/24.8cb5bf42.js",
    "revision": "d82c6aeadb94699ce4f06ddf80f5cb5a"
  },
  {
    "url": "assets/js/25.0df9c0a0.js",
    "revision": "263c48b84b1dd07d7eb8c5446e3ee8a3"
  },
  {
    "url": "assets/js/26.b12fb4da.js",
    "revision": "a7ee4112e6c4863b0e116f836a13bc0e"
  },
  {
    "url": "assets/js/27.83a2df6a.js",
    "revision": "a45227a9e3a8999138e6df04cb7b8260"
  },
  {
    "url": "assets/js/28.5098f87c.js",
    "revision": "73e5e0fcb80b879671a72ab9c2298f8c"
  },
  {
    "url": "assets/js/29.84876562.js",
    "revision": "5b7bafc714cf7f196e74332d42dec111"
  },
  {
    "url": "assets/js/3.653bbf3d.js",
    "revision": "4c87273653316b3571dcb2d63a71b33e"
  },
  {
    "url": "assets/js/30.fbad808d.js",
    "revision": "0d447333c5fea8a96738fc03f110e02b"
  },
  {
    "url": "assets/js/31.7273a257.js",
    "revision": "cdad5f7eaff158baec00f668bf95186b"
  },
  {
    "url": "assets/js/32.6e21a5d2.js",
    "revision": "861902eae20e83c76fb2c75470766f98"
  },
  {
    "url": "assets/js/33.102efd7f.js",
    "revision": "9ee6d021cadb78f2af9ff2a39ed8d239"
  },
  {
    "url": "assets/js/34.6f2c8b6e.js",
    "revision": "981271c15e001cddc2c7e79ecc438f4e"
  },
  {
    "url": "assets/js/35.1051838f.js",
    "revision": "43153b79e15d6dd31fc4daf17383e8d1"
  },
  {
    "url": "assets/js/36.81f59269.js",
    "revision": "d90ca64e8a680c8e84a7bea4222c3e03"
  },
  {
    "url": "assets/js/37.838fd984.js",
    "revision": "b387e1dd6adfc61e4309203db10f4229"
  },
  {
    "url": "assets/js/4.f0b4380e.js",
    "revision": "55c409161655d7fc9de009cc0f907695"
  },
  {
    "url": "assets/js/5.cff7f7da.js",
    "revision": "b0a4ffbdb73c596257115fbef24ea46f"
  },
  {
    "url": "assets/js/6.59a92e7a.js",
    "revision": "2ee2adf3d9560a7b58ccfa65cb9b37a4"
  },
  {
    "url": "assets/js/7.920b358b.js",
    "revision": "61d4281903ab40ebe8501171e5acecfb"
  },
  {
    "url": "assets/js/app.0fb58ff3.js",
    "revision": "4881a2eeb10ddc61f61aadabb227ae50"
  },
  {
    "url": "assets/js/vendors~docsearch.cb019e06.js",
    "revision": "1de030614bd85063108d38b85818a1b4"
  },
  {
    "url": "conclusion/index.html",
    "revision": "57ca5b8c0956336676563d51e307e526"
  },
  {
    "url": "design/index.html",
    "revision": "04779d5bbdc2ebc707aa850e701dee05"
  },
  {
    "url": "index.html",
    "revision": "0d1e799f7e43a17615d71a3002f9a980"
  },
  {
    "url": "intro/index.html",
    "revision": "e7098c85e922779de3d3c2c6e0b1103a"
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
    "revision": "e86361f42be1bd48460d3a1380530e51"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "e0535c0ef74bbf7f9894d31782a8fe76"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "94214e43f7358f26b9a757b052d1fcda"
  },
  {
    "url": "software/index.html",
    "revision": "55ebe49b0c070c49586399315c6e667f"
  },
  {
    "url": "test/index.html",
    "revision": "22f0527cb88be39cad983100f53b8864"
  },
  {
    "url": "use cases/index.html",
    "revision": "ed77561420295ae3801d776391a96f93"
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
