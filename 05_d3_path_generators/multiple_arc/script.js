var svg = d3.select('svg')

var data = d3.range(10).map((d) => Math.random() * 50)

var arc = d3.arc()
  .innerRadius(60)
  .outerRadius((d) => 100 + d)
  .startAngle((d, i) => d * 0.11)
  .endAngle((d, i) => (i + 1) * 0.11)

var colors = d3.scaleOrdinal(d3.schemeCategory10)

svg.selectAll('path')
  .data(data)
  .enter()
  .append('path')
  .attr('transform', 'translate(300,300)')
  .attr('d', arc)
  .style('fill', (d, i) => colors(i))
  .style('stroke', 'none')
