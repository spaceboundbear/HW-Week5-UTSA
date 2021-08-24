// need a global clock to keep track of time
var liveTime = function() {
    document.getElementById("currentDay").innerHTML = moment().format('MMMM Do, YYYY');
}
setInterval(liveTime, 1000);

// need forms to change color when time passes

//need to make buttons save input to local storage
var saveButton = $('.btn-primary')
var clearButton = $('.btn-secondary')
var clrBtn8am = $('button.clear-8am')
var clrBtn9am = $('button.clear-9am')
var clrBtn10am = $('button.clear-10am')
var clrBtn11am = $('button.clear-11am')
var clrBtn12pm = $('button.clear-12pm')
var clrBtn1pm = $('button.clear-1pm')
var clrBtn2pm = $('button.clear-2pm')
var clrBtn3pm = $('button.clear-3pm')
var clrBtn4pm = $('button.clear-4pm')
var clrBtn5pm = $('button.clear-5pm')
var clrBtn6pm = $('button.clear-6pm')


saveButton.on('click', function saveText() {
    var eightam = $('textarea#text-area-8am').val()
    var nineam = $('textarea#text-area-9am').val()
    var tenam = $('textarea#text-area-10am').val()
    var elevenam = $('textarea#text-area-11am').val()
    var twelvepm = $('textarea#text-area-12pm').val()
    var onepm = $('textarea#text-area-1pm').val()
    var twopm = $('textarea#text-area-2pm').val()
    var threepm = $('textarea#text-area-3pm').val()
    var fourpm = $('textarea#text-area-4pm').val()
    var fivepm = $('textarea#text-area-5pm').val()
    var sixpm = $('textarea#text-area-6pm').val()

    localStorage.setItem('8am', eightam)
    localStorage.setItem('9am', nineam)
    localStorage.setItem('10am', tenam)
    localStorage.setItem('11am', elevenam)
    localStorage.setItem('12pm', twelvepm)
    localStorage.setItem('1pm', onepm)
    localStorage.setItem('2pm', twopm)
    localStorage.setItem('3pm', threepm)
    localStorage.setItem('4pm', fourpm)
    localStorage.setItem('5pm', fivepm)
    localStorage.setItem('6pm', sixpm)
});

clrBtn8am.on('click', function clearText() {
        localStorage.removeItem('8am');
})

clrBtn9am.on('click', function clearText() {
    localStorage.removeItem('9am');
})

clrBtn10am.on('click', function clearText() {
    localStorage.removeItem('10am');
})

clrBtn11am.on('click', function clearText() {
    localStorage.removeItem('11am');
})

clrBtn12pm.on('click', function clearText() {
    localStorage.removeItem('12pm');
})

clrBtn1pm.on('click', function clearText() {
    localStorage.removeItem('1pm');
})

clrBtn2pm.on('click', function clearText() {
    localStorage.removeItem('2pm');
})

clrBtn3pm.on('click', function clearText() {
    localStorage.removeItem('3pm');
})

clrBtn4pm.on('click', function clearText() {
    localStorage.removeItem('4pm');
})

clrBtn5pm.on('click', function clearText() {
    localStorage.removeItem('5pm');
})

clrBtn6pm.on('click', function clearText() {
    localStorage.removeItem('6pm');
})


function clearTextArea8am() {
    $('#text-area-8am').val('')
}

function clearTextArea9am() {
    $('#text-area-9am').val('')
}

function clearTextArea10am() {
    $('#text-area-10am').val('')
}

function clearTextArea11am() {
    $('#text-area-11am').val('')
}

function clearTextArea12pm() {
    $('#text-area-12pm').val('')
}

function clearTextArea1pm() {
    $('#text-area-1pm').val('')
}

function clearTextArea2pm() {
    $('#text-area-2pm').val('')
}

function clearTextArea3pm() {
    $('#text-area-3pm').val('')
}

function clearTextArea4pm() {
    $('#text-area-4pm').val('')
}

function clearTextArea5pm() {
    $('#text-area-5pm').val('')
}

function clearTextArea6pm() {
    $('#text-area-6pm').val('')
}

// need to pull data from local storage

window.onload = function () {
    var onepm = localStorage.getItem('8am');
    if (onepm !== null) $('#text-area-8am').val(onepm);

    var nineam = localStorage.getItem('9am');
    if (nineam !== null) $('#text-area-9am').val(nineam);

    var tenam = localStorage.getItem('10am');
    if (tenam !== null) $('#text-area-10am').val(tenam);

    var elevenam = localStorage.getItem('11am');
    if (elevenam !== null) $('#text-area-11am').val(elevenam);

    var twelvepm = localStorage.getItem('12pm');
    if (twelvepm !== null) $('#text-area-12pm').val(twelvepm);

    var onepm = localStorage.getItem('1pm');
    if (onepm !== null) $('#text-area-1pm').val(onepm);

    var twopm = localStorage.getItem('2pm');
    if (twopm !== null) $('#text-area-2pm').val(twopm);

    var threepm = localStorage.getItem('3pm');
    if (threepm !== null) $('#text-area-3pm').val(threepm);

    var fourpm = localStorage.getItem('4pm');
    if (fourpm !== null) $('#text-area-4pm').val(fourpm);

    var fivepm = localStorage.getItem('5pm');
    if (fivepm !== null) $('#text-area-5pm').val(fivepm);

    var sixpm = localStorage.getItem('6pm');
    if (sixpm !== null) $('#text-area-6pm').val(sixpm);
}