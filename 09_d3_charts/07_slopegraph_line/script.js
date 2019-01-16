
var svg = d3.select('svg')

var data = [
  { a: 40, b: 190 },
  { a: 60, b: 40 },
  { a: 180, b: 90 }
]

var mapy = d3.scaleLinear()
  .domain([0, 220])
  .range([20, 300])

var leftGr = svg.append('g')
  .attr('transform', 'translate(20,0)')

var rightGr = svg.append('g')
  .attr('transform', 'translate(220,0)')

var lineGr = svg.append('g')
  .attr('transform', 'translate(20,0)')

function update () {
  console.log('update')

  var left = leftGr.selectAll('circle')
    .data(data)

  var entL = left.enter()
    .append('circle')
    .attr('r', 2)
    .style('opacity', 0)

  var allL = left.merge(entL)
  allL.transition().duration(1500)
    .attr('cy', function (d, i) {
      return mapy(d.a)
    })
    .style('opacity', 1)

  var right = rightGr.selectAll('circle')
    .data(data)

  var entR = right.enter()
    .append('circle')
    .attr('r', 2)
    .style('opacity', 0)

  var allR = right.merge(entR)
  allR.transition().duration(1500)
    .attr('cy', function (d, i) {
      return mapy(d.b)
    })
    .style('opacity', 1)

  var lines = lineGr.selectAll('line')
    .data(data)

  var lineEnter = lines.enter()
    .append('line')
    .style('opacity', 0)

  var allLines = lines.merge(lineEnter)

  allLines.on('mouseenter', function () {
    d3.select(this)
      .style('opacity', 1)
  })
    .on('mouseleave', function () {
      d3.select(this)
        .style('opacity', 0.1)
    })

  allLines.attr('x2', 200)
    .transition().duration(1500)
    .attr('y1', function (d, i) {
      return mapy(d.a)
    })
    .attr('y2', function (d, i) {
      return mapy(d.b)
    })
    .style('stroke', 'black')
    .style('opacity', 0.1)
}

update()

svg.on('click', function () {
  data.forEach(function (d) {
    d.a = Math.random() * 200
    d.b = Math.random() * 200
  })

  data.push({ a: Math.random() * 200, b: Math.random() * 200 })

  console.log(data.length)

  update()
})
