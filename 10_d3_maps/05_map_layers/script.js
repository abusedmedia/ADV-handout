
var w = 600
var h = 600

// select the svg container
var svg = d3.select('svg')
  .attr('width', w)
  .attr('height', h)

// create the projection system
// mercator
// orthographic
// stereographic
// equirectangular
var proj = d3.geoMercator()
  .scale((w + 1) / 2 / Math.PI)
  .translate([w / 2, h / 2])

// create the path generator
// using the projection system
var path = d3.geoPath()
  .projection(proj)

// load the geoJSON US description file and display it
d3.json('../../datasets/geojson/oceans.geo.json').then(map1 => {
  svg.selectAll('.ocean')
    .data(map1.features)
    .enter()
    .append('path')
    .attr('class', 'ocean')
    .attr('d', path)
    .style('stroke', 'none')
    .style('fill', 'skyblue')

  d3.json('../../datasets/geojson/cities.geo.json').then(map2 => {
    svg.selectAll('.cities')
      .data(map2.features)
      .enter()
      .append('path')
      .attr('class', 'cities')
      .attr('d', path)
      .style('stroke', 'red')
      .style('fill', 'none')
  })
})
