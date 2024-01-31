// 개수입력 input 창
const number = document.querySelector("#number");
// 생성버튼
const btn = document.querySelector("#btn");
// 생성할 input 공간
const container = document.querySelector("#container");
// 더하기버튼
const sumBtn = document.querySelector("#sumBtn");
// 결과
const result = document.getElementById("result");

btn.addEventListener("click", ()=> {
    const inputNum = Number(number.value);

    for(let i = 0; i < inputNum; i++) {
        // <input> 생성
        const row = document.createElement("input");
        // <input class="input-number">
        row.classList.add("input-number");
        // <input class="input-number">을 container안에 넣기
        container.append(row);
    }

    sumBtn.addEventListener("click", () => {
        let total = 0;
        // 생성된 input 창 가져오기
        const numbers = document.querySelectorAll(".input-number");
        for(let j = 0; j < inputNum; j++) {
            total += Number(numbers[j].value);
        }
        result.innerText = total;
    });
});