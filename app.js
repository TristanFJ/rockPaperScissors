function play(champion) {
  let aiChampion = "rock" // computer's pick of champion, TODO change later to random
  // let result = ""
  // every time a champion is picked, generate a new aiChampion pick
  // if champion is rock and aiChampion is paper, champion loses, else win
  // if champion is paper and aiChampion is scissors, champion loses, else win
  // if champion is scissors and aiChampion is rock, champion loses, else win

  // I don't technically need toLowerCase(), as my input is just a button argument

  // result variable is a string (win/lose/draw) that is outcome of the above logic, write this boolean to innerText interface

  // outcomes = ["win", "lose", "draw"]


  if (champion == aiChampion) {
    document.getElementById('result').innerText = 'YOU DRAW!'
    return console.log("draw");


  } else if (champion === "rock" && aiChampion === "paper") {
    document.getElementById('result').innerText = 'YOU LOSE!'
    return console.log("lose");
  } else if (champion === "paper" && aiChampion === "scissors") {
    document.getElementById('result').innerText = 'YOU LOSE!'
    return console.log("lose");
  } else if (champion === "scissors" && aiChampion === "rock") {
    document.getElementById('result').innerText = 'YOU LOSE!'
    return console.log("lose");


  } else if (champion === "scissors" && aiChampion === "paper") {
    document.getElementById('result').innerText = 'YOU WIN!'
    return console.log("win");
  } else if (champion === "rock" && aiChampion === "scissors") {
    document.getElementById('result').innerText = 'YOU WIN!'
    return console.log("win");
  } else if (champion === "paper" && aiChampion === "rock") {
    document.getElementById('result').innerText = 'YOU WIN!'
    return console.log("win");
  }
}