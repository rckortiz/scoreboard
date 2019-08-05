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

const team1UpdateName = () => {
  console.log('new name in box')

  const currentName = document.querySelector('.team-1-input').value
  document.querySelector('.team-1-name').textContent = currentName
}

// Addition Function // team 1

const team1Add = () => {
  console.log('add-1')

  const newScore = document.querySelector('.team-1-score').textContent
  const brandNewScore = parseInt(newScore) + 1

  document.querySelector('.team-1-score').textContent = brandNewScore
}

// Subtraction function // team 1

const team1Sub = () => {
  console.log('sub-1')

  const newScore = document.querySelector('.team-1-score').textContent
  const brandNewScore = parseInt(newScore) - 1

  document.querySelector('.team-1-score').textContent = brandNewScore
}

// Addition function // team 2

const team2Add = () => {
  console.log('add 1')

  const currentScore = document.querySelector('team-2-score').textContent
  const newScore = parseInt(currentScore) + 1 

  document.querySelector('team-2-score') = newScore 
}

// Subtraction function // team 2

// Click Event for name update
document
  .querySelector('.update-team-1-name')
  .addEventListener('click', team1UpdateName)

// Click event for addition counter
document
  .querySelector('.team-1-add-1-button')
  .addEventListener('click', team1Add)

// Click event for subtraction counter
document
  .querySelector('.team-1-subtract-1-button')
  .addEventListener('click', team1Sub)
