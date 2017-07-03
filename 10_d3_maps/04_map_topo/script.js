
var w = 600;
var h = 600;
		
// select the svg container
var svg = d3.select('svg')
			.attr('width', w)
			.attr('height', h)

// create the projection system
// mercator
// orthographic
// stereographic 
// equirectangular
// albersUsa
var proj = d3.geoAlbersUsa()
			.scale( (w+1)/2/Math.PI )
			.translate( [w / 2, h / 2] )
			//.rotate([0, 0, 50])
			
			

// create the path generator
// using the projection system
var path = d3.geoPath()
			.projection(proj)
			
	
// load a topojson world map and display it
d3.json('../../datasets/topojson/us.topo.json', map => {

	console.log(map);

	var countries = topojson.feature(map, map.objects.us_states)

	console.log('countries', countries)
	
	// this block create one single path element
	/*svg.append('path')
		.datum(topojson.feature(map, map.objects.land))
		.attr('d', path)
		.attr('class', 'topocountry')
		.style("fill", "#555")
		.style('opacity', .5);*/
		
	// for multiple path use the following code instead the previous
	svg.selectAll('path')
		.data(countries.features)
		.enter()
		.append('path')
		.attr('d', path)
		.style("fill", "none")
		.style('stroke', 'orange')
});