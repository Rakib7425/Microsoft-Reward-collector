
let getReward = document.getElementById('getReward');
let word = document.getElementById('wordGen');
let arrRes = document.getElementById('doc');
let reset = document.getElementById('reset');

let array = [];

let index = 0;

word.addEventListener('click', () => {
    let noWards = Math.abs(document.getElementById('nowords').value);
    console.log(noWards);

    for (let i = 0; i < noWards; i++) {
        let word = '';
        const letters = 'abcdefghijklmnopqrstuvwxyz';
        const length = Math.floor(Math.random() * 3) + 3;
        for (let j = 0; j < length; j++) {
            word += letters.charAt(Math.floor(Math.random() * letters.length));
        }
        // array.push(`"${word}"`);
        array.push(`${word}`);
    }

    arrRes.innerText = array.join(', ')
})




// TODO 
// if (array.length == 0) {
//     getReward.style.pointerEvents="none";
//     getReward.style.backgroundColor = "green";
// } else {
//     getReward.style.cursor="default";
//     getReward.style.background = rgb(6, 171, 146);
// }


getReward.addEventListener('click', () => {

    let intervalId = setInterval(function () {
        // console.log(array[index]);

        // window.open("https://www.google.com/search?q=" + array[index]); // Google Chrome

        window.open("https://www.bing.com/search?q=" + array[index]); // Microsoft Edge
        
        // window.location.replace(window.location + window.location.array[index] + window.location.hash);

        index++;

        if (index >= array.length) {
            clearInterval(intervalId);
        }

    }, 4000);

})

reset.addEventListener('click', () => {
    window.location.reload();
})