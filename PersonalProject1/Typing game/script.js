const word = document.getElementById('word');
const text = document.getElementById('text');
const scoreEl = document.getElementById('score');
const timeEl = document.getElementById('time');
const endgameEl = document.getElementById('end-game-container');
const settingsBtn = document.getElementById('settings-btn');
const settings = document.getElementById('settings');
const settingsForm = document.getElementById('settings-form');
const difficultySelect = document.getElementById('difficulty');

//List of worfs for game
const words=[
    'ballon',
    'phone',
    'gift',
    'high',
    'crop',
    'advice',
    'haircut',
    'knot',
    'promise',
    'doub',
    'double',
    'piano',
    'horizon',
    'ticket',
    'spoil',
    'atlas',
    'outside',
    'panda',
    'destroy',
    'hollow',
    'stream',
    'juice',
    'episode',
    'vein',
    'breez',
    'allow',
    'vanilla',
    'tunnel',
    'zero',
    'farmer',
    'taste',
    'jump',
    'cat',
    'finale',
    'blank',
    'space',
    'bad',
    'blood',
    'knew',
    'you',
    'were',
    'trouble',
    'love',
    'story',
    'belong',
    'with',
    'me',
    'we',
    'are',
    'never',
    'ever',
    'getting',
    'back',
    'together',
    'the',
    'man',
    'enchanted',
    'december',
    'fantastic',
    'savage',
    'level',
    'absence',
    'accidentally',
    'accomplich',
    'finally',
    'surprise',
    'embarrass',
    'recommend',
    'particular',
    'excellent',
    'immediate',
    'guarantee',
    'opponent',
    'apologize',
    'cardiologist',
    'astrologist',
    'illigible',
    'conscious',
    'delicious',
    'pretentious',
    'fraction',
    'anxious',
    'nutritious',
    'manipulation',
    'scissors',
    'depression',
    'innocent',
    'power',
    'independent',
    'century',
    'repulsion',
    'chemical',
    'organism',
    'achievement',
    'applicant',
    'assurance',
    'Assure',
    'balance ',
    'basic',
    'behave',
    'cancel',
    'client',
    'determine',
    'degree',
    'disturb',
    'collaborate',
    'evaluate',
    'highly',
    'inspection',
    'especially',
    'highly',
    'generally',
    'observe',
    'persuasion',
    'valid',
    'invalid'
];

//init word
let randomWord;

// init score
let score = 0;

//init time
let time = 10;

// set difficulty to value in local storage or medium
let difficulty = localStorage.getItem('difficulty') !== null ?
localStorage.getItem('difficulty') : 'medium';

//set difficulty select value
difficultySelect.value = localStorage.getItem('difficulty') !== null ?
localStorage.getItem('difficulty') : 'medium';

//focus on text on start
text.focus();

//start counting down
const timeInterval = setInterval(updateTime, 1000);

//generate random word from array

function getRandomWord(){
    return words[Math.floor(Math.random() * words.length)]
}

// add word to DOM
function addWordToDOM(){
    randomWord = getRandomWord();
    word.innerHTML = randomWord;
}

//update score
function updateScore(){
    score++;
    scoreEl.innerHTML = score;
}

//update time
function updateTime(){
    time--;
    timeEl.innerHTML = time + 's';

    if(time === 0){
        clearInterval(timeInterval);
        //endgame
        gameOver();
    }
}

// game over, show end screen
function gameOver(){
    endgameEl.innerHTML = `
    <h1>Time ran out</h1>
    <p>Your final score is ${score}</p>
    <button onclick="location.reload">Reload</button>
    `;
    endgameEl.style.display = 'flex';
}

addWordToDOM();

//typing
text.addEventListener('input', e =>{
    const insertedText = e.target.value;
    

    if(insertedText === randomWord){
        addWordToDOM();
        updateScore();

        //clear
        e.target.value = '';

        if(difficulty ==='hard'){
            time += 2;
        }else if(difficulty === 'medium'){
            time += 3;
        } else {
            time += 5;
        }

        updateTime();
    }
});

//settings btn click
settingsBtn.addEventListener('click', () =>
settings.classList.toggle('hide'));

//setting select
settingsForm.addEventListener('change', e =>{
    difficulty = e.target.value;
    localStorage.setItem('difficulty', difficulty);
});

