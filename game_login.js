function onClickBtn(){
    var playerOneName = document.getElementById("playerOneInput").value ;
    var playerTwoName = document.getElementById("playerTwoInput").value ;
    localStorage.setItem("PlayerOne:",playerOneName);
    localStorage.setItem("PlayerTwo:",playerTwoName);
    window.location = "game_page.html"
    };