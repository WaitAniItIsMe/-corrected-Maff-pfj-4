var player_1 = localStorage.getItem("PlayerOne:");
var player_2 = localStorage.getItem("PlayerTwo:");

document.getElementById("playerOneName").innerHTML = player_1;
document.getElementById("playerTwoName").innerHTML = player_2;

var player_1_Score = 0 ;
var player_2_Score = 0 ;

document.getElementById("playerOneScore").innerHTML = " : " + player_1_Score;
document.getElementById("playerTwoScore").innerHTML = " : " + player_2_Score;

document.getElementById("OGplayerQuestion").innerHTML = "Question turn: " + player_1;
document.getElementById("playerAnswer").innerHTML = "Answer turn: " + player_2;

function send(){
    getNumber1 = document.getElementById("MainAnswer1").value;
    getNumber2 = document.getElementById("MainAnswer2").value;
    actual_answer = parseInt(getNumber1) * parseInt(getNumber2)
    question = "<h4 id='mainQuestion'> Ques = " + getNumber1 + " x " + getNumber2 +"</h4>";
    input = "<br> <input type = 'text' id='inputAns' placeholder='what do u think is the Answer?'>" ;
    checkButton = "<br> <button class = 'btn btn-info' onclick = 'check()'> Check Ans </button>";
    row = question + input + checkButton;
    document.getElementById("output").innerHTML = row;
    document.getElementById("MainAnswer1").value = "";
    document.getElementById("MainAnswer2").value = "";
    
}

question_turn = "player1";
answer_turn = "player2";

function check(){
    getAnswer = document.getElementById("inputAns").value
        
    if ( getAnswer == actual_answer){
        if (answer_turn == "player1"){
            player_1_Score = player_1_Score + 1
            document.getElementById("playerOneScore").innerHTML = " : " + player_1_Score;
         }
         else {
            player_2_Score = player_2_Score + 1
            document.getElementById("playerTwoScore").innerHTML = " : " + player_2_Score;
         }
    }
    if (question_turn == "player1"){
        question_turn = "player2";
        document.getElementById("OGplayerQuestion").innerHTML = "Question turn: " + player_2;
    }
    else{
        question_turn = "player1";
        document.getElementById("OGplayerQuestion").innerHTML = "Question turn: " + player_1;
    }
    
    if (answer_turn == "player1"){
        answer_turn = "player2";
        document.getElementById("playerAnswer").innerHTML = "Answer turn: " + player_2;
    }
    else{
        answer_turn = "player1";
        document.getElementById("playerAnswer").innerHTML = "Answer turn: " + player_1;
    }
    
    document.getElementById("output").innerHTML = "";
    
    }
    