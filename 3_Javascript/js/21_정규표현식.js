// 정규 표현식 객체 생성 + 확인하기
document.getElementById("btn1").addEventListener("click", () => {


    // 정규표현식 객체 생성 2가지 방법
    const regExp1 = new RegExp("script");
        // "script"와 일치하는 문자열이 있는지 검사하는 정규표현식

    const regExp2 = /java/;
        // "java"와 일치하는 문자열이 있는지 검사하는 정규표현식
    
    // 확인하기
    const str1 = "저희는 지금 javascript를 공부하고 있습니다";
    const str2 = "jsp(java server page)도 나중에 할겁니다";
    const str3 = "java, java, java";

    
    // str1 문자열에 script가 있는지 테스트
    console.log("regExp1.test(str1) : " + regExp1.test(str1));
    // regExp1.test(str1) : true

    console.log(regExp1.exec(str1));
    // ['script', index: 11, input: '저희는 지금 javascript를 공부하고 있습니다', groups: undefined]

    console.log("regExp2.test(str2) : " + regExp2.test(str2));
    console.log(regExp2.exec(str2));
});

// 메타문자 확인하기
document.getElementById("btn2").addEventListener("click", () => {
    const div1 = document.getElementById("div1");

    // a (일반문자열) : 문자열 내에 a라는 문자열이 존재하는지 검색
    const regExp1 = /a/;
    div1.innerHTML += "/a/, apple : " + regExp1.test("apple") + "<hr>"; // true
    div1.innerHTML += "/a/, price : " + regExp1.test("price") + "<hr>"; // false

    // [abcd] : 문자열 내에 a,b,c,d 중 하나라도 일치하는 문자가 있는지 검색
    const regExp2 = /[abcd]/;
    div1.innerHTML += "/[abcd]/, apple : " + regExp2.test("apple") + "<hr>"; // true
    div1.innerHTML += "/[abcd]/, ssbss : " + regExp2.test("ssbss") + "<hr>"; // true
    div1.innerHTML += "/[abcd]/, qwerty : " + regExp2.test("qwerty") + "<hr>"; // false

    // ^ (캐럿) : 문자열의 시작을 의미
    const regExp3 = /^group/; // 문자열의 시작이 group인지 확인
    div1.innerHTML += "/^group/, group100 : " + regExp3.test("group100") + "<hr>"; // true
    div1.innerHTML += "/^group/, 100group : " + regExp3.test("100group") + "<hr>"; // false

    // $ (달러) : 문자열의 끝을 의미
    const legExp4 = /group$/; // 문자열의 끝이 group인지 확인
    div1.innerHTML += "/group$/, group100 : " + regExp4.test("group100") + "<hr>"; // false
    div1.innerHTML += "/group$/, 100group : " + regExp4.test("100group") + "<hr>"; // true
});



// -----------------------------------------------------------
// 이름 유효성 검사하기
document.getElementById("inputName1").addEventListener("keyup", (e) => {
    // 화살표 함수의 this
    // 화살표 함수의 this는 상위(부모) 스코프 값이 상속된다.
    
    // 이벤트 핸들러 내 일반 function : this
    // 이벤트가 일어난 객체
    
    // 결과 출력용 span 얻어오기
    const span = document .getElementById("inputNameResult1");

    // 한글 2~5글자 정규표현식 객체 만들기
    const regExp = /^[ㄱ-힣]{2,5}$/; // 시작과 끝이 한글로 이루어진 거
    
    // 빈칸인지 검사
    if(e.target.value.length == 0) { // this 말고 e.target 도 됨
        span.innerText = "";
        return;
    }

    // 유효성 검사
    if(regExp.test(e.target.value)) {
        // 유효한 경우
        span.innerText = "유효한 이름 형식입니다";
        span.style.color = "green";
        span.style.fontWeight = "bold";
    } else {
        // 유효하지 않은 경우
        span.innerText = "이름 형식이 유효하지 않습니다";
        span.style.color = "red";
        span.style.fontWeight = "bold";
    }
    
});

// -----------------------------------------------------------
// 주민등록 유효성 검사
document.getElementById("inputPno").addEventListener("keyup", (e) => {
    const span = document.getElementById("inputPnoResult");
    
    if(e.target.value.length == 0) {
        span.innerText = "주민등록번호를 작성해주세요";

        span.classList.remove("confirm");
        span.classList.remove("error");
        return;
    }

    // 생년월일(6)-고유번호(7)
    // -를 쓸거면 이스케이프문자(\, 백슬레시)를 앞에 쓰고 써야함
    const regExp = /^\d{6}\-\d{7}$/;

    if(regExp.test(e.target.value)) {
        span.innerText = "유효한 주민등록번호 형식 입니다";

        span.classList.remove("error");
        span.classList.add("confirm");
    }else {
        span.innerText = "유효하지 않습니다";

        span.classList.remove("confirm");
        span.classList.add("error");
    }


});


// -------------------------------------------------------
// 회원가입
let checkObj = {
    "inputId" : false, // 아이디
    "inputPw" : false, // 비밀번호
    "inputPwConfirm" : false, // 비번확인
    "inputName" : false, // 이름
    "gender" : false, // 성별
    "inputTel" : false // 전화번호
}


// 아이디
document.getElementById("idBtn").addEventListener("click", (e) => {
    
    const inputId = document.getElementById("inputId");
    const idExp = /^[a-z][a-zA-Z0-9\-_]{5,13}$/;
    if(idExp.test(inputId.value)) {
        inputId.style.backgroundColor = "springgreen";
        let checkObj = { "inputId" : true }
    }else {
        inputId.style.backgroundColor = "red"
        let checkObj = { "inputId" : false }
    }
});




// 비밀번호 확인
document.getElementById("inputPwConFirm").addEventListener("keyup", (e) => {
    const pwpwResult = document.getElementById("inputPwConFirmResult");

    // 비번에 값이 없고 비번확인에 값을 넣었을 때
    if(inputPw.value.length == 0 && e.target.value.length > 0) {
        e.target.value = "";
        pwpwResult.innerText = "비밀번호를 입력하시오";
        pwpwResult.style.color = "red";
        document.getElementById("inputPw").focus();
        setTimeout(function() {
            pwpwResult.innerText = "";
        }, 3000); 


        // 비번 input을 focus하면 "비밀번호를 입력하시오"문구가 사라짐
        document.getElementById("inputPw").addEventListener("focus", (e) => {
            pwpwResult.innerText = "";
        });
    }



    // 비번에 값이 있고 비번, 비번확인이 서로 값이 같을 때
    if(inputPw.value == inputPwConFirm.value && inputPw.value.length != 0){
        inputPwResult.innerText = "비밀번호 일치";
        inputPwResult.style.color = "green";
        let checkObj = {"inputPw" : true,
        "inputPwConFirm" : true }
        
    } else {
        inputPwResult.innerText = "";
    }
});





// 비밀번호
// document.getElementById("inputPw").addEventListener("keyup", (e) => {
//     if(inputPw.value == inputPwConFirm.value && inputPw.value.length != 0){
//         inputPwResult.innerText = "비밀번호 일치";
//         inputPwResult.style.color = "green";
//         // "inputPw" = true;
//         // "inputPwConFirm" = true;
//         inputPwResult.innerText = "";
//     }


// });


// 이름
document.getElementById("inputName").addEventListener("keyup", (e) => {
    let inputNameResult = document.getElementById("inputNameResult");
    let nameExp = /^[가-힣]{2,5}$/;

    if(nameExp.test(e.target.value) && e.target.value.length != 0) {
        inputNameResult.innerText = "정상입력";
        inputNameResult.style.color = "green";
        let checkObj = {"inputName" : true}
    } else if (e.target.value.length <= 1) {
        inputNameResult.innerText = "";
    } else {
        inputNameResult.innerText = "한글만 입력하세요";
        inputNameResult.style.color = "red";
    }
});


document.getElementById("createBtn").addEventListener("click", (e) => {
    let inputGender = document.getElementById("inputGender");
    let telExp = /^[0][0-9]{1,2}-[0-9]{3,4}-[0-9]{4}/;
    //function validate() {
        if(inputGender.value.length == 0) {
           alert("성별을 선택해주세요");
           let checkObj = { "gender" : false } 
        } else {
            let checkObj = { "gender" : true }
        }

        if(telExp.test(inputTel.value)) {
            let checkObj = { "inputTel" : true }
        } else {
            alert("전화번호의 형식이 올바르지 않습니다");
            let checkObj = { "inputTel" : false }
        }
    //}
    
    
    
    
    
    
    if(checkObj.every((checkObj)=> checkObj == true)) {
        alert("회원가입 완료");
    }
});


// document.getElementById("idBtn").addEventListener("click", (e) => {
    
//     const inputId = document.getElementById("inputId");
//     const idExp = /^[a-z][a-zA-Z0-9\-_]{5,13}$/;
//     if(idExp.test(inputId.value)) {
//         inputId.style.backgroundColor = "springgreen";
//     }else {
//         inputId.style.backgroundColor = "red"
//     }
// });