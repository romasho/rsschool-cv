const burger = document.querySelector('.burger')
const name = document.querySelector('.my_name')
const nav = document.querySelector('.nav_ul')
burger.addEventListener('click', toggle)

function toggle() {
    if ((burger.classList.contains("open"))) {
        burger.classList.remove("open")
        burger.classList.add("close")
        name.style.display = 'none'
        
    } else {burger.classList.remove("close")
             burger.classList.add("open")
             name.style.display = 'block'
             }
}

