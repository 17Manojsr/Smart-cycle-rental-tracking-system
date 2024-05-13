const bikeData = [
    {
      name: "SMARTPEDAL PRO",
      type: "Pedal-assist Electric Cycle",
      price: 38,
      image: "images/cycle1.png",
      tag: "Free Cancellation",
    },
    {
      name: "INTELLICYCLE ELITE X",
      type: "Folding Electric Cycle",
      price: 40,
      image: "images/cycle2.png",
      tag: "Free Cancellation",
    },
    {
      name: "ECORIDE NAVIGATOR",
      type: "Hybrid Electric Cycle",
      price: 50,
      image: "images/cycle3.png",
      tag: "Free Cancellation",
    },
    {
      name: "SMART CRUISER DURO",
      type: " Electric Cruiser Cycle",
      price: 25,
      image: "images/cycle4.png",
      tag: "Free Cancellation",
    },
    {
      name: "URBANTRACK EVO",
      type: "Urban Commuter Bike",
      price: 42,
      image: "images/cycle5.png",
      tag: "Free Cancellation",
    },
    {
      name: "TECHCYCLE PRIME",
      type: "High-Tech Electric Bike",
      price: 47,
      image: "images/cycle6.png",
      tag: "Free Cancellation",
    },
    {
      name: "INTELLICYCLE ELITE",
      type: "Electric Mountain Cycle",
      price: 35,
      image: "images/cycle7.png",
      tag: "Free Cancellation",
    },
    {
      name: "ECORIDER GENESIS",
      type: "Eco-friendly City Bike",
      price: 29,
      image: "images/cycle8.png",
      tag: "Free Cancellation",
    },
    {
      name: "ECO VELO",
      type: "Eco-friendly hybrid e-bike",
      price: 39,
      image: "images/cycle9.png",
      tag: "Free Cancellation",
    },
    {
      name: "Velocity X",
      type: "Sport Cycling Bike",
      price: 50,
      image: "images/cycle10.png",
      tag: "Free Cancellation",
    },
  ];

  //function to create bike
  const createBikeBox = (bike) => `
  <div class="bike-box">
                <img src="${bike.image}" alt="" class="box-img">
                <div class="title-price">
                     <div class="title-data">
                         <h2>${bike.name}</h2>
                         <p>${bike.type}</p>
                     </div>
                     <h3 class="bike-price">₹${bike.price}<span>/hour</span></h3>
                </div> 
                <a href="search/checkout.html" class="book-btn">Book Cycle</a>
                <span class="tag">${bike.tag}</span>
             </div> 
 `;

 const bikeContent = document.querySelector('.bikes-content');
 // creaate bike box 
 bikeData.forEach((bike) =>{
  const bikeBoxHtml = createBikeBox(bike);
  bikeContent.insertAdjacentHTML('beforeend', bikeBoxHtml);
 })


 document.addEventListener('DOMContentLoaded', function() {
  var swiper = new Swiper(".destination-container", {
    slidesPerView: 1,
    spaceBetween: 30,
    centeredSlides: true,
    loop: true, // Enable loop mode
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
     // Disable navigation arrows
  });
});
  



let menu = document.querySelector('.menu-icon');
menu.onclick = () => {
    menu.classList.toggle("move");
}


