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

startGame()
function startGame(){
    circleTurn = false
    cellElement.forEach(cell => {
        cell.addEventListener('click' , handleClick, {once : true})
    })
    setBoardHoverClass()
}

function handleClick(e){
    cell = e.target

    currentClass = circleTurn ? CIRCLE_CLASS : X_CLASS
    placeMark(cell, currentClass)
    swapTurn()
    setBoardHoverClass()
}

function placeMark(cell, currentClass){
    cell.classList.add(currentClass)
}

function swapTurn(){
    circleTurn = !circleTurn
}

function setBoardHoverClass(){
    board.classList.remove(X_CLASS)
    board.classList.remove(CIRCLE_CLASS)

    if(circleTurn){
        board.classList.add(CIRCLE_CLASS)
    } else{
        board.classList.add(X_CLASS)
    }
}