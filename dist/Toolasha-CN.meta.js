// ==UserScript==
// @name         Toolasha-CN
// @namespace    http://tampermonkey.net/
// @version      2.87.4-cn.4
// @description  Toolasha - Enhanced tools for Milky Way Idle. v2.87.4 汉化增强版 (zh-CN, N-1 button, CN market price auto-adjust, loadout sync fix)
// @author       Celasha and Claude, thank you to bot7420, DrDucky, Frotty, Truth_Light, AlphB, qu, and sentientmilk, for providing the basis for a lot of this. Thank you to Miku, Orvel, Jigglymoose, Incinarator, Knerd, and others for their time and help. Thank you to Steez for testing and helping me figure out where I'm wrong! Thank you to Tib for his generous contribution of the Character Cards. Thank you to Sapnas for -deeply- testing and singlehandedly help me improve performance. Special thanks to Zaeter for the name.
// @license      CC-BY-NC-SA-4.0
// @run-at       document-start
// @match        https://www.milkywayidle.com/*
// @match        https://test.milkywayidle.com/*
// @match        https://shykai.github.io/MWICombatSimulatorTest/dist/*
// @grant        GM_addStyle
// @grant        GM.xmlHttpRequest
// @grant        GM_xmlhttpRequest
// @grant        GM_notification
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        unsafeWindow
// @require      https://cdnjs.cloudflare.com/ajax/libs/mathjs/12.4.2/math.js
// @require      https://cdn.jsdelivr.net/npm/chart.js@3.7.0/dist/chart.min.js
// @require      https://cdn.jsdelivr.net/npm/chartjs-plugin-datalabels@2.0.0/dist/chartjs-plugin-datalabels.min.js
// @require      https://cdn.jsdelivr.net/gh/xiahuaaaa/Toolasha-CN@e3f4163f1920b7de813b4da3e057d108c5ca2ff1/dist/libraries/toolasha-i18n.js
// @require      https://cdn.jsdelivr.net/gh/xiahuaaaa/Toolasha-CN@e3f4163f1920b7de813b4da3e057d108c5ca2ff1/dist/libraries/toolasha-core.js
// @require      https://cdn.jsdelivr.net/gh/xiahuaaaa/Toolasha-CN@e3f4163f1920b7de813b4da3e057d108c5ca2ff1/dist/libraries/toolasha-utils.js
// @require      https://cdn.jsdelivr.net/gh/xiahuaaaa/Toolasha-CN@e3f4163f1920b7de813b4da3e057d108c5ca2ff1/dist/libraries/toolasha-market.js
// @require      https://cdn.jsdelivr.net/gh/xiahuaaaa/Toolasha-CN@e3f4163f1920b7de813b4da3e057d108c5ca2ff1/dist/libraries/toolasha-actions.js
// @require      https://cdn.jsdelivr.net/gh/xiahuaaaa/Toolasha-CN@e3f4163f1920b7de813b4da3e057d108c5ca2ff1/dist/libraries/toolasha-combat.js
// @require      https://cdn.jsdelivr.net/gh/xiahuaaaa/Toolasha-CN@e3f4163f1920b7de813b4da3e057d108c5ca2ff1/dist/libraries/toolasha-ui.js
// @downloadURL https://raw.githubusercontent.com/xiahuaaaa/Toolasha-CN/main/dist/Toolasha-CN.user.js
// @updateURL https://raw.githubusercontent.com/xiahuaaaa/Toolasha-CN/main/dist/Toolasha-CN.meta.js
// ==/UserScript==
