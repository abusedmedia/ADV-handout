var w = 600
var h = 600
		
// select the svg container
var svg = d3.select('svg')

svg.append('clipPath')
  .attr('id', 'clipper') // the id will be used in the next block
  .append('circle')
  .attr('r', 50)
  .attr('cx', 60)
  .attr('cy', 60)

svg.append('image')
  .attr('xlink:href', 'http://lorempixel.com/200/200/')
  .attr('width', 200)
  .attr('height', 200)
  .attr('clip-path', 'url(#clipper)') // see the reference of the id
