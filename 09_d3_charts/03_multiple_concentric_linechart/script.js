
var svg = d3.select('svg')

var samples = 50

var data = d3.range(5).map(function (d, i) {
  return d3.range(samples).map(function (d) {
	    return { v: Math.random() * (i + 1) }
  })
})

var r = 100

var scaleR = d3.scaleLinear()
  .domain([0, 1])
  .range([0, 40])

var area = d3.line()
  .x(function (d, i) {
	  var ang = Math.PI * 2 / samples * i
	  var x = Math.cos(ang) * (r + scaleR(d.v))
	  return x
  })
  .y(function (d, i) {
	  var ang = Math.PI * 2 / samples * i
	  var y = Math.sin(ang) * (r + scaleR(d.v))
	  return y
  })
  .curve(d3.curveBasisClosed)

var cols = d3.scaleOrdinal(d3.schemeCategory10)

svg.selectAll('path')
  .data(data)
  .enter()
  .append('path')
  .attr('d', function (d, i) {
	    scaleR = d3.scaleLinear()
      .domain([0, (i + 1)])
      .range([0, 40])

    return area(d)
  })
  .attr('transform', 'translate(300,300)')
// .style('opacity', .75)
  .style('stroke', function (d, i) {
	  return cols(i)
  })
  .style('fill', 'none')
  .style('stroke-width', 3)
