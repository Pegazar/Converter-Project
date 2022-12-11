let btns = document.querySelectorAll(".btns");
let btnsTwo = document.querySelectorAll(".btns-two");
let one = document.getElementById("one");
let two = document.getElementById("two");
let inputone = document.getElementById("inputone");
let inputtwo = document.getElementById("inputtwo");

let btnoneText = "RUB";
let btntwoText = "USD";


btns.forEach(item => {
    item.addEventListener("click", function () {
        btns.forEach(btn => btn.classList.remove("active"));
        this.classList.add("active");
        btnoneText = this.innerText;
        fetch(`https://api.exchangerate.host/latest?base=${btnoneText}&symbols=${btntwoText}`)
            .then(res => res.json())
            .then(data => {
                inputVal = Number(inputone.value);
                rates = data.rates[btntwoText];
                inputtwo.value = (inputVal * rates).toFixed(2).replace(".0000", " ");
                one.innerText = `1 ${btnoneText} = ${data.rates[btntwoText]} ${btntwoText}`;
            })
        fetch(`https://api.exchangerate.host/latest?base=${btntwoText}&symbols=${btnoneText}`)
            .then(res => res.json())
            .then(data => {
                two.innerText = `1 ${btntwoText} = ${data.rates[btnoneText]} ${btnoneText}`; 
            })
    })  
})

inputone.addEventListener("keyup", function() {
    inputVal = Number(inputone.value);
    inputtwo.value = (inputVal * rates).toFixed(2).replace(".0000", " ");
})

btnsTwo.forEach(item => {
    item.addEventListener("click", function () {
        btnsTwo.forEach(btn => btn.classList.remove("active"));
        this.classList.add("active");
        btntwoText = this.innerText;
        fetch(`https://api.exchangerate.host/latest?base=${btnoneText}&symbols=${btntwoText}`)
            .then(res => res.json())
            .then(data => {
                inputVal = Number(inputone.value);
                rates = data.rates[btntwoText];
                inputtwo.value = (inputVal * rates).toFixed(2).replace(".0000", " ");
                one.innerText = `1 ${btnoneText} = ${data.rates[btntwoText]} ${btntwoText}`;
            })
        fetch(`https://api.exchangerate.host/latest?base=${btntwoText}&symbols=${btnoneText}`)
            .then(res => res.json())
            .then(data => {
                two.innerText = `1 ${btntwoText} = ${data.rates[btnoneText]} ${btnoneText}`;
            })
    })
})

fetch(`https://api.exchangerate.host/latest?base=${btnoneText}&symbols=${btntwoText}`)
            .then(res => res.json())
            .then(data => {
                inputVal = Number(inputone.value);
                rates = data.rates[btntwoText];
                inputtwo.value = (inputVal * rates).toFixed(2).replace(".0000", " ");
            })

// Navbar Area
const hamburger = document.querySelector(".burger-menu");
const list = document.querySelector(".list");

hamburger.addEventListener("click", ()=> {
    hamburger.classList.toggle("activee");
    list.classList.toggle("activee");
})

