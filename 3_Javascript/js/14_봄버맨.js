let xindex = 0; // x 좌표 방향대로 얼마만큼 이동했는지 기억할 변수
let yindex = 0; // y 좌표 방향대로 얼마만큼 이동했는지 기억할 변수
// 위 변수를 전역변수로 한 이유가 함수 안에 쓰면 방향키 누를때마다
// 위치가 0으로 바뀜
// x : + 오른쪽 - 왼쪽
// y : + 아래쪽 - 위쪽, y만 반대


// addEventListener( "이벤트 종류", 함수(이벤트가 발생했을 때 수행할 기능))
// 전달인자 2개
document.addEventListener("keydown", function(e) {

    // e : 이벤트 객체
    // getElementById 에서는 id값 앞에 # 안써도 됨
    const man = document.getElementById("man"); // 봄버맨 이미지

    switch(e.key) {
        case 'ArrowRight':
            xindex += 10;
            break;
        
        case 'ArrowLeft':
            xindex -= 10;
            break;
        
        case 'ArrowUp':
            yindex -= 10;
            break;
        
        case 'ArrowDown':
            yindex += 10;
            break;

        case 'x':
            const box = document.getElementById("box");
            box.innerHTML +=
            `<img src="/images/boom.png"
            style="transform: translate3d(${xindex}px, ${yindex}px, 0);
            position: absolute;">`;
            break;
        
        default:
            alert("방향키와 x만 가능");
            break;
    }
    man.style.transform = `translate3d(${xindex}px, ${yindex}px, 0)`;
})