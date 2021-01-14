// ==UserScript==
// @name         AutoPlay
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Auto Play Video in Chrome、Firefox and Edge
// @author       YC
// @match        https://61.160.99.102:8031/WXJXJY/Pages/trainingcenter/online-learn.aspx*
// @require      https://greasyfork.org/scripts/31940-waitforkeyelements/code/waitForKeyElements.js?version=209282
// @grant        none
// @run-at       document-end
// ==/UserScript==




(function() {
    'use strict';
    var autoplay = function()
    {
        console.log(document.getElementsByClassName("trump-button"))
        console.log(document.getElementsByClassName("trump-button")[1])
        console.log(document.getElementsByClassName("trump-button")[0])

        // 静音
        document.getElementsByClassName("trump-button")[1].click()
        // 播放
        document.getElementsByClassName("trump-button")[0].click()
        document.getElementsByClassName("trump-button")[1].click()
    }


    waitForKeyElements(".trump-bottom-controls > button:nth-child(1) > svg:nth-child(1)", autoplay);

})();