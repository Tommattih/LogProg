var solutionBox = document.querySelector('.solution');

var button = document.querySelector('.buttons > button');

function answer() {
    if (solutionBox.style.display === 'block') {
        solutionBox.style.display = 'none';
        button.innerHTML = 'Run';
    } else {
        button.innerHTML = 'Stop';
        solutionBox.style.textAlign = 'center';
        solutionBox.style.display = 'block';
    };
}