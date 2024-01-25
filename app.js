let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector(".msg");
const myscore = document.querySelector("#my-score");
const cscore = document.querySelector("#comp-score");


const drawgame = () => {
    console.log("Draw");
}

const getcompchoice = () => {
    const option = ["rock", "paper", "scissor"];
    const randomIdx = Math.floor(Math.random() * 3);
    return option[randomIdx];

}
const showWinner = (userWin, userchoice, compchoice) =>{
    if (userWin){
        userScore++;
        myscore.innerText = userScore;
        console.log("You Win!");
        msg.innerText = `You Win! Your  ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor = "Green";
    }
    else{
        compScore++;
        cscore.innerText = compScore;
        console.log("You Lost");
        msg.innerText = `You Lost! ${compchoice} beats your ${userchoice}`;
        msg.style.backgroundColor = "red";
    }
}
const playgame = (userchoice) => {
    console.log("user choice", userchoice)
    compchoice = getcompchoice();
    console.log("Computer Choice", compchoice);

    if (userchoice === compchoice) {
        drawgame();
        msg.innerText = "Game Was Draw. Play Again";
        msg.style.backgroundColor = "black";
    }
    else {
        let userWin = true;

        if (userchoice === "rock") {
            userWin = compchoice === "paper" ? false : true;
        }
        else if (userchoice === "paper") {
            userWin = compchoice === "scissor" ? false : true;
        }
        else if (userchoice === "scissor") {
            userWin = compchoice === "rock" ? false : true;
        }
        showWinner(userWin, userchoice, compchoice);
    }

};

choices.forEach((choice) => {

    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        playgame(userchoice)

    })
})