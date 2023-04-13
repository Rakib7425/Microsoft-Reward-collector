
let getReward = document.getElementById('btn');
let word = document.getElementById('wordGen');
let doc = document.getElementById('doc');

let array = [];


word.addEventListener('click', () => {
    for (let i = 0; i < 100; i++) {
        let word = '';
        const letters = 'abcdefghijklmnopqrstuvwxyz';
        // console.log(letters.toUpperCase());
        const length = Math.floor(Math.random() * 6) + 5;
        for (let j = 0; j < length; j++) {
            word += letters.charAt(Math.floor(Math.random() * letters.length));
        }
        array.push(`"${word}"`);
    }
    
    doc.innerHTML = array.join(', ')
})

getReward.addEventListener('click', ()=>{
    array.forEach((element, index) => {
        setTimeout(() => {
            console.log(element);
            // window.open("https://www.google.com/search?q=" + element); // Google Chrome
            window.open("https://www.bing.com/search?q=" + element); // Microsoft Edge
        }, 5000);
    });
})
