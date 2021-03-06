
// intersection observer is from tutorial: https://www.youtube.com/watch?v=huVJW23JHKQ&t=811s
const faders= document.querySelectorAll(".fade-in");
const slidersLeft= document.querySelectorAll(".slide-left");



const appearOptions= {
  threshold: 1,
  rootMargin: "0px 0px 360px 0px"
};


const appearOnScroll= new IntersectionObserver(function
  (entries, appearOnscrool){
    entries.forEach(entry => {
      if(!entry.isIntersecting){
        return;
      }else{
        entry.target.classList.add('appear');
        appearOnScroll.unobserve(entry.target);
      }

    });
  }, appearOptions);



faders.forEach(fader =>{
  appearOnScroll.observe(fader);
});

slidersLeft.forEach(slider =>{
  appearOnScroll.observe(slider);
});