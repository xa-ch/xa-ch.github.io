document.querySelectorAll(".card")
.forEach(card=>{

card.addEventListener(
"mouseenter",
()=>{

card.style.transform="translateX(8px)";

});


card.addEventListener(
"mouseleave",
()=>{

card.style.transform="translateX(0)";

});

});