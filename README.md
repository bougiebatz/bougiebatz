
  ## Team
  Product Owner: Samantha Gowda
  Scrum Master: Jake Smith
  Development Team: Julia Randall, Nav Ghuman, Samantha Gowda, Jake Smith

  # VisualNews

  Visual News is a responsive web application for the visually minded. The vast majority of news sites take after the newspaper in terms of form and content with titles and abstracts. We turn tradition on its head and give users an image to interact with. was concieved and by a team of four full-stack software engineers: [Samantha Gowda](https://github.com/samgowda), [Jake Smith](https://github.com/jakesmith1), [Navkiran Ghuman](https://github.com/nghuman), and [Julia Randall](https://github.com/juliafrandall)

  #####[Visit the app](http://bougiebats.herokuapp.com/home)

  ## Tech Stack
  - React, Node, Express, MongoDB

  ## Architecture
  ![Architecture]()

  ## Features
  - General Features
    - View the new from the past day, week, and month in different image sizes.
    - Search for news by section.
    - Save your favorite articles.

  ## Setup
  During development we have the server running on localhost port 8000, but before running locally, be sure to run:
    - npm install
    - npm build
    - npm start


  ## Contributing
  Please refer to the [CONTRIBUTING.md](docs/CONTRIBUTING.md) file to see how to contribute to our project.

  ## Style Guide
  Please refer to the [STYLE-GUIDE.md](docs/STYLE-GUIDE.md) file to see our style guide.

  ## Team
  We are a team of 4 full-stack software engineers. If you have any questions, please feel free to contact us!

  [Samantha Gowda](https://www.linkedin.com/in/samgowda) | [Github](https://github.com/samgowda)

  [Jake Smith](https://www.linkedin.com/in/jake-w-smith) |
  [Github](https://github.com/jakesmith1)

  [Navkiran Ghuman](https://www.linkedin.com/in/navkiranghuman) | [Github](https://github.com/nghuman)

  [Julia Randall](https://www.linkedin.com/in/juliafrandall) | [Github](https://github.com/juliafrandall)


  ## Application:
  - Client:
    - Components folder: contains all of the React components
    - public: contains the compiled bundle.js
    - Styles: contains css styling
  - Server:
    - Server.js: Express and Node server
    - db.js: connects to mLabs mongoDB on Heroku
    - models: contains mongoose models for the database
    - routes: contains routes for users, articles and news
  - webpack.config.js: compiles js into bundle.js in public directory
