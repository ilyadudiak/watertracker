let counter = document.querySelector(".counter");
let water = document.querySelector(".water__item");
let button = document.querySelector(".addWater");
let body = document.querySelector("body");
let sexWrapper = document.querySelector(".sex");

let types = document.querySelectorAll(".water__type");
let count = 0;
let reply = document.querySelector(".reply");
counter.innerHTML = count;
let padding = 0;

let currentType = "i1";


let item1 = 300;
let item2 = 500;
let item3 = 1000;
let multer = 1;
let goal;

types[0].classList.add("water__type-focus");


let currentMl = item1;




function addWater() {
    if (padding < 50 && count < goal) {
        if (sex == "male") {
            padding += 5 * multer;
        } else if (sex == "female") {
            padding += 6.3 * multer;
        }

        water.style.padding = `${padding}% ${padding}%`;
    }

    if (count < (goal - 500)) {
        reply.innerHTML = "Недостаточно!";
    } else if (count <= (goal + 500)) {
        reply.innerHTML = "Отлично!";
    } else if (count > (goal + 500)) {
        reply.innerHTML = "Ну это уже перебор!";
    }
    count += currentMl;
    counter.innerHTML = count;
}

function chooseType() {
    types.forEach(element => {
        element.classList.remove("water__type-focus");
    });
    this.classList.add("water__type-focus");
    currentType = this.value;
    if (this.value == "i1") {
        multer = 1;
        currentMl = item1;
    } else if (this.value == "i2") {
        if (sex == "male") {
            multer = 1.65;
        } else if (sex == "female") {
            multer = 1.6;
        }

        currentMl = item2;
    } else if (this.value == "i3") {
        if (sex == "male") {
            multer = 3.35;
        } else if (sex == "female") {
            multer = 2.66;
        }

        currentMl = item3;
    }
}


types.forEach(element => {
    element.addEventListener("click", chooseType);
});
let sex;
function chooseSex(gender) {
    sex = gender;
    sexWrapper.style.display = "none";
    if (gender == "male") {
        goal = 3000;
    } else if (gender == "female") {
        goal = 2500;
    }
}

