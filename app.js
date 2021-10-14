let wins = 0
let losses = 0
let tries = 0

function play(champion) {
  let aiChampion = ""
  aiChampions = ['rock', 'paper', 'scissors']
  tries += 1
  document.getElementById('tries').innerText = 'Tries: ' + tries

  let randChamp = Math.floor(Math.random() * aiChampions.length)
  aiChampion = aiChampions[randChamp]
  console.log('aiChampion:', aiChampion);

  function interfaceYouDraw() {
    document.getElementById('ai').innerText = 'Your opponent was ' + aiChampion + ","
    document.getElementById('result').classList.remove('bg-success')
    document.getElementById('result').classList.remove('bg-danger')
    document.getElementById('result').classList.remove('text-white')
    document.getElementById('result').innerText = 'YOU DRAW!'
    return console.log("you draw");

  }

  function interfaceYouLose() {
    document.getElementById('ai').innerText = 'Your opponent was ' + aiChampion + ","
    document.getElementById('result').classList.remove('bg-success')
    document.getElementById('result').classList.add('bg-danger')
    document.getElementById('result').classList.add('text-white')
    document.getElementById('result').innerText = 'YOU LOSE!'
    losses += 1
    document.getElementById('losses').innerText = 'Losses: ' + losses
    return console.log("you lose");

  }

  function interfaceYouWin() {
    document.getElementById('ai').innerText = 'Your opponent was ' + aiChampion + ","
    document.getElementById('result').classList.remove('bg-danger')
    document.getElementById('result').classList.add('bg-success')
    document.getElementById('result').classList.add('text-white')
    document.getElementById('result').innerText = 'YOU WIN!'
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