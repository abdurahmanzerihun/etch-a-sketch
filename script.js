let gridContainer=document.querySelector('.grid-container');
let clear=document.getElementById('clearGrid');
let eraser=document.getElementById('eraser');
let colorMode=document.getElementById('colorMode');
let colorPicker=document.getElementById('colorPicker');
let setGrid=document.getElementById('setGrid');
let gridSizeInput=document.getElementById('gridSizeInput');

let sketchMode=false;
let erasing=false;
let gridSize=16;
let containerSize=520;


function buildGrid(size){
gridContainer.innerHTML = ""; // clear old grid
let squareSize=containerSize/size;
for(let i=0;i<size*size;i++){
const square=document.createElement("div");
square.classList.add("square");
square.style.height=square.style.width = `${squareSize-2}px`;
gridContainer.appendChild(square);
   }
     
}
   function getRGB(){
 let r=Math.floor(Math.random()*256);
 let g=Math.floor(Math.random()*256);
 let b=Math.floor(Math.random()*256); 
 return `rgb(${r},${g},${b})`;  
}

//Toggle sketch mode
gridContainer.addEventListener('dblclick',()=>{
        sketchMode=!sketchMode;
        gridContainer.style.borderColor=sketchMode? "red":"#333";
})
//drawer/eraser logic
gridContainer.addEventListener('mouseover',(e)=>{
        if(sketchMode && e.target.classList.contains("square")){
                if(erasing){
                        e.target.style.backgroundColor="white";
                }
                else{
                        if(colorMode.value==="static"){
                                e.target.style.backgroundColor=colorPicker.value;
                        }
                        else{
                                e.target.style.backgroundColor=getRGB();
                        }
                }
        }
});

//eraser tggle
eraser.addEventListener('click',()=>{
        erasing=!erasing;
        eraser.classList.toggle('active',erasing);//styles when eraser button is on(check on ".active" on style.css)
})

//clear
clear.addEventListener('click',()=>{
        document.querySelectorAll('.square').forEach(sq=>sq.style.background="white");
});
//set new grid size
setGrid.addEventListener('click',()=>{
        gridSize=parseInt(gridSizeInput.value)
        if(gridSize>=4 && gridSize<=100){
                buildGrid(gridSize);
        }
        else {
                alert("Grid size must between 4 and 100");
        }
});
//Initial grid 
buildGrid(gridSize);
