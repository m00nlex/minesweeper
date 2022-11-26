// const rotateCube = () => {
//     document.getElementById('main').classList.add('rotatedCube') // not real class
// }
//
// document.getElementById('main').addEventListener('click', rotateCube)

// - - - - - DEV IDEA PART END - - - - - //

console.log('It\'s working bruh' as string)

// const changeVisibility = (elem: string) => {
//     let elemDOM = document.getElementById(elem);
//     if(elemDOM){
//         (elemDOM.style.visibility === 'hidden')?elemDOM.style.visibility = 'visible':elemDOM.style.visibility = 'hidden';
//     }
// }

const changeDisplayFlex = (displayElem: string, mode: string) => {
    let elemDOM = document.getElementById(displayElem);
    if(elemDOM){
        switch (mode){
            case 'on':
                elemDOM.style.display = 'flex';
                break
            case 'off':
                elemDOM.style.display = 'none'
                break
            default: // DEV
                console.log(`ERROR: Wrong argument, waited for on/off, took ${mode}`)// DEV
                break// DEV
        }
    }
}
changeDisplayFlex('darkStartWindow', 'on'); //!

setTimeout(function (){
    changeDisplayFlex('darkStartWindow', 'off');
    changeDisplayFlex('playBtnWindow', 'on')
    }, 4000)