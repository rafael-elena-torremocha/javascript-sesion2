var array = ["Hulk", "Iron Man", null, "Captain America", undefined, 934, "Spider Man", "Doctor Strange"];

var stringMasLargo = function(array) {
  var indexResult = 0;
  var maxLenght = 0;


  for (let index = 0; index < array.length; index++) {
    var element = array[index];

      if ((typeof element === 'string') && element.length > maxLenght){
        maxLenght = element.length;
        indexResult = index;
      }

  }
  var result =  {
    longitud: maxLenght,
    string: array[indexResult]
  }

  return result;
};

var str = stringMasLargo(array);
console.log(str);
