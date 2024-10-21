const scrollRevealOption={
    distance:"50px",
    orgin:'bottom',
    duration:'1000',
}


ScrollReveal().reveal('.left-Section .self ',{
    ...scrollRevealOption,
    delay:500,
})

ScrollReveal().reveal('.social-icon i',{
    ...scrollRevealOption,
    delay:1000,
})


ScrollReveal().reveal('.right-Section img',{
    ...scrollRevealOption,
    // delay:500,
    origin:'right'
})


// about 

ScrollReveal().reveal('.right-about h2',{
    ...scrollRevealOption,
    delay:500,
})
ScrollReveal().reveal('.front',{
    ...scrollRevealOption,
    delay:1000,
})
ScrollReveal().reveal('.right-about .p-text',{
    ...scrollRevealOption,
    delay:1500,
    // interval:500,
})
ScrollReveal().reveal('.left-about img',{
    ...scrollRevealOption,
    // delay:500,
    origin:'left'
})


ScrollReveal().reveal('.img-container ul li  ',{
    ...scrollRevealOption,
    delay:300,
    interval:400,
})
ScrollReveal().reveal(' form ',{
    ...scrollRevealOption,
    delay:500,
  
})




