---
layout:     post
title:      "Christmas Project: Part 1"
subtitle:   
img:        
alt:        
date:       2020-12-03 22:01:41 -0600
tags:       christmas-project-2020
link:       
---

We have friends who put out a huge Christmas light display every year. The lights are connected to a computer and that computer will drive a light show that is synchronized with music. They also invested in an FM transmitter to broadcast the music to cars who want to stop and watch the show. I have always loved this idea and have often entertained the notion of putting together our own light display. Unfortunately, we live in the rear house of a two house lot, which means we have no street visible area for a light show. We still put out Christmas lights every year, but these lights are mostly for us to enjoy as no one else will see them. I had mostly given up the idea of putting together a large light project. However, this year I stumbled across this: [Raspberry Pi Christmas Light Show](https://www.instructables.com/Raspberry-Pi-Christmas-Tree-Light-Show/). After I saw this project, I knew I wanted to try and put one of these together for our house.

I made a hard sell to Max. My idea was to have a project we could work on together. After he agreed, I ordered the parts. The parts arrived the weekend after Thanksgiving and we started to test out a few things. We started by prepping the Pi, which means we had to apply the heat sinks, and install Raspberry Pi OS on an SD card. I had already purchased an [Adafruit console cable](https://learn.adafruit.com/adafruits-raspberry-pi-lesson-5-using-a-console-cable) for when I bought my first Pi to setup our Pi-hole. Connecting the console cable is a cinch:

	Black -> GND
	White -> TXD
	Green -> RXD

If you're connecting to the Pi through the console cable on a Mac, you'll need to install drivers. If you're connecting to the Pi through the console cable on Linux, the drivers should already be installed (or at least were for me on Pop!\_OS). You can just use `screen` to connect:

	$ sudo screen /dev/ttyUSB0 115200

The `ttyUSB0` might be different on your setup.

After ensuring we could connect to the Pi, it was time for our _Hello World_ equivalent: wire a push button and LED on a breadboard through the GPIO pins and write a simple Python script to run the circuit. When the push button is depressed, the LED should emit light; when the push button is released, the LED should not emit light. After setting up this test, I demonstrated it to Max. He was nonplussed; tough crowd.

{% include vimeoPlayer.html id=487085706 %}

[Source](https://github.com/groomsy/christmas-pi-project/blob/main/LEDButton.py)
