let headlights = 0
let pixel_array = neopixel.create(DigitalPin.P0, 5, NeoPixelMode.RGB)
basic.forever(function () {
    headlights = 255 - input.lightLevel() * 3
    if (input.lightLevel() < 85) {
        pixel_array.showColor(neopixel.colors(NeoPixelColors.White))
        while (headlights < 50) {
            headlights += 1
        }
        pixel_array.setBrigthness(headlights)
        pixel_array.show()
    } else if (input.lightLevel() >= 95) {
        pixel_array.clear()
        pixel_array.show()
    }
})
