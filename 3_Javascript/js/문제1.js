const number = Number(document.querySelectorAll(".number"));
const result = Number(document.querySelector("#result"));

number.addEventListener("click", e => {
    let arr = "";
    switch(e) {
        case [0]: result.innerText = 1; break;
    }
    
});