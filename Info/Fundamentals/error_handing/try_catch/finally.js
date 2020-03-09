"use strict";

/* after try, if there were no errors,
after catch, if there were errors.
The extended syntax looks like this:
*/
try {
  console.log("try");
  BAD_CODE();
} catch (e) {
  console.log("catch");
} finally {
  console.log("finally");
}
