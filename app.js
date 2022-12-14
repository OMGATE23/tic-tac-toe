const cellElement = document.querySelectorAll('[data-cell]')
const board = document.querySelector('.board')
const finalMessageElement = document.querySelector('.final-message-container')
const finalMessageText = document.querySelector('.final-message')
const restart = document.querySelector('#restart-button')

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
    finalMessageElement.classList.remove('show')
    circleTurn = false
    cellElement.forEach(cell => {
        cell.classList.remove(CIRCLE_CLASS)
        cell.classList.remove(X_CLASS)
        cell.removeEventListener('click' , handleClick)
        cell.addEventListener('click' , handleClick, {once : true})
    })
    setBoardHoverClass()
}

restart.addEventListener('click' , startGame)



function handleClick(e){
    cell = e.target

    currentClass = circleTurn ? CIRCLE_CLASS : X_CLASS
    placeMark(cell, currentClass)
    
    if(checkWin(currentClass)){
        endGame(false)
    } if(isDraw()){
        endGame(true)
    } else {
        swapTurn()
        setBoardHoverClass()
    }
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

function checkWin(currentClass){
    return WINNING_COMBINATIONS.some(combination => {
        return combination.every(index => {
            return cellElement[index].classList.contains(currentClass)
        })
    })
}

function endGame(draw){
    if(draw){
        finalMessageText.innerText = "It's a Draw"
    } else {
        finalMessageText.innerText = `${!circleTurn ? "X's" : "O's" } win`
    }

    finalMessageElement.classList.add('show')
}

function isDraw(){
    return [...cellElement].every(cell => {
        return cell.classList.contains(X_CLASS) || cell.classList.contains(CIRCLE_CLASS)
    })
}