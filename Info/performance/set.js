let timer = function(name) {
    let start = new Date();
    return {
        stop: function() {
            let end  = new Date();
            let time = end.getTime() - start.getTime();
            console.log('Timer:', name, 'finished in', time, 'ms');
        }
    }
};

let getRandom = function (min, max) {
  return Math.random() * (max - min) + min;
};

let lastNames = ['SMITH','JOHNSON','WILLIAMS','JONES','BROWN','DAVIS','MILLER','WILSON','MOORE','TAYLOR','ANDERSON','THOMAS'];

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
	this.age = Math.round(getRandom(0,100))
	this.sex = "Male"
};

let genPersons = function() {
for (let i = 0; i < 10000; i++)
	personSet.add(new Person());
};

let changeSex = function() {
	for (let key of personSet) {
		key.sex = genSex();
	}
};

let deleteMale = function() {
	for (let key of personSet) {
		if (key.sex === "Male") {
			personSet.delete(key)
		}
	}
};

let t = timer("Set Full Action");
  
let personSet = new Set();

let timeAdd = timer("Set Add");
genPersons();
timeAdd.stop();

let timeChange = timer('Set Change');
changeSex();
timeChange.stop();

let timeDelete = timer('Set Delete');
deleteMale();
timeDelete.stop();

t.stop();

console.log("Done! There are " + personSet.length + " persons.")