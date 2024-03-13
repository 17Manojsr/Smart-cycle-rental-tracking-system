const bikeData = [
    {
      name: "SMARTPEDAL PRO",
      type: "Pedal-assist Electric Cycle",
      price: 38,
      image: "Images/cycle1.jpeg",
      tag: "Free Cancellation",
    },
    {
      name: "INTELLICYCLE ELITE X",
      type: "Folding Electric Cycle",
      price: 40,
      image: "Images/cycle2.jpeg",
      tag: "Free Cancellation",
    },
    {
      name: "ECORIDE NAVIGATOR",
      type: "Hybrid Electric Cycle",
      price: 50,
      image: "Images/cycle3.jpg",
      tag: "Free Cancellation",
    },
    {
      name: "SMART CRUISER DURO",
      type: " Electric Cruiser Cycle",
      price: 25,
      image: "Images/cycle4.webp",
      tag: "Free Cancellation",
    },
    {
      name: "URBANTRACK EVO",
      type: "Urban Commuter Bike",
      price: 42,
      image: "Images/cycle5.jpeg",
      tag: "Free Cancellation",
    },
    {
      name: "TECHCYCLE PRIME",
      type: "High-Tech Electric Bike",
      price: 47,
      image: "Images/cycle6.jpeg",
      tag: "Free Cancellation",
    },
    {
      name: "INTELLICYCLE ELITE",
      type: "Electric Mountain Cycle",
      price: 35,
      image: "Images/cycle7.jpeg",
      tag: "Free Cancellation",
    },
    {
      name: "ECORIDER GENESIS",
      type: "Eco-friendly City Bike",
      price: 29,
      image: "Images/cycle8.jpeg",
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
                <a href="#" class="book-btn">Book Cycle</a>
                <span class="tag">${bike.tag}</span>
             </div> 
 `;

 const bikeContent = document.querySelector('.bikes-content');
 // creaate bike box 
 bikeData.forEach((bike) =>{
  const bikeBoxHtml = createBikeBox(bike);
  bikeContent.insertAdjacentHTML('beforeend', bikeBoxHtml);
 })



let menu = document.querySelector('.menu-icon');
menu.onclick = () => {
    menu.classList.toggle("move");
}