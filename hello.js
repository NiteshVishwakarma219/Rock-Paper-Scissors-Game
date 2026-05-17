let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userscorePara = document.querySelector("#user-score");
const compscorePara = document.querySelector("#comp-score");

const gencompChoice = () => {
    const options = ["rock" , "paper" , "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawGame = () => {
    msg.innerText = "Game was Draw . Play again!";
    msg.style.background="black";
};

const showWinner = (userwin , userchoice , compchoise) => {
    if(userwin){
        userscore++;
        userscorePara.innerText = userscore;
        msg.innerText = `You win. Your ${userchoice} beats ${compchoise}`;
        msg.style.background="green";
    }
    else{
        compscore++;
        compscorePara.innerText = compscore;
        msg.innerText = `You Loss. ${compchoise} beats your ${userchoice}`;
        msg.style.background="red";
    }
};

const playGame = (userchoice) => {
    // Generate computer choice
    const compchoise = gencompChoice();

    if(userchoice === compchoise){
        // Draw 
        drawGame();
    }
    else{
        let userwin = true;
        if(userchoice === "rock"){
            userwin = compchoise ==="paper" ? false:true;
        }
        else if(userchoice == "paper"){
            userwin = compchoise === "scissors"?false:true;
        }
        else{
            userwin = compchoise ==="rock" ? false:true;
        }
        showWinner(userwin , userchoice , compchoise);
    }
};

choices.forEach((choices) =>{
    choices.addEventListener("click" , () => {
        const userchoice = choices.getAttribute("id");
        playGame(userchoice);
    })
});