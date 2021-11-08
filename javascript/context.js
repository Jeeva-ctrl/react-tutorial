var owen = {
  name: "Owen"
  }
  function sayTo(first, second){
  console.log(this);
  return first + " " + this.name + " " + second;
  }
  sayTo(owen, "Hi", "how are you?");
  //returns "[Object] undefined Hi"

  sayTo.call(owen, "Hi", "how are you?");
//this is now the owen object
//returns "Hi Owen how are you?"