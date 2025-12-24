let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return options[randomIndex];
};

const drawGame = () => {
    console.log("Draw Game");
    msg.innerText = "Your Game Draw!";
    msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userchoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        console.log("You Win!");
        msg.innerText = `You Win! ${userchoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        console.log("You Lose");
        msg.innerText = `You Lose! ${compChoice} beats ${userchoice}`;
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userchoice) => {
    console.log("User Choice =", userchoice);
    const compChoice = genCompChoice();
    console.log("Comp Choice =", compChoice);

    if (userchoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;

        if (userchoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if (userchoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }

        showWinner(userWin, userchoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        playGame(userchoice);
    });
});
