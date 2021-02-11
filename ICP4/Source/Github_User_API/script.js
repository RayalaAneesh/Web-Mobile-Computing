// Targetting the input tag and output to get the data.
let output = document.querySelector('#output');
let search = document.querySelector('#search');

// Eventlistener to handle enter key
search.addEventListener("keypress",(e)=>{
    if(e.key === 'Enter'){
        let userName = search.value;
        // calling result() and also passing parameter userdata
        result(userName).then(userData=>html(userData))
    }
})


// Eventlistener for search button click
let searchButton = document.querySelector('button');
searchButton.addEventListener('click',()=>{
    let userName = document.querySelector('#search').value
    // result(userName).then(userData=>console.log(userData))
    result(userName).then(userData=>html(userData))

})

// Function using async,await with traditional fetch() to get user info.
let result = async (userName) =>{
    const url = `https://api.github.com/users/${userName}`;
    const data = await fetch(url)
    const userData = await data.json()
    console.log(userData)
    // Validating if the data is obtained or not.
    if(userData.id){
        console.log('got the data')
        let userInfo = {
            login:userData.login,
            name : userData.name,
            id : userData.id,
            avatar : userData.avatar_url,
            joined:userData.created_at,
            url:userData.url,
            bio : userData.bio,
            htmlUrl : userData.html_url,
    
        }
        console.log(userInfo)
        return userInfo
    }else{
        // If data not obtained notFound() is called to display no data info.
        let userInfo = notFound()
        return userInfo
    }
    
}
// html() displays data by targetting the output div element.
function html({name,id,avatar,bio,htmlUrl,login,url,joined}){
    // Below if conditions checks if name and bio are null if so they are set to no data.
    if(name===null || name===undefined){
        name=search.value
    }
    if(bio === null || bio === undefined){
        bio = "This user has no bio."
    }
    // Targetting the output to display the card.
    output.innerHTML= `<div class="card text-white bg-dark mb-3" style="max-width: 540px;">
    <div class="row g-0">
      <div class="col-lg-6 col-md-4 ">
        <img src=${avatar} alt=${name}>
      </div>
      <div class="col-lg-6 col-md-8">
        <div class="card-body">
          <h3 class="card-title">${name}</h3>
          <h5 class="card-subtitle"><em>${login}</em></h5>
          <p class="bio card-text">${bio}</p>
          <p class="card-text"><small class="text-muted">${joined.substring(0,10)}</small></p>
          <a href=${htmlUrl} target="_blank" class="btn btn-primary">Github Link</a>
        </div>
      </div>
    </div>
  </div>`;
}

// notFound() sets the data to no info.

const notFound = () =>{
    const userInfo = {
        name : 'No Name',
        id : '404',
        avatar: 'https://i.pinimg.com/originals/ee/4c/2b/ee4c2b8845a8df4095f295b032c18cea.jpg',
        joined: 'No Clue?',
        url : 'www.github.com',
        bio: 'How the little piggies grunt when the hear how the old boar suffer??',
        htmlUrl : 'www.github.com'

    }
    return userInfo
}
