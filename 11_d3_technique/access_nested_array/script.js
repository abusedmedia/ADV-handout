d3.csv('dataset.csv').then(data => {
  var svg = d3.select('svg')

  var dtMap = d3.group(data,
    d => d.Country,
    d => d.Weight)

  var dt = Array.from(dtMap, ([key, value]) => ({ key, value }))
  dt.forEach(d => {
    d.value = Array.from(d.value, ([key, value]) => ({ key, value }))
  })
  console.log(dt)

  var groups = svg.selectAll('g')
    .data(dt)
    .enter()
    .append('g')
    .attr('transform', 'translate(300,300)')

  groups.selectAll('g')
    .data((d) => d.value)
    .enter()
    .append('g')
    .call(function (selection) {
      selection.each(function (d, i) {
        var par = d3.select(this.parentNode).datum()

        var index = dt.indexOf(par)

        var radius = 3 * index + 40

        d3.select(this).attr('transform', function () {
          var angle = Math.PI * 2 / selection.data().length * i
          var x = Math.cos(angle) * radius
          var y = Math.sin(angle) * radius
          return `translate(${x}, ${y})`
        })

        d3.select(this).append('circle')
          .attr('r', 2)
      })
    })
})
