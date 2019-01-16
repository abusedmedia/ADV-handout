var w = 600
var h = 600
		
// select the svg container
var svg = d3.select('svg')

svg.append('image')
  .attr('xlink:href', 'http://lorempixel.com/200/200/')
  .attr('width', 200)
  .attr('height', 200)
