let ldr = 0
let discard = 0
let eeprom = 0
let pcf8591 = 0
pcf8591 = 72
eeprom = 80
while (true) {
    pins.i2cWriteNumber(
    eeprom,
    32,
    NumberFormat.UInt16LE,
    false
    )
    pins.i2cWriteNumber(
    pcf8591,
    64,
    NumberFormat.UInt8LE,
    false
    )
    basic.pause(100)
    discard = pins.i2cReadNumber(pcf8591, NumberFormat.Int8LE, false)
    ldr = pins.i2cReadNumber(pcf8591, NumberFormat.Int8LE, false)
    basic.showNumber(ldr)
    basic.pause(1000)
}
