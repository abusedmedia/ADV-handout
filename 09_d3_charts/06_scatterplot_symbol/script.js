
var w = 600
var h = 600

// select the svg container
var svg = d3.select('svg')

// create a dataset
var data = d3.range(20).map(function (d) {
  return Math.random()
})

// create the mapX function
var mapX = d3.scaleLinear()
  .domain([0, data.length])
  .range([0, w - 40])

// calculate the max
var maxvalue = d3.max(data)

// create the mapY function
var mapY = d3.scaleLinear()
  .domain([0, maxvalue])
  .range([h - 40, 0]) // inverted

// this is the array defining the available symbol types
var sym_types = d3.symbols

// define the symbol generator
var sym = d3.symbol()
  .type(function () {
    // pick randomly from the symbol types array
    var index = parseInt(Math.random() * sym_types.length)
    return sym_types[index]
  })
  .size(function () {
    // randomize the size
    return 100 + Math.random() * 500
  })

// draw the line path
svg.append('g')
  .attr('transform', 'translate(20,20)')
  .selectAll('path')
  .data(data)
  .enter()
  .append('path')
  .attr('transform', function (d, i) { return 'translate(' + mapX(i) + ',' + mapY(d) + ')' })
  .attr('d', sym) // call the symbol generator
  .style('fill', 'skyblue')
