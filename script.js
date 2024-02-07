
const btn = document.getElementById('btn');
const ul = document.getElementById('myUl');

btn.addEventListener('click', function () {
    let inpt = document.getElementById('inpt');
    let vazifa = inpt.value;
    if (vazifa === '') {
        alert('Iltimos vazifani kiriting: ')
    }
    else {
        let li = document.createElement('li');
        li.textContent = vazifa;
        ul.appendChild(li);
        inpt.value = "";
        const d = document.createElement('span');
        d.innerHTML = '<img src="./img/close (1).png" alt="">';
        li.appendChild(d);

        li.addEventListener('click', function () {
            li.style.textDecoration = "line-through";
        })
        d.addEventListener('click', function () {
            d.parentElement.remove();
        })
    }

})