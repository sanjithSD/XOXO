let container = document.getElementById('Container')
let introBtn = document.getElementById('btn')
let intro = document.getElementById('introdiv')
let introvideo = document.getElementById('introvideo')
let mainvideo = document.getElementById('mainvideo')
let backtohome = document.getElementById('btn1')

let isempty=true
let isgame=true
let cells = document.getElementsByClassName('cell')
let imgcell = document.getElementsByClassName('imgcell')
window.addEventListener('click', () => {
    const audio = document.querySelector('audio');
    audio.play();
}, { once: false });

for(let i=0; i<cells.length; i++){
    cells[i].addEventListener('click',function(){
        if(isgame){
            if(imgcell[i].alt===""){
                if(isempty){
    
                imgcell[i].style.display="block"
                imgcell[i].src="./Assets/Xxo.png"
                imgcell[i].alt="X"
                isempty=false
                Validate()
                }
                else{
                    imgcell[i].style.display="block"
                    imgcell[i].src="./Assets/Oxo.png"
                   imgcell[i].alt="O"
                   isempty=true
                   Validate()
               }  
            }

        }
       
       
    })
    
}

introBtn.addEventListener("click",function(){
   intro.style.display="none"
   container.style.display="flex"
   mainvideo.style.display="block"
   introvideo.style.display="none"
})

backtohome.addEventListener("click",function(){
    intro.style.display="flex"
    container.style.display="none"
    mainvideo.style.display="none"
    introvideo.style.display="block"
 })
 let reset  = document.getElementById('reset')

    reset.addEventListener("click", function () {
        console.log("Game Reset");
           for (let i = 0; i < cells.length; i++) {
            let img = cells[i].querySelector('img'); 
            if (img) {
                img.style.display = "none";
                img.src = "";
                img.alt = "";
            }
        }
        isempty = true;  
        isgame=true;
    });

    function Validate() {
        const winPatterns = [
            [0, 1, 2], 
            [3, 4, 5],
            [6, 7, 8], 
            [0, 3, 6], 
            [1, 4, 7], 
            [2, 5, 8],
            [0, 4, 8], 
            [2, 4, 6]  
        ];
        
        let winner = false;
        let whowon = null;
    
        for (let pattern of winPatterns) {
            const [a, b, c] = pattern;
            if (imgcell[a].alt && imgcell[a].alt === imgcell[b].alt && imgcell[b].alt === imgcell[c].alt) {
                winner = true;
                isgame = false;
                whowon = imgcell[a].alt;
                break;
            }
        }
        if (winner)  {
           endanimation(whowon)
            } else {
            const isDraw = [...imgcell].every(cell => cell.alt !== "");
            if (isDraw) {
                isgame = false;
                drawanimation()
            }
        }  
    }
    let tie = document.getElementById('tie')
    let xwon = document.getElementById('xwon')
    let owon = document.getElementById('owon')
    let grid = document.getElementById('grid')

function endanimation(whowon){
    if(whowon=="X"){
        for (let i = 0; i < cells.length; i++){
            cells[i].style.visibility="hidden"
        }
        grid.style.background="rgba(0, 0, 0, 0.6)"
        xwon.style.display="block"
        xwon.addEventListener('animationend', showNoneguy);
    }else{
        for (let i = 0; i < cells.length; i++){
            cells[i].style.visibility="hidden"
        }
         grid.style.background="rgba(0, 0, 0, 0.6)"
        owon.style.display="block"
        owon.addEventListener('animationend', showNoneguy);
    }
   
}
function drawanimation(){

    for (let i = 0; i < cells.length; i++){
        cells[i].style.visibility="hidden"
    }
        tie.style.display="block"
     grid.style.background="rgba(0, 0, 0, 0.6)"
    tie.style.display="block"
    tie.addEventListener('animationend', showNoneguy);
}
function showNoneguy(){
    for (let i = 0; i < cells.length; i++){
        cells[i].style.visibility="visible"
        let img = cells[i].querySelector('img'); 
        if (img) {
            img.style.display = "none";
            img.src = "";
            img.alt = "";
        }
    }
     tie.style.display="none"
    owon.style.display="none"
    xwon.style.display="none"
    grid.style.background="transparent"
        isempty = true;  
        isgame=true;
}

     




