
var widthGraph = 200
var heightGraph = 150

var svg = d3.select('svg')

var ddt = d3.range(20).map(function (d) {
  return { val: d, cat: parseInt(Math.random() * 6) }
})

var mapAng = d3.scaleLinear()
  .domain([0, ddt.length])
  .range([0, Math.PI * 2])

var ddsize = 200

var catcol = d3.scaleOrdinal(d3.schemeCategory10)

layer = svg.append('g')
  .attr('transform', 'translate(200,200)')

var elm = layer.selectAll('circle')
  .data(ddt)
  .enter()
  .append('circle')
  .attr('transform', 'translate(' + ddsize / 2 + ',' + ddsize / 2 + ')')
  .style('fill', function (d, i) {
    return catcol(d.cat)
  })
  .attr('r', function (d) {
    return 3 + d.cat * 2
				})
  .attr('cx', function (d, i) {
    return Math.sin(mapAng(i)) * ddsize / 2.5
  })
  .attr('cy', function (d, i) {
    return Math.cos(mapAng(i)) * ddsize / 2.5
  })
