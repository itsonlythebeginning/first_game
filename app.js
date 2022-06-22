
let arr = ["Red", "Lime", "Green", "Olive", "Teal", "Aqua", "Orange", "Tomato", "Yellow", "Blue", "Purple", "SlateBlue", "Black"]

let startButton = document.getElementById("start")

let gameField = document.getElementById("game")

let gameTime = document.getElementById("game-time")


let timeHeader = document.getElementById("time-header")

let resultHeader = document.getElementById("result-header")

let time = document.getElementById("time")

let result  = document.getElementById("result")


let isGameStarted = false

let score = 0


startButton.addEventListener("click", startGame )
gameField.addEventListener("click", handleBoxClick )
gameTime.addEventListener("input" , setGameTime )





function startGame () {

    score = 0

    gameTime.setAttribute("disabled" , "true")


    setGameTime ()
    timeHeader.classList.remove("hide")
    resultHeader.classList.add("hide")


    isGameStarted = true


    startButton.style.display = "none"

    gameField.style.backgroundColor = "white"







    let interval = setInterval(function () {

        let vremya = parseFloat(time.textContent)

        if (vremya <= 0 ) {

            clearInterval(interval)

            endGame ()

        }

        else {

            time.textContent = (vremya - 0.1).toFixed(1)

        }

    } , 100)

    renderBox()




}




function renderBox () {




    gameField.innerHTML = ""

    let boxSize = getRandom(30, 100)

    let gameSize = gameField.getBoundingClientRect()

    let maxTop = gameSize.height - boxSize

    let maxLeft = gameSize.width - boxSize


    let box = document.createElement("div")

    gameField.insertAdjacentElement("afterbegin" , box)

    box.style.backgroundColor = getRandomColor (arr)

    box.style.width = box.style.height = boxSize + "px"

    box.style.top = getRandom(0 , maxTop) + "px"

    box.style.left = getRandom(0 , maxLeft) + "px"

    box.style.position = "absolute"

    box.style.cursor = "crosshair"

    box.setAttribute("data-box" , true)





}





function handleBoxClick (event) {

    if (!isGameStarted) {

        return
    }


    if (event.target.dataset.box)

    {

        score++

        renderBox ()

    }

}




function getRandomColor (arr) {

    return arr[getRandomInt(0, arr.length - 1)]

}





function getRandom(min, max)
{
    return Math.floor(Math.random() * (max - min)) + min
}






function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



function endGame () {


    startButton.style.display = "flex"
    gameField.style.backgroundColor = "#ccc"
    gameField.innerHTML = ""
    timeHeader.classList.add("hide")
    resultHeader.classList.remove("hide")


    gameTime.removeAttribute("disabled")

    gameScore ()


    isGameStarted = false

}




function gameScore () {

    result.innerHTML = score.toString()

}



function setGameTime () {


    timeHeader.classList.remove("hide")
    resultHeader.classList.add("hide")

    let vremya = parseFloat(gameTime.value)

    time.textContent = vremya.toFixed(1)

}

