const btn = [
    ["btn1","btn2","btn3" ],
    ["btn4","btn5","btn6"],
    ["btn7","btn8","btn9"]
];

let nilai = [
    ["","",""],
    ["","",""],
    ["","",""]
];
const btnResult = document.getElementById("btnResult");
let playerScore = 0,botScore = 0;
let playerScoreText = document.getElementById("playerScore"),botScoreText = document.getElementById("botScore"),resultText = document.getElementById("resultText");

turn();
btnResult.style.display="none";

function turn(){
    let i = Math.floor(Math.random() * 2);
    if(i === 0){
        botTurn();
    }
}

function hideButton(name) {
    let button = document.getElementById(name);
    button.style.display = "none";
}

function play(name){
    let draw = false,win = false;
    draw = drawCheck(draw);
    if(draw){
        btnResult.textContent = "PLAY AGAIN";
        resultText.textContent= "DRAW!"
    }
    else{
        playerTurn(name,nilai);
        win = winCheck();
        if(win){
            disableButton();
            btnResult.textContent = "PLAY AGAIN";
            resultText.textContent= "PLAYER WIN!"

            playerScore++;
            playerScoreText.textContent=playerScore;
            return;
        }
        draw = drawCheck(draw);
        if(draw == false){
            botTurn();
            win = winCheck();
            if(win){
                disableButton();
                btnResult.textContent = "PLAY AGAIN";
                resultText.textContent= "BOT WIN!"

                botScore++;
                botScoreText.textContent=botScore;
                return;
            }
            console.log(nilai);
            draw = drawCheck(draw);
        }else{
            disableButton();
            btnResult.textContent = "PLAY AGAIN";
            resultText.textContent= "DRAW!";
        }
    }
}

function playerTurn(name){
    let index = -1;let imgName = name + "img";
    img = document.getElementById(imgName);
    for(let i = 0; i < btn.length;i++ ){
        let innerArray = btn[i];
        index = innerArray.indexOf(name);
        if(index !== -1){
            // console.log(`[${i}][${index}]`);
            img.src = "img/Untitled-1.png";
            nilai[i][index] = "1";
            hideButton(name);
        } 
        
    }
}

function botTurn(){
    let innerArray,index;
    let i = true;
    while(i){
        innerArray = Math.floor(Math.random() * 3);
        index = Math.floor(Math.random() * 3);
        if(nilai[innerArray][index] === ""){
            nilai[innerArray][index] = "0";
            let name = btn[innerArray][index];
            let imgName = name + "img";
            img = document.getElementById(imgName);
            img.src = "img/Untitled-2.png";
            hideButton(name);
            i = false
        }
    }

}

function drawCheck(draw){
    let index = -1;
    let name = "";
    let j = true;
    while(j){
        for(let i = 0; i < nilai.length;i++ ){
            let innerArray = nilai[i];
            // console.log("run");
            index = innerArray.indexOf(name);
            if(index !== -1){
                j=false; 
                return draw = false;
            } 
            
        }
        disableButton();
        btnResult.textContent = "PLAY AGAIN";

        resultText.textContent= "DRAW!";


        return draw = true;

    }
}

function winCheck(){
    // player
    // horizontal
    if(nilai[0][0] == "1" && nilai[0][1] == "1" && nilai[0][2] == "1"){console.log("win"); return true; }
    else if(nilai[1][0] == "1" && nilai[1][1] == "1" && nilai[1][2] == "1"){console.log("win"); return true;}
    else if(nilai[2][0] == "1" && nilai[2][1] == "1" && nilai[2][2] == "1"){console.log("win"); return true;}
    // vertical
    if(nilai[0][0] == "1" && nilai[1][0] == "1" && nilai[2][0] == "1"){console.log("win"); return true;}
    else if(nilai[0][1] == "1" && nilai[1][1] == "1" && nilai[2][1] == "1"){console.log("win"); return true;}
    else if(nilai[0][2] == "1" && nilai[1][2] == "1" && nilai[2][2] == "1"){console.log("win"); return true;}
    // diagonal
    if(nilai[0][0] == "1" && nilai[1][1] == "1" && nilai[2][2] == "1"){console.log("win"); return true;}
    else if(nilai[0][2] == "1" && nilai[1][1] == "1" && nilai[2][0] == "1"){console.log("win"); return true;}

    // bot
    // horizontal
    if(nilai[0][0] == "0" && nilai[0][1] == "0" && nilai[0][2] == "0"){console.log("bot win"); return true;}
    else if(nilai[1][0] == "0" && nilai[1][1] == "0" && nilai[1][2] == "0"){console.log("bot win"); return true;}
    else if(nilai[2][0] == "0" && nilai[2][1] == "0" && nilai[2][2] == "0"){console.log("bot win"); return true;}
    // vertical
    if(nilai[0][0] == "0" && nilai[1][0] == "0" && nilai[2][0] == "0"){console.log("bot win"); return true;}
    else if(nilai[0][1] == "0" && nilai[1][1] == "0" && nilai[2][1] == "0"){console.log("bot win"); return true;}
    else if(nilai[0][2] == "0" && nilai[1][2] == "0" && nilai[2][2] == "0"){console.log("bot win"); return true;}
    // diagonal
    if(nilai[0][0] == "0" && nilai[1][1] == "0" && nilai[2][2] == "0"){console.log("bot win"); return true;}
    else if(nilai[0][2] == "0" && nilai[1][1] == "0" && nilai[2][0] == "0"){console.log("bot win"); return true;}
}

function disableButton(){
    btn.forEach(element => {
        console.log(element);
        element.forEach(index =>{
            let buttonClass = document.getElementById(index);
            buttonClass.style.display="none";
           
            let imgName = index + "img";
            let img = document.getElementById(imgName);
            console.log(img.src);

            btnResult.style.display="block";
        })
    });
}

function reset(){

    const nilaiDefault = [
        ["","",""],
        ["","",""],
        ["","",""]
    ];
    nilai = nilaiDefault;
    btn.forEach(element => {
        console.log(element);
        console.log(nilai);
        console.log(nilaiDefault);
        element.forEach(index =>{

            let buttonClass = document.getElementById(index);
            buttonClass.style.display = "block";

            let imgName = index + "img";
            let img = document.getElementById(imgName);
            img.src="img/none.png";
        })
    });

    resultText.textContent= "TIC TAC TOE";
    btnResult.style.display="none";

    turn();
}



// playerTurn(btn[1])

// function playerTurn(btn){
//     let index = btn.findIndex(btn);
//     console.log(index);
//     btn.addEventListener('click',function(){
//         btn.value = "1";
//         console.log(btn.value)
//         console.log(nilai);
//     })
// }

