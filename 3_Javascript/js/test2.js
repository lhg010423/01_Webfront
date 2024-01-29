function result() {
    const width = Number(document.querySelector(".width").value);
    const height = Number(document.querySelector(".height").value);
    const fs = Number(document.querySelector(".font-size").value);
    const str = document.querySelector(".str").value;
    const box = document.querySelector(".boxArea");
    
    box.innerHTML = `<div height : ${height}>${str}</div>`;
    
    // box.innerHTML = `<div textAlign="center" backgroundColor="red" width="${width}" height="100px">${str}</div>`;
    // box.innerHTML = `<div width="100px" heigt="100px"></div>`;
    
}