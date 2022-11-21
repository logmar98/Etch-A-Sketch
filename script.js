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
divs.forEach((div) => {
    clear.addEventListener("click", () => {
        div.classList.remove('color');
    });
});

}
const btn = document.querySelector('.btn');
const clear = document.querySelector('.clear')

btn.addEventListener('click', () => {
    let inputNum = document.querySelector('#mynum').value;
    if ( 0 < inputNum && inputNum <= 100){
        while (container.hasChildNodes()) {
            container.removeChild(container.firstChild);
        }  
        grid(inputNum);
    } else { alert("it's need to be between 1 and 100");}

    
});

grid(16);