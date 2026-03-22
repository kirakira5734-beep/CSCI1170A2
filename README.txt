Guide To Android Development Website

---

1. Project Overview

---

This project is a multi-page website designed to explain the complete Android application development workflow. The purpose of this website is to guide visitors through the structured process of Android development — from planning and UI design to implementation, testing, and deployment.

The website also includes several interactive features implemented using JavaScript, such as background music control, theme switching, image modal interaction, and form validation.

---

2. Website Structure

---

The website contains the following pages:

* index.html – Home page
* procedure.html – Android Development Procedure
* tools.html – Tools used in Android development
* contact.html – Contact information page

All pages include a consistent navigation bar for easy access and share common JavaScript and CSS modules.

---

3. File Structure

---

project/
├── index.html
├── procedure.html
├── tools.html
├── contact.html

├── css/
│   ├── theme.css
│   ├── bgm.css
│   └── pic.css

├── js/
│   ├── bgm.js
│   ├── bigger_pic.js
│   └── theme.js

└── assets/
├── favicon/
│   └── favi.jpeg
├── img/
├── audio/
│   └── background.mp3
└── video/

---

4. Relative Paths of Assets

---

All resources are referenced using relative paths to ensure portability across different environments.

Examples:

* Favicon:
  assets/favicon/favi.jpeg

* Images:
  assets/img/...

* Audio:
  assets/audio/background.mp3

* Video:
  assets/video/...

* CSS:
  css/theme.css

* JavaScript:
  js/bgm.js

Relative paths are used instead of absolute paths to avoid loading issues when running locally.

---

5. JavaScript Functions

---

5.1 Background Music Control (bgm.js)

Purpose:
Allows users to play or pause background music using a speaker icon.

Input:
User clicks on the speaker icon.

Output:

* Plays or pauses audio
* Changes icon between volume-on and volume-off
* Displays a notification (alert)

Dependent Elements:
#bgm, #bgmBtn

---

5.2 Image Modal Interaction (bigger_pic.js)

Purpose:
Displays an enlarged version of an image and allows navigation to a related website.

Input:
User clicks on an image with class "clickable-img".

Output:

* Opens modal overlay
* Displays enlarged image
* Clicking again redirects to the external link if provided

Dependent Elements:
.clickable-img, #imageModal, #modalImg, #closeBtn

---

5.3 Theme Color Changer (theme.js)

Purpose:
Allows users to switch between different color themes.

Input:
User clicks on theme buttons.

Output:
Changes the class of the webpage to apply different color styles.

Dependent Elements:
.theme-btn, data-theme attributes

---

5.4 Contact Form Validation (contact.html)

Purpose:
Validates user input before submission.

Input:
Username and message entered by user.

Output:

* Displays alert if input is empty
* Displays success message if submission is valid

Example:
Empty input → “Username and message cannot be empty.”

---

6. Asset List

---

Images:

* Android Studio interface image
* Firebase interface image
* Git logo
* Android Emulator image
* Espresso testing image

Audio:

* background.mp3

Videos:

* firebase.mp4
* espresso_test.mp4

Icons:

* volume-on.png
* volume-off.png

---

7. Code Reuse

---

Some JavaScript concepts are reused from previous assignments (A1 and A2), including:

* Event handling using addEventListener
* DOM manipulation
* Conditional logic for validation

All reused code has been modified and adapted for this project.

---

8. How to Run the Website

---

To avoid embedded video playback errors, the website should be opened using a local server instead of directly opening the HTML files via file://.

Recommended method:

1. Open the project folder in VS Code
2. Use the “Live Server” extension
3. Open index.html through the local server

This ensures that all media files and scripts load correctly.

---


