var names = ["Rafael", "Aline", "Cinza", "Moana", "Micael"];
    for (var i=0; i< names.length; i++){
      //the names.length will check the size of the array and repeat the line below
      //as many times as the names array is long.
        console.log("I know someone called " + names[i]);
        //names[i] will access the array names and the [i] means the index of the array
        //so... whem I step throught the array names I am steping on index 0
        //and showing the result, and steping on index 1 and showing the result
    /*
    first iteration is: I know someone called  + names[i]
                                                index 0
                                                names[i] => Rafael

    second iteration is: I know someone called  + names[i]
                                                index 0
                                                names[i] => Aline

    third iteration is: I know someone called  + names[i]
                                                index 0
                                                names[i] => Cinza

    fourth iteration is: I know someone called  + names[i]
                                                index 0
                                                names[i] => Moana

    fifth iteration is: I know someone called  + names[i]
                                                index 0
                                                names[i] => Micael
    */
    }


/////////////////     FOR... IN  loop     //////////////
// to show all property names
/*
for(var x in obj) {
executeSomething();
}
*/
var nyc = {
    fullName: "New York City",
    mayor: "Bill de Blasio",
    population: 8000000,
    boroughs: 5
};
for (var anyPlaceHolder in nyc){
  //with this notation is possible to get the object property names
  //the word anyPlaceHolder can be any word you judje convenient
    console.log(anyPlaceHolder)
    }

/////////////////     FOR... IN  loop     //////////////
// to show all value names

    var nyc = {
        fullName: "New York City",
        mayor: "Bill de Blasio",
        population: 8000000,
        boroughs: 5
    };

    for (var bla in nyc){
        console.log(nyc[bla]);
        }

/*Remember that
dog.species = dog["species"] = "bulldog";
And if we say:
var x = "species";
then
dog[x] = "bulldog";
*/
