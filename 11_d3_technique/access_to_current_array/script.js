var data = d3.range(5).map(function (d, i) {
  return {
    id: i,
    value: Math.random(),
    arr: d3.range(parseInt(Math.random() * 20) + 1)
  }
})

var cols = d3.scaleOrdinal(d3.schemeCategory10)

var svg = d3.select('svg')

var groups = svg.selectAll('g')
    .data(data)
    .enter()
    .append('g')
    .attr('transform', 'translate(300,300)')

// here the rect color has been specified using the parent datum
groups.selectAll('circle')
    .data(function (d) {
      return d.arr
    })
    .enter()
    .append('circle')
    .attr('r', 5)
    .style('fill', function (d, i) {
      var parent = d3.select(this.parentNode)
      var dd = parent.datum()
      console.log(dd)
      return cols(dd.id)
    })
    .each(function (selection) {
      var parent = d3.select(this.parentNode)
      var datum = parent.datum()
      var data = parent.data()

      d3.select(this).attr('transform', function (d, i) {
        var parent = d3.select(this.parentNode)
        var dd = parent.datum()
        var radius = dd.id * 40 + 40

        var angle = Math.PI * 2 / selection * i
        var x = Math.cos(angle) * radius
        var y = Math.sin(angle) * radius
        return 'translate(' + x + ', ' + y + ')'
      })
    })
