"use strict";

/*
  Conversion hint:
    *string: conversion object to object
      // output
      alert(obj);
      // using object as a property key
      anotherObj[obj] = 123;

    *number: conversion object to number
      // explicit conversion
      let num = Number(obj);
      // maths (except binary plus)
      let n = +obj; // unary plus
      let delta = date1 - date2;
      // less/greater comparison
      let greater = user1 > user2;

    *default: operator not sure what type to expect
      // binary plus uses the "default" hint
      let total = obj1 + obj2;
      // obj == number uses the "default" hint
      if (user == 1) { ... };

  To do the conversion, JavaScript tries to find and call three object methods:
    Call obj[Symbol.toPrimitive](hint) – the method with the symbolic key Symbol.toPrimitive (system symbol), if such method exists,
    Otherwise if hint is "string"
      obj.toString() and obj.valueOf(), whatever exists.
    Otherwise if hint is "number" or "default"
      obj.valueOf() and obj.toString(), whatever exists.
  */

