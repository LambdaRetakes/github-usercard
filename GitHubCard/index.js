
/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/




/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 
   Skip to Step 3.
*/



/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/



/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/
// make an array of users
const users = ["K-JHarris", "djtorel", "anatulea", "chrisjonesdesign85", "Poly-G", "dustinsnoap"]

// run our card constructor on each user
users.forEach((user) => {
  axios.get("https://api.github.com/users/" + user)
  .then(res => {
    // create a reference to cards
    let cards = document.querySelector(".cards");

    // create a reference to our data from res
    let userData = res.data; 
    
    // run our card constructor
    let newCard = createCard(userData); 

    // append that shit
    cards.appendChild(newCard); 
  });
});

// card constructor function

// i could NOT get this to work as an arrow function wtf
function createCard(inputObj) {

  //make the container div
  let userCard = document.createElement("div");
  userCard.classList.add("card");

  //make the img
  let userImg = document.createElement("img");
  userImg.src = inputObj.avatar_url;
  userCard.appendChild(userImg);

  //repeat that for a lil

  //cardInfo will contain all card data
  let cardInfo = document.createElement("div");
  cardInfo.classList.add("card-info");
  userCard.appendChild(cardInfo);

  let name = document.createElement("h3");
  name.classList.add("name");
  name.textContent = inputObj.name;
  cardInfo.appendChild(name)

  let username = document.createElement("p");
  username.classList.add("username");
  username.textContent = inputObj.login;
  cardInfo.appendChild(username);

  let location = document.createElement("p");
  location.textContent = `Location: ${inputObj.location}`;
  cardInfo.appendChild(location);

  let githubAddress = document.createElement("a");
  githubAddress.href = inputObj.html_url;
  githubAddress.textContent = inputObj.html_url;

  let profile = document.createElement("p");
  profile.textContent = `Profile: ${githubAddress}`;
  cardInfo.appendChild(profile);

  let followers = document.createElement("p");
  followers.textContent = `Followers: ${inputObj.followers}`;
  cardInfo.appendChild(followers);

  let following = document.createElement("p");
  following.textContent = `Following: ${inputObj.following}`;
  cardInfo.appendChild(following);

  let bio = document.createElement("p");
  bio.textContent = `Bio: ${inputObj.bio}`;
  cardInfo.appendChild(bio);

  return userCard;
}
