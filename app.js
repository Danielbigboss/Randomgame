


let button = document.querySelector('button')
function validat() {
    if (event.target.value.length > 0) {
        button.classList.add('access')
        button.classList.remove('disabled')
    } else {
        button.classList.remove('access')
        button.classList.add('disabled')
    }
}
var number = 0
let input = document.querySelector('.input')
let message = document.querySelector('.message')
let h1 = document.querySelector('h1')
let imgsrc = document.querySelector('.show')
let imgs = document.querySelector('.imgs')
function startGame() {
    if (input.value.length > 0) {
        let tim = setInterval(gamebegin, 100)
        function gamebegin() {
            if (number == 20) {
                clearInterval(tim)
                number = 0;
                input.style.display='block'
               
                if (input.value == h1.innerHTML) {
                    message.innerHTML = 'you won to this round'
                    message.classList.add('won')
                    message.classList.remove('failed')
                    imgsrc.src='./images/won.png'
                    imgs.style.display='flex'
                    imgs.style.marginLeft='auto'
                    imgs.style.marginRight='auto'
                } else {
                    message.innerHTML = 'you failed to this round your input was '+ input.value; 
                    message.classList.remove('won')
                    message.classList.add('failed')
                    imgsrc.src='./images/lose.png'
                    imgs.style.display='flex'
                    imgs.style.marginLeft='auto'
                    imgs.style.marginRight='auto'
                }
                setTimeout(() => {
                    message.innerHTML= '';
                    h1.innerHTML='';
                    imgs.style.display='none'
                    input.value='';
                   
                    
                }, 4000);
                button.classList.remove('access')
                button.classList.add('disabled')
            }else {
                number++;
                h1.innerHTML = Math.floor(Math.random() * 500)
                input.style.display='none'
            }
        }
    }
}



