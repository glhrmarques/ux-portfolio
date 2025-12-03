const projects = [
    {name: "Beauty Color", type: "AI Deployment", image: "images/bg-beautycolor.png"},
    {name: "Sales App", type: "AI Deployment", image: "images/bg-app.png"},
    {name: "Marketplace", type: "UX", image: "images/bg-marketplace.png"},
];

const projectsContainer = document.querySelector("#projects-container");

projects.forEach((project) => {
    const card = document.createElement("div");
    card.className = "flex flex-col justify-center items-center flex-1";

    const image = document.createElement("img");
    image.src = project.image;
    image.alt = project.name;
    image.className = "w-full aspect-[4/5] object-cover mb-4";

    const textWrapper = document.createElement("div");
    textWrapper.className = "flex flex-row justify-between w-full px-4";

    const title = document.createElement("p");
    title.className = "project-title text-gray-900 text-lg";
    title.textContent = project.name;

    const type = document.createElement("p");
    type.className = "skill-type text-gray-900 text-lg";
    type.textContent = project.type;
    

    textWrapper.appendChild(title);
    textWrapper.appendChild(type);

    card.appendChild(image);
    card.appendChild(textWrapper);
    
    projectsContainer.appendChild(card)
})