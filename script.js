function scalePlayer(positionPlayer, namePlayer, numberPlayer, confirmation) {
  namePlayer = document.getElementById('namePlayer')
  positionPlayer = document.getElementById('positionPlayer')
  numberPlayer = document.getElementById('numberPlayer')


  confirmation = confirm('Deseja escalar o jogador' + 
  '\n\nNome: ' + namePlayer.value +
  '\nPosição do Jogador: ' + positionPlayer.value +
  '\nNúmero da Camisa: ' + numberPlayer.value)

  if (confirmation == true) {
    const listPlayers = document.getElementById('listPlayers')
    const li = document.createElement('li')
    li.id = numberPlayer.value
    
    li.innerHTML = `Nome: ${namePlayer.value} <br />
    Posição do Jogador: ${positionPlayer.value} <br />
    Número da Camisa: ${numberPlayer.value} <br /><br />`

    listPlayers.appendChild(li)

    namePlayer.value = ''
    positionPlayer.value = ''
    numberPlayer.value = ''
  }
}

function removePlayer() {
  const idLi = prompt('Qual o número da camisa do jogador que deseja remover?')
  const liRem = document.getElementById(idLi)

  listPlayers.removeChild(liRem)
}