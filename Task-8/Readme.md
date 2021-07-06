# Task 08 👨🏻💻

## Team Task

Object Recognition using CNN model

## Task Description 📄

📌 In this task :

👉Create a model that will detect a car in a live stream or video and recognize characters on number plate of the car .

👉Secondly , it will use the characters and fetch the owners information using RTO API’s .

👉Create a Web portal where all this information will be displayed (using html,css,and js)

📌 Note : You may create your own detection model .

### Extract the data folder for training dataset and 'licence-plate.pk' for pre-trained model 

## Approach:- 

1) Taking in the images (series of images) in live stream

2) Looking for a license plate in the image:
 To detect an object(license plate) from an image we need
 another tool that can recognize an Indian license plate
 so for that I’ve used Haar cascade, pre-trained on Indian
 license plates.

3) Analyzing and performing some image processing on the License plate:
 Using OpenCV’s grayscale, threshold, erode, dilate, contour detection
 and by some parameter tuning, we may easily be able to generate enough
 information about the plate to decide if the data is useful enough to be
 passed on to further processes or not (sometime if the image is very distorted or
 not proper, we may only get suppose 8 out of 10 characters, then there’s no point
 passing the data down the pipeline but to ignore it and look at the next frame for the plate)
 also before passing the image to the next process we need to make sure that it is noise-free
 and processed.

4) Segmenting the alphanumeric characters from the license plate:
 if everything in the above steps works fine, we should be ready to extract the characters 
 from the plate, this can be done by thresholding, eroding, dilating and blurring the image
 skillfully such that at the end the image we have is almost noise-free and easy for further
 functions to work on. We now again use contour detection and some parameter tuning to extract
 the characters.

5) Considering the characters one by one, recognizing the characters, concatenating the results
 and giving out the plate number as a string: Then training the model using dataset of english characters
 Since we have all the characters in /data folder, we need to pass the characters one by one into our
 trained model, and it should recognize the characters and We’ll be using Keras for our Convolutional
 Neural Network model.

6) Using the API for RTO lookup and finding all details about vehicle using the plate number.

7) Created and hosted a web app that takes Plate Number of vehicle as input and gives out the details. 

Link to Post:- 
