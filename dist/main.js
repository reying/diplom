!function(){"use strict";function e(e,r){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,r){if(e){if("string"==typeof e)return t(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?t(e,r):void 0}}(e))||r&&e&&"number"==typeof e.length){n&&(e=n);var o=0,l=function(){};return{s:l,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:l}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,c=!0,a=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return c=e.done,e},e:function(e){a=!0,i=e},f:function(){try{c||null==n.return||n.return()}finally{if(a)throw i}}}}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function n(e,t){var r;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=function(e,t){if(e){if("string"==typeof e)return o(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?o(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,l=function(){};return{s:l,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:l}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,c=!0,a=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return c=e.done,e},e:function(e){a=!0,i=e},f:function(){try{c||null==r.return||r.return()}finally{if(a)throw i}}}}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function l(e,t){var r;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=function(e,t){if(e){if("string"==typeof e)return i(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?i(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,c=!0,a=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return c=e.done,e},e:function(e){a=!0,l=e},f:function(){try{c||null==r.return||r.return()}finally{if(a)throw l}}}}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var c,a,s,u,d,y;u=document.querySelector(".header-contacts__arrow"),d=document.querySelector(".header-contacts__phone-number-accord"),y=d.querySelectorAll("a"),u.addEventListener("click",(function(){"0"===getComputedStyle(y[0]).opacity?(d.style.top="30px",y.forEach((function(e){return e.style.opacity=1}))):(d.style.top="0px",y.forEach((function(e){return e.style.opacity=0})))})),a=document.querySelector("body"),s=function(e,t){t.preventDefault();var r=e.getAttribute("href").substring(1),n=document.getElementById(r);r&&n.scrollIntoView({behavior:"smooth",block:"start"})},a.addEventListener("click",(function(e){var t=e.target,r=document.querySelector(".popup-dialog-menu"),n=document.documentElement.clientWidth,o=document.documentElement.clientHeight;t.closest(".menu__icon")&&(n>=576?r.style.right="645px":r.style.top="".concat(o,"px"));var l=function(){n>=576?r.style.right="0px":r.style.top="0px"};t.closest(".close-menu")&&l(),t.closest(".menu-link")&&(l(),s(t.closest(".menu-link"),e)),t.closest(".button-footer")&&s(t.closest(".button-footer").firstChild,e)})),function(){var e=document.querySelector("body"),t=document.querySelector(".popup-repair-types"),r=document.querySelector(".popup-privacy"),n=document.querySelector(".popup-consultation");e.addEventListener("click",(function(e){var o=e.target;(o.closest(".link-list-menu")||o.closest(".link-list-repair"))&&o.closest("a")&&(e.preventDefault(),t.style.visibility="visible"),o.closest(".popup-repair-types")&&o.closest(".close")&&(t.style.visibility="hidden"),o.matches(".link-privacy")&&(r.style.visibility="visible"),o.closest(".popup-privacy")&&o.closest(".close")&&(r.style.visibility="hidden"),o.closest(".button_wide")&&(n.style.visibility="visible"),o.closest(".popup-consultation")&&o.closest(".close")&&(n.style.visibility="hidden")}))}(),(c=function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"+7 (___) ___-__-__",n=document.querySelectorAll(t);function o(e){var t=e.keyCode,n=r,o=n.replace(/\D/g,""),l=this.value.replace(/\D/g,""),i=0,c=n.replace(/[_\d]/g,(function(e){return i<l.length?l.charAt(i++)||o.charAt(i):e}));-1!==(i=c.indexOf("_"))&&(c=c.slice(0,i));var a=n.substr(0,this.value.length).replace(/_+/g,(function(e){return"\\d{1,"+e.length+"}"})).replace(/[+()]/g,"\\$&");(!(a=new RegExp("^"+a+"$")).test(this.value)||this.value.length<5||t>47&&t<58)&&(this.value=c),"blur"===e.type&&this.value.length<5&&(this.value="")}var l,i=e(n);try{for(i.s();!(l=i.n()).done;){var c=l.value;c.addEventListener("input",o),c.addEventListener("focus",o),c.addEventListener("blur",o)}}catch(e){i.e(e)}finally{i.f()}})(".feedback__input-input"),c(".feedback-block__form-input_phone"),function(){var e,t,n,o,l,i,c,a,s,u,d=document.querySelector("body");d.addEventListener("mouseover",(function(e){var t=e.target;if(t.matches(".formula-item__icon-inner-text")){var r=t.parentNode.childNodes[1],n=t.closest(".formula-item");window.pageYOffset+r.getBoundingClientRect().top<window.pageYOffset&&(n.classList.add("formula-item__buttom"),r.classList.add("formula-item-popup__buttom")),n.classList.add("active-item")}})),d.addEventListener("mouseout",(function(e){var t=e.target;if(t.matches(".formula-item__icon-inner-text")){var r=t.parentNode.childNodes[1],n=t.closest(".formula-item");r.classList.contains("formula-item-popup__buttom")&&(n.classList.remove("formula-item__buttom"),r.classList.remove("formula-item-popup__buttom")),n.classList.remove("active-item")}})),e=document.querySelector(".formula-slider-wrap"),t=document.querySelector("#formula-arrow_right"),n=document.querySelector("#formula-arrow_left"),o=Math.floor(100/3),l=document.querySelectorAll(".formula-slider__slide"),i=document.querySelector(".formula-slider"),c=function(){i.innerHTML="";for(var e=0;e<5;e++)l[e].classList.remove("active-item"),2===e&&l[e].classList.add("active-item"),i.append(l[e])},a=function(){var e=l[l.length-1].cloneNode(!0);l.splice(l.length-1),l.unshift(e)},s=function(){a(),c()},u=function(){var e;e=l[0].cloneNode(!0),l.splice(0,1),l.push(e),c()},function(){var d;!function(){e.classList.add("slider"),i.classList.add("slider__wrap");var t,n=function(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var o=0,l=function(){};return{s:l,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:l}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,c=!0,a=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return c=e.done,e},e:function(e){a=!0,i=e},f:function(){try{c||null==n.return||n.return()}finally{if(a)throw i}}}}(l);try{for(n.s();!(t=n.n()).done;)t.value.classList.add("slider__item")}catch(e){n.e(e)}finally{n.f()}}(),(d=document.getElementById("sliderCarousel-style"))||((d=document.createElement("style")).id="sliderCarousel-style"),d.textContent="\n            .slider {\n                overflow: hidden !important;\n            }\n    \n            .slider__wrap {\n                display: flex !important;\n                transition: transform 0.5s !important;\n                will-change: transform !important;\n            }\n    \n            .slider__item {\n                display: flex !important;\n                align-items: center;\n                justify-content: center;\n                flex: 0 0 ".concat(o,"% !important;\n                width: 157px;\n                margin: auto 0 !important;\n            }\n            "),document.head.appendChild(d),n.addEventListener("click",s),t.addEventListener("click",u);var y=[];l.forEach((function(e){return y.push(e)})),l=[],y.forEach((function(e){return l.push(e)})),a(),a(),c(),i.style.transform="translateX(-".concat(o,"%)")}()}(),function(){var e=document.getElementById("repair-types"),t=document.querySelector(".repair-types-slider"),r=document.querySelector(".nav-list-repair");document.querySelector(".slider-counter-content__total").textContent=t.children[0].children.length,document.querySelector("#nav-arrow-repair-left_base").style.display="none";for(var o=0,l=0,i=0,c=1;c<t.children.length;c++)t.children[c].style.display="none";e.addEventListener("click",(function(e){var c=e.target;if(c.closest(".repair-types-nav__item")){document.querySelectorAll(".repair-types-nav__item").forEach((function(e){return e.classList.remove("active")})),c.closest(".repair-types-nav__item").classList.add("active");var a,s=n(t.children);try{for(s.s();!(a=s.n()).done;)a.value.style.display="none"}catch(e){s.e(e)}finally{s.f()}var u=c.closest(".repair-types-nav__item").classList[2].replace(/\D+/i,""),d=document.querySelector(".types-repair".concat(u));d.style.display="block";for(var y=0;y<d.children.length;y++)d.children[y].style.display="none",0===y&&(d.children[y].style.display="block");document.querySelector(".slider-counter-content__current").firstChild.textContent=1,document.querySelector(".slider-counter-content__total").textContent=d.children.length,o=0}if(c.closest(".slider-arrow")){var f,p,m=n(document.querySelector(".repair-types-slider").children);try{for(m.s();!(p=m.n()).done;){var h=p.value;"none"!==h.style.display&&(f=h)}}catch(e){m.e(e)}finally{m.f()}for(var v=1;v<f.children.length;v++)f.children[v].style.display="none",f.children[v].style.position="absolute",f.children[v].style.top=0;c.closest(".slider-arrow_left")&&(f.children[o].style.display="none",0===o?o=f.children.length-1:o--,f.children[o].style.display="block"),c.closest(".slider-arrow_right")&&(f.children[o].style.display="none",o===f.children.length-1?o=0:o++,f.children[o].style.display="block"),document.querySelector(".slider-counter-content__current").firstChild.textContent=o+1}if(c.closest("#nav-arrow-repair-left_base")){var _=r.children[l].offsetWidth+10;i-=_,r.style.transform="translateX(-".concat(i,"px)"),0===l?document.querySelector("#nav-arrow-repair-left_base").style.display="none":(document.querySelector("#nav-arrow-repair-right_base").style.display="block",l--)}if(c.closest("#nav-arrow-repair-right_base")){var b=r.children[l].offsetWidth+10;i+=b,r.style.transform="translateX(-".concat(i,"px)"),l===r.children.length-4?document.querySelector("#nav-arrow-repair-right_base").style.display="none":(document.querySelector("#nav-arrow-repair-left_base").style.display="block",l++)}}))}(),function(){var e=document.getElementById("portfolio"),t=document.querySelector(".portfolio-slider"),r=document.querySelector(".popup-portfolio"),n=document.querySelector(".popup-portfolio-slider"),o=document.querySelector(".popup-portfolio-slider-wrap"),i=document.getElementById("popup_portfolio_left"),c=document.getElementById("popup_portfolio_right"),a=document.querySelector("#popup-portfolio-counter").querySelector(".slider-counter-content__total"),s=document.querySelector("#popup-portfolio-counter").querySelector(".slider-counter-content__current"),u=document.querySelectorAll(".popup-portfolio-text"),d=0,y=0,f=0;o.style.overflow="hidden",n.style.display="flex";var p,m=l(n.children);try{for(m.s();!(p=m.n()).done;){var h=p.value;h.style.display="flex",h.style.flex="0 0 100%"}}catch(e){m.e(e)}finally{m.f()}e.addEventListener("click",(function(e){var o=e.target;if(o.closest("#portfolio-arrow_right")){var c=t.children[d].offsetWidth;y+=c;var s,f=l(t.children);try{for(f.s();!(s=f.n()).done;)s.value.style.transform="translateX(-".concat(y,"px)")}catch(e){f.e(e)}finally{f.f()}d===t.children.length-4?document.querySelector("#portfolio-arrow_right").style.display="none":(document.querySelector("#portfolio-arrow_left").style.display="flex",d++)}if(o.closest("#portfolio-arrow_left")){var p=t.children[d].offsetWidth;y-=p;var m,h=l(t.children);try{for(h.s();!(m=h.n()).done;)m.value.style.transform="translateX(-".concat(y,"px)")}catch(e){h.e(e)}finally{h.f()}0===d?document.querySelector("#portfolio-arrow_left").style.display="none":(document.querySelector("#portfolio-arrow_right").style.display="flex",d--)}o.closest(".portfolio-slider__slide-frame")&&(r.style.visibility="visible",i.style.display="none",a.textContent=n.children.length,u[0].style.display="block")})),r.addEventListener("click",(function(e){var t=e.target;t.closest(".close")&&(r.style.visibility="hidden");var o=function(e){u.forEach((function(e){e.style.display="none"})),u[e-1].style.display="block"};t.closest(".popup-arrow_right")&&(f===n.children.length-2&&(c.style.display="none"),s.textContent=f+2,o(f+2),n.children[f].style.display="none",++f,i.style.display="block"),t.closest("#popup_portfolio_left")&&(1===f&&(i.style.display="none"),s.textContent=f,o(f),--f,c.style.display="block",n.children[f].style.display="block")}))}(),function(){var e=document.querySelector("body"),t=document.getElementById("transparency"),r=document.querySelectorAll(".transparency-item"),n=document.querySelector(".popup-transparency"),o=document.querySelectorAll(".popup-transparency-slider__slide"),l=document.getElementById("transparency-popup-counter"),i=0;e.addEventListener("click",(function(e){var c=e.target,a=function(e,t){e.forEach((function(e,r){e.style.display===t&&(i=r)}))},s=function(e,t){a(e,t),e[i].style.display="none",0===i?e[e.length-1].style.display=t:e[i-1].style.display=t},u=function(e,t){a(e,t),e[i].style.display="none",i===e.length-1?e[0].style.display=t:e[i+1].style.display=t};c.closest("#transparency")&&(c.closest("#transparency-arrow_left")&&s(r,"flex"),c.closest("#transparency-arrow_right")&&u(r,"flex"),c.closest(".transparency-item")&&(n.style.visibility="visible",a(r,"flex"),o.forEach((function(e){return e.style.display="none"})),t.clientWidth<=1090?(o[i].style.display="block",l.querySelector(".slider-counter-content__current").textContent=i+1):r.forEach((function(e,t){e===c.closest(".transparency-item")&&(o[t].style.display="block",l.querySelector(".slider-counter-content__current").textContent=t+1)})),l.querySelector(".slider-counter-content__total").textContent=o.length)),c.closest(".popup-transparency")&&(c.closest(".close")&&(n.style.visibility="hidden"),c.closest("#transparency_left")&&(s(o,"block"),a(o,"block"),l.querySelector(".slider-counter-content__current").textContent=i+1),c.closest("#transparency_right")&&(u(o,"block"),a(o,"block"),l.querySelector(".slider-counter-content__current").textContent=i+1))}));var c=function(){t.clientWidth<=1090?(r.forEach((function(e){return e.style.display="none"})),r[0].style.display="flex"):r.forEach((function(e){return e.style.display="flex"}))};window.addEventListener("resize",(function(){c()})),c()}()}();