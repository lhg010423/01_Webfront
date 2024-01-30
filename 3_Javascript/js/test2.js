const applyBtn = document.getElementById("apply-btn");

applyBtn.addEventListener("click", function() {

    const boxWidth = document.querySelector("#box-width");
    const boxHeight = document.querySelector("#box-height");
    const fs = document.querySelector("#fs");

    const fw = document.querySelector("[name='fw']:checked");

    const fontColor = document.querySelector("#box-font-color");
    const bgColor = document.querySelector("#box-bg-color");

    const row = document.querySelector("[name='align-row']:checked");
    const col = document.querySelector("[name='align-col']:checked");

    const content = document.querySelector("#content");
    const box = document.querySelector("#box");


    if(boxWidth.value.trim().length > 0) {
        box.style.width = boxWidth.value + "px";
    }


    if(boxHeight.value.trim().length > 0) {
        box.style.height = boxHeight.value + "px";
    }

    if(fs.value.trim().length > 0) {
        box.style.fontSize = fs.value + "px";
    }

    if(fw != null) {
        console.log(fw);
        box.style.fontWeight = fw.value;
    }
    if(fontColor.value.trim().length > 0) {
        box.style.color = fontColor.value;
    }

    if(bgColor.value.trim().length > 0) {
        box.style.backgroundColor = bgColor.value;
    }

    if(row != null) {
    box.style.justifyContent = row.value;
    }

    if(col != null) {
    box.style.alignItems = col.value;
    }

    if(content.value.trim().length > 0){
    box.innerText = content.value;
    }
})







