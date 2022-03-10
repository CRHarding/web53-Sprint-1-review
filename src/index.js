import axios from "axios";

axios.get("https://randomuser.me/api/?results=5")
  .then(res => {
    res.data.results.forEach(user => {
      const userObj = {
        username: user.login.username,
        email: user.email,
        age: user.dob.age,
        gender: user.gender,
        imgSrc: user.picture.large
      }
      const userCard = makeUser(userObj);
      document.querySelector(".entry").appendChild(userCard);
    })
  }).catch(err => console.error);

function makeUser(user) {
  // Step one: Create the Markup, sir!
  const wrapper = document.createElement("div");
  const username = document.createElement("h3");
  const email = document.createElement("p");
  const ageGender = document.createElement("p");
  const img = document.createElement("img");

  // Step two: UPDATE THAT CONTENT!
  username.textContent = user.username;
  email.textContent = user.email;
  ageGender.textContent = user.age + ", " + user.gender;
  img.src = user.imgSrc;
  img.setAttribute("alt", "CaseyBook user")

  wrapper.classList.add("content-wrapper");

  wrapper.append(username, email, ageGender, img);
  return wrapper;
}

const userCard = makeUser(
  { 
    username: "CRHarding", 
    email: "case@case.com", 
    age: 74, 
    gender: "god", 
    imgSrc: "https://downloadwallpaper.org/wp-content/uploads/2016/05/thor-wallpaper3.jpg" 
  }
)

document.querySelector(".entry").appendChild(userCard);