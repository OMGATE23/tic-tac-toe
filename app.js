const cellElement = document.querySelectorAll('[data-cell]')
const board = document.querySelector('.board')
const finalMessageElement = document.querySelector('.final-message-container')
const finalMessageText = document.querySelector('.final-message')

let circleTurn
const X_CLASS = 'x'
const CIRCLE_CLASS = 'circle'
const WINNING_COMBINATIONS = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
