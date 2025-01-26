
const cell=document.querySelectorAll(".cell")
let currentPlayer='X'
const hint=document.getElementById('hint')
const result=document.getElementById('result')
let gameOver=false;
const winningCells=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [2,4,6],
    [0,4,8],
    [0,3,6],
    [1,4,7],
    [2,5,8]
    ]

function checkingScores(player){
    for (let i=0; i<winningCells.length;i++){
        const [a,b,c]=winningCells[i]
     if( cell[a].innerText===currentPlayer && cell[b].innerText===currentPlayer && cell[c].innerText===currentPlayer){
        setTimeout(()=>
          hint.innerText=`Winner is ${player}`,
            gameOver=true

    )
        
              return;
       
     }
     
    }
   
}

function clickedd(event){
    if(!gameOver && event.target.innerText===''){
        event.target.innerText=currentPlayer
        checkingScores(currentPlayer)
        currentPlayer=currentPlayer==='X' ? 'O' : 'X'; 
        hint.innerText=`Turn on ${currentPlayer}`
    }
  


}

function reset(){
    for (let i=0;i<=8;i++){
        cell[i].innerText='';      
    }
    currentPlayer='X';
    gameOver=false;
    hint.innerText='First Player: X'

}


// function checkingScores(){
//     winningCells.some((item)=>{
//         const winner= item.forEach(index=>cell[index].innerText===currentPlayer)
//         console.log(winner)
//         if (winner){
//             console.log('X is winner')
//         }
//         })
// }

 
// function start(){}
