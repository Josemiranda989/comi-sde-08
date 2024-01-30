let nMenu = document.querySelector('#nMenu')

// nMenu.innerHTML = 'Mira nuestra carta'
nMenu.innerHTML += ' Especial'

nMenu.classList.add('mEspecial')
nMenu.innerHTML += ' 💪'

let poweredBy = document.querySelector('footer p')

poweredBy.style.fontSize = '2rem';
poweredBy.style.color = 'tomato';
poweredBy.style.textTransform = 'uppercase'

let allTitles = document.querySelectorAll('h1')
console.log("🚀 ~ allTitles:", allTitles)

allTitles[0].style.backgroundColor = "tomato"