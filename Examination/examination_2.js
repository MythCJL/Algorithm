/**
 * var data = {
 *          name: 'xiaoming',
 *          age:  '18'
 * };
 * var template = "My name is {$name}, my age is {$age}."
 * 写一个函数，实现：
 * function shenmegui(template, data) {
 *
 * } => My name is xiaoming, my age is 18.
 */

var data = {
  name: 'xiaoming',
  age: '18'
}

var template = 'My name is {$name}, my age is {$age}.'

function shenmegui (template, data) {
  let regName = /\{\$name\}/g,
    regAge = /\{\$age\}/g
  template = template.replace(regName, data.name)
  template = template.replace(regAge, data.age)
  return template
}

console.log(shenmegui(template, data))
