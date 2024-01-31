const result = document.querySelector("#result");
const number = document.querySelectorAll(".number");

for(let i = 0; i < number.length; i++) {
    number[i].addEventListener("click", function() {
        if(i === 9 && result.innerText === "0") {
            return;
        }

        // === 말고 ==를 쓰면 1 == "1" 이게 됨
        // i가 숫자9냐? true면 문자0 false면 i+1
        result.innerText += (i === 9) ? "0" : (i + 1);
})};