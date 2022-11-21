const container = document.querySelector('.container');
function grid(num) {
    const grid = num * num;
    const width = 100 / num + '%';    
    for (let i = 0; i < grid; i++) {
        
        const square = document.createElement('div');

        square.classList.add('square');
        square.style.width = `${width}`;

        container.appendChild(square);
    }

const divs = document.querySelectorAll('.square');

divs.forEach((div) => {
    div.addEventListener("mouseover", () => {
        div.classList.add('color');
    });
});
}
const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
    let inputNum = document.querySelector('#mynum').value;
    while (container.hasChildNodes()) {
        container.removeChild(container.firstChild);
      }

    grid(inputNum);
});
grid(16);