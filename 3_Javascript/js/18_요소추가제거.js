// 요소.remove() : 요소 제거
// 요소.classList.add("클래스명") : 클래스 추가
// 요소.classList.remove("클래스명") : 클래스 제거

// 만들려는 기능 중 공통적으로 사용되는 요소를 전역 변수 선언


const addBtn = document.getElementById("add"); // 추가 버튼
const calcBtn = document.getElementById("calc"); // 계산 버튼
const container = document.querySelector(".container");
// 최종적으로 동적으로 만들어진 요소를 붙여야하는 요소

// 추가 버튼 클릭 시
addBtn.addEventListener("click", () => {
    // 1. div 요소 생성하기
    const row = document.createElement("div"); // <div></div>

    // 2. 요소에 class 추가하기
    row.classList.add("row"); // <div class="row"></div>

    // 3. input 요소 생성하기
    const input = document.createElement("input"); // <input>

    // 4. type="number" 추가하기
    // input.type = "number";
    // 추가하는게 아닌 덮어쓰기
    input.setAttribute("type", "number"); // <input type="number">
    // input.setAttribute("class", "input-number"); <input type="number" class="input-number">
    // input.setAttribute("class", "test"); <input type="number" class="test">

    // 5. 클래스 "input-number" 추가하기
    input.classList.add("input-number"); // <input type="number" class="input-number">
    // input.classList.add("test"); <input type="number" class="input-nuomber test">

    // 6. span 요소 생성하기
    const span = document.createElement("span"); // <span></span>

    // 7. span 태그에 클래스 "remove-row" 추가
    span.classList.add("remove-row");  // <span class="remove-row"></span>

    // 8. 내용으로 &times; 추가 (innerHTML 사용)
    span.innerHTML = "&times"; // <span class="remove-row">&times;</span>


    // 조립하기
    // 9. div.row 요소에게 자식으로 input, span 추가
    row.append(input, span);
    /*
        <div class="row">
            <input type="number" class="input-number test">
            <span class="remove-row">&times;</span>
        </div>
    */

    // 10. 완성된 div.row 를 container의 마지막 자식으로 추가하기
    container.append(row);


    // -----------------------------------------------------
    // 클릭된 x 버튼의 부모 요소를 제거

    // 1. 만들어지는 x버튼(span)에 이벤트 리스너 추가
    span.addEventListener("click", e => {
        // 2. 현재 이벤트가 발생한 요소(클릭된 x버튼)의
        // 부모 요소를 선택(탐색)
        const parent = e.target.parentElement; // == div.row

        // 3. 부모 요소를 제거하기
        parent.remove();
    })

    
});


// ---------------------------------------------------
// 계산 버튼 클릭 시
calcBtn.addEventListener("click", () => {

    // 1. 모든 .input-number 얻어오기
    const numbers = document.querySelectorAll(".input-number");

    // console.log(numbers);

    // 2. for문으로 모든 요소 접근하여
    // 작성된 값(value)을 얻어와
    // 숫자로 변경(Number())한 후
    // 합계 지정 변수 sum에 누적

    let sum = 0;

    for(let i = 0; i < numbers.length; i++) {
        sum += Number(numbers[i].value);
    }

    // 3. for문 끝나면 alert로 결과 출력
    alert("겨롸 : " + sum);

})

















// box.type = "number"; // 타입 number
// box.classList.add("input-number"); // 클래스명 지정하기
// container.append(box);

// const times = document.createElement("span");
// times.classList.add("remove-row");
// container.append(times);
// times.innerHTML = "&times"; // 이거 안쓰면 x 안보임


// // X 버튼 누르면 input 박스랑 X 버튼 같이 사라짐
// times.addEventListener("click", (e) => {
//     box.remove();
//     times.remove();
// });

// console.log(box, times);



// calc.addEventListener("click", (e) => {

//     // input 박스 전체 변수 지정
//     let num = document.querySelectorAll(".input-number");
//     let sum = 0;

//     num.forEach(function(box) {
//         sum += parseInt(box.value) || 0;
//     });
//     alert(`합계는 ${sum} 입니다`);
// });