async function getData() {
    let response = await fetch('https://6429930bebb1476fcc4c4806.mockapi.io/oplata', {
     mode: same-origin,                            
     headers: {
            "Accept": "application/json",
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/x-www-form-urlencoded',
            'exmaple': 'example'
        }
        })
    let result = await response.json()
    obj = Object.keys(result).map((key) => result[key])
    obj.sort((a, b) => moment(a.date, 'DD.MM.YYYY') - moment(b.date, 'DD.MM.YYYY'))
    fillTable(obj)
}
getData().catch(alert);


/* async function getPayClient() {
    let response = await fetch('../db/takepayclient.php')
    let result = await response.json()

    delArr = Object.keys(result).map((key) => result[key])
    delArr.sort((a, b) => moment(a.date, 'DD.MM.YYYY') - moment(b.date, 'DD.MM.YYYY'))
    fillPayClient(delArr)
}

function fillPayClient(delArr) {
    sum3 = delArr.reduce((acc, elem) => acc + (+elem.cost), 0);
    delArr.forEach((item, index) => {
        out3.innerHTML +=
            `<tr>
                    <td>${index+1}</td>
                    <td>${item.name}</td>
                    <td class='date'>${item.date}</td>
                    <td>${item.client}</td>
                    <td>${item.cost}</td>
                </tr>        
            `
    })
    total3.innerHTML = Math.round(sum3);

} */
// функция заполнения таблицы
function fillTable(obj) {
    out.innerHTML = "";
    obj.forEach((item, index) => {
        out.innerHTML += createStringTable(item, index);
    });
    workedElems = document.querySelectorAll('.worked');
    sum = obj.reduce((acc, elem) => acc + (+elem.cost), 0);
    total.innerHTML = Math.round(sum);
};


// функция заполнения строк в таблицы содержимым ввода из инпута
const createStringTable = (item, index) => {

    return `
            <tr class="worked">
                <td>${index+1}</td>
                <td>${item.name}</td>
                <td class='date'>${item.date}</td>
                <td class="client">${item.client}</td>
                <td>${item.cost}</td>
                <td class="td-del"><button class="btn-del" onclick="deleteObj(${index},${item.id})">&#10006</button></td>
            </tr>
    `
}

/* const addPayClient = async(elemObj) => {
        await fetch('../db/payclient.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(elemObj),
            })
            .catch(function(error) {
                console.log(error)
            })
    }
    //функция удаляющая при нажатии на кнопку отмеченную строку
const deleteObj = async(index, item) => {
        await fetch('../db/delclient.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: item
        })
        workedElems[index].classList.add('delete');
        console.log("7")
        sum = sum - obj[index].cost;
        delObj = {
            name: obj[index].name,
            date: obj[index].date,
            client: obj[index].client,
            cost: obj[index].cost
        }
        addPayClient(delObj)
        delArr.push(delObj)
        obj.splice(index, 1)
        if (sum == 0) {
            total.innerHTML = '';
        }
        fillTable(obj);
        fillPayClient(delArr);

    } */
/* ************************************* */
btn.addEventListener('click', (e) => {
    e.preventDefault();
    /* let curDate = date.value.replace(/^(\d+)-(\d+)-(\d+)$/, `$3-$2-$1`);
    let newObj = { name: form[1].value, date: curDate, client: form[3].value, cost: +form[4].value };
    if (newObj.name == '' || newObj.date == '' || newObj.client == '' || newObj.cost == 0) {
        alert('Заполните все поля формы!')
        return false;
    } else {
        fetch('../db/savedb.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newObj),
            })
            .catch(function(error) {
                console.log(error)
            })
        obj.push(newObj);
        sum = obj.reduce((acc, elem) => acc + (+elem.cost), 0);
        fillTable(obj);
        form[1].value = '';
        date.value = '';
        form[3].value = '';
        form[4].value = 0; */
    form.classList.remove('active');
    overlay.classList.remove('active');
    //}
});
//************************************************** */
btnClose2.addEventListener('click', (e) => {
        e.preventDefault();
        overlay.classList.remove('active');
        overlayTable.classList.remove('active');
    })
    /************************************************** */
btnClose3.addEventListener('click', () => {
        delArr = [];
        out3.innerHTML = '';
        overlay.classList.remove('active');
        overlayTable3.classList.remove('active');
    })
    /* ***************************************************** */
btnModal.addEventListener('click', (e) => {
        e.preventDefault();
        form.classList.add('active');
        overlay.classList.add('active');
    })
    /************************************************** */
btnClose.addEventListener('click', (e) => {
        e.preventDefault();
        form.classList.remove('active');
        overlay.classList.remove('active');
        overlayTable.classList.remove('active');
    })
    // Функция при нажатии на фамилию в таблицу выводит все по этой фамилии в отдельном окне
    /* table.addEventListener('click', (e) => {
            let target = e.target;
            target.parentElement.style.background = ""
            out2.innerHTML = "";
            if (target.className != 'client') {
                return;
            } else {
                nameClient = target.textContent;
                obj.map((item) => {
                    if (nameClient === item.client) {
                        arrClient.push(item);
                        arrClient.sort((a, b) => moment(a.date, 'DD.MM.YYYY') - moment(b.date, 'DD.MM.YYYY'))
                    }
                });
                overlay.classList.add('active');
                overlayTable.classList.add('active');
                sum2 = arrClient.reduce((acc, elem) => acc + (+elem.cost), 0);

                arrClient.map((elem, index) => {
                    tableTitle.innerHTML = `
                    <h3>Оплата - ${elem.client}</h3>
                    `
                    out2.innerHTML +=
                        `<tr>
                        <td>${index+1}</td>
                        <td>${elem.name}</td>
                        <td class='date'>${elem.date}</td>
                        <td>${elem.client}</td>
                        <td>${elem.cost}</td>
                    </tr>        
                `
                })
                total2.innerHTML = Math.round(sum2);
                arrClient = [];
            }
        }) */
    /* *********************************************************** */
btnModal2.addEventListener('click', () => {
        overlayTable3.classList.add('active');
        overlay.classList.add('active');
        
    })
    /* *********************************************************** */
inputSearch.addEventListener('input', () => {
        let textInputSearch = inputSearch.value;
        let td = out.querySelectorAll('.client');
        td.forEach((element) => {
            if (textInputSearch == element.innerText) {
                window.scrollTo({
                    top: element.offsetTop,
                    behavior: "smooth"
                })
                element.parentElement.style.background = 'lightgreen';
                textInputSearch = "";
            } else {
                return
            }
        })
    })
    /* ************************************************************ */
arrowUp.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
})
