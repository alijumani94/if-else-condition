let username= "Ali";
let pw= "jumani.123"
let country= "Pakistan";
let postalcode= "72120"

if(username == "Ali" && pw == "jumani.123" && country == "Pakistan" && postalcode == "72120"){
  console.log("Dear admin, you're welcome to the portal.");
}
else if(country == "Pakistan" || postalcode == "72120"){
  console.log("Dear user, you're welcome to the portal.");
  
}
else {
  console.log("Invalid user");
  
}