# -*- coding: utf-8 -*-
"""extract_faces.ipynb

Automatically generated by Colaboratory.

Original file is located at
    https://colab.research.google.com/drive/1n94ly5DXYIAb4UqV0DOZn9QKlqKTH1-y
"""

from cv2 import imread
from google.colab.patches import cv2_imshow
from cv2 import waitKey
from cv2 import destroyAllWindows
from cv2 import CascadeClassifier
from cv2 import rectangle
import cv2

# load the pre-trained model
classifier = CascadeClassifier(cv2.data.haarcascades + 'haarcascade_frontalface_default.xml')

# load the photograph
pixels = imread('faces.jpg')

bboxes = classifier.detectMultiScale(pixels)
# print bounding box for each detected face
pixels2 = pixels
cropped_img = []
for box in bboxes:
  # extract
  x, y, width, height = box
  x2, y2 = x + width, y + height
  cropped = pixels2[y:y2,x:x2]
  cropped_img.append(cropped)
  # draw a rectangle over the pixels
  # rectangle(pixels, (x, y), (x2, y2), (0,0,255), 1)

# cv2_imshow(pixels)

box_num = bboxes.shape[0]
for i in range(box_num):
  cv2_imshow(cropped_img[i])
