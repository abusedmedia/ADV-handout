// assuming the target svg selected with this line
var svg = d3.select('svg')

// Rect
svg.append('rect')
  .attr('width', 240)
  .attr('height', 30)
  .attr('x', 40)
  .attr('y', 10)
  .style('fill', '#f00')
  .style('stroke', '#000')

// Round Rect
svg.append('rect')
  .attr('width', 240)
  .attr('height', 30)
  .attr('x', 40)
  .attr('y', 100)
  .attr('rx', 10)
  .attr('ry', 10)
  .style('fill', 'orange')
  .style('stroke', '#000')

// Circle
svg.append('circle')
  .attr('cx', 240)
  .attr('cy', 30)
  .attr('r', 50)
  .style('fill', '#f00')
  .style('stroke', '#000')

// Ellipse
svg.append('ellipse')
  .attr('cx', 240)
  .attr('cy', 30)
  .attr('rx', 40)
  .attr('ry', 10)
  .style('fill', '#f00')
  .style('stroke', '#000')

// Line
svg.append('line')
  .attr('x1', 80)
  .attr('x2', 120)
  .attr('y1', 30)
  .attr('y2', 30)
  .style('stroke', '#000')
  .style('stroke-width', 8)

// Text
svg.append('text')
  .text('Simple Text')
  .attr('x', 150)
  .attr('y', 35)
  .attr('text-anchor', 'middle') // yes! this means align:center
  .attr('transform', 'rotate(20 150,35)')
  .style('fill', '#09f')

// G element (group)
layer = svg.append('g')
  .attr('transform', 'translate(320, 30)')

layer.append('circle')
  .attr('r', 25)
  .style('fill', 'purple')

layer.append('text')
  .text('GROUP')
  .style('font-family', 'arial')
  .style('font-size', 12)
  .attr('x', 0)
  .attr('y', 0)
  .attr('dy', 5)
  .attr('text-anchor', 'middle')
  .style('fill', '#fff')
