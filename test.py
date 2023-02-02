from machine import Pin
import network
import urequests
import utime
import ujson

wlan = network.WLAN(network.STA_IF)
wlan.active(True)

ssid = 'freebox_home'
password = 'sucepute'
wlan.connect(ssid, password)
url = "http://192.168.16.220:3000"

in1 = Pin(15,Pin.OUT)
in2 = Pin(14,Pin.OUT)

in3 = Pin(17,Pin.OUT)
in4 = Pin(16,Pin.OUT)

while True:
    in1.value(0)
    in2.value(0)
    in3.value(0)
    in4.value(0)
    utime.sleep(1)


    in1.value(0)
    in2.value(1)
    in3.value(0)
    in4.value(1)
    utime.sleep(1)


    in1.value(1)
    in2.value(0)
    in3.value(1)
    in4.value(0)
    utime.sleep(1)

    

    in1.value(1)
    in2.value(1)
    in3.value(1)
    in4.value(1)
    utime.sleep(1)



    try:
        print("GET")
        r = urequests.get(url)
        print(r.json()['msg'])
        r.close()
        utime.sleep(1)
    except Exception as e:
        print(e)