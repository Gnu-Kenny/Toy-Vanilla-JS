const title = document.querySelector("#title");

const CLICKED_CLASS  = "clicked";
function handleClick(){
   title.classList.toggle(CLICKED_CLASS);
}

function init(){
    title.addEventListener("click", handleClick);
}

init();




//2021-02-07
// const title = document.querySelector('#title');

// const BASE_COLOR = "rgb(52, 73, 94)";
// const OTHER_COLOR = "#7f8c8d";

// function handleClick(){
//     const currentColor = title.style.color;
    
//     console.log(currentColor);
//     if(currentColor === BASE_COLOR){
//         title.style.color = OTHER_COLOR;
//     } else{
//         title.style.color = BASE_COLOR;
//     }
// }
// function init(){
//     title.style.color = BASE_COLOR;
//     title.addEventListener("mouseenter",handleClick);
// }

// init();







// const title = document.querySelector("#title");

// function handleClick(){
//     title.style.color = 'black';
// }

// //window.addEventListener("resize",handleResize);
// title.addEventListener("click", handleClick);




// const daysOfWeek = ['Mon','Tue',"Wed",'Thu',"Fri",'Sat','Sun'];
// const NicoInfo = {
//     name:'kenny',
//     age:33,
//     gender:"male",
//     isHandsome:true,
//     favMovie:["Along the gods","AboutTime","LOTR"],
//     favFood: [
//         {
//             name: "KimChi",
//             fatty: "false"
//         },
//         {
//             name: "Cheese burger",
//             fatty: true
//         }
//     ]
// }

//console.log(NicoInfo)

// function sayHello(name, age){
//     return `Hello ${name} You are ${age} years old now.`
// }

// greetKenny = sayHello("Kenny", 26);
// console.log(greetKenny); 

// const calculator = {
//     plus: function(num1,num2){
//         return num1 + num2;
//     }
// }
// const plus = calculator.plus(5,5);
// console.log(plus);