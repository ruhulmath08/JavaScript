function timesTwo(params) {
  return params * 2;
}
console.log(timesTwo(4)); // 8

const courses = [
  { id: 1, name: "a" },
  { id: 2, name: "b" },
  { id: 3, name: "c" }
];

const course = courses.findIndex(function(course) {
  return course.name === "c";
});
console.log(course); //2


var timesTwo = params => params * 2;
console.log(timesTwo(4)); //8

const c1 = courses.findIndex(course => course.name == "c");
console.log(c1); //2
