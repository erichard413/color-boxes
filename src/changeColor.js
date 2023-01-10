import colors from './colors';

const changeColor = () => {
    let color = colors[Math.floor(Math.random() * colors.length)]
    let id = Math.floor(Math.random() * 16) + 1;
    let box = document.getElementById(id);
    box.style.backgroundColor = color;
}

export default changeColor;