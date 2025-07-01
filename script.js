


let b1 = document.querySelector('.b1');
let b2 = document.querySelector('.b2');
let b3 = document.querySelector('.b3');
let b4 = document.querySelector('.b4');
let title = document.querySelector('.title');
let card1= document.querySelector('.card1');
let card2= document.querySelector('.card2');
let card3= document.querySelector('.card3');
let cam =document.querySelector('.cam');
let scrollcontainer= document.querySelector('.scrollcontainer');
let cookie1=document.querySelector('.cookie1');
let cookie2=document.querySelector('.cookie2');
let cookie3 = document.querySelector('.cookie3');
let cookie4=document.querySelector('.cookie4');
let cookie5=document.querySelector('.cookie5');
let back = document.querySelector('.back')
let me = document.querySelector('.me');
let ab = document.querySelector('.ab');
let caption= document.querySelector('.caption');
let caption2 = document.querySelector('.caption2')





 card2.addEventListener('click', function(){
    cookie1.style.display='block';
    cookie2.style.display='block';
    cookie3.style.display='block';
    cookie4.style.display='block';
    cookie5.style.display='block';
    back.style.display='block';
    card1.style.display='none';
    card2.style.display='none';
    card3.style.display='none';
    ab.style.display='none';
    me.style.display='none';
    
    
 });
  
  

   

card1.addEventListener('click', function (){
    cam.style.display='block';
    scrollcontainer.style.display='block';
    back.style.display="block";
    caption.style.display='block';
    card1.style.display='none';
    card2.style.display='none';
    card3.style.display='none';
    caption2.style.display='none';

    
    
});

back.addEventListener('click', function(){
    card1.style.display="block";
    card2.style.display='block';
    card3.style.display='block';
    caption2.style.display='block';
    cam.style.display="none";
    scrollcontainer.style.display='none';
    back.style.display='none';
    caption.style.display='none';
});
