const projects = [
  {
   image: "https://i.ibb.co/TgRjNp6/portofoilo-site.png",
   githubUrl: "https://github.com/codejoncode/Jonathan-Holloway https://github.com/codejoncode/jonathan-holloway-be",
   technologies: "FullStack Express Postgresql React Redux Semantic-UI",
   title: "Portfolio",
   deployUrl: "http://www.jonathanjholloway.com",
   description: "This is a portfolio site to showcase the skills I have acquired through Lambda School and much practice. I have taken Udemy courses Codecademy.com courses datacamp.org courses and continue to practice and learn as much as I can. I can work on the frontend, backend or both. Like a lot of my side projects, I worked as a Lambda School Project Manager while implementing this site.",
   gif : "https://gfycat.com/responsiblepeskycolt",
   features: "React/Redux frontend, Semantic UI, Postgres backend, Blog, Email via Nodemailer, Downloadable resume, Lectures from Teaching Assistant role at Lambda School", 
   gifPlay : "https://gfycat.com/ifr/ResponsiblePeskyColt"
  },
  {
    features:
      "Follow list, Ability to follow a user, Ability to unfollow a user, edit profile, Ability to invite a user to the forums, Search for a user signed up to the forum, Ability to change a users role on a team",
    plan: "https://trello.com/b/HIIPPoKb/labs-11-social-board-2",
    title: "Symposium",
    deployUrl: "https://socialapp2.netlify.com/",
    githubUrl:
      "https://github.com/labs11-social-board/labs11_social_boardFE, https://github.com/labs11-social-board/labs11_social_boardBE",
    description:
      "Symposium is a 5-week project where I worked with 4 other developers on an existing codebase to add functionality and features.",
    technologies: "React Redux PostgreSql FullStack sql Express",
    image: "https://i.ibb.co/SBzsBzw/Symposium.png",
    gif: "https://gfycat.com/zealousdecentandeancat",
    gifPlay: "https://gfycat.com/ifr/ZealousDecentAndeancat"
  },

  {
    features:
      "Create a note, Edit a note, Delete a note, Display a list of notes, 3D Carousel, Rhyme api, Export to CSV, Search for notes, Drag and Drop to sort notes, Sort by order note was created, Backend API's implemented, Backend database",
    plan:
      "https://trello.com/b/PZTzDkkd/lambda-notes-jonathan-jamel-holloway, https://trello.com/b/bXgHQV3W/lambda-notesbackend-jonathan-jamel-holloway",
    title: "Notetaking App",
    deployUrl: "https://notetakingapp.netlify.com/",
    githubUrl:
      "https://github.com/codejoncode/front-end-project-week, https://github.com/codejoncode/back-end-project-week",
    description:
      "Four-day frontend project designed to test the React and Redux skills learned at Lambda. The backend was later implemented after 4 weeks of studies with Lambda with another 4 days of work after assignment. This was my first full stack application.  Many features added on top of the original requirement. I had a lot of fun and perhaps realized this is the career I wanted during the creation of this project. ",
    technologies: "JavaScript Express Redux FullStack sql",
    image: "https://i.ibb.co/HgHYCyb/note-Taking-App.png",
    gif: "https://gfycat.com/hilariousanyarabianoryx",
    gifPlay: "https://gfycat.com/ifr/HilariousAnyArabianoryx",
  },

  {
    features:
      "Implemented API commands, Set up Pusher notifications, Connected backend to frontend, Setup Login/Registration, Displays a Map",
    plan: "https://trello.com/b/LhHTe9fi/lambdamud-jonathan-holloway",
    title: "Lambda Mud",
    deployUrl: "https://silly-spence-1e4f95.netlify.com/",
    githubUrl:
      "https://github.com/codejoncode/LambdaMUD-Project, https://github.com/codejoncode/LambdaMUD-Client",
    description:
      "Another four-day project to test my knowledge of Python and Django at Lambda School. This is a full stack project with Django on the backend and React on the frontend.",
    technologies: "python django JavaScript React FullStack sql",
    image: "https://i.ibb.co/d2Np2cJ/lambda-Mud.png",
    gif: "https://gfycat.com/gloomyportlyincatern",
    gifPlay: "https://gfycat.com/ifr/GloomyPortlyIncatern"
  },

  {
    features:
      "An algorithm that traverses 500 rooms in under 1000 moves. Displays full map of 500 rooms, Shows exact location user is in, Able to select a room and go to it using BFST, Able to pick items up, Able to sell items",
    title: "Lambda Treasure Hunt",
    deployUrl: "https://codejoncode.github.io/lambda_treasure_hunt/",
    githubUrl: "https://github.com/codejoncode/lambda_treasure_hunt",
    description:
      "Lambda Treasure Hunt is a project with Django on the backend, and React on the frontend that illustrates graph traversal. Implemented the ability to travel to any given room using breadth-first search. Automated exploration to traverse the world and build a map. Map building Generate a graphical representation of the world map",
    technologies: "React JavaScript bootstrap sigma Algorithms",
    image: "https://i.ibb.co/5xv5cHX/Lambda-Treasure-Hunt.png",
    gif: "https://gfycat.com/singleweepyasp",
    gifPlay: "https://gfycat.com/ifr/SingleWeepyAsp",
  },

  {
    features:
      "Ability to display team data, Ability to display each players data",
    title: "Hash History Basketball League",
    deployUrl: "https://codejoncode.github.io/HashHistoryBasketballLeague",
    githubUrl: "https://github.com/codejoncode/HashHistoryBasketballLeague",
    description:
      "Application to go over React router and displaying components in React.",
    technologies: "React  JavaScript",
    image: "https://i.ibb.co/W03FZs5/basketball-League.png",
    gif: "https://gfycat.com/rewardingrepulsivegermanpinscher",
    gifPlay : "https://gfycat.com/ifr/RewardingRepulsiveGermanpinscher"
  },

  {
    features:
      "Backtracking algorithm, Puzzle solver,  Difficulty adjustment, Timer",
    title: "Sudoku",
    deployUrl: "https://codejoncode.github.io/Sudoku/",
    githubUrl: "https://github.com/codejoncode/Sudoku",
    description: "an application of the classic game of Sudoku",
    technologies: "JavaScript React Algorithms",
    image: "https://i.ibb.co/fCXdBYV/sudoku.png",
    gif: "https://gfycat.com/welldocumentedkindisabellineshrike",
    gifPlay: "https://gfycat.com/ifr/WelldocumentedKindIsabellineshrike",
  },

  {
    features:
      "Sample cell configurations that users can load and run, Option that creates a random cell configuration that users can run, Additional cell properties, Functionality to manually step through the simulation, Allow the user to change the dimension of the grid displayed",
    plan: "https://trello.com/b/bRjoKRwO/gameoflife-jonathanjamelholloway",
    title: "Conway's Game of Life",
    deployUrl: "https://codejoncode.github.io/Conways-Life/",
    githubUrl: "https://github.com/codejoncode/Conways-Life",
    description:
      "application in which users will be able to run different 'Game of Life' scenarios",
    technologies: "React JavaScript algorithms",
    image: "https://i.ibb.co/y4DPTyv/conways-Game.png",
    gif: "https://gfycat.com/bouncygargantuanhammerkop",
    gifPlay: "https://gfycat.com/ifr/BouncyGargantuanHammerkop",
  },

  {
    features:
      "Event listeners, Custom carousel built with vanilla JavaScript, Icon on hover, Multiple pages, Links perform animation",
    plan: "https://trello.com/b/kWyiFmtw/sj-architects-by-jonathan-holloway",
    title: "User Interface Project Week",
    deployUrl: "http://high-pitched-cloth.surge.sh/",
    githubUrl: "https://github.com/codejoncode/User-Interface-Project-Week",
    description:
      "Followed a design and implemented the application. Using Less CSS and HTML.",
    technologies: "LESS JavaScript Design",
    image: "https://i.ibb.co/k3zDSFG/ui-design.png",
    gif: "https://gfycat.com/orangedeafeninggodwit",
    gifPlay: "https://gfycat.com/ifr/OrangeDeafeningGodwit",
  },

  {
    title: "Forex Landing Page",
    deployUrl: "https://codejoncode.github.io/forex_page/",
    githubUrl: "https://github.com/codejoncode/forex_page",
    description:
      "An attempt to mimic design located at  https://dribbble.com/shots/3860958-Forex-Trading-Landing using nothing but my eyes and skills.",
    technologies: "Design React",
    image: "https://i.ibb.co/qL68JvX/forex-Landing-Page.png",
    gif: "https://gfycat.com/palewelloffamericanwigeon",
    gifPlay: "https://gfycat.com/ifr/PaleWelloffAmericanwigeon",
  },
  {
    features:
      "Carousel Component,  Styled Components, Filter the cards using the tabs",
    title: "Lambda Times",
    deployUrl: "http://motionless-note.surge.sh/",
    githubUrl:
      "https://github.com/codejoncode/Sprint-Challenge-Lambda-Times-React",
    description:
      "Lambda School 3 hour Sprint challenge to convert vanilla Javascript into a React application and pass data through props.",
    technologies: "React JavaScript",
    image: "https://i.ibb.co/0FDhKqF/lambda-Times.png",
    gif: "https://gfycat.com/cheerynecessarycrownofthornsstarfish",
    gifPlay : "https://gfycat.com/ifr/CheeryNecessaryCrownofthornsstarfish",
  },

  {
    features:
      "Ability to navigate through different months, Ability to navigate through different years, Carousel",
    title: "Simple Calendar",
    deployUrl: "http://lethal-juice.surge.sh/",
    githubUrl: "https://github.com/codejoncode/Calendar",
    description:
      "A simple calendar application to practice skills learned in week 7 of Lambda School. This was not school related but practice to gain mastery in the topics. The application will allow one to move the year or the month and get the creat dates aligned on the application. I honestly didn't finish this application as I had desires to add tasks to certain date.",
    technologies: "moment  React JavaScript",
    image: "https://i.ibb.co/bP65FGf/simple-Calendar-App.png",
    gif: "https://gfycat.com/mildcelebratedkomododragon",
    gifPlay: "https://gfycat.com/ifr/MildCelebratedKomododragon",
  },

  {
    features:
      "ablilty to add to the list, ablility to delete from the list, ablility to set a timer, ability search through the list",
    title: "Todo List",
    deployUrl: "http://hard-to-find-power.surge.sh/",
    githubUrl: "https://github.com/codejoncode/React-Todo",
    description: "A simple to do list",
    technologies: "JavaScript React",
    image: "https://i.ibb.co/Kw4cykZ/simple-Tod-List.png",
    gif: "https://gfycat.com/dimpledimperturbablehawk",
    gifPlay : "https://gfycat.com/ifr/DimpledImperturbableHawk"
  },

  {
    features:
      "Pagination system that allows loading the next page of data, Use of API to display data in react application, Hide data until a button is clicked",
    title: "React Wars",
    deployUrl: "http://ruddy-throne.surge.sh/",
    githubUrl: "https://github.com/codejoncode/Sprint-Challenge-React-Wars",
    description:
      "This was a Sprint Challenge in which I had three hours to implement a solution to the problem. Please see the repo link. Fetching data and displaying as we saw fit.",
    technologies: "React JavaScript",
    image: "https://i.ibb.co/rmzQ6rm/react-Wars.png",
    gif: "https://gfycat.com/lonelyunselfishdobermanpinscher",
    gifPlay: "https://gfycat.com/ifr/LonelyUnselfishDobermanpinscher"
  },

  {
    features:
      "Ability, do simple math, Ability continue doing math on the previous answer",
    title: "Simple Calculator",
    deployUrl: "http://worried-snakes.surge.sh/",
    githubUrl: "https://github.com/codejoncode/React-UI-Components",
    description:
      "A simple calculator application used at the beginning of learning how to use React to build components. This is from the React UI Components section of Lambda School.",
    technologies: "React JavaScript",
    image: "https://i.ibb.co/sgxBz5d/calculator-Components.png",
    gif: "https://gfycat.com/wholetartiberianchiffchaff",
    gifPlay : "https://gfycat.com/ifr/WholeTartIberianchiffchaff"
  },

  {
    features: "Features simulate activity on a social network",
    title: "Social Card",
    deployUrl: "http://upbeat-son.surge.sh/",
    githubUrl: "https://github.com/codejoncode/React-UI-Components",
    description:
      "A social card used at the beginning of learning how to use React to build components. This is from the React UI Components section of Lambda School.",
    technologies: "React JavaScript",
    image: "https://i.ibb.co/T4TdMd5/social-Card.png",
    gif: "https://gfycat.com/weirdtatteredflatcoatretriever",
    gifPlay : "https://gfycat.com/ifr/WeirdTatteredFlatcoatretriever"
  }
];

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("projects")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("projects").insert(projects);
    });
};
