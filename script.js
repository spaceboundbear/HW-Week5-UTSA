// need a global clock to keep track of time

$("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));

// time works on 24 hour clock? having problem getting colors to work
// color works now, have to adjust ids to make code work again, gonna try to clean up all this extra stuff

var time = moment();
var eightam = $('#8')
var nineam = $('#9')
var tenam = $('#10')
var elevenam = $('#11')
var twelvepm = $('#12')
var onepm = $('#13')
var twopm = $('#14')
var threepm = $('#15')
var fourpm = $('#16')
var fivepm = $('#17')
var sixpm = $('#18')

// need to make buttons save / delete input in local storage
// has to be a quicker way to type all this out, way too long and repetetive.
// update: got rid of ALL those repetetive functions, code looks way cleaner

var saveButton = $('.btn-primary')
var clearButton = $('.btn-secondary')

saveButton.on('click', function() {
    var time = $(this).parent().attr('id');
    var text = $(this).siblings('.form-control').val();

    localStorage.setItem(time, text)

});

clearButton.on('click', function() {
    var time = $(this).parent().attr('id');
    var text = $(this).siblings('.form-control').val('');

    localStorage.removeItem(time, text)
    
});

// need to pull data from local storage

window.onload = function() {
    var text = $(this).siblings('.form-control').val();
    
    if (text !== null) $(text).val(text);
}

// need to change color with time

function timeColor() {
    hour = time.hours()
    $('.form-control').each(function () {
        var blockTime = parseInt($(this).attr("id"));

        if (blockTime > hour) {
            $(this).addClass('future')
        }

        else if (blockTime === hour) {
            $(this).addClass('present')
        }

        else {
            $(this).addClass('past')
        }
    })
}

timeColor();