'use strict';

// mã phone 
let codes = {
  '+49': 'Germany',
  '+41': 'England',
}

for (let code in codes) {
  console.log(+code);
}