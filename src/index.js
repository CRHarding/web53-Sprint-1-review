import axios from "axios";

axios.get("https://randomuser.me/api/?results=5")
  .then(res => {
    console.log(res.data.results);
  }).catch(err => console.error);