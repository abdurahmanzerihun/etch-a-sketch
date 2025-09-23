const gridContainer=document.querySelector('.grid-container');
const btn=document.getElementById('inputButton');
let clear=document.getElementById('clearGrid');

const containerSize=520;
gridContainer.style.width=`${containerSize}px`;
function getRGB(){
     square.style.backgroundColor= `rgb(${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)})`;
    
}
btn.addEventListener('click' ,(event) =>{
        gridContainer.innerHTML="";
        let size=parseInt(prompt("Enter the number",''));
        if(size>=100){
                size=parseInt(prompt("Enter number less than 100",''));
        }
        const squareSize=containerSize/size ;

     for(let i=0;i<size*size;i++){
const square=document.createElement("div");
square.classList.add("square");
gridContainer.appendChild(square);
square.style.height=`${squareSize-2}px`;
square.style.width=`${squareSize-2}px`;
square.addEventListener('mouseover',(event)=>{
       square.style.backgroundColor= `rgb(${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)})`;
});   
clear.addEventListener('click',(event)=>{
    square.style.backgroundColor="";    
})
}
});

