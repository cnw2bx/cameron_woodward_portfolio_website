import { update as updateSnake, draw as drawSnake, SNAKE_SPEED, getSnakeHead, snakeIntersection, getScore } from './snake.js'
import { update as updateFood, draw as drawFood } from './food.js'
import { outsideGrid } from './grid.js'

if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
    // true for mobile device
    var ask = window.confirm("Game not available on mobile.");
    if (ask) {
      window.location.href = "index.html#services";
    }
  } else {

    let lastRenderTime = 0
    let gameOver = false
    let score = 0
    const gameBoard = document.getElementById('game-board')

    function main(currentTime) {
        if (gameOver) {
            score = getScore()
            if (confirm("You're score was " + score + ". Press 'ok' to restart.")) {
                window.location = '/snake.html'
            }
            return 
        }
        window.requestAnimationFrame(main)
        const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
        if (secondsSinceLastRender < 1 / SNAKE_SPEED) return
        
        lastRenderTime = currentTime

        update() 
        draw()
    }

    window.requestAnimationFrame(main)

    function update() {
        updateSnake()
        updateFood()
        checkDeath()
    }

    function draw() {
        gameBoard.innerHTML = ''
        drawSnake(gameBoard)
        drawFood(gameBoard)
    }

    function checkDeath() {
        gameOver = outsideGrid(getSnakeHead()) || snakeIntersection() 
    }
  }