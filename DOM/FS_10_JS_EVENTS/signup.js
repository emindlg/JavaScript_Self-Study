//DOM recap, DOM traversing


/*let navbarPathItemText = document.getElementsByClassName("nav__item")[0].innerText;
console.log(navbarPathItemText);

let navbarPathItemText2 = document.getElementsByClassName("nav__link")[0].innerText;
console.log(navbarPathItemText2);

let navbarPathItemText3 =document.getElementsByClassName("nav__links")[0].children[0].innerText;
console.log(navbarPathItemText3);

let navbarPathItemText4 = document.getElementsByClassName("nav__links")[0].firstElementChild.innerText;
console.log(navbarPathItemText4);*/


//Yukarıdaki herbir yöntem aynı sonuca ulaşıyor. DOM Traversing yöntemi


/*let navbarPathsLi = document.querySelector(".nav__item");
console.log(navbarPathsLi);

let navbarInstructorLi = document.querySelectorAll(".nav__item")[1];
console.log(navbarInstructorLi);*/

let navbarPathsLi = document.querySelectorAll(".nav__item")[2];
console.log(navbarPathsLi);

//window.addEventListener("event", "func()"); event tetiklendiğinde func çalıştır demek.
window.addEventListener("load", ()=>{
    console.log("window loaded");
});

// window.onload = func()
window.onload = () =>{
    console.log("window onloaded")
}

let navbarStudentsLi = document.querySelectorAll(".nav__item")[2];
console.log(navbarStudentsLi);

// // // 🔥🔥🔥🔥🔥  rgb rndom color(rgb(255,255,255) onclick of Students Navbar (CODE CHALLENGE)  🔥🔥🔥🔥🔥

const randomNumber = () => Math.round(Math.random() * 255);
const randomColor = () => `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`;




navbarStudentsLi.addEventListener("click", ()=>{
    navbarStudentsLi.style.backgroundColor = randomColor();
});


/* ------------ */


let lastName = document.querySelector("input[name=last_name]");
let charSpan = document.getElementById("charCount");

lastName.addEventListener("keyup", ()=>{
    charSpan.innerText = lastName.value.length + "/40";  
});


//🔥🔥🔥🔥🔥 LAST NAME İNPUT VALUE 0 OLDUĞUNDA SPAN gözükmesin 🔥🔥🔥🔥🔥 homework?????????????



let birthdayPicker = document.querySelector("[name=birthday]");
birthdayPicker.addEventListener("change", ()=>{
    console.log(typeof birthdayPicker.value);
    let year = new Date().getFullYear() - new Date(birthdayPicker.value).getFullYear();
    alert("you are " + year + "years old.");
});

