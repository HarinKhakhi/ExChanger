This repository contains a hack that was made for Ingenious Hackathon 2.0 @ Ingenium '21

# 1. Background and Introduction
## 1.1. Inspiration:
It is seen in social media and everywhere, a lot of filters are used by people for aesthetic or/and fun purposes. People would use certain filters to ‘make’ the lighting of a certain picture better, whereas some filters would assist in enhancing features of a person’s face. Other than that, a lot of filters are designed for comedic purposes. Stuff like turning a person’s face into an animal, making a face look funny by stretching certain elements of a person’s face, etc. 

## 1.2. Introduction to Proposed Hack Idea:
The idea was to design a hack that would modify certain elements of a person’s face in a comedic manner.Although, this idea can be broadened for a lot of aspects of a person’s face, a major chunk of this idea can be boiled down to ‘changing the expressions’ of a person’s face.

Expanding upon the idea, an extra objective that was accepted was that however big a photograph is, however multiple people may there be present in a photograph, the hack should detect the faces in a photograph, effectively modify their expressions on demand, and then replace those modified faces in the photograph accordingly.

The final product would be a website, that shall take input an image with possibly multiple faces and people. From this image, faces will be detected and separated out. These images shall be displayed and user shall accordingly choose which expression would they like to modify to. After the modification the images of face with modified expression shall replace the original faces. Finally, the website shall show the image of multiple persons with all the faces with modified expressions.

# 2. Roadmap
## 26th March (Day 1)
### 10:00 PM
Arrived at the scene and looked through the tracks to get inspired for a hack idea.
### 11:00 PM
Had an idea about making a fun hack tthat will change the expressions of a person in a photograph.
### 12.00 AM
Chatted with mentors Param Raval and Chirag Bansal about this idea. Got their approval to go in execution of this idea.
### 01:00 AM
Decided on a pipeline that involved Facial Landmark Detection via tensorflow.js
### 02:00 AM
Chatted with mentor Kaustubh Shete about the idea and execution. Got his advice that this might not be a good idea because of doubts regarding the quality of results and his speculations that this idea might be too complex to implement in 2 days. Got his suggestions involving some algorithms of ComputerVision like DensePose, etc.
## 27th March (Day 2)
### 10:00 AM
Had to think of a new way to execute the given idea. Got to know about DeepFaceLab.
### 11:00 AM
Tried executing the algorithms described by DeepFaceLab multiple times, but failed and realised this can't be done in such a short time.

### 12:00 PM
Successfully executed a module that would detect faces in a photograph and return all the cropped images of the faces. 
### 01:00 PM
Found an algorithm for that can aid in changing the expressions of a person's face. The algorithm focused on face-swapping, realised it could be helpful.

### 3:00 PM
Successfully executed changing expressions of a given face.

### 4:00 PM
Started working on front-end of the app.

### 7:00 PM
Integrated the face detection with expression changing module.

### 9:00 PM
Tried to integrate the combined module with the frontend. Had a lot of difficulties and took a long time.

## 28th March (Day 3)

### 11:00 AM
Started documenting the hack

### 12:00 PM
Some improvements were made in frontend

### 01:00 PM
Improved some inconsistencies within the code.

### 02:00 PM
Made the demo video

# 3. Modules and Technologies

## 3.1 Front End
The front-end was implemented with React.js

## 3.2 Face Detection
To implement Face Detection, Cascade Classifier was used by OpenCV 

## 3.3 Expression Changing
To extract the features and landmarks of a face, dlib library was used. After identifying the features, the face would be aligned with a specific mask of a given expression using the library cv2. The face image itself shall be modified accordingly and after some color correction, the modified image shall be ready to be displayed.

# 4. Challenges
- There were a lot of algorithms that could've helped with expression changing. However, most of the material we found was either not very well explained or the implementation would be too complex for such a limited time. 
- Google Colab won't support certain functions of cv2.
- There were challenges with integrating the Python code (of face detection and expression changing) with React.js.

# 5. Future Scope
- Many features can be added regarding multiple different style of expressions.
- This algorithm could be made to work in real-time audio-video mode.
- There are some inconsistencies, where algorithm would detect faces where one wasn't present. Thus, performance can be improved.

# 6. Conclusion
Taking inspiration from creative filters on social media, it was decided to make a hack that would detect faces from an image and change the expressions of the image in a comedic manner. Technologies/libraries like React.js, OpenCV and dlib were on the focus of the implementation along with helping libraries like numpy, sys, etc. Challenges were faced mainly due to the difficulty in integration of modules. The final product was something that would produce funny images of a given person.
# 7. References
Cascade Classifier:
https://docs.opencv.org/3.4/db/d28/tutorial_cascade_classifier.html

Switching Eds: Face swapping with Python, dlib, and OpenCV:
http://matthewearl.github.io/2015/07/28/switching-eds-with-python/
