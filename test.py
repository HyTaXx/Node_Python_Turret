from machine import Pin,PWM
import network
import urequests
import utime
import ujson

wlan = network.WLAN(network.STA_IF)
wlan.active(True)

ssid = 'freebox_home'
password = 'sucepute'
wlan.connect(ssid, password)
url = "http://192.168.206.220:3000"

in1 = Pin(15,Pin.OUT)
in2 = Pin(14,Pin.OUT)

in3 = Pin(17,Pin.OUT)
in4 = Pin(16,Pin.OUT)

buzzer = PWM(Pin(18))
buzzer.freq(150)


control1 = PWM(Pin(0))
control2 = PWM(Pin(1))
control1.freq(1000)
control2.freq(1000)





while True:

    control1.duty_u16(65000)
    control2.duty_u16(65000)

    try:
        print("GET")
        r = urequests.get(url)
        direction = r.json()['data']
        print(direction)
        if direction == 'up' :
            in2.off()
            in3.off()
            in4.off()

            in1.on()
        elif direction == 'down' : 
            in1.off()
            in3.off()
            in4.off()

            in2.on()
        elif direction == 'left' : 
            in1.off()
            in2.off()
            in4.off()

            in3.on()
        elif direction == 'right' : 
            in1.off()
            in2.off()
            in3.off()

            in4.on()
        elif direction == 'stop' :
            buzzer.duty_u16(0)
            in1.off()
            in2.off()
            in3.off()
            in4.off()
        elif direction == 'fire' :
            in1.off()
            in2.off()
            in3.off()
            in4.off()
            for k in range(100):
                buzzer.duty_u16(1000)
                utime.sleep(0.01)
                buzzer.duty_u16(0)
                utime.sleep(0.01)
        r.close()
        utime.sleep(1)
    except Exception as e:
        print(e)