var myObject = {
  value: 0,
  inc: function(val) {
    this.value += val;
  }
};

myObject.inc(1);
console.log(myObject);

myObject.inc(5);
console.log(myObject);
