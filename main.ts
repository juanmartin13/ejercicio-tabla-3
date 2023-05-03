let variable3 = 0
let variable1 = 0
input.onButtonPressed(Button.A, function () {
    variable3 = 3
    basic.showNumber(variable3)
    variable1 = randint(0, 10)
    basic.showNumber(variable1)
    basic.showNumber(variable1 * variable3)
})
