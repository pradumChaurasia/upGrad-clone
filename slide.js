
let x = 0;

let cards = document.querySelector(".alumini-cards")
let prev = document.querySelector(".btn-prev")
let next = document.querySelector(".btn-next")

next.addEventListener("click", () => {

    if (x > -190) {
        x -= 190
        cards.style.transform = `translateX(${x}px)`;


        console.log(x)
    }

    if (x === -190) {
        document.querySelector('.alumini-list').classList.add('hidden')
    }

})

prev.addEventListener("click", () => {

    if (x < 0) {
        x += 190;
        cards.style.transform = `translateX(${x}px)`;
        console.log(x)
    }

    if (x !== 190) {
        document.querySelector('.alumini-list').classList.remove('hidden')
    }

})


let y = 0
let prev1 = document.querySelector(".btn-prev1")
let next1 = document.querySelector(".btn-next1")

let mediaCards = document.querySelector(".media-card");

next1.addEventListener("click", () => {

    if (y > -515) {
        if (y === -300) {
            y -= 215
        } else {
            y -= 300
        }
        // y -= 300
        mediaCards.style.transform = `translateX(${y}px)`;
        console.log(y)
    }



})

prev1.addEventListener("click", () => {
    if (y < 0) {
        if (y === -215) {
            y += 215
        } else {
            y += 300
        }
        // y+=300
        mediaCards.style.transform = `translateX(${y}px)`;
        console.log(y)
    }


})

let z = 0
let prev2 = document.querySelector(".btn-prev2");
let next2 = document.querySelector(".btn-next2");

let imageCards = document.querySelector(".image-content");


next2.addEventListener("click", () => {

    if (z > -1065) {
        if (z === -855) {
            z -= 210
        } else {
            z -= 285
        }

        imageCards.style.transform = `translateX(${z}px)`;


        console.log(z)
    }


})

prev2.addEventListener("click", () => {

    if (z < 0) {
        if (z === -210) {
            z += 210
        } else {
            z += 285
        }
        imageCards.style.transform = `translateX(${z}px)`;


        console.log(z)
    }

})