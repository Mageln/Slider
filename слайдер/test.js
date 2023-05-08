let entities = [
  {
    cityName: 'Rostov-on-Don LCD admiral',
    apartamentArea: '81 m2',
    repairTime: '3.5 months',
    repairCost: 'Upon request',
    url: './img/1.png',
    title: 'Rostov-on-Don, Admiral'
  },
  {
    cityName: 'Sochi Thieves',
    apartamentArea: '105 m2',
    repairTime: '4 months',
    repairCost: 'Upon request' ,
    url: './img/2.png' ,
    title: 'Sochi Thieves' 
  },

  {
    cityName: 'Rostov-on-Don Patriotic',
    apartamentArea: '93 m2',
    repairTime: '3 months',
    repairCost: 'Upon request' ,
    url: './img/3.png' ,
    title: 'Rostov-on-Don Patriotic'
  }
];

let cityName = document.querySelectorAll('.completed__rostov');
  let apartamentArea = document.querySelectorAll('.completed__metre');
  let repairTime = document.querySelectorAll('.completed__months');
  let repairCost = document.querySelectorAll('.completed__repair-coast');
  let title = document.querySelectorAll('.right-item');

  let arrowsDots = document.querySelectorAll('.arrow-btn');
 
let index = 0;

function initSlider(index){

  initImages();
  initDots();
  initNav();
  initArrows();
  //changeSlideText();
 
  function changeSlideText(index){
  document.querySelector(".completed__rostov").innerText = entities[index].cityName;
  document.querySelector(".completed__metre").innerText = entities[index].apartamentArea;
  document.querySelector(".completed__months").innerText = entities[index].repairTime;
  document.querySelector(".completed__repair-coast").innerText = entities[index].repairCost;
  }
 
 function initImages(){
 let imagesSlider = document.querySelector(".slider-track");
 entities.forEach((img , index) => {
   let imageDiv = `
   <img class="imgs n${index} ${index === 0? "active" : ""}" src="${img.url}" data-index="${index}">`;
   imagesSlider.innerHTML += imageDiv;
 });
 
 }
 
 function initArrows(){
   arrowsDots.forEach(arrow => {
     arrow.addEventListener("click" , function() {
       let curNumber = +document.querySelector(".imgs.active").dataset.index;
       if(arrow.classList.contains("prev")) {
         index = curNumber === 0? entities.length - 1 : curNumber -1;
       } else {
         index = curNumber === entities.length - 1? 0 : curNumber +1;
       }
       moveSlider(index);
     });
   });
 }
 
 function moveSlider(num){
   changeSlideText(num)
   document.querySelector(".imgs.active").classList.remove("active");
   document.querySelector(`.imgs.n${num}`).classList.add("active");
 
   document.querySelector(".right-item.active").classList.remove("active");
   document.querySelector(`.right-item.n${num}`).classList.add("active");

   document.querySelector(".circle.active").classList.remove("active");
   document.querySelector(`.circle.n${num}`).classList.add('active');
 }
 
 function initDots(){
      let circleNav = document.querySelector('.section-2-slider-dots')
   entities.forEach((item, index) => {
     let dotDiv = `<div class="circle n${index} ${index === 0? "active" : ""}" data-dots="${index}"></div>`;
     circleNav.innerHTML += dotDiv;
   });
   document.querySelectorAll(".circle").forEach(dotDiv => {
     dotDiv.addEventListener("click" , function() {
       moveSlider(this.dataset.dots);
     });
   });
 }
 
 function initNav(){
 let blockNav = document.querySelector(".right-list");
 entities.forEach((item ,index) => {
   let navDiv = `<li><div class="right-item n${index} ${index === 0? "active" : ""}" data-title="${index}">${entities[index].title}</div></li>`;
   blockNav.innerHTML+= navDiv;
   });
   document.querySelectorAll(".right-item").forEach(navDiv => {
     navDiv.addEventListener("click" , function() {
       moveSlider(this.dataset.title);
     });
   });
 }
 
}
 
 
 
 document.addEventListener("DOMContentLoaded" , initSlider(index));