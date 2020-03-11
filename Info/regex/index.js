'use strict'

// character set: [ABC] - match any character in the set
console.log('******************Character set*************')
console.log('glib jocks vex dwarves!'.match(/[aeiou]/g));

// negated set: [^ABC] - match any character not in the set
console.log('******************Negated set*************')
console.log('glib jocks vex dwarves!'.match(/[^aeiou]/g));

// dot: . Tương đương [^\n\r] : match all except: ngắt dòng
console.log('******************Dot*************')
console.log(`glib jocks vex dwarves!
sdssd`.match(/./g));

// match any: [\s\S] tương đương [^] (ko hỗ trợ trong tất cả trình duyệt) => khớp với tất cả kí tự kể cả dòng mới
console.log('******************Match any*************')
console.log(`glib jocks vex dwarves!
sdssd`.match(/[\s\S]/g));

// word: \w match với chữ, số, gạch dưới(chữ lower và ko có dấu hoặc ko phải chữ la mã), tương đương [A-Za-z0-9_]

// not word: \W, khớp với kí tự ko phải số, chữ, gạch dưới, tương đương [^A-Za-z0-9_]

// white space: \s match any whitespace(spaces, tabs, line break)
console.log('******************White space************')
console.log(`glibjocksvexdwarves!
sds
sds`.match(/[\s]/g));

// Unicode category: \p{L}, khớp 1 kí tự trong unicode đc chỉ định, yêu cầu cở 'u'
// Link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Unicode_Property_Escapes
console.log('******************Unicode category************')
console.log('A ticket to 大阪 costs ¥2000 👌.'.match(/\p{Emoji_Presentation}/gu));

// beginning: ^ - match beginning của string hoặc của từng dòng nếu cờ 'm' được enable
console.log('******************Beginning*************')
console.log(`glib jocks vex dwarves!
1212121 dfdfd
`.match(/^\w+/gm));

// end: $ - match end của string hoặc của từng dòng nếu cờ 'm' được enable
console.log('******************End*************')
console.log(`glib jocks vex dwarves!
1212121 dfdfd
`.match(/\w+$/gm)); // ! ko phải word

// word boundary: \b, khớp với từ đó có ranh giới với kí tự ko phải word
console.log('******************Word boundary*************')
console.log(`she sells seashells`.match(/s\b/g)); // ! ko phải word


// capturing group: nhóm kí tự để thành một chuỗi con
console.log('***************Capturing group***********')
console.log('hahaha haa hah!'.match(/(ha)+/g));

// non capturing group: Nhóm nhiều mã ko tạo thành group
console.log('***************None Capturing group***********')
console.log('hahaha haa hah!'.match(/(?:ha)+/g));

// numberic reference: \number, match \number tới giá trị capture group number
console.log('***************Numberic reference***********')
console.log('hahh dahd dahx bad dab gag gab'.match(/(\w)a(h)\1/g));
