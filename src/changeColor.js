import colors from './colors';

const changeColor = () => {
    let boxes = document.querySelectorAll('.ColorBox-box')
    for (let box of boxes.values()) {
        if (box.innerText) {
            box.innerText = ""
            box.style.boxShadow = ""
        }
    }
    let color = colors[Math.floor(Math.random() * colors.length)]
    let id = Math.floor(Math.random() * 16) + 1;
    let box = document.getElementById(id);
    box.style.backgroundColor = color;
    box.innerHTML = `<h3>Changed!</h3>`
    box.style.boxShadow = '2px 2px 2px 1px rgba(0, 0, 0, 0.2)'
}

export default changeColor;