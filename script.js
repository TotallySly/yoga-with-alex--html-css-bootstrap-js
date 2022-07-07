// Global Variables

const button = document.querySelector('.navbar-toggler')
const boxes = document.querySelectorAll('.box')

/**
 * The Bootstrap v.5.2 hamburger did not work properly. I have manually created a 'click' event listener so the
 * hamburger menu now works.
 */
button.addEventListener('click', () => {
    const hamburgerOpen = document.querySelector('.hamburger-open')
    const hamburgerClose = document.querySelector('.hamburger-close')

    hamburgerOpen.classList.toggle('hide-element')
    hamburgerClose.classList.toggle('hide-element')
})

window.addEventListener('scroll', checkBoxes)

checkBoxes()

function checkBoxes() {
    const triggerBottom = (window.innerHeight / 5) * 4

    boxes.forEach((box) => {
        const boxTop = box.getBoundingClientRect().top

        if (boxTop < triggerBottom) {
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }
    })
}
