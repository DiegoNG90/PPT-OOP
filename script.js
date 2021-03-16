const possibilities = ["Paper", "Rock", "Scissors"];
class Player {
    constructor(turn=0, choice="", score=0){
        this.choice = choice;
        this.turn = turn;
        this.score = score;
    }
    getTurn(){
        this.turn = parseInt((Math.random()*100).toFixed(0));
        return this.turn;
    }
    makeChoice(){
        this.choice = prompt("Choose 'Paper', 'Rock' or 'Scissors': ").toLowerCase();
        while(!this.choice && this.choice !== "paper" && this.choice !== "paper" && this.choice !== "scissors"){
            this.choice = prompt("Sorry, we didn't get your choice. Make sugar to spell your choice correctly: ").toLowerCase();
        }
        switch (this.choice) {
            case "paper":{
                return possibilities[0];
            break;
            }
            case "rock":{
                return possibilities[1];
            break;
            }
            case "scissors":{
                return possibilities[2];
            break;
            }
            default:
                return `Error araised at making choice!`
                break;
        }
    }
    gainScore(){
        this.score++;
        alert(`Player 1 won the round! Current Player1 Score: ${this.score}`);
        return this.score;
    }
}
class Computer{
    constructor(turn=0, choice="", score=0){
        this.choice = choice;
        this.turn = turn;
        this.score = score;
    }
    getTurn(){
        this.turn = parseInt((Math.random()*100).toFixed(0));
        return this.turn;
    }
    makeComputerChoice(){
        let randomNum = parseInt((Math.random()*100).toFixed(0));
        if(randomNum >= 0 && randomNum < 34){
            return possibilities[0]
        }else if(randomNum >= 34 && randomNum < 67){
            return possibilities[1]
        }else{
            return possibilities[2]
        }
    }
    gainScore(){
        this.score++;
        alert(`Computer won the round! Current Computer Score: ${this.score}`);
        return this.score;
    }
}
//Create Player1 and computer
const player1 = new Player();
const pc = new Computer();

class Game {
    constructor (on = false, winner = undefined){
        this.on = on;
        this.winner = winner;
    }
    determineRoundWinner(){
        //Player1 winning
        const player1Choise = player1.makeChoice();
        const computerChoise = pc.makeComputerChoice(); 
        if((player1Choise === possibilities[0] && computerChoise === possibilities[1] ) || (player1Choise === possibilities[1] && computerChoise === possibilities[2]) || (player1Choise === possibilities[2] && computerChoise === possibilities[0])){
            alert(`Player1 has won the first round: \n
            Player1 chose: ${player1Choise}\n
            Computer chose: ${computerChoise}`)
            player1.gainScore();
        
        }else{ //PC winning
            if((computerChoise === possibilities[0] && player1Choise === possibilities[1] ) || (computerChoise === possibilities[1] && player1Choise === possibilities[2]) || (computerChoise === possibilities[2] && player1Choise === possibilities[0])) {
                alert(`Computer has won the round: \n
                Computer chose: ${computerChoise}\n
                Player1 chose: ${player1Choise}`)
                pc.gainScore();
            }
        }
    }
    determineWinner(){
        if (player1.score === 2){
            alert("Player1 won 2 Rounds and it's the winner! Congratulations!")
            this.on = false;
            return this.on;
        }else if (pc.score === 2){
            alert("Computer won 2 Rounds and it's the winner! Congratulations!")
            this.on = false;
            return this.on;
        }else{
            return true;
        }
    }
    start(){
        this.on = true;
        if (player1.getTurn() > pc.getTurn()){
            alert("Player 1 chooses first")
            player1.makeChoice()
            alert("Now is time for PC to make random choice")
            pc.makeComputerChoice()
        }else{
            alert("Computer chooses first")
            pc.makeComputerChoice();
            alert("Now is time for Player1 to make his/her choice")
            player1.makeChoice()
        }
        while(this.on){
            if (this.determineWinner()){
                alert(`No winner yet: Score Player1: ${player1.score}- Computer: ${pc.score}`);
                this.determineRoundWinner(); 
            } else{
                break;
            }
        }
        
    }
    
}


//Create and start new Game
const game = new Game();
game.start();