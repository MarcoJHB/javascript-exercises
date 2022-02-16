const people = [
  {
    name: "Carly",
    yearOfBirth: 1942,
    yearOfDeath: 1970,
  },
  {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
  },
  {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
  },
];

// getAge used to return the age for the various values above either oldest or current
const getAge = function (birth, death) {
  // if death doesn't exist, return the current year
  if (!death) {
    death = new Date().getFullYear(); // return current year using Date()
  }
  // else just return age using death minus birth
  return death - birth;
};

const findTheOldest = function (array) {
  // Use reduce method to reduce array by comparing current age with previous age
  return array.reduce((oldest, currentPerson) => {
    // currentAge gets the age of the oldest person's year of death and birth
    const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);

    // currentAge gets the age of the current person's year of death and birth
    const currentAge = getAge(
      currentPerson.yearOfBirth,
      currentPerson.yearOfDeath
    );

    // return name if current age is older than the oldest age
    return oldestAge < currentAge ? currentPerson : oldest;
  });
};

console.log(findTheOldest(people).name);

// Do not edit below this line
module.exports = findTheOldest;
