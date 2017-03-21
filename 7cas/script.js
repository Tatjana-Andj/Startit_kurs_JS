

// ====================== ZADACI SA PREDAVANJA




// 1.zadatak

var people = [
  {
    name: 'Joe Schmoe',
    yearsExperience: 1,
    department: 'IT'
  },
  {
    name: 'Sally Sallerson',
    yearsExperience: 15,
    department: 'Engineering'
  },
  {
    name: 'Bill Billson',
    yearsExperience: 5,
    department: 'Engineering'
  },
  {
    name: 'Jane Janet',
    yearsExperience: 11,
    department: 'Management'
  },
  {
    name: 'Bob Hope',
    yearsExperience: 9,
    department: 'IT'
  }
];

function departmenti() {
    var objekat = [
    {
    Engineering: 0,
    IT: 0,
    Management: 0
    }];

    var countIT=0;
    var countMng=0;
    var countEng=0;

    for ( var i = 0; i < people.length; i++ ) {
      if( people[i].department === 'IT') {
        countIT+=1;

      } else if (people[i].department === 'Management') {
        countMng += 1;

      } else if (people[i].department === 'Engineering') {
        countEng += 1;
      } 
    }

    objekat =
    {
    Engineering: countEng,
    IT: countIT,
    Management: countMng
    };

      return objekat; 
  } 

  console.log(departmenti());


// 2 zadatak 

var people = [
  {
    name: 'Joe Schmoe',
    yearsExperience: 1,     
    department: 'IT'
  },
  {
    name: 'Sally Sallerson',
    yearsExperience: 15,
    department: 'Engineering'
  },
  {
    name: 'Bill Billson',
    yearsExperience: 5,                
    department: 'Engineering'
  },
  {
    name: 'Jane Janet',
    yearsExperience: 11,           
    department: 'Management'
  },
  {
    name: 'Bob Hope',
    yearsExperience: 9,            
    department: 'IT'
  },
  {
    name: 'John Doe',
    yearsExperience: 7,
    department: 'Management'
  }
];


function statistika(objekat){
  var newbie = [];
  var amateur = [];
  var pro = [];
  var expert = [];

 for( var i = 0; i<people.length; i++ ){
    if (people[i].yearsExperience < 5){
      newbie.push(people[i].name);
    }
    else if (people[i].yearsExperience < 7){
      amateur.push(people[i].name);
    }
    else if (people[i].yearsExperience < 10){
      pro.push(people[i].name);
    }
    else if (people[i].yearsExperience >= 10){
      expert.push(people[i].name);
    }
  }

var sortiranje = {
    AMATEUR: amateur,
    EXPERT: expert,
    NEWBIE: newbie,
    PRO: pro
};
return sortiranje;
}

var ispis = statistika(people);
console.log(ispis);


// 3 zadatak


var people = [
  {
    name: 'Joe Schmoe',
    yearsExperience: 1,    
    department: 'IT'
  },
  {
    name: 'Sally Sallerson',
    yearsExperience: 15,
    department: 'Engineering'
  },
  {
    name: 'Bill Billson',
    yearsExperience: 5,               
    department: 'Engineering'
  },
  {
    name: 'Jane Janet',
    yearsExperience: 11,           
    department: 'Management'
  },
  {
    name: 'Bob Hope',
    yearsExperience: 9,           
    department: 'IT'
  },
  {
    name: 'John Doe',
    yearsExperience: 7,
    department: 'Management'
  }
];

function imenaZaposlenih () {

  var noviNiz = [];

  for ( var i = 0; i < people.length; i++ ) {
      noviNiz.push(people[i].name);
  }
  return noviNiz;
}

var ispis = imenaZaposlenih(people);
console.log(ispis);

4.zadatak 

var test_niz1 = [1, 6, 2, 5, 7, 2, 8, 3];
var test_niz2 = [45, 62, 123, 63, 74, 85, 21, 77];
var test_niz3 = [-6, 23, 10, 0, -22, 52, 86, 2];

// Novi niz koji se dobija množenjem parnih elemenata sa 3,
// a neparnih sa 4, funkcija vraća niz
function multiplyEvenAndOdds(array) {

  var noviNiz = [];

  for ( var i = 0; i < array.length; i++) {

    if (array[i]%2 == 0) {
      noviNiz.push(array[i]*3);
    } else {
      noviNiz.push(array[i]*4);
    }

  } return noviNiz;

}

console.log(multiplyEvenAndOdds(test_niz1));
console.log(multiplyEvenAndOdds(test_niz2));
console.log(multiplyEvenAndOdds(test_niz3));

// 5 .zadatak

// var test_niz1 = [1, 6, 2, 5, 7, 2, 8, 3];
// var test_niz2 = [45, 62, 123, 63, 74, 85, 21, 77];
// var test_niz3 = [-6, 23, 10, 0, -22, 52, 86, 2];

// // Koliko elemenata ulaznog niza je veće od zadatog broja?
// // Funkcija vraća broj.
function getNumberOfElementsGreaterThan(array, limit) {
  var broj = 0;
  for (var i =0; i<array.length;i++) {

    if ( array[i] > limit ) {
      broj+=1;
    } 
  } return broj;
}

console.log(getNumberOfElementsGreaterThan(test_niz1, 5));
console.log(getNumberOfElementsGreaterThan(test_niz2, 47));
console.log(getNumberOfElementsGreaterThan(test_niz3, 3));

// 6.zadatak

var test_niz1 = [1, 6, 2, 5, 7, 2, 8, 3];
var test_niz2 = [45, 62, 123, 63, 74, 85, 21, 77];
var test_niz3 = [-6, 23, 10, 0, -22, 52, 86, 2];

// Ako je treći argument true treba napraviti novi niz
// od elemenata ulaznog koji su VEĆI ili JEDNAKI od
// zadatog broja. Ako je treći argument false treba 
// napraviti novi niz od elemenata ulaznog koji su
// MANJI od zadatog broja. Funkcija vraća niz
function filterOutElements(array, limit, direction) {
    var noviNiz = [];
    for (var i =0; i<array.length;i++) {

      if ( direction ) {
         if (array[i] >= limit) {
          noviNiz.push(array[i]);
         }
      } else {
        if (array[i] < limit) {
          noviNiz.push(array[i]);
        }
      }
    } return noviNiz;
  }

console.log(filterOutElements(test_niz1, 5, true));
console.log(filterOutElements(test_niz1, 7, false));

console.log(filterOutElements(test_niz2, 47, false));
console.log(filterOutElements(test_niz2, 47, true));

console.log(filterOutElements(test_niz3, 1, true));
console.log(filterOutElements(test_niz3, 5, false));


// =================================== ZADACI DOMACI

var test_objekat1 = {
    ime: "Petar",
    prezime: "Petrovic",
    ocene: [1, 6, 2, 5, 7, 2, 8, 3]
};
    
var test_objekat2 = {
    ime: "Marko",
    prezime: "Markovic",
    ocene: [45, 62, 123, 63, 74, 85, 21, 77]
};

var test_objekat3 = {
    ime: "Jovan",
    prezime: "Jovanovic",
    ocene: [-6, 23, 10, 0, -22, 52, 86, 2]
};

// 1 zadatak

// Najmanja ocena osobe, funkcija vraća broj
function getMinGrade(person) {
  var broj = person.ocene[0];
  for (var i = 0; i < person.ocene.length; i++) {
    if (person.ocene[i] < broj ) {
      broj = person.ocene[i];
    }
  } return broj;
}

console.log("Get Min Grade: -----------------");
console.log(getMinGrade(test_objekat1));
console.log(getMinGrade(test_objekat2));
console.log(getMinGrade(test_objekat3));

//2 zadatak

// Najveća ocena osobe, funkcija vraća broj
function getMaxGrade(grades) {
  var broj = grades[0];
  for (var i = 0; i < grades.length; i++) {
    if (grades[i] > broj ) {
      broj = grades[i];
    }
  } return broj;
}


console.log("Get Max Grade: -----------------");
console.log(getMaxGrade(test_objekat1.ocene)); // Oprez! Voditi računa šta se prosleđuje kao argument
console.log(getMaxGrade(test_objekat2.ocene)); // Oprez! Voditi računa šta se prosleđuje kao argument
console.log(getMaxGrade(test_objekat3.ocene)); // Oprez! Voditi računa šta se prosleđuje kao argument


// 3 zadatak

// Novi niz koji se sastoji od parnih ocena osobe, funkcija vraća niz
function getArrayOfEvenGrades(person) {
  var noviNiz = [];

  for (var i = 0; i < person.ocene.length; i++) {
    if (person.ocene[i]%2 ==0) {
      noviNiz.push(person.ocene[i]);
    }
  } return noviNiz;
}

console.log("Array of Even Grades: -----------------");
console.log(getArrayOfEvenGrades(test_objekat1));
console.log(getArrayOfEvenGrades(test_objekat2));
console.log(getArrayOfEvenGrades(test_objekat3));


// 4.zadatak

// Novi niz koji se sastoji od neparnih ocena osobe, funkcija vraća niz
function getArrayOfOddGrades(grades) {
    var noviNiz = [];

  for (var i = 0; i < grades.length; i++) {
    if (grades[i]%2 != 0) {
      noviNiz.push(grades[i]);
    }
  } return noviNiz;
}

console.log("Array of Odd Grades: -----------------");
console.log(getArrayOfOddGrades(test_objekat1.ocene)); // Oprez
console.log(getArrayOfOddGrades(test_objekat2.ocene)); // Oprez
console.log(getArrayOfOddGrades(test_objekat3.ocene)); // Oprez

// 5.zadatak

// Suma svih ocena, funkcija vraća broj
function getSumOfGrades(grades) {
  var broj = 0;

  for (var i = 0; i < grades.length; i++) {
      broj += grades[i] 
  } return broj;

}

console.log("Sum of elements: -----------------");
console.log(getSumOfGrades(test_objekat1.ocene));
console.log(getSumOfGrades(test_objekat2.ocene));
console.log(getSumOfGrades(test_objekat3.ocene));


// 6 .zadatak

// Novi niz koji se dobija množenjem parnih ocena sa 3, a neparnih sa 4, funkcija vraća niz
function getMappedGrades(person) {
  var noviNiz = [];

  for (var i = 0; i < person.ocene.length; i++) {
      if (person.ocene[i]%2==0) {
        noviNiz.push(person.ocene[i]*3);
      } else {
        noviNiz.push(person.ocene[i]*4);
      }
  } return noviNiz;
}

console.log("Mapped grades: -----------------");
console.log(getMappedGrades(test_objekat1));
console.log(getMappedGrades(test_objekat2));
console.log(getMappedGrades(test_objekat3));