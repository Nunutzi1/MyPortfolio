(()=>{"use strict";var e=document.getElementById("header-toggle"),t=document.getElementById("main"),n=document.getElementById("nav-close");function c(){document.getElementById("main").classList.remove("show-menu")}e&&e.addEventListener("click",(function(){t.classList.add("show-menu")})),n&&n.addEventListener("click",(function(){t.classList.remove("show-menu")})),document.querySelectorAll(".nav__link").forEach((function(e){return e.addEventListener("click",c)})),window.addEventListener("scroll",(function(){var e=document.getElementById("header");this.scrollY>=50?e.classList.add("scroll-header"):e.classList.remove("scroll-header")}));var o=document.querySelectorAll("section[id]");window.addEventListener("scroll",(function(){var e=window.pageYOffset;o.forEach((function(t){var n=t.offsetHeight,c=t.offsetTop-58,o=t.getAttribute("id");e>c&&e<=c+n?document.querySelector(".nav__menu a[href*="+o+"]").classList.add("active-link"):document.querySelector(".nav__menu a[href*="+o+"]").classList.remove("active-link")}))}))})();