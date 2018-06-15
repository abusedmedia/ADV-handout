
var w = 600
var h = 600

// select the svg container
var svg = d3.select('svg')
			.attr('width', w)
			.attr('height', h)

// create the projection system, try one of the follow:
// Mercator
// Orthographic
// Stereographic
// Equirectangular
var proj = d3.geoMercator()
			.scale((w + 1) / 2 / Math.PI) // view all based on svg width
			.translate([w / 2, h / 2]) // center the viewport

// create the path generator
// using the projection system
var path = d3.geoPath()
			.projection(proj)

// create the built in graticule
var graticule = d3.geoGraticule()

// draw the graticule
svg.append('path')
	.attr('d', path(graticule()))
    .style('fill', 'none')
    .style('stroke', '#999')
