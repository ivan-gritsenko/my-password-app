# Password Strength Checker

[DEMO LINK](https://my-password-app.vercel.app/ "DEMO LINK")

This Angular application provides a password strength checker. It allows users to enter a password and see real-time feedback on the strength of the password using a color-coded system.

## Features
- Real-time Feedback: The strength of the password - is updated in real-time as the user types.
- Password Strength Calculation: The application evaluates the password strength based on the combination of letters, digits, and symbols.
- Visual Indicators: The strength of the password is visually represented using color-coded sections.

## Password Strength Criteria
1. Empty Password:
All sections are gray.

2. Password Length Less Than 8 Characters:
All sections are red.

3. Password is Easy (only letters or only digits or only symbols):
The first section is red, and the rest are gray.

4. Password is Medium (combination of letters-symbols, letters-digits, or digits-symbols):
The first two sections are yellow, and the last one is gray.

5. Password is Strong (combination of letters, symbols, and digits):
All sections are green.


## Installation
1. Clone the repository:

`git clone https://github.com/your-username/password-strength-checker.git`

`cd password-strength-checker`


Install dependencies:

`npm install`

Run the application:

```ng serve```

Navigate to http://localhost:4200/ to see the application in action.

## Usage
1. Open the application in your browser.
2. Enter a password in the input field.
3. Observe the color-coded sections below the input field which indicate the strength of the password based on the criteria mentioned above.
