
var data = {
  source: { startAngle: -Math.PI / 2 - 0.02, endAngle: -Math.PI / 2 + 0.02 },
  target: { startAngle: Math.PI / 4, endAngle: Math.PI / 2 - 0.3 }
}

d3.select('svg').append('g')
  .attr('transform', 'translate(300,300)')
  .append('path')
  .datum(data)
  .attr('d', d3.ribbon().radius(150))
  .style('fill', 'orange')
  .style('stroke', '#f00')
