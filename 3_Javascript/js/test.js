// 적용하기 버튼이 클릭 되었을 때
const applyBtn = document.getElementById("apply-btn");

applyBtn.addEventListener("click", function() {

    // 위에 작성된 input 요소들을 모두 얻어오기
    const boxWidth = document.querySelector("#box-width");
    const boxHeight = document.querySelector("#box-height");
    const fs = document.querySelector("#fs");

    // name속성인 것들을 모두 가져온다, 체크된 것만 가져옴
    // name앞에 ., # 태그를 안쓴이유는 html에 name을 쓰는 게 별로 없어서
    const fw = document.querySelector("[name='fw']:checked");
    // console.log(fw);

    const fontColor = document.querySelector("#box-font-color");
    const bgColor = document.querySelector("#box-bg-color");

    // querySelector 말고 get~Name을 쓰면 undefine 뜸
    const row = document.querySelector("[name='align-row']:checked");
    const col = document.querySelector("[name='align-col']:checked");

    const content = document.querySelector("#content");
    const box = document.querySelector("#box");

    // input에 작성된 값을 얻어와서, 그 값에 따라 #box에 JS로 CSS 추가

    // 너비를 입력하는 input의 값이 작성되어 있다면, trim() : 앞뒤 공백제거
    if(boxWidth.value.trim().length > 0) {
        // boxwidth라는 요소의 value값에 앞뒤로 공백 제거를 한 후,
        // value값의 문자열 길이를 따졌더니, 0보다 클때 ==> 뭔가 값이 있을 때
        box.style.width = boxWidth.value + "px";
    }

    // 높이를 입력하는 input에 값이 작성되어 있다면
    if(boxHeight.value.trim().length > 0) {
        box.style.height = boxHeight.value + "px";
    }

    if(fs.value.trim().length > 0) {
        box.style.fontSize = fs.value + "px";
    }

    //console.log(fw); // null
    // fw -> 체크된게 없으면 null 반환
    //    -> 체크된게 있으면 null 아님
    if(fw != null) { // 글자 굵기가 체크된게 있다면
        console.log(fw);
        box.style.fontWeight = fw.value;
    }

    if(fontColor.value.trim().length > 0) {
        box.style.fontColor = fontColor.value;
    }

    box.style.justifyContent

    if(col != null) {
    box.style.alignItems
    }

    // content에 작성된 값
    if(content.value.trim().length > 0){
    box.innerText = content.value;
    }
})







