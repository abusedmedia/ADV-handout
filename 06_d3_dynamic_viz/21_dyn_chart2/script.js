var data = d3.range(100).map((d) => {
  return { value: Math.random() }
})

var lineGen = d3.line()
  .x((d, i) => i * 20)
  .y((d, i) => d.value * 150)
  .curve(d3.curveBasis)

d3.select('svg')
  .append('path')
  .style('stroke-width', 1)

function updateViz () {
  var l = Math.random() * 50

  var data = d3.range(l).map((d) => {
    return { value: Math.random() }
  })

  d3.select('path')
    .transition()
    .duration(1000)
    .ease(d3.easeElasticInOut)
    .attr('d', lineGen(data))
    .style('fill', 'none')
    .style('stroke', 'red')
    .style('stroke-width', 3)
}

updateViz()

d3.select('svg')
  .on('click', updateViz)
