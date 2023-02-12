let passos = 0
let Graus = 0
/**
 * mostra en pantalla el valor, en graus, de la posició de la placa
 */
/**
 * Brúixola senzilla
 * 
 * apareix fletxa només quan està orientada al Nord
 */
/**
 * punts cardinals
 */
/**
 * Joc d'orientació
 */
input.onGesture(Gesture.Shake, function () {
    passos += 1
    basic.showNumber(passos)
    basic.pause(2000)
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    passos = 0
})
basic.forever(function () {
	
})
basic.forever(function () {
	
})
basic.forever(function () {
	
})
basic.forever(function () {
    Graus = input.compassHeading()
    if (Graus == 0) {
        basic.showString("N")
        basic.pause(1000)
        basic.clearScreen()
    } else if (Graus == 45) {
        basic.showString("NE")
        basic.pause(1000)
        basic.clearScreen()
    } else if (Graus == 90) {
        basic.showString("E")
        basic.pause(1000)
        basic.clearScreen()
    } else if (Graus == 135) {
        basic.showString("SE")
        basic.pause(1000)
        basic.clearScreen()
    } else if (Graus == 180) {
        basic.showString("S")
        basic.pause(1000)
        basic.clearScreen()
    } else if (Graus == 225) {
        basic.showString("SO")
        basic.pause(1000)
        basic.clearScreen()
    } else if (Graus == 270) {
        basic.showString("O")
        basic.pause(1000)
        basic.clearScreen()
    } else if (Graus == 315) {
        basic.showString("NO")
        basic.pause(1000)
        basic.clearScreen()
    } else {
        basic.clearScreen()
    }
})
