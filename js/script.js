const mario = document.querySelector('.mario')
const pipe = document.querySelector('.pipe')

const jump = () => {
    mario.classList.add('jump')

    setTimeout(() => {
        mario.classList.remove('jump')
    }, 500)
}

const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '')

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80 ) {
        //deactivating pipe's animation
        pipe.style.animation = 'none'
        pipe.style.left = `${pipePosition}px`

        //deactivating Mario's animation
        mario.style.animation = 'none'
        mario.style.bottom = `${marioPosition}px`

        //changing Mario's image and setting its style properties
        mario.src = './images/game-over.png'
        mario.style.width = '75px'
        mario.style.marginLeft = '50px'
    
        clearInterval(loop)
    }
}, 10)

document.addEventListener('keydown', jump)