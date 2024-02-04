let sensor = 0
input.onButtonPressed(Button.A, function () {
    pins.digitalWritePin(DigitalPin.P1, 0)
})
input.onButtonPressed(Button.B, function () {
    pins.digitalWritePin(DigitalPin.P1, 1)
})
basic.forever(function () {
    sensor = pins.digitalReadPin(DigitalPin.P2)
    if (sensor == 0) {
        pins.digitalWritePin(DigitalPin.P1, 1)
        basic.showIcon(IconNames.No)
        music.setVolume(255)
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.BaDing), music.PlaybackMode.InBackground)
    } else {
        pins.digitalWritePin(DigitalPin.P1, 0)
        basic.showIcon(IconNames.Yes)
    }
})
