let age = 0
let count_totalchildren = 0
let count_totaladolescents = 0
let average_age = 0
let count = 0
let random_num1 = 0
let random_num2 = 0
let x = 0
input.onPinPressed(TouchPin.P0, function () {
    for (let index = 0; index < 20; index++) {
        age = randint(5, 64)
        basic.showNumber(age)
        if (age >= 5 && age <= 13) {
            basic.showString("Child")
            count_totalchildren += 1
        } else if (age >= 14 && age <= 17) {
            basic.showString("Adolescent")
            count_totaladolescents += 1
        } else if (age >= 18 && age <= 35) {
            basic.showString("Young Adult")
        } else if (age >= 36 && age <= 64) {
            basic.showString("Adult")
        }
    }
    average_age = age / 20
    basic.showString("Average age")
    basic.showNumber(average_age)
    basic.showString("Total of Children")
    basic.showNumber(count_totalchildren)
    basic.showString("Total of Adolescents")
    basic.showNumber(count_totaladolescents)
})
input.onPinPressed(TouchPin.P1, function () {
    count = 0
    for (let count = 0; count <= 5; count++) {
        basic.showNumber(count)
    }
    basic.clearScreen()
    random_num1 = randint(1, 10)
    basic.showNumber(random_num1)
    random_num2 = randint(1, 10)
    basic.showNumber(random_num2)
    if (random_num1 == 2) {
        basic.showIcon(IconNames.Happy)
        music.playMelody("C5 B A B C5 B A C5 ", 120)
    } else if (random_num1 != 2) {
        basic.showIcon(IconNames.Sad)
        music.playTone(262, music.beat(BeatFraction.Whole))
    }
    basic.clearScreen()
})
basic.forever(function () {
    while (input.buttonIsPressed(Button.A)) {
        x = 3
        basic.showNumber(x)
        for (let index = 0; index <= 4; index++) {
            led.plot(x, 1)
            basic.pause(200)
            led.plot(x, 2)
            basic.pause(200)
            led.plot(x, 3)
            basic.pause(200)
            led.plot(x, 4)
        }
    }
})
