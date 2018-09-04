//YOUR LIFESPAN IN YEARS:
var lifespan = 100

// YOUR BIRTHDAY:
var birthday = '07/03/1991'

//______________________________________________________________

var lifespanInMilisec = lifespan * 365.25 * 24 * 60 * 60 * 1000
var timerEl = document.getElementById('js-timer')

setInterval(milisecondsTransformer, 1000)

function milisecondsTransformer() {
    var lived = new Date() - new Date(birthday)
    var toEndinMilisec = lifespanInMilisec - lived

    var years = Math.floor( toEndinMilisec / (365.25 * 24 * 60 * 60 * 1000) )
    var formattedYears = years

    if (years < 10) {
        formattedYears = '00' + years
    } else if (years < 100) {
        formattedYears = '0' + years
    }

    var days = Math.floor(( (toEndinMilisec / (24 * 60 * 60 * 1000)) / 365.25 - years) * 365.25)
    var formattedDays = days

    if (days < 10) {
        formattedDays = '00' + days
    } else if (days < 100) {
        formattedDays = '0' + days
    }

    var daysms = toEndinMilisec % (24 * 60 * 60 * 1000)
    var hours = Math.floor( (daysms) / (60 * 60 * 1000) )
    var formattedHours = hours

    if (hours < 10) {
        formattedHours = '0' + hours
    }

    var hoursms = toEndinMilisec % (60 * 60 * 1000)
    var minutes = Math.floor( (hoursms) / (60 * 1000) )
    var formattedMinutes = minutes

    if (minutes < 10) {
        formattedMinutes = '0' + minutes
    }

    var minutesms = toEndinMilisec % (60 * 1000)
    var seconds = Math.floor( (minutesms) / (1000) )
    var formattedSeconds = seconds

    if (seconds < 10) {
        formattedSeconds = '0' + seconds
    }

    toEndFormatted = 
        "<span>" + formattedYears + "</span>" + " y " + 
        "<span>" + formattedDays + "</span>"+ " d " + 
        "<span>" + formattedHours + "</span>"+ " h " + 
        "<span>" + formattedMinutes + "</span>" + " m " + 
        "<span>" + formattedSeconds + "</span>" + " s"

    timerEl.innerHTML = toEndFormatted
}



