// gsap.to('.text',{y: 50, opacity: 0, duration: 1})

// gsap.fromTo('.text', {opacity: 0, y: 80}, {opacity: 1, y:0, duration: 1})

const tl = gsap.timeline({defaults:{duration: 0.75, ease: "power1.out",}})

tl.fromTo('.cookie-container', {scale: 0}, {scale: 1})
tl.fromTo('.cookie', {opacity: 0, x:-50, rotation: '-45deg'}, {opacity: 1, x:0, rotation: '0deg'})
tl.fromTo('.text', {x:30, opacity:0}, {x: 0, opacity: 1}, '<')