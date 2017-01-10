// The contacts object bellow is made of key-value pair
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["Javascript", "Gaming", "Foxes"]
    }
];
//The function will make a search for firstName and if it is present, show the
//property associated with it
function lookUpProfile(firstName, prop){
  //The loop will go through each the object parts
  //e.g: contacts[0] is:
  // {
  //     "firstName": "Akira",
  //     "lastName": "Laine",
  //     "number": "0543236543",
  //     "likes": ["Pizza", "Coding", "Brownie Points"]
  // }
  for (var l = 0; l < contacts.length; l++){
    //The if condition checks in each loop if a key firstName is present
    if (contacts[l].firstName === firstName){
      //If condition above is true, the condition bellow checks if each contacts
      //has a property as passed in second argument of the function (prop)
      //in oposite if it is false, the "No such contact" message is shown
      if (contacts[l].hasOwnProperty(prop)){
        //case 'firstName' key and the property 'prop' are present
        //it will return for each iteration (contacts[l]) a property
        //(prop) value at the function calling
        return contacts[l][prop];
      }
      else{
        //if 'firstName' is found but no 'prop' is gotten, "No such property"
        //message is returned
        return "No such property";
      }
    }
}
  //if neither 'firstName' nor 'prop' is found, "No such contact" message
  //is shown
  return "No such contact";
}
//The function calling will process the verifications above and return a message
//accordingly with parameters passed in it.
lookUpProfile("Harry", "likes");
