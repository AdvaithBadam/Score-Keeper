const p1but = document.querySelector('#p1button');
const p2but = document.querySelector('#p2button');
let resetbutton = document.querySelector('#reset');
const winningscoreselect = document.querySelector('#playto');
let p1score =0;
let p2score =0;
let p1ud = document.querySelector('#p1score');
let p2ud = document.querySelector('#p2score');
let p1NameInput = document.querySelector('#p1Name'); 
let p2NameInput = document.querySelector('#p2Name'); 
let p1NameDisplay = document.querySelector('#p1NameDisplay'); 
let p2NameDisplay = document.querySelector('#p2NameDisplay');
let gameTitle = document.querySelector('#gameTitle'); 

let winningscore = 3;
let isgo = false;

function triggerConfetti() {
    const confettiColors = ['#ff0a54', '#ff477e', '#ff7096', '#ff85a1', '#fbb1bd', '#f9bec7'];
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.backgroundColor = confettiColors[Math.floor(Math.random() * confettiColors.length)];
        confetti.style.left = `${Math.random() * 100}vw`;
        confetti.style.animationDuration = `${Math.random() * 2 + 1}s`;
        confetti.style.animationDelay = `${Math.random() * 0.5}s`;
        document.body.appendChild(confetti);
        confetti.addEventListener('animationend', () => {
            confetti.remove();
        });
    }
}


p1but.addEventListener('click', function(){
    if (!isgo)
    {
        p1score ++;
        if(p1score===winningscore)
        {
            isgo = true;
            p1ud.classList.add('winner');
            p2ud.classList.add('loser');
            triggerConfetti();
            resetbutton.innerText = 'New game'; 
        }
        p1ud.innerText = p1score;
    }
})

p2but.addEventListener('click', function(){
    if (!isgo)
    {
        p2score ++;
        if(p2score===winningscore)
        {
            isgo = true;
            p2ud.classList.add('winner');
            p1ud.classList.add('loser');
            triggerConfetti(); 
            resetbutton.innerText = 'New game';
        }
        p2ud.innerText = p2score;
    }
})

winningscoreselect.addEventListener('change', function(){
     winningscore= parseInt(this.value);
     reset();
})

resetbutton.addEventListener('click', reset)


p1NameInput.addEventListener('input', function() {
    p1NameDisplay.innerText = this.value || 'Player One';
});

p2NameInput.addEventListener('input', function() {
    p2NameDisplay.innerText = this.value || 'Player Two';
});


function reset(){
    isgo = false;
    p1score = 0;
    p1ud.innerText = 0;
    p2score = 0;
    p2ud.innerText = 0;
    p1ud.classList.remove('winner','loser');
    p2ud.classList.remove('winner','loser');
    document.querySelectorAll('.confetti').forEach(c => c.remove());
}

p1NameDisplay.innerText = p1NameInput.value || 'Player One';
p2NameDisplay.innerText = p2NameInput.value || 'Player Two';