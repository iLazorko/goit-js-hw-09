!function(){var t={btnStart:document.querySelector("[data-start]"),btnStop:document.querySelector("[data-stop]"),bodyEl:document.querySelector("body")};t.btnStart.addEventListener("click",(function(){idTimer=setInterval((function(){t.bodyEl.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16)),t.btnStart.setAttribute("disabled",!0),t.btnStop.removeAttribute("disabled")}),1e3)})),t.btnStop.addEventListener("click",(function(){clearInterval(idTimer),t.btnStart.removeAttribute("disabled"),t.btnStop.setAttribute("disabled",!0)})),t.btnStop.setAttribute("disabled",!0)}();
//# sourceMappingURL=01-color-switcher.ff92173f.js.map