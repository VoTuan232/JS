"use strict";

let check = x => {
  // console.log("vào check");
  // console.log(x);
  for (let i = 0; i < x.length - 1; i++) {
    // console.log(x[i]);
    // console.log(x[i + 1]);
    if (x[i + 1] <= x[i]) {
      console.log("not increment");
      return false;
    }
  }

  return true;
};

let almostIncreasingSequence = sequence => {
  if (check(sequence)) {
    console.log("true now");
    return true;
  } else {
    let length = sequence.length;
    let temp = [];

    for (let index = 0; index < sequence.length; index++) {
      temp.push(sequence[index]);
    }

    for (let index = 0; index < length; index++) {
      const rm = sequence.splice(index, 1);
      // console.log(rm.toString());
      if (check(sequence)) {
        console.log(" vào true");
        return true;
      }
      // sequence.splice(index, 0, rm.toString());
      console.log("not vào true");
      sequence = [];
      for (let i = 0; i < temp.length; i++) {
        sequence.push(temp[i]);
      }
    }
    return false;
  }
};

console.log(
  almostIncreasingSequence([
    -9996,
    -9995,
    -9994,
    -9993,
    -9991,
    -9989,
    -9987,
    -9986,
    -9985,
    -9983,
    -9982,
    -9980,
    -9978,
    -9977,
    -9976,
    -9975,
    -9974,
    -9972,
    -9968,
    -9966,
    -9965,
    -9961,
    -9957,
    -9956,
    -9955,
    -9954,
    -9952,
    -9948,
    -9942,
    -9939,
    -9938,
    -9936,
    -9935,
    -9932,
    -9931,
    -9927,
    -9925,
    -9923,
    -9922,
    -9921,
    -9920,
    -9919,
    -9918,
    -9908,
    -9905,
    -9902,
    -9901,
    -9900,
    -9899,
    -9897,
    -9896,
    -9894,
    -9888,
    -9886,
    -9880,
    -9878,
    -9877,
    -9876,
    -9874,
    -9872,
    -9871,
    -9870,
    -9869,
    -9868,
    -9867,
    -9865,
    -9857,
    -9856,
    -9855,
    -9854,
    -9853,
    -9852,
    -9851,
    -9849,
    -9848,
    -9846,
    -9845,
    -9843,
    -9842,
    -9841,
    -9840,
    -9837,
    -9834,
    -9828,
    -9826,
    -9824,
    -9823,
    -9820,
    -9816,
    -9814,
    -9812,
    -9811,
    -9810,
    -9809,
    -9807,
    -9806,
    -9804,
    -9803,
    -9801,
    -9800
  ])
);
