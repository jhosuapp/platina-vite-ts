(function(i){typeof define=="function"&&define.amd?define(i):i()})(function(){"use strict";const i="",d=t=>{var a;const e=document.createElement("div");e.classList.add("Jselect");const c=`
                                <div class="Jselect__dinamic-value" data-selector="${t}">
                                    <span>Selecciona una opción</span>
                                </div>
                                <div class="Jselect__options">

                                </div>
                            `;e.innerHTML=c;const s=document.querySelector(t);return(a=s==null?void 0:s.parentNode)==null||a.insertBefore(e,s.nextElementSibling),e};(function(t,e){t.Jselect=e(t)})(typeof window<"u"?window:globalThis,function(t){return function(c,s){document.querySelector(c);const a=document.querySelectorAll(`${c} option`),l=d(c).querySelector(".Jselect__options");a.forEach(n=>{const o=document.createElement("p");o.textContent=n==null?void 0:n.textContent,o.dataset.value=n==null?void 0:n.value,l==null||l.append(o)})}}),window.addEventListener("load",()=>{new Jselect("#jselect-personality"),new Jselect("#jselect-personality-test")})});
//# sourceMappingURL=mainscript.umd.cjs.map
