
var data = d3.range(0, 150, 5).map((i) => i)

var mapRadius = d3.scaleLinear()
	.domain([0, d3.max(data)])
	.range([0, 150])

var mapAngle  = d3.scaleLinear()
	.domain([0, data.length])
	.range([0, Math.PI*10])
			    
var radial = d3.radialLine()
    .radius((d,i) => mapRadius(d))
    .angle((d,i) => mapAngle(i))
	.curve( d3.curveBasis )

			    
d3.select('svg').append("path")
    .attr("d", radial(data))
    .attr('transform', 'translate(300,300)')
    .style('fill', 'none')
    .style('stroke', '#900')
    .style('stroke-width', 1)
