//arrays
const array1 = [
    { name: 'Georg', email: 'georg@academlo.com' },
    { name: 'Andrea', email: 'andrea@gmail.com' }
  ];
  
  const array2 = [
    { email: 'georg@academlo.com', attendance: true },
    { email: 'andrea@gmail.com', attendance: false }
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

    newArray(array1, array2)