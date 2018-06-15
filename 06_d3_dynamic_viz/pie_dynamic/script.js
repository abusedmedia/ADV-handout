
// select the svg container
var svg = d3.select('svg')

var data = d3.range(5).map((d, i) => {
  return {key: i + '', value: Math.random()}
})

var arc = d3.arc()
			.innerRadius((d, i) => i * 2 + 10)
			.outerRadius((d, i) => i * 10 + 50)

var pie = d3.pie()
			.value((d) => d.value)

// create an array of 20 colors
var cols = d3.scaleOrdinal(d3.schemeCategory10)

var g = svg.append('g')
	.attr('transform', 'translate(300,300)')

function update () {
  console.log(pie(data))

  var slice = g.selectAll('path')
		.data(pie(data))
		.enter()
		.append('path')
		.attr('d', arc)
		.style('fill', (d, i) => cols(i))
}

update()

svg.on('click', () => {
  var data = d3.range(5).map((d, i) => {
    return {key: i + '', value: Math.random()}
  })

  svg.selectAll('path')
		.data(pie(data))
		.transition()
		.duration(350)
		.attr('d', arc)
})
