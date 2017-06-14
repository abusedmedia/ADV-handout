var svg = d3.select('svg')

var data = d3.range(10)

var sc = d3.scaleLinear()
  .domain([0, data.length - 1])
  .range([0, 100])

svg.append('g')
  .selectAll('rect')
  .data(data)
  .enter()
  .append('rect')
  .attr('height', 9)
  .attr('width', (d, i) => sc(d) )
  .attr('y', (d, i) => i * 10 )

var sc2 = d3.scalePow().exponent(0.3)
  .domain([0, data.length - 1])
  .range([0, 100])

svg.append('g')
  .attr('transform', 'translate(120,0)')
  .selectAll('rect')
  .data(data)
  .enter()
  .append('rect')
  .attr('height', 9)
  .attr('width', (d, i) => sc2(d) )
  .attr('y', (d, i) => i * 10 )

var sc3 = d3.scaleLog() // v4
  .domain([1, data.length])
  .range([0, 1])

svg.append('g')
  .attr('transform', 'translate(240,0)')
  .selectAll('rect')
  .data(data)
  .enter()
  .append('rect')
  .attr('height', 9)
  .attr('width', (d, i) => sc3(d) * 100 )
  .attr('y', (d, i) => i * 10 )
