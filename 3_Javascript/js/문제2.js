document.getElementById("btn").addEventListener("click", (a) => {
    let count = Number(document.querySelector("input").value);
    for(let i = 0; i < count; i++){
        container.innerHTML += '<input></input>';

    }
});