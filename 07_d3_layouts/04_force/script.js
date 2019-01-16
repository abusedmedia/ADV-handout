// http://d3indepth.com/force-layout/

// select the svg container
var svg = d3.select('svg')

// create the node dataset
var data_nodes = d3.range(20).map((d) => {
  return { amount: 2 + Math.random() * 20 }
})

// create the links dataset
var data_links = []
for (var i = 0; i < 100; i++) {
  var s = parseInt(Math.random() * data_nodes.length)
  var t = parseInt(Math.random() * data_nodes.length)
  if (s != t) data_links.push({ target: t, source: s })
}

// create the layout
var simulation = d3.forceSimulation(data_nodes)
  .force('link', d3.forceLink(data_links).distance(50).strength(0.01))
  .force('charge', d3.forceManyBody())
  .force('center', d3.forceCenter(300, 300))
// .force('x', d3.forceX())
// .force('y', d3.forceY())
  .on('tick', tick)

var links = svg.selectAll('line')
  .data(data_links)
  .enter()
  .append('line')
  .style('stroke', '#ccc')

var nodes = svg.selectAll('circle')
  .data(data_nodes)
  .enter()
  .append('circle')
  .style('fill', 'steelblue')
  .attr('r', (d) => d.amount)
  .call(d3.drag)

// this function will be called each frame
function tick () {
  // this update the circle positions
  nodes.attr('cx', (d) => d.x)
    .attr('cy', (d) => d.y)

  links.attr('x1', (d) => d.source.x)
    .attr('y1', (d) => d.source.y)
    .attr('x2', (d) => d.target.x)
    .attr('y2', (d) => d.target.y)
}
