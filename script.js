const elements = {
    nav: document.querySelector("#nav"),
};

const flags = {
    nav: false,
};

function hideElement() {
    for (let featureName in elements) {
        const feature = elements[featureName];
        const featureBoolean = flags[featureName];

        if(feature) {
            feature.style.display = featureBoolean ? "none" : "block";
        }

    }
}

hideElement()