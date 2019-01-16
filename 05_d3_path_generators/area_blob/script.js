var svg = d3.select('svg')

var width = 600
var height = 600
var len = 12
var dist = 40

var ddarea = d3.range(len).map((d) => -Math.PI / 2 + (Math.PI * 2 / len) * d)

var blob = svg.append('path')
  .attr('transform', 'translate(300,300)')
  .style('stroke-width', 1)
  .style('fill', 'orange')

function trans () {
  var areablob = d3.line()
	    .x((d) => Math.sin(d) * 100 + Math.random() * dist)
	    .y((d) => Math.cos(d) * 100 + Math.random() * dist)
    .curve(d3.curveBasisClosed)

  blob.transition()
    .duration(3000)
    .ease(d3.easeElasticInOut)
    .attr('d', areablob(ddarea))
    .on('end', trans)
}

trans()
