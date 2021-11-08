var logicAlbums = [
  'Bobby Tarantino',
  'The Incredible True Story',
  'Supermarket',
  'Under Pressure',
];

logicAlbums.forEach(function (word) {
  console.log(word);
});

Array.prototype.forEachPolyfill = function (callback) {
  // callback here is the callback function
  // which actual .forEach() function accepts
  for (var i = 0; i < this.length; i++) {
    callback(this[i], i, this); // currentValue, index, array
  }
};
logicAlbums.forEachPolyfill(function (word) {
  console.log('polyfill', word);
});

Array.prototype.mapPolyfill = function(callback) {
  var arr = [] // since, we need to return an array
  for (var i = 0; i < this.length; i++) {
    arr.push(callback(this[i], i, this)) // pushing currentValue, index, array
  }
  return arr // finally returning the array
}
var logicAlbums1 = [
  {
    name: 'Bobby Tarantino',
    rating: 5,
  },
  { name: 'The Incredible True Story', rating: 4.5 },
  {
    name: 'Supermarket',
    rating: 4.9,
  },
  { name: 'Under Pressure', rating: 5 },
]
const filter = logicAlbums1.filter(album => {
  return album.rating > 4.9
})
console.log("logicAlbums1",filter)

Array.prototype.filterAlbums = function(callback, context) {
  console.log("context",context)
  arr = []
  for (var i = 0; i < this.length; i++) {
    if (callback.call(context, this[i], i, this)) {
      arr.push(this[i])
    }
  }
  return arr
}
const filter1 = logicAlbums1.filterAlbums(function(album) {
  return album.rating > 4.9 // providing the context here
})
console.log("filter1",filter1)