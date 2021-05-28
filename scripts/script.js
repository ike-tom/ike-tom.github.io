"use strict"
const init = function () {
    const endOfTime = new Date('05/30/2021 8:30 AM');
    const second = 1000
    const minute = 1000 * 60
    const hour = minute * 60
    const day = hour * 24
    const unitsCounter = document.querySelectorAll(".unit-time__number")
    const daysCounter = unitsCounter[0]
    const hoursCounter = unitsCounter[1]
    const minutesCounter = unitsCounter[2]
    const secondsCounter = unitsCounter[3]


    const calculateTimeRemaining = function () {
        const timeNow = Date.now();
        const timeRemaining = endOfTime - timeNow
        const showDoubleDigit = function (arg) {
            if (arg < 10) return `0${arg}`
            else return arg
        }
        if (timeRemaining < 0) {
            clearInterval(counter)
        }
        else {
            const daysRemaining = Math.floor(timeRemaining / day)
            const hoursRemaining = Math.floor((timeRemaining - daysRemaining * day) / hour)
            const minutesRemaining = Math.floor((timeRemaining - daysRemaining * day - hoursRemaining * hour) / minute)
            const secondsRemaining = Math.floor((timeRemaining - daysRemaining * day - hoursRemaining * hour - minutesRemaining * minute) / second)

            daysCounter.innerText = showDoubleDigit(daysRemaining)
            hoursCounter.innerText = showDoubleDigit(hoursRemaining)
            minutesCounter.innerText = showDoubleDigit(minutesRemaining)
            secondsCounter.innerText = showDoubleDigit(secondsRemaining)
        }
    }
    const counter = setInterval(calculateTimeRemaining, 1000)
    return calculateTimeRemaining
}()


