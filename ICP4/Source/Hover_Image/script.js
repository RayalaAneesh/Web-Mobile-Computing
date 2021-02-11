let image = document.querySelector('#image');
let batter = document.querySelector('.batter');
let baking = document.querySelector('.baking');
let taste = document.querySelector('.taste');



batter.addEventListener("mouseover",()=>{
    displayImage(batter.src,batter.alt)
},false);

batter.addEventListener("mouseout",()=>{
    offImage()
},false)

baking.addEventListener("mouseover",()=>{
    displayImage(baking.src,baking.alt)
},false);

baking.addEventListener("mouseout",()=>{
    offImage()
},false)

taste.addEventListener("mouseover",()=>{
    displayImage(taste.src,taste.alt)
},false);

taste.addEventListener("mouseout",()=>{
    offImage()
},false)




let displayImage = (images,text) =>{
    if(images){
        image.style.backgroundImage = `url(${images})`
        image.innerHTML=text
    }

}

let offImage = () =>{
    image.style.backgroundImage = ""
    image.innerHTML="Hover over the images to see them here"
}