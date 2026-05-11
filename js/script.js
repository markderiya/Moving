// Animated text hover effect
document.addEventListener('DOMContentLoaded', () => {
  const words = document.querySelectorAll('.text-hover'); // каждый логотип / слово

  words.forEach(word => {
    const letters1 = word.querySelectorAll('.text-hover__elem-1 .char');
    const letters2 = word.querySelectorAll('.text-hover__elem-2 .char');

    letters1.forEach((el, i) => {
      el.style.transitionDelay = `${i * 0.05}s`;
    });

    letters2.forEach((el, i) => {
      el.style.transitionDelay = `${i * 0.05}s`;
    });
  });
});



// Counter from 0 to 100
  let current = 0;
  const max = 100;
  const counterElement = document.getElementById('counter');

  const timer = setInterval(() => {
    counterElement.textContent = current;
    if (current >= max) {
      clearInterval(timer);
    }
    current+=2;
  }, 50); 


// document.addEventListener('DOMContentLoaded', () => {
//   const letters = document.querySelectorAll('.text-hover__elem.text-hover__elem-1 .char');
//   letters.forEach((el, i) => {
//     el.style.transitionDelay = `${i * 0.05}s`;
//   });
// });
// document.addEventListener('DOMContentLoaded', () => {
//   const letters = document.querySelectorAll('.text-hover__elem.text-hover__elem-2 .char');
//   letters.forEach((el, i) => {
//     el.style.transitionDelay = `${i * 0.05}s`;
//   });
// });



// document.addEventListener('DOMContentLoaded', () => {
//   const letters = document.querySelectorAll('.text-hover__elem-contacts-1 .char');
//   letters.forEach((el, i) => {
//     el.style.transitionDelay = `${i * 0.05}s`;
//   });
// });

// document.addEventListener('DOMContentLoaded', () => {
//   const letters = document.querySelectorAll('.text-hover__elem-contacts-2 .char');
//   letters.forEach((el, i) => {
//     el.style.transitionDelay = `${i * 0.05}s`;
//   });
// });
