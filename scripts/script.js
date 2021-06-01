"use strict"
const init = function () {
    const endOfTime = new Date('08/28/2021 8:000 PM');
    const second = 1000
    const minute = 1000 * 60
    const hour = minute * 60
    const day = hour * 24

    const daysCounter = document.querySelector(".unit-time__number--days").childNodes[0]
    const hoursCounter = document.querySelector(".unit-time__number--hours").childNodes[0]
    const minutesCounter = document.querySelector(".unit-time__number--minutes").childNodes[0]
    const secondsCounter = document.querySelector(".unit-time__number--seconds").childNodes[0]

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

            daysCounter.textContent = showDoubleDigit(daysRemaining)
            hoursCounter.textContent = showDoubleDigit(hoursRemaining)
            minutesCounter.textContent = showDoubleDigit(minutesRemaining)
            secondsCounter.textContent = showDoubleDigit(secondsRemaining)
        }
    }
    const counter = setInterval(calculateTimeRemaining, 1000)
    return calculateTimeRemaining
}()


