// break 확인
function check1() {
    // 1부터 10까지 1씩 증가하다가 5가 되면 멈춤
    for(let i = 1; i <= 10; i++) {
        console.log("i : ", i);
        if(i == 5) break; // 가장 가까운 반복문 종료
    }
}

// 무한 반복하는 while문 멈추기
function check2() {
    let i = 1;
    // 10 초과 시 멈춤
    while(true) {
        // true 일 때 반복 수행하는 코드
        console.log("i : ", i++);

        if(i > 10) break;
    }
}

// continue 확인하기
function check3() {
    // 1부터 20까지 출력. 단, 3의 배수는 건너뛰기
    for(let i = 1; i <= 20; i++) {
        // 3의 배수인 경우
        if(i % 3 == 0) continue;
        // 3의 배수인 경우 아래 코드는 수행하지 않음
        console.log("i : ", i);
    }
}

/* 1부터 30까지 1씩 증가하며 출력
단, 홀수 또는 10의 배수는 건너뛰기 */
function check4() {
    for(let i = 1; i <= 30; i++) {
        if(i % 2 == 1 || i % 10 == 0) continue;
        console.log("i : ", i);
    }
}


/* 0~9까지 5줄 출력
  - 각 줄에서 4의 배수는 건너뛰기
  - 3번째 줄 출력 후 멈추기 */
function check5() {
    for(let y = 1; y <= 5; y++) {
        let str = "";
        for(let x = 0; x <= 9; x++) {
            // 0을 제외한 4의 배수인 경우
            if(x != 0 && x % 4 == 0) continue;
            str += x;
        }
        console.log(str);
        if(y == 3) break;
    }
}

// 숙제---------------------------------------------------------
// 1부터 100 사이 난수를 몇 회만에 맞추는지 카운트하는 게임
function startGame() {
    const num = Math.floor(Math.random() * 100) + 1;
    let input;
    let count = 0;
    while(input !== null) {
        input = prompt("난수 맞춰라");
        // 입력한 수가 난수보다 클때
        if(input == num) {
            alert("정답");
            break;
        } else if(input == null) {
            break;
        } else if(input > num) {
            alert("down");
        } else {
            alert("up");
        }
    }
    
}









