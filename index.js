var readLine = require("readline-sync")
var humanScore = 0;
var compScore = 0;
var list = { 0 : "rock" ,
                1 : "paper",
                2 : "scissors"
            }
console.log("Welcome to Man vs AI, in order to win you must score 3 points before the computer does! All the best!!")

function compChoice(){
    return Math.floor(Math.random()*3)
}

function humanChoice(){
  console.log("please enter a number of you choice based on the below options:");
  for (var key in list) {
  console.log(key,":",list[key]);
  
}
return readLine.question("enter choice :");
}

function rules(humanPick,compPick){
    if((humanPick==0 && compPick ==1) || 
       (humanPick==1 && compPick ==2) || 
       (humanPick==2 && compPick ==0)){
          console.log("Computer wins this round!");
          compScore++;
       }
    else{
      console.log("You win this round!");
      humanScore++;
    }
console.log("----------------------------------");
    console.log("Score Board\n" + "Your score : " + humanScore + "\nComputer Score : " + compScore);
console.log("----------------------------------");
    if( humanScore == 3){
      console.log("Cogratulations! You win!");
    }

    if( compScore == 3){
      console.log("The computer has won! better luck next time!");
    }

}
while(humanScore<3 && compScore<3){
    var humanPick = humanChoice();
    var compPick = compChoice();
    if(list[humanPick] == undefined){
      console.log("please pick a number only from the given options");
      humanPick = humanChoice();
    }
    console.log("You picked "+ list[humanPick]);
    console.log("Computer picked " + list[compPick]);
    rules(humanPick,compPick);
}
