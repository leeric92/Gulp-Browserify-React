Gulp-Browserify-React
=====================

JS Workflow for React.js


Gulpfile has Browserify and Watchify.

Bundle.js will be created in build folder. Main.js is located in src folder. Because of Browserify, you can have different files for different React components and require them into your Main.js; it will then be compressed into a single bundle.js 

If you are not using the same file structure, in the gulpfile.js, you can change the variables for the file paths. 

<b> To Do </b>

1. Changes and saves aren't showing up on Terminal. And saving changes takes a couple of seconds to show up. Something must    not be 100% right on watch task.
2. CSS workflow
2. JSHint
3. Server side stuff

