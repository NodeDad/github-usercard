import axios from 'axios';

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

let nodedad;

axios.get('https://api.github.com/users/nodedad').then((res) => {
  console.log(res)
  nodedad = res;
  let cards = document.querySelector('.cards');
  let card = createCardMarkup(res.data);
  cards.appendChild(card);
}).catch()

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3 (line 34).
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [];

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

function createCardMarkup(data) {

  let card = document.createElement('div');
  card.classList.add('card');

  let cardImg = document.createElement('img');
  cardImg.setAttribute('src', data.avatar_url);

  let cardInfo = document.createElement('div');
  cardInfo.classList.add('card-info');

  card.appendChild(cardImg);
  card.appendChild(cardInfo);

  let cardInfoName = document.createElement('h3');
  cardInfoName.classList.add('name');
  cardInfoName.textContent = data.name;
  card.cardInfo.appendChild(cardInfoName);

  let cardInfoUsername = document.createElement('p');
  cardInfoUsername.classList.add('username');
  cardInfoUsername.textContent = data.login;
  card.cardInfo.appendChild(cardInfoUsername);

  let cardInfoLocation = document.createElement('p');
  cardInfoLocation.textContent = data.location;
  card.cardInfo.appendChild(cardInfoLocation);

  let cardInfoProfile = document.createElement('p');
  let cardInfoProfileA = document.createElement('a');
  cardInfoProfileA.setAttribute('href', data.url);
  cardInfoProfileA.textContent = data.url;
  cardInfoProfile.appendChild(cardInfoProfileA);
  card.cardInfo.appendChild(cardInfoProfile);

  let cardInfoFollowers = document.createElement('p');
  cardInfoFollowers.textContent = data.followers;
  card.cardInfo.appendChild(cardInfoFollowers);

  let cardInfoFollowing = document.createElement('p');
  cardInfoFollowing.textContent = data.following;
  card.cardInfo.appendChild(cardInfoFollowing);

  let cardInfoBio = document.createElement('p');
  cardInfoBio.textContent = data.bio;
  card.cardInfo.appendChild(cardInfoBio);


  return card;
}

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
