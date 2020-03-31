const unit = ["hundreds", "thousands", "milions"];
const zero_to_nineteen = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten",
  "eleven",
  "twelve",
  "thirteen",
  "fourteen",
  "fiveteen",
  "sixteen",
  "seventeen",
  "eighteen",
  "nighteen"
];
const round = {
  "2": "twenty",
  "3": "thirty",
  "4": "fourty",
  "5": "fifty",
  "6": "sixty",
  "7": "seventy",
  "8": "eighty",
  "9": "ninety"
};

let main = (number, text = "") => {
  let length = number.toString().length;
  let unitLength =
    length >= 3
      ? length % 3 !== 0
        ? Math.floor(number.toString().length / 3)
        : Math.floor(number.toString().length / 3) - 1
      : 0;
  // console.log("unitLength");
  // console.log(unitLength);
  let checkLoop = unitLength > 0 ? true : false;
  let n = unitLength > 0 ? Math.floor(number / (1000 * unitLength)) : number;

  // let text = "";
  let loop = number => {
    let firstChar = n.toString().charAt(0);
    if (n.toString().length > 2) {
      text += `${zero_to_nineteen[firstChar]} ${unit["0"]}`;
      n = n.toString().slice(1);
      // console.log("n");
      // console.log(n);
      loop(n);
    } else {
      // console.log("<= 2");
      if (n.toString().length === 2) {
        // console.log("equals 2");
        if (n >= 20) {
          // console.log("first char");
          // console.log(firstChar);
          text +=
            n % 10 === 0
              ? ` ${round[+firstChar]}`
              : ` ${round[+firstChar]}-${
                  zero_to_nineteen[n.toString().charAt(1)]
                }`;
        } else {
          text += `${zero_to_nineteen[n]}`;
        }
      } else text += `${zero_to_nineteen[firstChar]}`;
    }
  };
  loop(n);
  text += ` ${unit[unitLength]}`;

  // if (checkLoop) {
  //   main(number, text);
  // }
  console.log(text);
};

main(221100, "");
