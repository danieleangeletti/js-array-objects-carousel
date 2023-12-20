const images = [
    {
        url: 'http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg',
        title: 'Svezia',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },

    {
        url: 'https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Perù',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },

    {
        url: 'https://img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c',
        title: 'Chile',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },

    {
        url: 'https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Argentina',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    
    {
        url: 'https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop',
        title: 'Colombia',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
];

const elements_container = document.getElementById("my-elements");
const small_elements_container = document.getElementById("my-small-elements");
const previous_button = document.getElementById("previous");
const next_button = document.getElementById("next");

let my_content;

for (let i = 0; i < images.length; i++) {

        my_content = `<div id = "img${i}" class = "my-card h-100`;
        
        if (i == 0) {
            my_content += ' d-block ';
        }
        
        else {
            my_content += ' d-none ';
        }  
               
        my_content +=
        `position-relative">
            <div class="caption-box">
                <h5 class="text-white text-end">${images[i].title}</h5>
                <p class="text-white text-end">${images[i].description}</p>
            </div>

            <img class = "w-100 h-100" src=${images[i].url} alt="">
        </div>
        `
        
        elements_container.innerHTML += my_content;

}

let my_small_content;

for (let i = 0; i < images.length; i++) {

    my_small_content = `<div id = "small-img${i}" class = "w-100 special-height`;
    
    if (i == 0) {
        my_small_content += ` border border-4`;
    }

    my_small_content += 
    `">
        <img class = "w-100 h-100" src=${images[i].url} alt="">
    </div>
    `

    small_elements_container.innerHTML += my_small_content;

}

let counter = 0;

next_button.addEventListener("click", function() {

    let my_img = document.getElementById(`img${counter}`);
    my_img.classList.remove("d-block");
    my_img.classList.add("d-none");

    let my_small_img = document.getElementById(`small-img${counter}`);
    my_small_img.classList.remove("border", "border-4");

    counter ++;

    if (counter == images.length) {
        counter = 0;
    }

    my_img = document.getElementById(`img${counter}`);
    my_img.classList.remove("d-none");
    my_img.classList.add("d-block");

    my_small_img = document.getElementById(`small-img${counter}`);
    my_small_img.classList.add("border", "border-4");

})

previous_button.addEventListener("click", function() {

    let my_img = document.getElementById(`img${counter}`);
    my_img.classList.remove("d-block");
    my_img.classList.add("d-none");

    let my_small_img = document.getElementById(`small-img${counter}`);
    my_small_img.classList.remove("border", "border-4");

    counter --;

    if (counter == -1) {
        counter = images.length - 1;
    }

    my_img = document.getElementById(`img${counter}`);
    my_img.classList.remove("d-none");
    my_img.classList.add("d-block");

    my_small_img = document.getElementById(`small-img${counter}`);
    my_small_img.classList.add("border", "border-4");

})