const faqItems = document.querySelectorAll(".faq");

faqItems.forEach(item => {
    item.querySelector(".faqHead")
        .addEventListener("click", () => {

            faqItems.forEach(faq => {
                if (faq !== item) {
                    faq.classList.remove("active");
                }
            });

            item.classList.toggle("active");

        });
});

// APPLICATION SLIDER

const appSlider = document.querySelector(".app2");

const nextBtn = document.querySelector(".next");

const prevBtn = document.querySelector(".prev");


nextBtn.onclick = () => {

    appSlider.scrollLeft += 370;

}

prevBtn.onclick = () => {

    appSlider.scrollLeft -= 370;

}

// MANUFACTURING PROCESS

const processData = [

    {
        name: "Raw Material",
        title: "High-Grade Raw Material Selection",
        desc: "Vacuum sizing tanks ensure precise outer diameter while maintaining wall thickness.",
        points: [
            "PE100 grade material",
            "Optimal molecular weight distribution"
        ],
        image: "images/b2bbeacab99354ed8115ebeb93ea4f25afce46fb.jpg"
    },

    {
        name: "Extrusion",
        title: "Extrusion Process",
        desc: "Advanced extrusion technology for pipe formation.",
        points: [
            "Controlled temperature",
            "Uniform material flow"
        ],
        image: "images/extrusion.jpg"
    },

    {
        name: "Cooling",
        title: "Cooling Technology",
        desc: "Cooling systems maintain structural integrity.",
        points: [
            "Water cooling",
            "Temperature control"
        ],
        image: "images/cooling_pipes.jpg"
    },

    {
        name: "Sizing",
        title: "Sizing Technology",
        desc: "Sizing systems ensure precise dimensions.",
        points: [
            "Sizing tanks",
            "Vacuum control"
        ],
        image: "images/sizing_pipes.jpg"
    },

    {
        name: "Quality Control",
        title: "Quality Control",
        desc: "Rigorous quality control measures ensure standards.",
        points: [
            "Visual inspection",
            "Dimensional accuracy"
        ],
        image: "images/quality_pipes.jpg"
    },

    {
        name: "Marking",
        title: "Marking Process",
        desc: "Precision marking process.",
        points: [
            "Marking",
            "Temperature control"
        ],
        image: "images/marking_pipes.png"
    },

    {
        name: "Cutting",
        title: "Cutting Process",
        desc: "Precision cutting process.",
        points: [
            "Pipe cutting",
            "Length control"
        ],
        image: "images/cutting_pipes.jpg"
    },

    {
        name: "Packaging",
        title: "Packaging Process",
        desc: "Packaging and transportation safety.",
        points: [
            "Protective packaging",
            "Documentation"
        ],
        image: "images/packaging_pipes.jpg"
    }

];


let current = 0;

const title = document.getElementById("title");

const desc = document.getElementById("desc");

const points = document.getElementById("points");

const image = document.getElementById("processImage");

const tabs = document.querySelectorAll(".mp21 p");

const step = document.querySelector(".stepTag");


function updateUI() {

    let item = processData[current];

    title.innerText = item.title;

    desc.innerText = item.desc;

    image.src = item.image;

    step.innerText = `Step ${current + 1}/8 : ${item.name}`;

    points.innerHTML = "";

    item.points.forEach(point => {

        points.innerHTML += `<li>${point}</li>`;

    });

    tabs.forEach(tab => tab.classList.remove("active"));

    tabs[current].classList.add("active");

}


document.getElementById("nextBtn").onclick = () => {

    current++;

    if (current >= processData.length) {

        current = 0;

    }

    updateUI();

}


document.getElementById("prevBtn").onclick = () => {

    current--;

    if (current < 0) {

        current = processData.length - 1;

    }

    updateUI();

}


tabs.forEach((tab, index) => {

    tab.onclick = () => {

        current = index;

        updateUI();

    }

});

updateUI();

// REVIEW INFINITE SCROLL

const reviewSlider = document.querySelector(".reviewSlider");

const track = document.querySelector(".r2");


/* duplicate cards automatically */

track.innerHTML += track.innerHTML;


let speed = .5;


function infiniteScroll() {

    reviewSlider.scrollLeft += speed;


    if (
        reviewSlider.scrollLeft >=
        track.scrollWidth / 2
    ) {

        reviewSlider.scrollLeft = 0;

    }

    requestAnimationFrame(
        infiniteScroll
    );

}


infiniteScroll();



reviewSlider.addEventListener(
    "mouseenter",
    () => {

        speed = 0;

    });


reviewSlider.addEventListener(
    "mouseleave",
    () => {

        speed = .5;

    });