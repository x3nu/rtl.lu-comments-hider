// ==UserScript==
// @name         rtl.lu comments hider
// @namespace    https://github.com/x3nu/rtl.lu-comments-hider
// @version      1.0
// @description  Hiding all comments on rtl.lu
// @author       x3nu
// @homepage     https://github.com/x3nu/rtl.lu-comments-hider
// @match        *://www.rtl.lu/*
// @grant        GM_addStyle
// ==/UserScript==

GM_addStyle("rtl-comments { display: none; }");