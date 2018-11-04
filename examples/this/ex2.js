function Test() {
  return {
    value: 0,
    inc: function(val) {
      return (this.value += val);
    }
  };
}

var o1 = new Test();
o1.inc(1);
o1.inc(3);

var o2 = new Test();
o2.inc(2);
o2.inc(5);

console.log(o1);
console.log(o2);

var o3 = Test();
var o4 = Test();
o3.inc(10);
console.log(o3);
console.log(o4);
