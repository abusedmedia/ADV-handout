
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
var proj = d3.geoAlbersUsa()
			.scale( 800 )
			.translate( [w / 2, h / 2] )
			
			

			
			
// create the path generator
// using the projection system
var path = d3.geoPath()
			.projection(proj)



// load the geoJSON US description file and display it 
d3.json('../../datasets/geojson/us.geo.json', map => {
	
	// http://www.geojson.org/geojson-spec.html
	
	console.log(map);
	
	/*
	In this case the object returned is something like:
	{
		type: 'FeatureCollection',
		features: [ array of objects ]
	}
	
	Each Feature Object has the geometry definition:
	{
		geometry: {
					coordinates: [ contains array of tuple ],
					type: 'Polygon'
				  }
	}
	
	plus the properties definition
	{
		properties: { name:'something' }
	
	}
	
	*/
	
    var scheme = d3.schemeCategory20
    var cols = d3.scaleOrdinal(scheme)
	
	// this block create separate path element for each feature in collection
	svg.selectAll('.country')
		.data(map.features)
		.enter()
		.append('path')
		.attr('class', 'country')
		.attr('d', path)
		.style('fill', function(d, i){
            return cols(i)
        })
		
		
    
	
});