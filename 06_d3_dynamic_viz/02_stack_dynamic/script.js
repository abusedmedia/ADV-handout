var w = 600
var h = 600

// select the svg container
var svg = d3.select('svg')

var data = d3.range(40).map((d, i) => {
  return { a: Math.random(), b: Math.random(), c: Math.random(), d: Math.random() }
})

console.log(data)

var mapx = d3.scaleLinear()
  .domain([0, data.length])
  .range([0, w])

var mapy = d3.scaleLinear()
  .domain([0, 1])
  .range([0, 10])

// create the stack layout function
var stack = d3.stack()
  .keys(['a', 'b', 'c', 'd'])

// transform the dataset
var newdata = stack(data)

console.log(newdata)

// create the area path generator
var area = d3.area()
  .x((d, i) => mapx(i))
  .y0((d, i) => 200 - mapy(d[0]))
  .y1((d, i) => 200 - mapy(d[1]))
  .curve(d3.curveBasis)

// some colors
var cols = d3.scaleOrdinal(d3.schemeCategory10)

// draw the paths
var graph = svg.selectAll('path')
  .data(newdata)
  .enter()
  .append('path')
  .attr('d', (d, i) => area(d))
  .style('fill', (d, i) => cols(i))

function change () {
  mapy = d3.scaleLinear()
    .domain([0, 1])
    .range([0, 50])

  graph.transition()
    .duration(1000)
    .delay((d, i) => 800 - i * 200)
    .attr('d', (d, i) => area(d))
}
svg.on('click', change)
