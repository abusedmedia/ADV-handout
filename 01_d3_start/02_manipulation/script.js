// Append new element in DOM:
var body = d3.select('body');
body.append('p')
    .text('New Element')


// Add attribute:
d3.select('p')
    .attr('title', 'some title');


// Set a style:
d3.select('p')
    .style('background-color', '#ddd');


// Set a class:
d3.select('p')
    .classed('myColor', true);


// Remove a class:
d3.select('p')
    .classed('myColor', false);


// Prepend an element:
var body = d3.select('body');
body.insert('h4', 'p')
    .text('I \'m prependeding p');


// Remove an element:
var el = d3.select('.red');
el.remove(); 