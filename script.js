

function fillTheGrid(size){
    const container = document.getElementById('container');
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    for (i=1; i<=size*size; i++) {
        const div = document.createElement('div');
        div.classList.add('pixel');
        div.id = `pixel ${i}`;
        div.textContent = '';
        div.style.backgroundColor = 'black';
        div.style.opacity = 0;
        container.appendChild(div);
    }
    document.querySelectorAll('.pixel').forEach(item => {
        item.addEventListener('mouseenter', e =>{
            if(document.getElementById('checkbox').checked){
                if(e.target.style.backgroundColor === 'black'){
                    e.target.style.backgroundColor = `rgb(${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255})`;
                }
                else{
                    let rgb = e.target.style.backgroundColor;
                    rgb = rgb.replace(/[^\d,]/g, '').split(',');
                    let firstValue = parseInt(rgb[0]);
                    let secondValue = parseInt(rgb[1]);
                    let thirdValue = parseInt(rgb[2]);
                    e.target.backgroundColor = `rgb( ${Math.min(Math.floor(firstValue*1.1),255)}, ${Math.min(Math.floor(secondValue*1.1),255)}, ${Math.min(Math.floor(thirdValue*1.1),255)})`;
                }
            }
            else{
                e.target.style.backgroundColor = 'black';
            }
            let opacity = parseFloat(e.target.style.opacity);
            opacity += 0.1;
            e.target.style.opacity = opacity;
        });
    });
}
fillTheGrid(16);

document.getElementById('reset-button').addEventListener('click', e =>{
    let size = 16; //default size
    do {
        let userInput = prompt('Please select a size from 1 to 50');
        if(userInput){
            size = parseInt(userInput);
        }
    }while(typeof(size)!='number' || size >50);
    document.getElementById('container').replaceChildren();
    fillTheGrid(size);
});


