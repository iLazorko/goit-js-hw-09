const t={btnStart:document.querySelector("[data-start]"),btnStop:document.querySelector("[data-stop]"),bodyEl:document.querySelector("body")};let e=null;t.btnStart.addEventListener("click",(function(){e=setInterval((()=>{t.bodyEl.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`,t.btnStart.setAttribute("disabled",!0),t.btnStop.removeAttribute("disabled")}),1e3)})),t.btnStop.addEventListener("click",(function(){clearInterval(e),t.btnStart.removeAttribute("disabled"),t.btnStop.setAttribute("disabled",!0)})),t.btnStop.setAttribute("disabled",!0);
//# sourceMappingURL=01-color-switcher.dd72f5f4.js.map
