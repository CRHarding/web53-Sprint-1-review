import axios from "axios";

axios.get("https://randomuser.me/api/?results=5")
  .then(res => {
    console.log(res.data.results);
  }).catch(err => console.error);

axios.get("blah.com").then(console.log("what?"))

  /**
   *  <h3>Username</h3>
      <p>Email</p>
      <p>Age + Gender</p>
      <img 
        src="https://downloadwallpaper.org/wp-content/uploads/2016/05/thor-wallpaper3.jpg" 
        alt="THOR" 
      />
   */

function makeUser(user) {

}

makeUser(
  { 
    username: "CRHarding", 
    email: "case@case.com", 
    age: 74, 
    gender: "god", 
    imgSrc: "https://downloadwallpaper.org/wp-content/uploads/2016/05/thor-wallpaper3.jpg" 
  }
)