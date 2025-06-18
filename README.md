# Netlify Website

This project is a simple React application that displays a sequence of text and images. It is designed to run on Netlify and showcases the use of React components, state management, and CSS for styling.

## Project Structure

```
netlify-website
├── public
│   └── index.html        # Main HTML document
├── src
│   ├── App.js           # Main React component
│   ├── components
│   │   ├── Sequence.js   # Component for displaying the sequence of text and images
│   │   └── ImagesGrid.js  # Component for displaying images in a grid layout
│   └── styles
│       └── main.css      # CSS styles for the application
├── package.json          # npm configuration file
├── netlify.toml         # Netlify configuration file
└── README.md             # Project documentation
```

## Features

- Displays the text "Cześć słońce." for 2 seconds.
- Shows a large image covering almost the whole screen for 3.5 seconds.
- Displays the text "Kocham Cię" for 3 seconds.
- Presents four large images arranged in a grid layout.

## Setup Instructions

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd netlify-website
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Start the development server:
   ```
   npm start
   ```

5. Open your browser and go to `http://localhost:3000` to view the application.

## Deployment

To deploy the project on Netlify, ensure that the `netlify.toml` file is correctly configured with the build commands and publish directory. You can then connect your Git repository to Netlify for continuous deployment.