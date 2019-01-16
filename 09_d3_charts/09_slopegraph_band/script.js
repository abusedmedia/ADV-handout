
var svg = d3.select('svg')

var data = [
  { a: 40, b: 190, da: 2, db: 10 }
]

function addExtra (d) {
  d.pts = (d.pts) ? d.pts : []
  d.pts[0] = { x: 0, y: d.a, delta: d.da }
  d.pts[1] = { x: 50, y: d.a, delta: d.da }
  d.pts[2] = { x: 150, y: d.b, delta: d.db }
  d.pts[3] = { x: 200, y: d.b, delta: d.db }
}

data.forEach((d) => addExtra(d))

var mapy = d3.scaleLinear()
  .domain([0, 220])
  .range([20, 300])

var leftGr = svg.append('g')
  .attr('transform', 'translate(20,0)')

var rightGr = svg.append('g')
  .attr('transform', 'translate(220,0)')

var lineGr = svg.append('g')
  .attr('transform', 'translate(20,0)')

var path = d3.area()
  .x((d) => d.x)
  .y0((d) => mapy(d.y) - d.delta)
  .y1((d) => mapy(d.y) + d.delta)
  // .curve(d3.curveBasis)

function update () {
  console.log('update')

  var left = leftGr.selectAll('rect')
    .data(data)

  var entrL = left.enter()
    .append('rect')
    .attr('width', 2)
    .style('opacity', 0)

  var allL = left.merge(entrL)

  allL.transition().duration(1500)
    .delay((d, i) => 100 * i)
    .attr('y', (d, i) => mapy(d.a) - d.da)
    .attr('height', (d) => d.da * 2)
    .style('opacity', 1)

  var right = rightGr.selectAll('rect')
    .data(data)

  var entrR = right.enter()
    .append('rect')
    .attr('width', 2)
    .style('opacity', 0)

  var allR = right.merge(entrR)

  allR.transition().duration(1500)
    .delay((d, i) => 100 * i)
    .attr('y', (d, i) => mapy(d.b) - d.db)
    .attr('height', (d) => d.db * 2)
    .style('opacity', 1)

  var lines = lineGr.selectAll('path')
    .data(data)

  var lineEnter = lines.enter()
    .append('path')
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

  allLines.transition().duration(1500)
    .delay((d, i) => 100 * i)
    .attr('d', (d) => path(d.pts))
    .style('stroke', 'none')
    .style('fill', 'orange')
    .style('opacity', 0.1)
}

update()

svg.on('click', function () {
  data.forEach((d) => {
    d.a = Math.random() * 200
    d.b = Math.random() * 200
    d.da = Math.random() * 20
    d.db = Math.random() * 20
    addExtra(d)
  })

  var d = { a: Math.random() * 200, b: Math.random() * 200, da: Math.random() * 20, db: Math.random() * 20 }
  data.push(d)
  addExtra(d)

  update()
})
