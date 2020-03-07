let timer = function(name) {
    let start = new Date();
    // this.stop = function() {
    //     let end = new Date();
    //     let time = end.getTime() - start.getTime();
    //     console.log('Timer:', name, 'finished in', time, 'ms');
    // }
    return {
      stop: function() {
        let end = new Date();
        let time = end.getTime() - start.getTime();
        console.log('Timer:', name, 'finished in', time, 'ms');
      }
    }
  };
  
  let getRandom = function(min, max) {
    return Math.random() * (max - min) + min;
  };
  
  let lastNames = ['SMITH', 'JOHNSON', 'WILLIAMS', 'JONES', 'BROWN', 'DAVIS', 'MILLER', 'WILSON', 'MOORE', 'TAYLOR', 'ANDERSON', 'THOMAS'];
  
  let genLastName = function() {
    let index = Math.round(getRandom(0, lastNames.length - 1));
    return lastNames[index];
  };
  
  let sex = ["Male", "Female"];
  
  let genSex = function() {
    let index = Math.round(getRandom(0, sex.length - 1));
    return sex[index];
  };
  
  let Person = function() {
    this.name = genLastName();
    this.age = Math.round(getRandom(0, 100))
    this.sex = "Male"
  };
  
  let genPersons = function() {
    for (let i = 0; i < 10000; i++)
      personArray.push(new Person());
  };
  
  let changeSex = function() {
    for (let i = 0; i < personArray.length; i++) {
      personArray[i].sex = genSex();
    }
  };
  
  let deleteMale = function() {
    for (let i = 0; i < personArray.length; i++) {
      if (personArray[i].sex === "Male") {
        personArray.splice(i, 1)
        i--
      }
    }
  };
  
  let t = timer("Array Full Action");
  
  let personArray = [];
  
  let timeAdd = timer("Array Add");
  genPersons();
  timeAdd.stop();
  
  let timeChange = timer('Array Change');
  changeSex();
  timeChange.stop();

  let timeDelete = timer('Array Delete');
  deleteMale();
  timeDelete.stop();
  
  t.stop();
  
  console.log("Done! There are " + personArray.length + " persons.")