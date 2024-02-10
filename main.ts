let smokeSensor = 0
let flameSensor = 0
input.onButtonPressed(Button.A, function () {
    pins.digitalWritePin(DigitalPin.P12, 0)
})
input.onButtonPressed(Button.B, function () {
    pins.digitalWritePin(DigitalPin.P12, 1)
})
basic.forever(function () {
    smokeSensor = pins.analogReadPin(AnalogPin.P0)
    flameSensor = pins.digitalReadPin(DigitalPin.P8)
    if (flameSensor == 0 || smokeSensor > 50) {
        pins.digitalWritePin(DigitalPin.P12, 1)
        basic.showIcon(IconNames.No)
        music.setVolume(255)
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.BaDing), music.PlaybackMode.InBackground)
    } else {
        pins.digitalWritePin(DigitalPin.P12, 0)
        basic.showIcon(IconNames.Yes)
    }
})
