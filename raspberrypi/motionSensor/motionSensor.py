import sys
import time
import RPi.GPIO as GPIO
import picamera
import datetime

SLEEP_TIME = 1
SENSOR_GPIO = 20

GPIO.cleanup()
GPIO.setmode(GPIO.BCM)
GPIO.setup(SENSOR_GPIO, GPIO.IN)

camera = picamera.PiCamera()


while True:
  if GPIO.input(SENSOR_GPIO) == GPIO.HIGH:
    now = datetime.datetime.now()
    file_name = now.strftime('%H%M%S')
    camera.capture('./'+file_name+'.jpg') 

  time.sleep(SLEEP_TIME)

