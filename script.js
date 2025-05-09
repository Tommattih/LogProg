var solutionBox = document.querySelector('.solution');

var button = document.querySelector('.buttons > button');

var visible = false;

function answer() {
    if (solutionBox.style.display === 'block') {
        solutionBox.style.display = 'none';
        button.innerHTML = 'Run';
        visible = false;
    } else {
        button.innerHTML = 'Stop';
        solutionBox.style.textAlign = 'center';
        solutionBox.style.display = 'block';
        visible = true;
    };
}

function capitalizeFirstLetter(string) {
    if (typeof string !== 'string' || string.length === 0) {
        return string;
    }
    return string.charAt(0).toLocaleUpperCase() + string.slice(1).toLocaleLowerCase();
}

var clearInput = "Ops! Algo ficou faltando, tente novamente.";
function emptyInput() {
        alert(clearInput);
        solutionBox.innerHTML = clearInput;
}