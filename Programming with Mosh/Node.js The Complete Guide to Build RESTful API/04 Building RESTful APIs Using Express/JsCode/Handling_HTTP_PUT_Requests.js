const Joi = require("joi");
const express = require("express");
const app = express();

app.use(express.json());

//define courses array
const courses = [
  { id: 1, name: "courses_1" },
  { id: 2, name: "courses_2" },
  { id: 3, name: "courses_3" }
];

app.get("/api/courses", (req, res) => {
  res.send(courses);
});

//implement a new endpoint to get a single course from the server
app.get("/api/courses/:id", (req, res) => {
  const course = courses.find(c => c.id === parseFloat(req.params.id));
  if (!course) {
    res.status(404).send("The course with the given ID was not found.");
  }
  res.send(course);
});

//post request
app.post("/api/courses", (req, res) => {
  const course = courses.find(c => c.id === parseInt(req.params.id));
  //if not exist, return 404 => resource not found
  if (!course) {
    res.status(404).send("The course with the given ID was not found");
  }
  //validate
  //if invalid, return 400 => Bad request
  const { error } = validateCourse(req.body); //result.error
  if (error) {
    res.status(400).send(result.error.details[0].message);
    return;
  }

  const courses = {
    id: courses.length + 1,
    name: req.body.name
  };
  courses.push(course);
  res.send(course);
});

//update course
app.put("/api/courses/:id", (req, res) => {
  const course = courses.find(c => c.id === parseInt(req.params.id));
  if (!course) {
    res.status(404).send("The course with the given ID was not found");
  }

  const { error } = validateCourse(req.body);
  if (error) {
    res.status(400).send(error.details[0].message);
    return;
  }

  course.name = req.body.name;
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
