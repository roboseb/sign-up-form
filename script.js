function check(){
    let pass1 = document.getElementById('password1');
    let pass2 = document.getElementById('password2');
    if (pass1.value.length < 5 || pass2.value.length < 5) {
        document.documentElement.style.setProperty('--pass-text', '"Must be 5-20 characters"');
        console.log('test short');
    } else if (pass1.value !== pass2.value) {
        document.documentElement.style.setProperty('--pass-text', '"Needs to match"');
        pass2.setCustomValidity('Passwords need to match!');
    } else {
        pass2.setCustomValidity('')
    }
    pass2.reportValidity();
}

const head = document.querySelector('img');
background = document.getElementById('background');
let clicks = 0;

head.addEventListener('click', () => {
    if (clicks < 3) {
        head.classList.remove('clicked');
        void head.offsetWidth;
        head.classList.add('clicked');
        clicks ++;
    } else {
        head.classList.remove('clicked');
        head.style.filter = `invert(${clicks*5}%)`;
        clicks++;
    }
});