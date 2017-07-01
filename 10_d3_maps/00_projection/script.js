
		
// select the svg container
var svg = d3.select('svg')

// create the projection system
// mercator
// orthographic
// stereographic 
// gnomonic
// equirectangular
var proj = d3.geoMercator()
			.scale( (600 + 1) / 2 / Math.PI )
			.translate( [600 / 2, 600 / 2] )
			.precision(.1)
			
				


			
// create the path generator
// using the projection system
var path = d3.geoPath()
			.projection(proj)


			
	
// the feature Point
var point = {type:"Point"}
point.coordinates = [0,0]

svg.append('path')
	.datum(point)
	.attr('d', path)
	.style("fill", "none")
	.style("stroke", "#f00")
	.style('stroke-width', 2)
	

