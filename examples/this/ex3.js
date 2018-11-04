var myObject = {
  test: function() {
    console.log('My Object');
    console.log(this);
  }
};

var myFunction = function() {
  console.log('My Function');
  console.log(this);
};

myObject.test2 = function() {
  console.log('Test2');
  console.log(this);
};

myObject.test2();
