export const skillsList = [
  // Core Frontend Skills
  {
    name: "HTML",
    image: "https://www.svgrepo.com/show/452228/html-5.svg",
    category: "Frontend",
    importance: "main",
  },
  {
    name: "CSS",
    image: "https://www.svgrepo.com/show/349330/css3.svg",
    category: "Frontend",
    importance: "main",
  },
  {
    name: "JavaScript",
    image: "https://www.svgrepo.com/show/349419/javascript.svg",
    category: "Frontend",
    importance: "main",
  },
  {
    name: "React",
    image: "https://www.svgrepo.com/show/354259/react.svg",
    category: "Frontend",
    importance: "main",
  },
  {
    name: "Bootstrap",
    image: "https://www.svgrepo.com/show/353498/bootstrap.svg",
    category: "Frontend",
    importance: "sub",
  },
  {
    name: "Tailwind",
    image: "https://www.svgrepo.com/show/374118/tailwind.svg",
    category: "Frontend",
    importance: "sub",
  },
  {
    name: "Material UI",
    image: "https://www.svgrepo.com/show/354048/material-ui.svg",
    category: "Frontend",
    importance: "sub",
  },
  {
    name: "Styled Components",
    image: "https://www.styled-components.com/atom.png",
    category: "Frontend",
    importance: "sub",
  },
  {
    name: "Figma",
    image: "https://www.svgrepo.com/show/354987/figma.svg",
    category: "Frontend",
    importance: "main",
  },
  //   {
  //     name: "Bulma",
  //     image: "https://www.svgrepo.com/show/353527/bulma.svg",
  //     category: "Frontend",
  //     importance: "sub",
  //   },
  {
    name: "Chakra UI",
    image: "https://avatars.githubusercontent.com/u/54212428?s=200&v=4",
    category: "Frontend",
    importance: "sub",
  },
  {
    name: "Windows Forms",
    image: "https://www.svgrepo.com/show/376369/dotnet.svg",
    category: "Frontend",
    importance: "main",
  },
  {
    name: "Leaflet.js",
    image: "https://www.svgrepo.com/show/353991/leaflet.svg",
  },
  {
    name: "Node.js",
    image: "https://www.svgrepo.com/show/452075/node-js.svg",
    category: "Backend",
    importance: "main",
  },
  {
    name: "Express.js",
    image: "express-svgrepo-com.svg",
    category: "Backend",
    importance: "sub",
  },
  {
    name: "MongoDB",
    image: "https://www.svgrepo.com/show/331488/mongodb.svg",
    category: "Backend",
    importance: "main",
  },
  {
    name: "MySQL",
    image: "mysql.svg",
    category: "Backend",
    importance: "main",
  },
  {
    name: "MS SQL Server",
    image: "microsoftsqlserver.svg",
    category: "Backend",
    importance: "main",
  },
  {
    name: "PHP",
    image: "https://www.svgrepo.com/show/349474/php.svg",
    category: "Backend",
    importance: "main",
  },
  {
    name: "Laravel",
    image: "https://www.svgrepo.com/show/353985/laravel.svg",
    category: "Backend",
    importance: "sub",
  },
  {
    name: "REST API",
    image: "api-app-svgrepo-com.svg",
    category: "Backend",
    importance: "sub",
  },
  {
    name: "ADO.NET",
    image: "https://www.svgrepo.com/show/376369/dotnet.svg",
    category: "Backend",
    importance: "sub",
  },
  {
    name: "T-SQL",
    image: "microsoftsqlserver.svg",
    category: "Backend",
    importance: "sub",
  },
  {
    name: "EJS",
    image: "https://www.svgrepo.com/show/373574/ejs.svg",
    category: "Backend",
    importance: "sub",
  },
  {
    name: "Cloudinary",
    image: "https://www.svgrepo.com/show/353566/cloudinary.svg",
  },
  {
    name: "C",
    image: "https://cdn.worldvectorlogo.com/logos/c-1.svg",
    category: "General",
    importance: "sub",
  },
  {
    name: "C++",
    image: "https://cdn.worldvectorlogo.com/logos/c.svg",
    category: "General",
    importance: "sub",
  },
  {
    name: "C#",
    image: "c--4.svg",
    category: "General",
    importance: "main",
  },
  {
    name: "Git",
    image: "https://www.svgrepo.com/show/452210/git.svg",
    category: "General",
    importance: "main",
  },
  {
    name: "GitHub",
    image: "https://www.svgrepo.com/show/439171/github.svg",
    category: "General",
    importance: "main",
  },
  {
    name: "Postman",
    image: "https://www.svgrepo.com/show/354202/postman-icon.svg",
    category: "General",
    importance: "sub",
  },
  {
    name: "Jest",
    image: "jest-svgrepo-com.svg",
    category: "General",
    importance: "sub",
  },
  {
    name: "MatLab",
    image: "matlab-svgrepo-com.svg",
    category: "General",
  },
  {
    name: "English",
    image: "https://hatscripts.github.io/circle-flags/flags/gb.svg",
    category: "Additional",
  },
  {
    name: "German",
    image: "https://hatscripts.github.io/circle-flags/flags/de.svg",
    category: "Additional",
  },
  {
    name: "Excel",
    image: "https://www.svgrepo.com/show/373589/excel.svg",
    category: "Additional",
  },
  {
    name: "PowerPoint",
    image: "https://www.svgrepo.com/show/373989/powerpoint.svg",
    category: "Additional",
  },
  {
    name: "Word",
    image: "https://www.svgrepo.com/show/374187/word.svg",
    category: "Additional",
  },
  {
    name: "Fast Typing",
    image: "typing-writing-svgrepo-com.svg",
    category: "Additional",
  },
  {
    name: "YouTube's API",
    image: "https://www.svgrepo.com/show/475700/youtube-color.svg",
  },
  {
    name: "TV Maze's API",
    image: "https://www.svgrepo.com/show/374216/api-opened.svg",
  },
];

export const skills = [
  {
    title: "Frontend",
    skills: skillsList.filter((el) => el.category === "Frontend"),
    separate: true,
  },
  {
    title: "Backend",
    skills: skillsList.filter((el) => el.category === "Backend"),
    separate: true,
  },
  {
    title: "General",
    skills: skillsList.filter((el) => el.category === "General"),
    separate: false,
  },
  {
    title: "Additional Skills",
    skills: skillsList.filter((el) => el.category === "Additional"),
    separate: false,
  },
];
