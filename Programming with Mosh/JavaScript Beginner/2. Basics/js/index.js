const movies = [
  { title: "a", year: 2018, rating: 4.5 },
  { title: "b", year: 2018, rating: 4.7 },
  { title: "c", year: 2018, rating: 3 },
  { title: "d", year: 2017, rating: 4.5 }
];

const result = movies
  .filter(m => m.year === 2018 && m.rating >= 4) //All the movies in 2018 with rating > 4
  .sort((a, b) => a.rating - b.rating) //Sort them by their rating
  .reverse() //Descending order
  .map(m => m.title); //Pick their title

console.log(result); //["b", "a"]
