
var data = d3.range(10).map(function(d, i){
  return {name:i, size:Math.random()};
})




var root = {name:'root', children:data}
var structure = d3.hierarchy(root)
    .sum(function(d){
	  return d.size;
	})

var tree = d3.treemap()
	.size([300,300])

var nodes = tree(structure)
console.log(nodes)


var cols = d3.scaleOrdinal( d3.schemeCategory20 )

d3.select('svg')
    .append('g')
    .attr('transform', 'translate(150,150)')
	.selectAll('rect')
	.data(nodes.children)
	.enter()
	.append('rect')
	.attr('width', function(d){
	  return d.x1 - d.x0;
	})
	.attr('height', function(d){
	  return d.y1 - d.y0;
	})
	.attr('x', function(d){
	  return d.x0;
	})
	.attr('y', function(d){
	  return d.y0;
	})
	.style('fill', function(d, i){
	  return cols(i)
	})
	