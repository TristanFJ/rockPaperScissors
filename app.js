let wins = 0
let losses = 0
let tries = 0

function play(champion) {
  let aiChampion = ""

  // not sure if this actually affected anything, but aiChampions was missing a declaration? 
  tries += 1
  document.getElementById('tries').innerText = 'Tries: ' + tries

  let aiChampions = ['rock', 'paper', 'scissors']
  let randChamp = Math.floor(Math.random() * aiChampions.length)
  aiChampion = aiChampions[randChamp]
  console.log('aiChampion:', aiChampion);

  let result = document.getElementById('result')
  let yourOpponent = document.getElementById('ai').innerText = 'Your opponent was ' + aiChampion + ","

  function interfaceYouDraw() {
    yourOpponent
    result.classList.remove('bg-success')
    result.classList.remove('bg-danger')
    result.classList.remove('text-white')
    result.innerText = 'YOU DRAW!'
    return console.log("you draw");

  }

  function interfaceYouLose() {
    yourOpponent
    result.classList.remove('bg-success')
    result.classList.add('bg-danger')
    result.classList.add('text-white')
    result.innerText = 'YOU LOSE!'
    losses += 1
    document.getElementById('losses').innerText = 'Losses: ' + losses
    return console.log("you lose");

  }

  function interfaceYouWin() {
    yourOpponent
    result.classList.remove('bg-danger')
    result.classList.add('bg-success')
    result.classList.add('text-white')
    result.innerText = 'YOU WIN!'
    wins += 1
    document.getElementById('wins').innerText = 'Wins: ' + wins
    return console.log("you win");

  }

  if (champion == aiChampion) {
    interfaceYouDraw();

  } else if (champion === "rock" && aiChampion === "paper") {
    interfaceYouLose();

  } else if (champion === "paper" && aiChampion === "scissors") {
    interfaceYouLose();

  } else if (champion === "scissors" && aiChampion === "rock") {
    interfaceYouLose();


  } else if (champion === "scissors" && aiChampion === "paper") {
    interfaceYouWin();

  } else if (champion === "rock" && aiChampion === "scissors") {
    interfaceYouWin();

  } else if (champion === "paper" && aiChampion === "rock") {
    interfaceYouWin();
  }
}