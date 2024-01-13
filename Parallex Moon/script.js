let background = document.getElementById("background")
let moonimg = document.getElementById("moonimg")
let mountainimg = document.getElementById("mountainimg")
let roadimg = document.getElementById("roadimg")
let textarea = document.getElementById("textarea")
window.addEventListener('scroll', () => {
    var value = window.scrollY
    background.style.top = value * 0.5 + 'px';
    moonimg.style.left = -value * 0.5 + 'px';
    mountainimg.style.top = -value * 0.15 + 'px';
    roadimg.style.top = value * 0.15 + 'px';
    textarea.style.top = value * 1 + 'px';
})