let obj = {
    input: document.querySelector('#name'),
    text: document.querySelector('.header__h1'),
    button: document.querySelector('.form__button'),
    span: document.querySelector('.header__span'),
    image: document.querySelector('.image__foto'),
    name: null,
    list: ['Александр Державин', 'Максим Петров', 'Софья Буханец', 'Артур Диоданд'],
    buttonClear: document.querySelector('.button_clear')
};

let clicks = obj.button.onclick = function () {
    let name = obj.input.value;
    obj.name = name;
    obj.name = obj.name.toUpperCase();
    for (var i = 0; i < name.length; i++) {
        if (isNaN(name[i])) {
            // obj.text.innerHTML = 'Ваше имя: ';

            for (var j = 0; j < obj.list.length; j++) {
                if (obj.name == obj.list[j].toUpperCase() || obj.name == 'александр'.toUpperCase() || obj.name == 'державин'.toUpperCase()) {
                    obj.span.innerHTML = obj.list[0].toUpperCase();
                    obj.image.src = 'img/Dergavin.jpg';
                    obj.image.style.display = 'flex';
                    return false;
                } else if (obj.name == obj.list[j].toUpperCase() || obj.name == 'максим'.toUpperCase() || obj.name == 'петров'.toUpperCase()) {
                    obj.span.innerHTML = obj.list[1].toUpperCase();
                    obj.image.src = 'img/maxim.jpg';
                    obj.image.style.display = 'flex';
                    return false;
                } else if (obj.name == obj.list[j].toUpperCase() || obj.name == 'софья'.toUpperCase() || obj.name == 'буханец'.toUpperCase()) {
                    obj.span.innerHTML = obj.list[2].toUpperCase();
                    obj.image.src = 'img/Sofia.jpg';
                    obj.image.style.display = 'flex';
                    return false;
                } else if (obj.name == obj.list[j].toUpperCase() || obj.name == 'артур'.toUpperCase() || obj.name == 'диоданд'.toUpperCase()) {
                    obj.span.innerHTML = obj.list[3].toUpperCase();
                    obj.image.src = 'img/Artur.jpg';
                    obj.image.style.display = 'flex';
                    return false;
                } else {
                    alert('Данного имени нет у нас в данных, введите другое имя.');
                    return false;
                }
            }

        } else {
            // obj.text.innerHTML = 'Это ваше имя, вы уверены? ';
            obj.span.innerHTML = obj.name;
        }
    }
    name = '';
};
obj.input.onkeypress = handleKeyPress;
function handleKeyPress(e) {
    if (e.keyCode === 13) {
        obj.button.click();
        return false;
    }
}



let funFilter = function () {
    for (var i = 0; i < obj.name.length; i++) {
        if (isNaN(obj.name[i])) {
            return true;
        } else {
            return false;
        }
    }
};

// Цвет шрифта

// let funStyle = obj.text.addEventListener('click', function () {
//     if (obj.text.style.color != 'blue') {
//         obj.text.style.color = 'blue';
//     } else {
//         obj.text.style.color = 'black';
//     }
// });


// Получить value

/* <input id="elem1" type="text" placeholder="Количество">
<input id="butt" type="button" value="Кнопка"/><br><br>
<div id="str"></div>

butt.onclick = function() {
        var val = document.getElementById('elem1').value;
        document.getElementById('str').innerHTML="Вы ввели: "+val;
}; */