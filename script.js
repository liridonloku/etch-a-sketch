
for (i=1; i<=16*16; i++){
document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('container');
    console.log(container);
    const div = document.createElement('div');
    div.id = 'pixel';
    div.textContent = '';
    container.appendChild(div);
});
}
