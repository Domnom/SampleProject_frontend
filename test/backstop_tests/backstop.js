module.exports = {
  "id": "backstop_default",
  "viewports": [
    {
      "label": "phone",
      "width": 320,
      "height": 480
    },
    {
      "label": "tablet",
      "width": 1024,
      "height": 768
    }
  ],
  "onBeforeScript": "casper/onBefore.js",
  "onReadyScript": "casper/onReady.js",
  "scenarios": [
    {
      "label": "BackstopJS Homepage",
      "cookiePath": __dirname + "/backstop_data/engine_scripts/cookies.json",
      "url": "https://garris.github.io/BackstopJS/",
      "referenceUrl": "",
      "readyEvent": "",
      "readySelector": "",
      "delay": 0,
      "hideSelectors": [],
      "removeSelectors": [],
      "hoverSelector": "",
      "clickSelector": "",
      "postInteractionWait": "",
      "selectors": [],
      "selectorExpansion": true,
      "misMatchThreshold" : 0.1,
      "requireSameDimensions": true
    }
  ],
  "paths": {
    "bitmaps_reference": __dirname + "/backstop_data/bitmaps_reference",
    "bitmaps_test": __dirname + "/backstop_data/bitmaps_test",
    "engine_scripts": __dirname + "/backstop_data/engine_scripts",
    "html_report": __dirname + "/backstop_data/html_report",
    "ci_report": __dirname + "/backstop_data/ci_report"
  },
  "report": ["browser"],
  "engine": "phantomjs",
  "casperFlags": [],
  "asyncCaptureLimit": 5,
  "asyncCompareLimit": 50,
  "debug": false,
  "debugWindow": false
}
