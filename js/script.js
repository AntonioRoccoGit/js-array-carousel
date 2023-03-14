//creiamo il nostro array di immagini
const userImages = ["img/01.jpg", "img/02.jpg", "img/03.jpg", "img/04.jpg", "img/05.jpg",];

//seleziono gli elementi del dom che andranno manipolati
let sliderItemsContainer = document.querySelector(".slider-items"); //contenitore img
const nextUp = document.querySelector(".next-up");// bottone next
const prevDown = document.querySelector(".prev-down");//bottone prev
console.log(sliderItemsContainer, nextUp, prevDown); //debug

for (let i = 0; i < userImages.length; i++) {
    
    let currentImg = userImages[i];
    
    sliderItemsContainer.innerHTML +=  
    `<div class="item">
    <img src="${currentImg}" alt="">
    </div>`;
};


//ULTIMO SUPER BONUS
let thumbNailsItems = document.querySelector(".thumbnails-image");
for (let i = 0; i < userImages.length; i++) {
    
    let currentImg = userImages[i];

    thumbNailsItems.innerHTML +=  
    `<div class="thumb-item">
        <img src="${currentImg}" alt="">
    </div>`;
};



//setto stato iniziale ultimo bonus
const thumbNailsItemsArrey = document.querySelectorAll(".thumb-item");
console.log(thumbNailsItemsArrey);
//setto lo stato iniziale dove appare almeno la prima immagine
const sliderItemsArray = document.querySelectorAll(".item");

let itemCounter = 0;

sliderItemsArray[itemCounter].classList.add("active");
thumbNailsItemsArrey[itemCounter].classList.add("active");


//impostiamo il bottone next
nextUp.addEventListener("click", function(){
    if (itemCounter === sliderItemsArray.length - 1){

        sliderItemsArray[itemCounter].classList.remove("active");
        thumbNailsItemsArrey[itemCounter].classList.remove("active");

        itemCounter = 0; 

        sliderItemsArray[itemCounter].classList.add("active");
        thumbNailsItemsArrey[itemCounter].classList.add("active");
    }else {

        //rimuovo classe precedente
        sliderItemsArray[itemCounter].classList.remove("active");
        thumbNailsItemsArrey[itemCounter].classList.remove("active");

        //aumento il contantore
        itemCounter++;

        //aggiungo la classe  al nuovo item
        sliderItemsArray[itemCounter].classList.add("active");
        thumbNailsItemsArrey[itemCounter].classList.add("active");
    }
});

//imposto il bottone prev
prevDown.addEventListener("click", function(){
    //rimuovo classe precedente
    if (itemCounter === 0){

        sliderItemsArray[itemCounter].classList.remove("active");
        thumbNailsItemsArrey[itemCounter].classList.remove("active");

        itemCounter = sliderItemsArray.length - 1;

        sliderItemsArray[itemCounter].classList.add("active");
        thumbNailsItemsArrey[itemCounter].classList.add("active");

    }else {

        sliderItemsArray[itemCounter].classList.remove("active");
        thumbNailsItemsArrey[itemCounter].classList.remove("active");
        
        //aumento il contantore
        itemCounter--;

        //aggiungo la classe  al nuovo item
        sliderItemsArray[itemCounter].classList.add("active");
        thumbNailsItemsArrey[itemCounter].classList.add("active");
    };
});