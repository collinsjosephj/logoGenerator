# logoGenerator

  ![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)
  
## Description  
This is an example of a Node.js command-line application that takes in user input to generate a logo and save it as an SVG file. The application prompts the user to select a color and shape, provide text for the logo, and save the generated SVG to a .svg file. As a freelance web developer, one will often need simple logos created for projects, and hiring out a graphic designer can be both costly and time-consuming. This CLI application allows the user to quickly generate a basic logo for your needs, helping you save precious time and money. Link to demonstration can be found within the README below. 

- [Description](#description)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Example](#example)
- [Contributing](#contributing)
- [License](#license)
- [Questions](#questions)
  
## Features

-  **User Input Prompts**: The application prompts you for input regarding the logo's text, text color, shape, and shape color.
-  **Text Input**: Enter up to three characters for the logo's text.
-  **Color Input**: Enter a color keyword or a hexadecimal number for both the text and the shape.
-  **Shape Selection**: Choose from a list of shapes including circle, triangle, and square.
-  **SVG File Generation**: Based on your inputs, the application generates an SVG file named logo.svg.
-  **Output Message**: The application outputs "Generated logo.svg" upon successful creation of the logo file.

## Installation
To use this CLI application, you need to have Node.js installed on your machine. Follow these easy steps to get started:
```
# Clone the repository

git clone https://github.com/collinsjosephj/logoGenerator.git

# Navigate to the project directory

cd readMeGenerator

# Install dependencies

npm install
```
## Usage

Run the application by executing the following command in your terminal:

```
node index.js
```

Follow the prompts given:
- **Enter text for the logo**: You can enter up to three characters.
- **Enter text color**: Provide a color keyword (e.g., "red") or a hexadecimal number (e.g., "#ff0000").
- **Select a shape**: Choose from the options: circle, triangle, and square.
- **Enter shape color**: Provide a color keyword or a hexadecimal number for the shape's color.

After entering all the required information, the application will generate an SVG file named logo.svg in your project directory. You will see the message "Generated logo.svg" in your terminal, and opening the file in live server will open the generated logo in the browser. 

Tests using Jest:

```
npm run test
```
## Example

<img width="462" alt="Screenshot 2024-07-10 at 16 11 00" src="https://github.com/ptsteadman/kaboodle/assets/156174614/ccae0962-9fa5-4966-809f-dcfeef8ae64b">

Opening the logo.svg file in a browser will show a 300x200 pixel image with the text "UO" in yellow, displayed within an green circle. GO DUCKS!

Link to walk-through video on Google Drive:


## Contributing

Feel free to fork the repository and submit pull requests for any improvements or bug fixes. Contributions are always welcome! I would love to further this application to have the capability to take on more abstract requests, and further its usage to other developers!


## License

This application is licensed under the MIT license, please refer to docs for further information. 

## Questions

If you have any questions about the repo, open an issue or contact me directly at 
[collinsjosephj](mailto:collinsjosephj). 

You can find more of my work at 
(https://github.com/collinsjosephj@gmail.com).




