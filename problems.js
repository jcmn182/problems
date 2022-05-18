//arrays
const array1 = [
    { name: 'Georg', email: 'georg@academlo.com' },
    { name: 'Andrea', email: 'andrea@gmail.com' },
    { name: 'Alan', email: 'alan@gmail.com' }
  ];
  
  const array2 = [
    { email: 'georg@academlo.com', attendance: true },
    { email: 'andrea@gmail.com', attendance: false },
    { attendance: false, email: 'alan@gmail.com' }
  ];

//function 
function newArray(a1,a2)  {
//initialized empty object 
  let newObj={}; 
//initialized empty array 
  let array=[];   
    for (let i = 0; i<a1.length; i++){
            // itero through the first array 
          for(let j = 0; j<a2.length; j++){
            // itero through the second array 
          if (a1[i].email === a2[j].email){
            // a1[i] equals array1[0] or array1[1]
            // a2[i] equals array2[0] or array2[1]
             newObj = {...a1[i], ...a2[j]}
            // i use spreate operator, for this section search here https://flaviocopes.com/how-to-merge-objects-javascript/#:~:text=If%20both%20objects%20have%20a,merging%20object%20properties%20and%20arrays.
             array.push(newObj)
             // i’m  making a new array with the data getting from the new object
          }
        }
    } 
    console.log(array);
    return array
}

 //   newArray(array1, array2);

const students = [
  { name: 'Georg', email: 'georg@academlo.com', country_id: 1 },
  { name: 'Andrea', email: 'andrea@gmail.com', country_id: 2 },
  { name: 'Daniela', email: 'daniela@gmail.com', country_id: 2 },
  { name: 'Mónica', email: 'monica@gmail.com', country_id: 2 }
]

const countries = [
  { id: 1, name: 'Mexico', },
  { id: 2, name: 'Colombia' }
];

const country = "Mexico";

const getStudents = (arrStudents,arrCountries,getCountry) => {

  const getCountryId = arrCountries.filter( country => country.name === getCountry );

  const getStudents = arrStudents.filter( student => student.country_id === getCountryId[0].id );

 return getStudents;

};

getStudents(students,countries,country);

const studentsAge = [
  { age: 23 },
  { age: 25 },
  { age: 30 },
  { age: 32 },
  { age: 25 },
  { age: 22 },
  { age: 25 },
];

const getAges = (array) =>{

}