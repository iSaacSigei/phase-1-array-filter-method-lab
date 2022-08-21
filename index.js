//iterating through the driver array using filter method

const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(drivers, searchString) {
  return drivers.filter((driver) => {
    return driver.toLowerCase().includes(searchString.toLowerCase());
  });
}

function fuzzyMatch(drivers, searchString) {
  return drivers.filter((driver) => {
    return driver.toLowerCase().startsWith(searchString.toLowerCase());
  });
}


//iterating through the driver object using the filter method
const driversObj = [{
    name: 'Bobby',
    hometown: 'Pittsburgh'
  },
  {
    name: 'Sammy',
    hometown: 'New York'
  },
  {
    name: 'Sally',
    hometown: 'Cleveland'
  },
  {
    name: 'Annette',
    hometown: 'Los Angeles'
  },
  {
    name: 'Bobby',
    hometown: 'Tampa Bay'
  }
];

function matchName(driversObj, searchString) {
  return driversObj.filter((driver) => {
    return driver.name.toLowerCase().includes(searchString.toLowerCase());
  });
}
