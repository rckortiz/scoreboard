// const team1Input = document.querySelector('.team-1-input')
// const team2Input = document.querySelector('.team-2-input')

// let team1Name = document.querySelector('.team-1-name')
// let team2Name = document.querySelector('.team-2-name')

// let team1Score = document.querySelector('.team-1-score')
// let team2Score = document.querySelector('.team-2-score')

// const team1Add = document.querySelector('team-1-add-1-button')
// const team2Add = documemt.querySelector('team-2-add-1-button')

// const team1Subtract = document.querySelector('.team-1-subtract')
// const team2Subtract = document.querySelector('.team-2-subtract')

// const updateTeam1button = document.querySelector('.update-team-1-button')
// const updateTeam2button = document.querySelector('.update-team-2-button')

// let team1counter = 0
// let team2counter = 0

// Change name function

//main function

const outputMessage = document.querySelector('.result')
const teamOne = document.querySelector('.team.one')
const teamTwo = document.querySelector('.team.two')

const main = () => {
  document.querySelector('.team-1-score').textContent = 0
  document.querySelector('.team-2-score').textContent = 0
  document.querySelector('.team-1-name').textContent = 'Team 1'
  document.querySelector('.team-2-name').textContent = 'Team 2'
  document.querySelector('.result').textContent = ''
  teamOne.classList.remove('winner')
  teamTwo.classList.remove('winner')
  document.querySelector('.team-1-add-1-button').disabled = false
  document.querySelector('.team-1-subtract-1-button').disabled = false
  document.querySelector('.update-team-1-name').disabled = false
  document.querySelector('.team-2-add-1-button').disabled = false
  document.querySelector('.team-2-subtract-1-button').disabled = false
  document.querySelector('.update-team-2-name').disabled = false
}
const team1UpdateName = () => {
  console.log('new name in box')

  const currentName = document.querySelector('.team-1-input').value
  document.querySelector('.team-1-name').textContent = currentName
}

const team2UpdateName = () => {
  console.log('new name in box')

  const currentName = document.querySelector('.team-2-input').value
  document.querySelector('.team-2-name').textContent = currentName
}

// Addition Function // team 1

const team1Add = () => {
  console.log('add-1')

  const newScore = document.querySelector('.team-1-score').textContent

  const brandNewScore = parseInt(newScore) + 1

  document.querySelector('.team-1-score').textContent = brandNewScore
  //Win Condition
  if (brandNewScore >= 21) {
    console.log('Number cannot be over 21')
    document.querySelector('.team-1-score').textContent = 21
    teamOne.classList.add('winner')
    outputMessage.textContent = 'you win!'
    document.querySelector('.team-1-add-1-button').disabled = true
    document.querySelector('.team-1-subtract-1-button').disabled = true
    document.querySelector('.update-team-1-name').disabled = true
    document.querySelector('.team-2-add-1-button').disabled = true
    document.querySelector('.team-2-subtract-1-button').disabled = true
    document.querySelector('.update-team-2-name').disabled = true
  } else {
    document.querySelector('.team-1-score').textContent = brandNewScore
  }
}

// Subtraction function // team 1

const team1Sub = () => {
  console.log('sub-1')

  const newScore = document.querySelector('.team-1-score').textContent
  const brandNewScore = parseInt(newScore) - 1

  document.querySelector('.team-1-score').textContent = brandNewScore
  if (brandNewScore <= 0) {
    console.log('number less than zero')
    document.querySelector('.team-1-score').textContent = 0
  } else {
    document.querySelector('.team-1-score').textContent = brandNewScore
  }
}

// Addition function // team 2

const team2Add = () => {
  console.log('add-1')

  const newScore = document.querySelector('.team-2-score').textContent
  const brandNewScore = parseInt(newScore) + 1

  document.querySelector('.team-2-score').textContent = brandNewScore
  if (brandNewScore >= 21) {
    console.log('Number cannot be over 21')
    //Win Condition
    document.querySelector('.team-2-score').textContent = 21
    teamTwo.classList.add('winner')
    outputMessage.textContent = 'you win!'
    // Disable buttons //
    document.querySelector('.team-1-add-1-button').disabled = true
    document.querySelector('.team-1-subtract-1-button').disabled = true
    document.querySelector('.update-team-1-name').disabled = true
    document.querySelector('.team-2-add-1-button').disabled = true
    document.querySelector('.team-2-subtract-1-button').disabled = true
    document.querySelector('.update-team-2-name').disabled = true
  } else {
    document.querySelector('.team-2-score').textContent = brandNewScore
  }
}

// Subtraction function // team 2
const team2Sub = () => {
  console.log('sub-1')

  const newScore = document.querySelector('.team-2-score').textContent
  const brandNewScore = parseInt(newScore) - 1

  document.querySelector('.team-2-score').textContent = brandNewScore
  if (brandNewScore <= 0) {
    console.log('number less than zero')
    document.querySelector('.team-2-score').textContent = 0
  } else {
    document.querySelector('.team-2-score').textContent = brandNewScore
  }
}

// Re-enable buttons//
const reEnable = () => {}

// Click Event for name update
document
  .querySelector('.update-team-1-name')
  .addEventListener('click', team1UpdateName)

document
  .querySelector('.update-team-2-name')
  .addEventListener('click', team2UpdateName)
// Click event for addition counter // team 1
document
  .querySelector('.team-1-add-1-button')
  .addEventListener('click', team1Add)

// Click event for subtraction counter // team 1
document
  .querySelector('.team-1-subtract-1-button')
  .addEventListener('click', team1Sub)
// Click event for subtraction counter // team 2
document
  .querySelector('.team-2-subtract-1-button')
  .addEventListener('click', team2Sub)

// Click event for addition counter // team 2

document
  .querySelector('.team-2-add-1-button')
  .addEventListener('click', team2Add)

// Reset button click event
document.querySelector('.reset-button').addEventListener('click', main)

document.addEventListener('DOMContentLoaded', main)
