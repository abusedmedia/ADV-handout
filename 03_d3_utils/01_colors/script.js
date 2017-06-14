var svg = d3.select('svg')

var data = d3.range(10)

var scale = d3.scaleLinear()
  .domain([0, data.length-1])
  .range([0, 100])

var colorsa = d3.scaleOrdinal(d3.schemeCategory20);

svg.append('g')
  .selectAll('rect')
  .data(data)
  .enter()
  .append('rect')
  .attr('height', 9)
  .attr('width', (d, i) => scale(d) )
  .attr('y', (d, i) => i*10 )
  .style('fill', (d, i) => colorsa(i) )



var colorsb = d3.scaleLinear()
    .domain([0, 10])
    .range(['red', 'green'])

svg.append('g')
  .attr('transform', 'translate(120,0)')
  .selectAll('rect')
  .data(data)
  .enter()
  .append('rect')
  .attr('height', 9)
  .attr('width', (d, i) => scale(d) )
  .attr('y', (d, i) => i*10 )
  .style('fill', (d, i) => colorsb(i) )



