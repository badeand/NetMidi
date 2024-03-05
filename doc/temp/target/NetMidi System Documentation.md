



## Overview of the user interface

![](resources/client-max-main-window.png)

## How to connect - step by step


The steps refer to the markings on the following screenshot:


![](resources/how-to-connect.png)


1. Optionally set your desired username. This can be omitted if you want to use the generated username.
2. Enter the address of the server.
3. Click Connect
4. If the connection is successful, you username should be among the usernames on the list
	- if your username is not on the list, check the following:
		- server address is correct
		- you are connected to the internet
5. Select the MIDI device you want to use.
	- if your device is not shown in the list, click Refresh
6. Play some notes on your midi device and verify that the Input is blinking
7. Select a channel that is unique to all users in the group. The group must manually decide who will use which MIDI channel.
8. Check that the Output lights up. This indicates that your and others MIDI signals are received from the internet.
9. Check that some channels lights up. The blinking numbers indicates which channels are receiving data. For each participant there should be one channel blinking.
10. Select the MIDI device you want to use to receive notes from the other participants. This unit will later be used to set up you DAW or plugin.
	- if your desired device is not shown in the list, click Refresh


## System architecture

![](resources/Communication.png)

## Server installation






Create a new server instance. Most Linux distributions should work. The server is tested on Ubuntu 20 LTS.

Start a terminal session

Log in with an account with root privileges

Copy and paste the following line:


```
curl -sS https://raw.githubusercontent.com/badeand/NetMidi/main/server/install.sh | bash
```

This should set up node.js, and download the server code.

Text resembling the following should be displayed in the terminal:

```

```






## Background info

### Difference between MIDI and audio

  
MIDI (Musical Instrument Digital Interface) and audio are fundamentally different in how they represent and handle sound. MIDI is like a set of digital sheet music telling instruments what to play, whereas audio is a recorded performance of the music itself.

- **MIDI** - MIDI is a protocol designed for recording and playing back music on digital synthesizers. It is not a sound in itself, but a set of digital instructions or data. MIDI data contain information such as what note is played, when it is played, how long it's held, and how hard it's hit. MIDI data is small because it only contain a series of instructions, not actual sound recordings. In order to hear music represented as MIDI, there needs to sound source (the synthesizer or virtual instrument) that interprets the MIDI data and generates sound. The quality of the sound produced by a MIDI data depends on the sound source that interprets the MIDI data.
- **Audio** - Audio data are  recordings of the actual sound waves produced by instruments, voices, or any acoustic source. An audio data contains a digital representation of the sound wave including all the frequencies and nuances of the sound as it was captured. Audio data tend to be much larger than MIDI data. The size depends on the quality and length of the recording. Once recorded, audio can be edited and processed, but the fundamental aspects of the performance (like the notes played or the timbre of the instrument) cannot be changed as easily as with MIDI.


### What is Latency and why it is important for musicians


Latency is to the delay between a note played on a MIDI controller (like a keyboard) and the time it is heard from the output (such as speakers or headphones).

Musicians rely on immediate auditory feedback when they play an instrument. Good rhythm and precise timing are fundamental to most music. High latency can be problematic for live performances or when recording, as it can cause a noticeable delay between a musician's performance and what they hear back, potentially disrupting their timing and performance. When using electronic instruments like MIDI keyboards or, low latency is essential to ensure that the sound produced by these digital sources feels responsive and natural.

This delay is usually measured in milliseconds (ms) and can be influenced by several factors in the digital audio signal chain.

In the context of MIDI playback there can be several causes of latency:

- **Digital Processing**: The time taken by the computer or digital audio processor to apply effects, mix, or route the audio signal.
- **MIDI to Audio generation**: Converting the MIDI signals to an analog signal for playback (like generating piano sounds)
- **Buffering**: Digital audio systems use buffers to handle audio data, and the size of these buffers can affect latency. The buffer size can be set in the music software and should be kept as low as possible without causing problems. Refer to the user guide of you music software (DAW) for more information


