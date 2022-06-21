// Finds the button and assigns it to a variable named `switchBtn`
const switchBtn = document.getElementById('switch-theme');
// Finds the body tag and assigns it to a variable named `bodyTag`
const bodyTag = document.getElementsByTagName('body')[0];

// Adds an event listener to the button.  
// When the button is clicked, the callback function is invoked.
switchBtn.addEventListener('click', () => {
    // Checks to see if the body already contains a class of `christmas` [true/false]
    const isChristmas = bodyTag.classList.contains('christmas');
    switch (isChristmas) {
        case true: // if true, remove christmas and add halloween to the body
            bodyTag.classList.remove('christmas');
            bodyTag.classList.add('halloween');
            break;
        case false: // if false, remove halloween and add christmas to the body
        default:
            bodyTag.classList.remove('halloween');
            bodyTag.classList.add('christmas');
            break;
    }
})