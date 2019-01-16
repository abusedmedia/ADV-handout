// Select the first node in DOM:
var oneP = d3.select('p')
console.log(oneP)

// Select all nodes occourrence:
var allP = d3.selectAll('p')
console.log(allP)

// Structured selection:
var first_level = d3.select('ul')
var nested = first_level.select('ul')
console.log(nested)

// Select by class attribute:
d3.select('.alert')

// Get the text content from selection:
var el = d3.select('p')
console.log(el.text())

// Get raw html content from selection:
var el = d3.select('p')
console.log(el.html())

// Get the value of an attribute:
var el = d3.select('p')
console.log(el.attr('title'))

// Get the value of a inline style:
var el = d3.select('p')
console.log(el.style('border'))
