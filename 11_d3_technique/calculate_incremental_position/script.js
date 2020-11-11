var dataset = d3.range(10).map(d => {
  return { v: Math.random() * 20 + 2 }
})

var shift = 1

d3.select('svg')
  .selectAll('circle')
  .data(dataset)
  .enter()
  .append('circle')
  .attr('r', 0)
  .attr('cx', (d, i) => {
    var pos = shift + d.v
    shift += d.v * 2 + 1
    return pos
  })
  .attr('cy', 75)
  .transition()
  .duration(750)
  .ease(d3.easeExpInOut)
  .delay((d, i) => i * 100)
  .attr('r', (d, i) => d.v)
