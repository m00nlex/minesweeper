// const rotateCube = () => {
//     document.getElementById('main').classList.add('rotatedCube') // not real class
// }
//
// document.getElementById('main').addEventListener('click', rotateCube)
// - - - - - DEV IDEA PART END - - - - - //
console.log('It\'s working bruh');
// function offVisibility(elem: string){
//     const elemDOM = document.getElementById(elem);
//     if(elemDOM){
//         elemDOM.style.visibility = 'hidden'
//     }
//     return;
// }
var changeVisibility = function (elem) {
    var elemDOM = document.getElementById(elem);
    if (elemDOM) {
        (elemDOM.style.visibility === 'hidden') ? elemDOM.style.visibility = 'visible' : elemDOM.style.visibility = 'hidden';
    }
};
var changeDisplayFlex = function (displayElem, mode) {
    var elemDOM = document.getElementById(displayElem);
    if (elemDOM) {
        switch (mode) {
            case 'on':
                elemDOM.style.display = 'flex';
                break;
            case 'off':
                elemDOM.style.display = 'none';
                break;
            default: // DEV
                console.log("ERROR: Wrong argument, waited for on/off, took ".concat(mode)); // DEV
                break; // DEV
        }
    }
};
changeDisplayFlex('darkStartWindow', 'on'); //!
setTimeout(function () {
    changeDisplayFlex('darkStartWindow', 'off');
    changeDisplayFlex('playBtnWindow', 'on');
}, 4000);
