import PizzaTime from "../images/PizzaTime.jpeg";
import TravelWithCatherine from "../images/TravelWithCatherine.jpeg";
import GuessMyNumber from "../images/GuessMyNumber.jpeg";
import Forkify from "../images/Forkify.jpeg";
import Edgy from "../images/Edgy.jpeg";
import RestCountries from "../images/RestCountries.jpeg";
import Bankist from "../images/Bankist.jpeg";
import FrontendMentorSolutions from "../images/FrontendMentorSolutions.jpeg";
import Precious from "../images/Precious.png";

const ProjectsPreviewData = [
  {
    id: 1,
    img: PizzaTime,
    name: "Pizza Time",
    stack: ["< React.js />", "< CSS3 />", "< Leaflet API />"],
    src: "https://catherineisonline.github.io/pizza-time-with-react/",
    source: "https://github.com/catherineisonline/pizza-time-with-react",
    description:
      "Pizza Time is a pizza restaurant that offers an online menu with various options like pizza, sushi, or pasta. The idea of this project is to make it as close as possible to an actual food e-commerce website which has features like an online menu, order options, and so on.",
  },
  {
    id: 2,
    img: TravelWithCatherine,
    name: "Travel with Catherine",
    stack: ["< React.js />", "< Tailwind />"],
    src: "https://catherineisonline.github.io/travel-with-catherine/",
    source: "https://github.com/catherineisonline/travel-with-catherine",
    description:
      "Travel with Catherine, a simple photography portfolio to show off some of my photography and code! Another great project to practice React and Tailwind.",
  },
  {
    id: 3,
    img: Precious,
    name: "Precious",
    stack: ["< GraphQL />", "< React.js />", "< CSS3 />"],
    src: "https://precious-store.vercel.app/",
    source: "https://github.com/catherineisonline/precious",
    description:
      "Precious is an e-commerce website that has at least 150 women's clothing products with different sizes and color choices.",
  },

  {
    id: 4,
    img: RestCountries,
    name: "Rest Countires",
    stack: ["< RESTful API />", "< CSS3 />", "< React.js />"],
    src: "https://catherineisonline.github.io/rest-countries/",
    source: "https://github.com/catherineisonline/rest-countries",
    description:
      "REST Countries is a project made with API which also has a color theme switcher feature. You can view the list of all countries and find a specific one via search or by filtering regions. By navigating to the individual country page, you are able to see more details about the country like native name and even border countries.",
  },
  {
    id: 5,
    img: Forkify,
    name: "Forkify Recipes",
    stack: ["< HTML5 />", "< SCSS />", "< Vanilla JS />", "< RESTful API />"],
    src: "https://forkify-recipe-api.vercel.app/",
    source: "https://github.com/catherineisonline/forkify",
    description:
      "Forkify is a vanilla JavaScript application that interacts with the Forkify API to fetch and display recipe food data. The user can search for a specific recipe, and save to a favorites list via local storage. The user can easily increase or decrease servings as per his need and can view detailed directions.",
  },
  {
    id: 6,
    img: Bankist,
    name: "Bankist",
    stack: ["< Vanilla JS />", "< CSS3 />", "< HTML5 />"],
    src: "https://bankist-bank.vercel.app/",
    source: "https://github.com/catherineisonline/bankist",
    description:
      "Bankist is a fictional online bank and its goal is to practice DOM manipulation and user interaction. Bankist has an option to log in to the account and use different functionalities, almost like in an actual bank! By logging into your account you can transfer money to another account, take a loan or delete the account. Please check README for login info.",
  },
];

const ProjectsData = [
  {
    id: 1,
    img: PizzaTime,
    name: "Pizza Time",
    stack: ["< HTML5 />", "< CSS3 />", "< React.js />"],
    src: "https://catherineisonline.github.io/pizza-time-with-react/",
    source: "https://github.com/catherineisonline/pizza-time-with-react",
    description:
      "Pizza Time is a pizza restaurant that offers an online menu with various options like pizza, sushi, or pasta. The idea of this project is to make it as close as possible to an actual food e-commerce website which has features like an online menu, order options, and so on.",
  },
  {
    id: 2,
    img: TravelWithCatherine,
    name: "Travel with Catherine",
    stack: ["< React.js />", "< Tailwind />"],
    src: "https://catherineisonline.github.io/travel-with-catherine/",
    source: "https://github.com/catherineisonline/travel-with-catherine",
    description:
      "Travel with Catherine, a simple photography portfolio to show off some of my photography and code! Another great project to practice React and Tailwind.",
  },
  {
    id: 3,
    img: Precious,
    name: "Precious",
    stack: ["< GraphQL />", "< React.js />", "< CSS3 />"],
    src: "https://precious-store.vercel.app/",
    source: "https://github.com/catherineisonline/precious",
    description:
      "Precious is an e-commerce website that has at least 150 women's clothing products with different sizes and color choices. ",
  },

  {
    id: 4,
    img: RestCountries,
    name: "Rest Countires",
    stack: ["< CSS3 />", "< React.js />", "< RESTful API />"],
    src: "https://catherineisonline.github.io/rest-countries/",
    source: "https://github.com/catherineisonline/rest-countries",
    description:
      "REST Countries is a project made with API which also has a color theme switcher feature. You can view the list of all countries and find a specific one via search or by filtering regions. By navigating to the individual country page, you are able to see more details about the country like native name and even border countries.",
  },
  {
    id: 5,
    img: Forkify,
    name: "Forkify Recipes",
    stack: ["< SCSS />", "< Vanilla JS />", "< RESTful API />"],
    src: "https://forkify-recipe-api.vercel.app/",
    source: "https://github.com/catherineisonline/forkify",
    description:
      "Forkify is a vanilla JavaScript application that interacts with the Forkify API to fetch and display recipe food data. The user can search for a specific recipe, and save to a favorites list via local storage. The user can easily increase or decrease servings as per his need and can view detailed directions.",
  },
  {
    id: 6,
    img: Bankist,
    name: "Bankist",
    stack: ["< Vanilla JS />", "< CSS3 />", "< HTML5 />"],
    src: "https://bankist-bank.vercel.app/",
    source: "https://github.com/catherineisonline/bankist",
    description:
      "Bankist is a fictional online bank and its goal is to practice DOM manipulation and user interaction. Bankist has an option to log in to the account and use different functionalities, almost like in an actual bank! By logging into your account you can transfer money to another account, take a loan or delete the account. Please check README for login info.",
  },

  {
    id: 7,
    img: GuessMyNumber,
    name: "Guess My Number",
    stack: ["<HTML5 />", "< CSS3 />", "< Vanilla JS />"],
    src: "https://guess-my-number-now.vercel.app/",
    source: "https://github.com/catherineisonline/guess-my-number",
    description:
      "This JavaScript number guessing game project's main goal is to code a game where the user must guess a randomly generated number from 1 to 20. Depending on the number input, the user receives different messages until they guess the secret number.",
  },
  {
    id: 8,
    img: FrontendMentorSolutions,
    name: "Frontend Mentor Solutions",
    stack: ["< Vue.js />", "< Sass />"],
    src: "https://catherineisonline.github.io/frontend-mentor-challenge-solutions/",
    source:
      "https://github.com/catherineisonline/frontend-mentor-challenge-solutions",
    description:
      "Frontend Mentor provides designs so that you can practice front-end skills using a real-life workflow. Challenges include designs (both mobile and desktop), assets, and style requirements. Here is the collection of all my Frontend Mentor challenge solutions. You can find links to their repositories, live demos, and direct links to challenges on Frontend Mentor.",
  },
  {
    id: 9,
    img: Edgy,
    name: "Edgy",
    stack: ["< Tailwind />", "< React.js />"],
    src: "https://catherineisonline.github.io/edgy/",
    source: "https://github.com/catherineisonline/edgy",
    description:
      "Edgy - is a social media marketing agency that offers Instagram growth services to businesses and beginner influencers. The website includes prices, a contact form, a blog, a careers page, and more.",
  },
];

export { ProjectsData, ProjectsPreviewData };
