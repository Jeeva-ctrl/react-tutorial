var owen = {
  name: 'Owen',
};
function sayTo(first, second) {
  console.log(this);
  return first + ' ' + this.name + ' ' + second;
}
sayTo(owen, 'Hi', 'how are you?');
//returns "[Object] undefined Hi"

sayTo.call(owen, 'Hi', 'how are you?');
//this is now the owen object
//returns "Hi Owen how are you?"

//functionName.call(value of this, arg1, arg2…)

/**
 * 
Using .apply() is very similar to .call. The only difference is that .call() takes arg1 and arg2 just one after another.
For .apply() to work, arguments 1 and 2 need to be entered as an array:
 */

sayTo.apply(owen, ['Hi', 'how are you?']);
