const Joi = require("joi");
const express = require("express");
const app = express();

app.use(express.json());

//define courses array
const courses = [
  { id: 1, name: "courses_1" },
  { id: 2, name: "courses_2" },
  { id: 3, name: "courses_3" },
  { id: 4, name: "courses_4" },
  { id: 5, name: "courses_5" }
];

app.get("/api/courses", (req, res) => {
  res.send(courses);
});

//GET request
app.get("/api/courses/:id", (req, res) => {
  const course = courses.find(c => c.id === parseFloat(req.params.id));
  if (!course)
    return res.status(404).send("The course with the given ID was not found.");
  res.send(course);
});

//post request
app.post("/api/courses", (req, res) => {
  const { error } = validateCourse(req.body); //result.error
  if (error) {
    res.status(400).send(result.error.details[0].message);
    return;
  }

  const course = {
    id: courses.length + 1,
    name: req.body.name
  };
  courses.push(course);
  res.send(course);
});

//PUT request
app.put("/api/courses/:id", (req, res) => {
  const course = courses.find(c => c.id === parseInt(req.params.id));
  if (!course)
    return res.status(404).send("The course with the given ID was not found");

  const { error } = validateCourse(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  course.name = req.body.name;
  res.send(course);
});

//DELETE request
app.delete("/api/courses/:id", (req, res) => {
  //Look up the course
  //Not existing, return 404
  const course = courses.find(c => c.id === parseInt(req.params.id));
  if (!course)
    return res.status(404).send("The course with the given ID was not found");

  //Delete course
  const index = courses.lastIndexOf(course);
  courses.splice(index, 1);

  //Return the same course
  res.send(course);
});

//validate course
function validateCourse(course) {
  const schema = {
    name: Joi.string()
      .min(3)
      .required()
  };
  return Joi.validate(course, schema);
}

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
