function play(champion) {
  let aiChampion = ""
  aiChampions = ['rock', 'paper', 'scissors']

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
    return console.log("you lose");
  } else if (champion === "paper" && aiChampion === "scissors") {
    document.getElementById('ai').innerText = 'Your opponent was ' + aiChampion + ","
    document.getElementById('result').classList.remove('bg-success')
    document.getElementById('result').classList.add('text-white')
    document.getElementById('result').classList.add('bg-danger')
    document.getElementById('result').innerText = 'YOU LOSE!'
    return console.log("you lose");
  } else if (champion === "scissors" && aiChampion === "rock") {
    document.getElementById('ai').innerText = 'Your opponent was ' + aiChampion + ","
    document.getElementById('result').classList.remove('bg-success')
    document.getElementById('result').classList.add('text-white')
    document.getElementById('result').classList.add('bg-danger')
    document.getElementById('result').innerText = 'YOU LOSE!'
    return console.log("you lose");


  } else if (champion === "scissors" && aiChampion === "paper") {
    document.getElementById('ai').innerText = 'Your opponent was ' + aiChampion + ","
    document.getElementById('result').classList.remove('bg-danger')
    document.getElementById('result').classList.add('text-white')
    document.getElementById('result').classList.add('bg-success')
    document.getElementById('result').innerText = 'YOU WIN!'
    return console.log("you win");
  } else if (champion === "rock" && aiChampion === "scissors") {
    document.getElementById('ai').innerText = 'Your opponent was ' + aiChampion + ","
    document.getElementById('result').classList.remove('bg-danger')
    document.getElementById('result').classList.add('text-white')
    document.getElementById('result').classList.add('bg-success')
    document.getElementById('result').innerText = 'YOU WIN!'
    return console.log("you win");
  } else if (champion === "paper" && aiChampion === "rock") {
    document.getElementById('ai').innerText = 'Your opponent was ' + aiChampion + ","
    document.getElementById('result').classList.remove('bg-danger')
    document.getElementById('result').classList.add('text-white')
    document.getElementById('result').classList.add('bg-success')
    document.getElementById('result').innerText = 'YOU WIN!'
    return console.log("you win");
  }

}