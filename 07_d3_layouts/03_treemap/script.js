
var data = d3.range(10).map((d, i) => ({name:i, size:Math.random()}))


var root = {name:'root', children:data}

var structure = d3.hierarchy(root)
    .sum((d) => d.size)

var tree = d3.treemap()
    .size([300,300])

var nodes = tree(structure)
console.log(nodes)


var cols = d3.scaleOrdinal( d3.schemeCategory10 )

d3.select('svg')
    .append('g')
    .attr('transform', 'translate(150,150)')
    .selectAll('rect')
    .data(nodes.children)
    .enter()
    .append('rect')
    .attr('width', (d) =>  d.x1 - d.x0)
    .attr('height', (d) =>  d.y1 - d.y0)
    .attr('x', (d) =>  d.x0)
    .attr('y', (d) =>  d.y0)
    .style('fill', (d, i) =>  cols(i))
    