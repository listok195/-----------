// 1
z1btn.onclick = function (e) {
    rez1(z1v1.value, z1v2.value)
}
for (item of document.querySelectorAll('#z1 input')) {
    item.addEventListener('keypress', function (e) {
        if (e.key == 'Enter') {
            rez1(z1v1.value, z1v2.value)
        }
    })
}
function rez1(a, b) {
    if (z1v1.value !== '' && z1v2.value !== '') {
        switch (true) {
            case a.length > b.length: {
                r1.innerHTML = 1;
                break;
            }
            case a.length < b.length: {
                r1.innerHTML = -1;
                break;
            }
            case a.length == b.length: {
                r1.innerHTML = 0;
                break;
            }
        }
    }
    else {
        r1.innerHTML = 'Нет зачений'
    }
}
// 2
z2btn.onclick = function (e) {
    rez2(z2v1.value)
}
for (item of document.querySelectorAll('#z2 input')) {
    item.addEventListener('keypress', function (e) {
        if (e.key == 'Enter') {
            rez2(z2v1.value)
        }
    })
}
function rez2(a) {
    if (z2v1.value !== '') {
        a = a[0].toUpperCase() + a.slice(1, a.length + 1);
        r2.innerHTML = a
    }
    else {
        r2.innerHTML = 'Нет зачений'
    }
}
// 3
z3btn.onclick = function (e) {
    rez3(z3v1.value)
}
for (item of document.querySelectorAll('#z3 input')) {
    item.addEventListener('keypress', function (e) {
        if (e.key == 'Enter') {
            rez3(z3v1.value)
        }
    })
}

function rez3(a) {
    if (z3v1.value !== '') {
        const glassnie = 'аеёиоуыэюяaeiouy'
        const temp = a.toLowerCase()
        let b = 0
        for (let i = 0; i < temp.length; i++) {
            if (temp[i] == 'а' || temp[i] == 'е' || temp[i] == 'ё' || temp[i] == 'и' ||
                temp[i] == 'о' || temp[i] == 'у' || temp[i] == 'ы' || temp[i] == 'э' ||
                temp[i] == 'ю' || temp[i] == 'я' || temp[i] == 'a' || temp[i] == 'e' ||
                temp[i] == 'i' || temp[i] == 'o' || temp[i] == 'u' || temp[i] == 'y') {
                b++
            }
        }
        r3.innerHTML = b
    }
    else {
        r3.innerHTML = 'Нет зачений'
    }
}
// 4
z4btn.onclick = function (e) {
    rez4(z4v1.value)
}
for (item of document.querySelectorAll('#z4 input')) {
    item.addEventListener('keypress', function (e) {
        if (e.key == 'Enter') {
            rez4(z4v1.value)
        }
    })
}
function rez4(a) {
    if (z4v1.value !== '') {
        if (a.toLowerCase().indexOf('100% бесплатно') == -1 &&
            a.toLowerCase().indexOf('увеличение продаж') == -1 &&
            a.toLowerCase().indexOf('только сегодня') == -1 &&
            a.toLowerCase().indexOf('не удаляйте') == -1 &&
            a.toLowerCase().indexOf('ххх') == -1) {
            r4.innerHTML = 'Спама нет'
        }
        else {
            r4.innerHTML = 'Спам'
        }
    }
    else {
        r4.innerHTML = 'Нет зачений'
    }
}
// 5
z5btn.onclick = function (e) {
    rez5(z5v1.value, z5v2.value)
}
for (item of document.querySelectorAll('#z5 input')) {
    item.addEventListener('keypress', function (e) {
        if (e.key == 'Enter') {
            rez5(z5v1.value, z5v2.value)
        }
    })
}
function rez5(a, b) {
    if (z5v1.value !== '' && z5v2.value !== '') {
        let c = ''
        for (let i = 0; i < b; i++) {
            if (i > b - 4) {
                c += '...'
                i += 3
            }
            else
                c += a[i]
        }
        r5.innerHTML = c
    }
    else {
        r5.innerHTML = 'Нет зачений'
    }
}
// 6
z6btn.onclick = function (e) {
    rez6(z6v1.value)
}
for (item of document.querySelectorAll('#z6 input')) {
    item.addEventListener('keypress', function (e) {
        if (e.key == 'Enter') {
            rez6(z6v1.value)
        }
    })
}
function rez6(a) {
    if (z6v1.value !== '') {
        let b = []
        let newA = a.toLowerCase().replace(/  /g, ' ')

        for (let i = newA.length - 1; i >= 0; i--) {
            {
                b.push(newA[i])
            }
        }
        newStr = b.join('')
        if (newStr == newA) {
            r6.innerHTML = 'top'
        }
        else {
            r6.innerHTML = 'no'
        }
    }
    else {
        r6.innerHTML = 'Нет зачений'
    }
}
// 7
z7btn.onclick = function (e) {
    rez7(z7v1.value)
}
for (item of document.querySelectorAll('#z7 input')) {
    item.addEventListener('keypress', function (e) {
        if (e.key == 'Enter') {
            rez7(z7v1.value)
        }
    })
}
function rez7(a) {
    if (z7v1.value !== '') {
        let b
        b = a.split(' ')
        r7.innerHTML = b.length
    }
    else {
        r7.innerHTML = 'Нет зачений'
    }
}
// 8
z8btn.onclick = function (e) {
    rez8(z8v1.value)
}
for (item of document.querySelectorAll('#z8 input')) {
    item.addEventListener('keypress', function (e) {
        if (e.key == 'Enter') {
            rez8(z8v1.value)
        }
    })
}
function rez8(a) {
    if (z8v1.value !== '') {
        let b
        b = a.split(' ')
        let maxLength = 0
        let index
        for (let i = 0; i < b.length; i++) {
            if (b[i].length > maxLength) {
                index = i
                maxLength = b[i].length
            }

        }
        r8.innerHTML = b[index]
    }
    else {
        r8.innerHTML = 'Нет зачений'
    }
}
// 9
z9btn.onclick = function (e) {
    rez9(z9v1.value)
}
for (item of document.querySelectorAll('#z9 input')) {
    item.addEventListener('keypress', function (e) {
        if (e.key == 'Enter') {
            rez9(z9v1.value)
        }
    })
}
function rez9(a) {
    if (z9v1.value !== '') {
        let b
        let c = 0
        b = a.split(' ')
        for (let i = 0; i < b.length; i++) {
            c += b[i].length
        }
        r9.innerHTML = (c / b.length).toFixed(1)
    }
    else {
        r9.innerHTML = 'Нет зачений'
    }
}
// 10
z10btn.onclick = function (e) {
    rez10(z10v1.value, z10v2.value)
}
for (item of document.querySelectorAll('#z10 input')) {
    item.addEventListener('keypress', function (e) {
        if (e.key == 'Enter') {
            rez10(z10v1.value, z10v2.value)
        }
    })
}
function rez10(a, b) {
    if (z10v1.value !== '' && z10v2.value !== '') {
        let c = []
        let d = 0
        do {
            d = a.indexOf(b, d)
            if (d !== -1) {
                c.push(d)
            }
            d++
        }
        while (d > 0)
        r10.innerHTML = `индексы ${c} <br>${c.length} всего`
    }
    else {
        r10.innerHTML = 'Нет зачений'
    }
}

// if (this.value.length > 20) {
//     z10v1Width += 5
//     z10v1.style.width = z8v1Width + 'px'
// }