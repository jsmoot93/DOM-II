// Your code goes here
const btn1 = document.getElementById('btn1');
btn1.addEventListener('mouseover', function(eventObject){
 console.log(`btn1 left!`);
  TweenMax.to("#btn1", 1, {x: -100, ease: Bounce.easeOut});
});

const btn2 = document.getElementById('btn2');
btn2.addEventListener('dblclick', function(eventObject){
 console.log(`btn1 falldown!`);
  TweenMax.to("#btn2", 1, {y: 90, ease: Bounce.easeOut});
});

const btn3 = document.getElementById('btn3');
btn3.addEventListener('click', function(eventObject){
 console.log(`btn1 right!`);
  TweenMax.to("#btn3", 1, {x: 100, ease: Bounce.easeOut});
});

const navi = document.querySelector('.logo-heading');
navi.addEventListener('wheel', function(eventObject){
 console.log(`fun is elastic!`);
  TweenMax.to(".logo-heading", 2, {x: 100, ease: Elastic.easeOut.config(1.1, 0.4)});
});

const intro = document.querySelector('.intro h2');
intro.addEventListener('copy', function(eventObject){
 console.log(`intro falls elasticly`);
  TweenMax.to(".intro h2", 2, {y: 100, ease: Elastic.easeOut.config(1.1, 0.4)});
});

const drag = document.querySelector('.intro p');
drag.addEventListener('drag', function(eventObject){
 console.log(`drag test`);
  TweenMax.to(".intro p", 1, {x: 100});
});

const up = document.querySelector('.inverse-content .text-content h2');
up.addEventListener('mouseup', function(eventObject){
 console.log(`mouseup test`);
  TweenMax.to(".inverse-content .text-content h2", 1, {x: 100});
});

const context = document.querySelector('.inverse-content .text-content p');
context.addEventListener('contextmenu', function(eventObject){
 console.log(`context test`);
  TweenMax.to(".inverse-content .text-content p", 2, {x: 100, ease: Elastic.easeOut.config(5, 0.4)});
});

const sun = document.getElementById('sun');
sun.addEventListener('mouseleave', function(eventObject){
 console.log(`sun is sad you left him...`);
  TweenMax.to("#sun", 1, {y: 100});
});

const island = document.getElementById('island');
island.addEventListener('copy', function(eventObject){
 console.log(`Atlantis refuses to be copied!!!!`);
  TweenMax.to("#island", 1, {y: 100});
});