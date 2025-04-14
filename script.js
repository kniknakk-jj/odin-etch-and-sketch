const container = document.getElementById("container");
let gridSize = prompt("What will be your grid size? ");
function makeRows(gridSize) {
  container.style.setProperty('--grid-rows', gridSize);
  container.style.setProperty('--grid-cols', gridSize);
  for (c = 0; c < (gridSize * gridSize); c++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";
  };
};

var squares=document.getElementById("container").getElementsByClassName(".grid-item");
for(var i=0; i<squares.length; i++){
    squares[i].addEventListener("mouseover",function(){
        var x = Math.floor(Math.random() * 256);
        var y = Math.floor(Math.random() * 256);
        var z = Math.floor(Math.random() * 256);
        var bgColor = "rgb(" + x + "," + y + "," + z + ")";
        squares[i].style.backgroundColor=bgColor;

    });
}

var clear=document.createElement("button");
clear.textContent="Clear";
clear.classList.add("clear");
document.body.appendChild(clear);
clear.addEventListener("click",(e)=>{
    document.location.reload()
});

makeRows(gridSize);
