
		
// select the svg container
var svg = d3.select('svg')

// create the projection system
// mercator
// orthographic
// stereographic 
// gnomonic
// equirectangular
var proj = d3.geoStereographic()
			.scale( (600 + 1) / 2 / Math.PI )
			.translate( [600 / 2, 600 / 2] )
			
				


			
// create the path generator
// using the projection system
var path = d3.geoPath()
			.projection(proj)


			
	
var point = {type:"Point", coordinates:[0,0]}

svg.append('path')
	.datum(point)
	.attr('d', path)
	.style("fill", "none")
	.style("stroke", "#f00")



var line = {type:"LineString", coordinates:[[10,20], [30,40], [50,80]]}

svg.append('path')
	.datum(line)
	.attr('d', path)
	.style("fill", "none")
	.style("stroke", "#0f0")



var poly = { "type": "Polygon",
    "coordinates": [
        [   [-180,-90], [180,-90], [180,90], [-180,90], [-180,-90],
            [10,20], [30,40], [50,80], [10,20] ]
      ]
   }

svg.append('path')
	.datum(poly)
	.attr('d', path)
	.style("fill", "orange")
	


var multipoint = {type:"MultiPoint", coordinates:[[0,60], [20,40], [40, 20]]}

svg.append('path')
	.datum(multipoint)
	.attr('d', path)
	.style("fill", "none")
	.style("stroke", "green")



var multiline = { "type": "MultiLineString",
    "coordinates": [
        [ [100.0, 0.0], [91.0, 1.0] ],
        [ [120.0, 20.0], [123.0, 50.0] ]
      ]
    }

svg.append('path')
	.datum(multiline)
	.attr('d', path)
	.style("fill", "none")
	.style("stroke", "green")
    .style("stroke-width", 3)


var collection = { "type": "GeometryCollection",
    "geometries": [
      { "type": "Point",
        "coordinates": [80.0, 0.0]
        },
      { "type": "LineString",
        "coordinates": [ [81.0, 0.0], [70.0, 10] ]
        }
    ]
  }

svg.append('path')
	.datum(collection)
	.attr('d', path)
	.style("fill", "none")
	.style("stroke", "purple")
    .style("stroke-width", 3)