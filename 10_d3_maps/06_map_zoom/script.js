var w = 500;
var h = 400;

// select the svg container
var svg = d3.select('svg')
    .attr('width', w)
    .attr('height', h)

// create the projection system
var proj = d3.geoAlbersUsa()
    .scale(500)
    .translate([w / 2, h / 2])


// create the path generator
// using the projection system
var path = d3.geoPath()
    .projection(proj)



// load a geojson us map and display it
d3.json('../../datasets/geojson/us.geo.json', map => {

    console.log(map)
    // you can see now we are draw separate paths, one for each feature

    var isZoomed = false;

    var myMap = svg.selectAll('path')
        .data(map.features)
        .enter()
        .append('path')
        .attr('d', path)
        .style("fill", "#555")
        .on('click', clicked)



    var centered;

    function clicked(d) {
        var x, y, k;

        if (d && centered !== d) {
            var centroid = path.centroid(d);
            x = centroid[0];
            y = centroid[1];
            k = 4;
            centered = d;
        } else {
            x = w / 2;
            y = h / 2;
            k = 1;
            centered = null;
        }

        myMap.selectAll("path")
            .classed("active", (d) => d === centered);

        myMap.transition()
            .duration(750)
            .attr("transform", `translate(${w / 2},${h / 2}) scale(${k}) translate(${-x},${-y})`)
            .style("stroke-width", 1.5 / k + "px");
    }

});