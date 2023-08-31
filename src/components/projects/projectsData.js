import recipesHero from '../../images/projects/recipes-hero.png';
import snippetsHero from '../../images/projects/snippets-hero.png';
import talkerManagerHero from '../../images/projects/talker-manager-hero.png';
import storeManagerHero from '../../images/projects/store-manager-hero.png';
import dragHero from '../../images/projects/drag-hero.png';
// import solarHero from '../../images/projects/solar-system-hero.png';
import walletHero from '../../images/projects/wallet-hero.png';

export const projects = [
  {
    title: 'Recipes App',
    description:
      'This is an app that shows meals and drinks recipes, allow the user to keep track of the steps and ingredients, and also to favorite, filter and search for recipes. It was made with React and ContextAPI to manage the state, and followed a mobile-first approach.',
    gitHubUrl: 'https://github.com/jfzini/recipes-app',
    deployedUrl: 'https://good-cooking-app.vercel.app/',
    videoUrl: '',
    imgSrc: recipesHero,
  },
  {
    title: 'Music Snippets',
    description:
      'Fully responsive app that allows the user to search for artists and songs, to save them as favorites and edit their profile in the app.',
    gitHubUrl: 'https://github.com/jfzini/Zini-Tunes',
    deployedUrl: 'https://music-snippets.vercel.app/',
    videoUrl: '',
    imgSrc: snippetsHero,
  },
  {
    title: 'Trip Wallet',
    description:
      'This project is a simulation of a wallet, where you can add expenses, convert the spent currencies to Brazilian Real, and view a table with the total expenses. The development was carried out using Redux, React, React Router, and Middlewares for handling asynchronous actions. The tests were developed with React Testing Library.',
    gitHubUrl: 'https://github.com/jfzini/trip-wallet',
    deployedUrl: 'https://trip-wallet-project.vercel.app/',
    videoUrl: '',
    imgSrc: walletHero,
  },
  {
    title: 'Talker Manager',
    description:
      'This is a back-end project that allows the user to create, edit and delete (CRUD) talkers for an event. It was made with Node.js, Express, Docker and MySQL. It follows a layered architecture, with a service layer, a controller layer and a model layer.',
    gitHubUrl: 'https://github.com/jfzini/talker-manager-express-api',
    deployedUrl: '',
    videoUrl: '',
    imgSrc: talkerManagerHero,
  },
  {
    title: 'Store Manager',
    description:
      'This is an API developed using Docker, Node.js, Express and MySQL but the true focus of the project is the testing. It has unit and integration tests, with 100% coverage and quality assured by mutation tests with Stryker.',
    gitHubUrl: 'https://github.com/jfzini/store-manager-API',
    deployedUrl: 'https://documenter.getpostman.com/view/29177531/2s9Y5R3SWC',
    videoUrl: '',
    imgSrc: storeManagerHero,
  },
  {
    title: 'Top Trumps Drag',
    description: `Inspired by the Top Trumps games, I developed this one starring drag queens from the reality show 'RuPaul's Drag Race'. It was made with React and class components, to showcase the ability to work with legacy projects.`,
    gitHubUrl: 'https://github.com/jfzini/top_trumps_drag',
    deployedUrl: 'https://top-trumps-drag.vercel.app/',
    videoUrl: 'https://www.youtube.com/embed/JSxDvSl0ceA',
    imgSrc: dragHero,
  },
  // {
  //   title: 'Solar System',
  //   description: 'Simple landing page, made with React, about space missions in our solar system. All animations were made using pure CSS, to explore its possibilities.',
  //   gitHubUrl: 'https://github.com/jfzini/solar-system',
  //   deployedUrl: 'https://solar-system-rho-lac.vercel.app/',
  //   videoUrl: 'https://www.youtube.com/embed/4GuyL_BArd8',
  //   imgSrc: solarHero
  // },
];
