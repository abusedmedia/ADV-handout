d3.csv('dataset.csv').then(data => {
  var svg = d3.select('svg')

  // creating 3 level of nesting
  var dtMap = d3.rollup(data,
    d => ({
      num: d.length,
      male: d3.sum(d, (c) => (c.Sex == 'M') ? 1 : 0),
      female: d3.sum(d, (c) => (c.Sex == 'F') ? 1 : 0)
    }), d => d.Country, d => d.Age)

  var dt = Array.from(dtMap, ([key, value]) => ({ key, value }))

  dt.forEach(d => {
    d.value = Array.from(d.value, ([key, value]) => ({ key, value }))
  })
  console.log(dt)

  // first level
  var groups = svg.selectAll('g')
    .data(dt)
    .enter()
    .append('g')
    .attr('transform', (d, i) => {
      dt.push(d.key)

      return `translate(0, ${i * 50})`
    })

  groups.append('rect')
    .attr('width', 500)
    .attr('height', 49)
    .style('fill', '#eee')

  // second level
  var ages = groups.selectAll('g')
    .data((d) => d.value)
    .enter()
    .append('g')
    .attr('transform', (d, i) => `translate(${i * 20}, 0)`)

  ages.append('rect')
    .attr('width', 19)
    .attr('height', 40)
    .style('fill', '#ddd')

  // third level
  var female = ages.append('g')

  female.selectAll('circle')
    .data((d) => d3.range(d.value.female))
    .enter()
    .append('circle')
    .attr('r', 2)
    .attr('cx', 5)
    .style('fill', '#999')
    .attr('cy', (d, i) => i * 3)

  var male = ages.append('g')

  male.selectAll('circle')
    .data((d) => d3.range(d.value.male))
    .enter()
    .append('circle')
    .attr('r', 2)
    .style('fill', '#555')
    .attr('cx', 10)
    .attr('cy', (d, i) => i * 3)
})
