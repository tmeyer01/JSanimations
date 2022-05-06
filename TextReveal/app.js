const tl = gsap.timeline({
  defaults: { durantion: 0.75, ease: "Power3.easeOut" },
});


//Animating Hero image on load 
tl.fromTo(
  ".hero-img",
  { scale: 1.3, borderRadius: "0rem" },
  { 
    scale: 1, 
    borderRadius: "2rem", 
    delay: 0.35, 
    durantion: 2.5,
    ease: 'elastic.out(1.5,1)'
  }
);

//Animating One text in hero 
tl.fromTo(
  ".cta1", 
  { x: "100%", opacity: 0 }, 
  { x:0 , opacity: 1 }, "<20%" 
);
//Animating shop text in hero
tl.fromTo(
  ".cta3", 
  { x: "-100%", opacity: 0 }, 
  { x:0 , opacity: 1 }, "<20%" 
);
//Animating stop text in hero
tl.fromTo(
  ".cta2", 
  { y: "100%", opacity: 0 }, 
  { y:0 , opacity: 1 }, "<20%" 
);

//Animating to text in hero
tl.fromTo(
  ".cta4", 
  { x: "100%", opacity: 0 }, 
  { x:0 , opacity: 1 }, "<20%" 
);
//Animating skin text in hero
tl.fromTo(
  ".cta6", 
  { x: "-100%", opacity: 0 }, 
  { x:0 , opacity: 1 }, "<20%" 
);
//Animating stop text in hero
tl.fromTo(
  ".cta5", 
  { y: "100%", opacity: 0 }, 
  { y:0 , opacity: 1 }, "<20%" 
);

tl.fromTo('.cta-button', {y: 20, opacity: 0}, {y: 0, opacity: 1}, "<")


//Split nav text 
const logo = document.querySelector('.logo');
const letters = logo.textContent.split(""); 

logo.textContent = "";

letters.forEach((letter) => {
  logo.innerHTML += '<span class="letter">'+ letter + '</span>'
})

gsap.set('.letter', {display: "inline-block" });

gsap.fromTo('.letter', {y: "100%"}, {y: 0, delay: 1, stagger: 0.05, ease: 'back.out(3)'})

