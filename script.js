const button = document.querySelector('.navbar-toggler')

button.addEventListener('click', () => {
    const hamburgerOpen = document.querySelector('.hamburger-open')
    const hamburgerClose = document.querySelector('.hamburger-close')

    hamburgerOpen.classList.toggle('hide-element')
    hamburgerClose.classList.toggle('hide-element')
})
