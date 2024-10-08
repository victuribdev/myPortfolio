import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'Weather App',
        description: " I developed a Weather App using Android Studio that fetches weather data from the OpenWeatherMap API. The application features Material Design 2 and supports dark mode. I implemented two languages (English and Persian) and utilized ObjectBox for local data storage. The app includes charts for visualizing weather trends and integrates Firebase for crash analytics.",
        tools: ['Android Studio', 'MOpenWeatherMap API', 'Retrofit', 'OkHttp', 'Glide', 'ObjectBox', 'MPAndroidChart', 'Firebase'],
        role: 'Mobile Developer',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'ATM System',
        description: 'This is an ATM (Automated Teller Machine) system implemented in Java, featuring a user-friendly graphical interface built with Swing. The application provides functionalities like login, signup, balance inquiry, withdrawal, deposit, PIN change, mini statement, and fast cash options.',
        tools: ['Java', 'Swing GUI Toolkit'],
        role: 'Developerr',
        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: 'Node-React E-commerce',
        description: 'This is a full-stack e-commerce application built with Node.js and React. I developed the backend using Express and MongoDB for data storage, implementing JWT for authentication and Bcrypt for password hashing. The frontend, built with React and Redux, provides a dynamic user experience for browsing products and managing the shopping cart',
        tools: ['Node.js', 'Express', 'MongoDB', 'React', 'Redux', 'Bcrypt', 'Multer'],
        code: '',
        role: 'Full Stack Developer',
        demo: '',
        image: realEstate,
    },
    {
        id: 4,
        name: 'Reactive Recipe Application',
        description: "I developed a Reactive Recipe Application using Spring Boot and MongoDB. This application allows users to create, read, update, and delete recipes in a reactive manner. The frontend is built with React, providing an interactive user experience. It demonstrates the use of a non-blocking architecture, integrating a MongoDB database for efficient data storage and retrieval.",
        tools: ['Spring Boo', 'Spring WebFlux', 'MongoDB', 'Javar', "React",  'Maven','Thymeleaf'],
        code: '',
        demo: '',
        image: ayla,
        role: 'Full Stack Developer',
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },