// Targetting the elements and storing them in respective variables. 
let image = document.querySelector('#image');
let batter = document.querySelector('.batter');
let baking = document.querySelector('.baking');
let taste = document.querySelector('.taste');

// Eventlisteners for all the hovering images

batter.addEventListener("mouseover",()=>{
    displayImage(batter.src,batter.alt)
},false);

batter.addEventListener("mouseout",()=>{
    offImage()
},false)

// Baking image evenlistener

baking.addEventListener("mouseover",()=>{
    displayImage(baking.src,baking.alt)
},false);

baking.addEventListener("mouseout",()=>{
    offImage()
},false)

// Taste image eventlistener.

taste.addEventListener("mouseover",()=>{
    displayImage(taste.src,taste.alt)
},false);

taste.addEventListener("mouseout",()=>{
    offImage()
},false)


// Function that helps for displaying the images when mouse is hovered.

let displayImage = (images,text) =>{
    if(images){
        image.style.backgroundImage = `url(${images})`
        image.innerHTML=text
    }

}

// Function that takes of the image when mouse is out.

let offImage = () =>{
    image.style.backgroundImage = ""
    image.innerHTML="Hover over the images to see them here"
}