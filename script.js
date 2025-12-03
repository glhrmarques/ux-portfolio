const projects = [
    {name: "Beauty Color", type: "AI Deployment", image: "images/bg-beautycolor.png"},
    {name: "Sales App", type: "AI Deployment", image: "images/bg-app.png"},
    {name: "Marketplace", type: "UX", image: "images/bg-marketplace.png"},
];

const projectsContainer = document.querySelector("#projects-container");

projects.forEach((project) => {
    const card = document.createElement("div");
    card.className = "relative overflow-hidden bg-gradient-to-b from-red-600 via-red-500 to-orange-400 h-full rounded-2xl";

    const image = document.createElement("img");
    image.src = project.image;
    image.alt = project.name;
    image.className = "w-full h-full object-cover";

    card.appendChild(image);
    projectsContainer.appendChild(card);
})