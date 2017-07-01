### Center Map programmatically

You need to calculate the bounding box in geo system.

If you are using the topoJSON format, you need to get the features before:

	var features = topojson.object(data, data.objects.items).geometries

Calculate the min Longitude:

	var minLon = d3.min(map.features, function(d){
				var res = Math.min(d.coordinates[0][0][0], d.coordinates[0][1][0])
				return res;
			});

Calculate the max Longitude:

	var maxLon = d3.max(map.features, function(d){
				var res = Math.max(d.coordinates[0][0][0], d.coordinates[0][1][0])
				return res;
			});

And the top Latitude:

	var topLat = d3.max(map.features, function(d){
				var res = Math.max(d..coordinates[0][0][1], d.coordinates[0][1][1])
				return res;
			});

Define the viewport size:

	var w_viewport = 400;
	var scale = 360*w_viewport / (maxLon-minLon);

Configure the projection object:

	var projection = d3.geo.mercator()

	projection.scale(scale);

	projection.translate([0,0]);

	var translate = projection([minLon, topLat])

	projection.translate([translate[0]*-1, translate[1]*-1]);
