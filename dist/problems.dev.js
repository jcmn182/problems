"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//arrays
var array1 = [{
  name: 'Georg',
  email: 'georg@academlo.com'
}, {
  name: 'Andrea',
  email: 'andrea@gmail.com'
}, {
  name: 'Alan',
  email: 'alan@gmail.com'
}];
var array2 = [{
  email: 'georg@academlo.com',
  attendance: true
}, {
  email: 'andrea@gmail.com',
  attendance: false
}, {
  attendance: false,
  email: 'alan@gmail.com'
}]; //function 

function newArray(a1, a2) {
  //initialized empty object 
  var newObj = {}; //initialized empty array 

  var array = [];

  for (var i = 0; i < a1.length; i++) {
    // itero through the first array 
    for (var j = 0; j < a2.length; j++) {
      // itero through the second array 
      if (a1[i].email === a2[j].email) {
        // a1[i] equals array1[0] or array1[1]
        // a2[i] equals array2[0] or array2[1]
        newObj = _objectSpread({}, a1[i], {}, a2[j]); // i use spreate operator, for this section search here https://flaviocopes.com/how-to-merge-objects-javascript/#:~:text=If%20both%20objects%20have%20a,merging%20object%20properties%20and%20arrays.

        array.push(newObj); // i’m  making a new array with the data getting from the new object
      }
    }
  }

  console.log(array);
  return array;
} //   newArray(array1, array2);


var students = [{
  name: 'Georg',
  email: 'georg@academlo.com',
  country_id: 1
}, {
  name: 'Andrea',
  email: 'andrea@gmail.com',
  country_id: 2
}, {
  name: 'Daniela',
  email: 'daniela@gmail.com',
  country_id: 2
}, {
  name: 'Mónica',
  email: 'monica@gmail.com',
  country_id: 2
}];
var countries = [{
  id: 1,
  name: 'Mexico'
}, {
  id: 2,
  name: 'Colombia'
}];
var country = "Mexico";

var getStudents = function getStudents(arrStudents, arrCountries, getCountry) {
  var getCountryId = arrCountries.filter(function (country) {
    return country.name === getCountry;
  });
  var getStudents = arrStudents.filter(function (student) {
    return student.country_id === getCountryId[0].id;
  });
  return getStudents;
};

getStudents(students, countries, country);
var studentsAge = [{
  age: 23
}, {
  age: 25
}, {
  age: 30
}, {
  age: 32
}, {
  age: 25
}, {
  age: 22
}, {
  age: 25
}];

var getAges = function getAges(array) {};