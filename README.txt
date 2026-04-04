Guide To Android Development Website

---

1. Project Overview

---

This project is a multi-page website designed to explain the complete Android application development workflow. The purpose of this website is to guide visitors through the structured process of Android development — from planning and UI design to implementation, testing, and deployment.

The website also includes several interactive features implemented using JavaScript, such as background music control, theme switching, image modal interaction, and form validation.

The website is live hosted at GitHub: https://kirakira5734-beep.github.io/CSCI1170A2/index.html

---

2. Website Structure

---

The website contains the following pages:

* index.html      – Home page. Contains hero section, photo gallery, introduction text, overview list, and summary table.
* procedure.html  – Android Development Procedure. Contains 5 steps with embedded YouTube iframes and local videos.
* tools.html      – Tools used in Android development. Contains alternating image-text gallery and comparison table.
* contact.html    – Contact information and message form.

All pages share a consistent navigation bar, theme switcher, BGM control, and footer.

---

3. File Structure

---

project/
├── index.html
├── procedure.html
├── tools.html
├── contact.html
├── README.txt

├── css/
│   ├── theme.css       – Global styles, navigation, typography, shared components, themes, responsive breakpoints
│   ├── index.css       – Styles specific to index.html (hero, gallery, intro sections, table)
│   ├── procedure.css   – Styles specific to procedure.html (step layout with flexbox)
│   ├── tools.css       – Styles specific to tools.html (alternating gallery layout)
│   ├── contact.css     – Styles specific to contact.html (form, contact sections)
│   ├── bgm.css         – Styles for the background music button
│   └── pic.css         – Styles for clickable image modal overlay

├── js/
│   ├── bgm.js          – Background music play/pause control
│   ├── bigger_pic.js   – Image modal and external link interaction
│   └── theme.js        – Theme color switcher

└── assets/
    ├── favicon/
    │   └── favi.jpeg
    ├── img/
    │   ├── android_img.png
    │   ├── android_studio_interface.jpg
    │   ├── Android_Studio.png
    │   ├── firebase.jpg
    │   ├── git.png
    │   ├── android_emulator.png
    │   └── android_espresso.png
    ├── audio/
    │   └── background.mp3
    └── video/
        ├── firebase.mp4
        └── espresso_test.mp4

---

4. Relative Paths of Assets

---

All resources are referenced using relative paths to ensure portability across different environments.

Examples:

* Favicon:    assets/favicon/favi.jpeg
* Images:     assets/img/...
* Audio:      assets/audio/background.mp3
* Video:      assets/video/...
* CSS:        css/theme.css
* JavaScript: js/bgm.js

Relative paths are used instead of absolute paths to avoid loading issues when running locally or on GitHub Pages.

---

5. CSS Selectors — Location Reference

---

The following CSS selectors are used as required by the assignment.
All selectors below are located in css/theme.css unless otherwise noted.

5.1 Universal Selector
    Selector: *
    Location: css/theme.css — top of file, resets box-sizing, margin, and padding for all elements.
    Example:
        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }

5.2 Multiple Selector
    Selector: h1, h2, h3
    Location: css/theme.css — sets shared font family, color, and letter-spacing for all heading levels.
    Example:
        h1, h2, h3 {
            font-family: Georgia, serif;
            color: #0d1b2a;
        }

5.3 Child Selector
    Selector: footer > p
    Location: css/theme.css — targets only direct <p> children of <footer>, sets font size and color.
    Example:
        footer > p {
            font-size: 14px;
            color: #6b7280;
        }

5.4 Sibling Selector
    Selector: h1 ~ p
    Location: css/theme.css — targets all <p> elements that follow an <h1> within the same parent, limits max-width.
    Example:
        h1 ~ p {
            max-width: 900px;
        }

5.5 Adjacent Sibling Selector
    Selector: h1 + p
    Location: css/theme.css — targets only the first <p> immediately after an <h1>, applies bold weight and larger font.
    Example:
        h1 + p {
            font-weight: 600;
            font-size: 1.05rem;
        }

5.6 Attribute Selector
    Selector: a[href^="mailto"]
    Location: css/theme.css — targets anchor tags whose href begins with "mailto", applies distinct color and dashed underline.
    Example:
        a[href^="mailto"] {
            color: #0f766e;
            border-bottom: 1px dashed #0f766e;
        }

5.7 Pseudo-element Selector
    Selector: p.drop-cap::first-letter
    Location: css/theme.css — creates a drop cap effect on paragraphs with class "drop-cap".
    Selector: .nav-links a::after
    Location: css/theme.css — creates an animated underline on navigation links using generated content.
    Example:
        p.drop-cap::first-letter {
            font-size: 3.2em;
            font-weight: 700;
            float: left;
            line-height: 0.85;
            margin-right: 6px;
        }
        .nav-links a::after {
            content: '';
            position: absolute;
            bottom: 4px;
            width: 0;
            height: 2px;
            transition: width 0.25s ease;
        }

---

6. CSS Layout Features

---

6.1 Flexbox
    Location: css/procedure.css — .procedure-step uses flexbox to place video media and text side by side.
    Location: css/theme.css — .navbar uses flexbox to align the site title and navigation links.
    Purpose: Allows responsive side-by-side layout that stacks vertically on smaller screens.

6.2 Grid
    Location: css/index.css — .home-gallery uses a 2-column CSS grid for the photo gallery.
    Location: css/tools.css — .tools-gallery uses flex column with alternating row-reverse for the tools gallery.
    Purpose: Organizes images in a structured, responsive layout.

6.3 Responsive Design — Breakpoints
    Breakpoint 1: max-width 900px (Tablet)
        - Navbar stacks vertically
        - Procedure steps stack vertically
        - Tools gallery switches to single column
        - Theme panel becomes a horizontal row
    Breakpoint 2: max-width 600px (Mobile)
        - Font sizes reduced
        - All paddings reduced
        - Hero content becomes static (no overlay)
        - Gallery columns collapse to single column
    Location: css/theme.css, css/index.css, css/procedure.css, css/tools.css, css/contact.css

---

7. JavaScript Functions

---

7.1 Background Music Control (bgm.js)

Purpose:
Allows users to play or pause background music using a speaker icon in the navigation bar.

Input:
User clicks on the speaker icon (#bgmBtn).

Output:
* Plays or pauses the background audio element (#bgm)
* Swaps the icon between volume-on.png and volume-off.png
* Displays a notification alert to the user

Dependent Elements:
#bgm, #bgmBtn, assets/audio/background.mp3, assets/volume-on.png, assets/volume-off.png

---

7.2 Image Modal Interaction (bigger_pic.js)

Purpose:
Displays an enlarged version of a clicked image in a full-screen modal overlay.
If the image has a data-link attribute, a second click redirects the user to an external URL.

Input:
User clicks on an image with class "clickable-img".

Output:
* Opens #imageModal overlay with the enlarged image
* Clicking the enlarged image redirects to the external link if data-link is set
* Clicking the close button (#closeBtn) dismisses the modal

Dependent Elements:
.clickable-img, #imageModal, #modalImg, #closeBtn, data-link attribute

---

7.3 Theme Color Changer (theme.js)

Purpose:
Allows users to switch the visual color theme of the entire page between Red, Gray, and Green.

Input:
User clicks one of the theme buttons (.theme-btn) in the theme panel.

Output:
* Removes any existing theme class from <body>
* Applies the selected theme class (theme1, theme2, or theme3) to <body>
* Theme classes change the navbar background, link colors, table header colors, and background color

Dependent Elements:
.theme-btn, data-theme attributes, <body> class, css/theme.css theme classes (theme1, theme2, theme3)

---

7.4 Contact Form Validation (contact.html — inline script)

Purpose:
Validates user input in the contact form before submission to ensure fields are not empty.

Input:
Username (text input) and Message (textarea) entered by the user.

Output:
* If either field is empty: displays an alert "Username and message cannot be empty." and clears result message
* If both fields are filled: displays alert "Message submitted successfully!" and shows a thank-you message in #resultMessage, then clears the form fields

Example:
Empty input    → alert: "Username and message cannot be empty."
Valid input    → alert: "Message submitted successfully!"
               → #resultMessage: "Thank you, [username]. Your message has been received."

Dependent Elements:
#contactForm, #username, #message, #resultMessage

---

8. Accessibility

---

The website follows W3C accessibility guidelines (WCAG):

* All images include descriptive alt attributes.
* All <iframe> elements include a title attribute.
* All <video> elements include aria-label and fallback text content.
* Navigation links are keyboard accessible.
* Form inputs are associated with labels using for and id attributes.
* Theme buttons include aria-label attributes describing their purpose.
* The modal close button includes role="button" and aria-label="Close image".
* Decorative <hr> elements use aria-hidden="true".
* Color contrast ratios meet WCAG AA standards across all three themes.
* The website uses semantic HTML elements: <nav>, <section>, <article>, <figure>, <footer>, <main>.

---

9. Asset References

---

Images:
* Android Studio interface image — developer.android.com (reference only, locally saved)
* Firebase interface image — firebase.google.com (reference only, locally saved)
* Git logo — git-scm.com (reference only, locally saved)
* Android Emulator image — developer.android.com (reference only, locally saved)
* Espresso testing image — developer.android.com (reference only, locally saved)

Audio:
* background.mp3 — background music, sourced for personal/educational use

Videos:
* firebase.mp4 — Firebase integration demonstration, recorded for this project
* espresso_test.mp4 — Espresso UI testing demonstration, recorded for this project

Icons:
* volume-on.png, volume-off.png — used for BGM control button

---

10. Code Reuse

---

Some JavaScript concepts are reused and adapted from previous assignments (A1 and A2), including:

* Event handling using addEventListener
* DOM manipulation using getElementById and classList
* Conditional logic for form validation

All reused code has been reviewed, modified, and adapted specifically for this project.

---

11. How to Run the Website

---

To avoid embedded video playback errors, open the website using a local server instead of opening HTML files directly via file://.

Recommended method:
1. Open the project folder in VS Code
2. Install the "Live Server" extension
3. Right-click index.html and select "Open with Live Server"

This ensures all media files, scripts, and relative paths load correctly.

Alternatively, visit the live hosted version at:
https://kirakira5734-beep.github.io/CSCI1170A2/index.html

---
