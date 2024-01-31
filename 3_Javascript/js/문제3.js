const createBtn = document.getElementById("createBtn");
const lottoBoard = document.getElementById("lottoBoard");

let count = 0;

createBtn.addEventListener("click", () => {
    for(let i = 1; i < 46; i++) {
        // <div></div> 생성
        const number = document.createElement("div");
        // <div class="number"></div> 클래스 추가
        number.classList.add("number");

        number.innerText = i;
        
        lottoBoard.append(number);

        number.addEventListener("click", () => {
            count += 1;
            number.style.backgroundColor = "orange";
            if(count > 6) number.style.backgroundColor = "white";
        });
    }
});