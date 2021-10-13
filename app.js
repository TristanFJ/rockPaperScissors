let wins = 0
let losses = 0
let tries = 0

function play(champion) {
  let aiChampion = ""
  aiChampions = ['rock', 'paper', 'scissors']
  tries += 1
  document.getElementById('tries').innerText = 'Total Tries: ' + tries

  let randChamp = Math.floor(Math.random() * aiChampions.length)
  aiChampion = aiChampions[randChamp]
  console.log('aiChampion:', aiChampion);

  if (champion == aiChampion) {
    document.getElementById('ai').innerText = 'Your opponent was ' + aiChampion + ","
    document.getElementById('result').classList.remove('bg-success')
    document.getElementById('result').classList.remove('bg-danger')
    document.getElementById('result').classList.remove('text-white')
    document.getElementById('result').innerText = 'YOU DRAW!'
    return console.log("you draw");


  } else if (champion === "rock" && aiChampion === "paper") {
    document.getElementById('ai').innerText = 'Your opponent was ' + aiChampion + ","
    document.getElementById('result').classList.remove('bg-success')
    document.getElementById('result').classList.add('text-white')
    document.getElementById('result').classList.add('bg-danger')
    document.getElementById('result').innerText = 'YOU LOSE!'
    losses += 1
    document.getElementById('losses').innerText = 'Total Losses: ' + losses
    return console.log("you lose");
  } else if (champion === "paper" && aiChampion === "scissors") {
    document.getElementById('ai').innerText = 'Your opponent was ' + aiChampion + ","
    document.getElementById('result').classList.remove('bg-success')
    document.getElementById('result').classList.add('text-white')
    document.getElementById('result').classList.add('bg-danger')
    document.getElementById('result').innerText = 'YOU LOSE!'
    losses += 1
    document.getElementById('losses').innerText = 'Total Losses: ' + losses
    return console.log("you lose");
  } else if (champion === "scissors" && aiChampion === "rock") {
    document.getElementById('ai').innerText = 'Your opponent was ' + aiChampion + ","
    document.getElementById('result').classList.remove('bg-success')
    document.getElementById('result').classList.add('text-white')
    document.getElementById('result').classList.add('bg-danger')
    document.getElementById('result').innerText = 'YOU LOSE!'
    losses += 1
    document.getElementById('losses').innerText = 'Total Losses: ' + losses
    return console.log("you lose");


  } else if (champion === "scissors" && aiChampion === "paper") {
    document.getElementById('ai').innerText = 'Your opponent was ' + aiChampion + ","
    document.getElementById('result').classList.remove('bg-danger')
    document.getElementById('result').classList.add('text-white')
    document.getElementById('result').classList.add('bg-success')
    document.getElementById('result').innerText = 'YOU WIN!'
    wins += 1
    document.getElementById('wins').innerText = 'Total Wins: ' + wins
    return console.log("you win");
  } else if (champion === "rock" && aiChampion === "scissors") {
    document.getElementById('ai').innerText = 'Your opponent was ' + aiChampion + ","
    document.getElementById('result').classList.remove('bg-danger')
    document.getElementById('result').classList.add('text-white')
    document.getElementById('result').classList.add('bg-success')
    document.getElementById('result').innerText = 'YOU WIN!'
    wins += 1
    document.getElementById('wins').innerText = 'Total Wins: ' + wins
    return console.log("you win");
  } else if (champion === "paper" && aiChampion === "rock") {
    document.getElementById('ai').innerText = 'Your opponent was ' + aiChampion + ","
    document.getElementById('result').classList.remove('bg-danger')
    document.getElementById('result').classList.add('text-white')
    document.getElementById('result').classList.add('bg-success')
    document.getElementById('result').innerText = 'YOU WIN!'
    wins += 1
    document.getElementById('wins').innerText = 'Total Wins: ' + wins
    return console.log("you win");
  }

}