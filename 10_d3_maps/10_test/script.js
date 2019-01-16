var w = 500
var h = 500

var svg = d3.select('svg')
  .attr('width', w)
  .attr('height', h)

var proj = d3.geoMercator()
  .scale((w + 1) / 2 / Math.PI)
  .translate([w / 2, h / 2])

var path = d3.geoPath()
  .projection(proj)

var prom = [d3.json('../../datasets/geojson/countries.geo.json'),
  d3.csv('../../datasets/csv/populations.csv'),
  d3.json('../../datasets/topojson/world-atlas-50m.json'),
  d3.csv('../../datasets/geojson/worldcities.csv')]

Promise.all(prom).then(build)

function build (arr) {
  var map = arr[0]
  var pop = arr[1]
  var topo = arr[2]
  var cities = arr[3]

  map.features.forEach(d => {
    var code = d.id
    pop.forEach(c => {
      if (c['Country Code'] === code) {
        d.properties.population = c
      }
    })
  })

  console.log(map)

  var str = '2016 [YR2016]'

  var extent = d3.extent(map.features, d => {
    var res = 0
    if (d.properties.population) {
      res = parseInt(d.properties.population[str])
    }
    return res
  })
  console.log(extent)

  var colors = d3.scaleLinear()
    .domain(extent)
    .range(['red', 'blue'])

  svg.append('path')
    .attr('d', path(map))
    .style('fill', '#eee')

  var gg = svg.append('g')
    .selectAll('g')
    .data(map.features)

  var entgg = gg.enter()
    .append('g')

  entgg.append('path')
    .attr('d', d => path(d))
    .style('fill', d => {
      var col = 'green'
      if (d.properties.population) {
        var pp = parseInt(d.properties.population[str])
        col = colors(pp)
      }
      return col
    })

  entgg.append('text')
    .text(d => d.properties.name)
    .attr('x', d => {
      var c = path.centroid(d)
      return c[0]
    })
    .attr('y', d => {
      var c = path.centroid(d)
      return c[1]
    })
    .style('font-size', 6)
    .style('text-anchor', 'middle')

  gg.merge(entgg).on('click', function (d) {
    console.log(d)
  })

  var topology = topojson.feature(topo, topo.objects.land)
  console.log(topology)

  //    svg.append('path')
  //        .attr('d', path(topology))
  //        .style('fill', '#eee')
  //        .style('stroke', '#555')
  //        .style('opacity', .5)

//    svg.append('g')
//        .selectAll('circle')
//        .data(cities)
//        .enter()
//        .append('circle')
//        .attr('cx', d => proj([d.lng, d.lat])[0])
//        .attr('cy', d => proj([d.lng, d.lat])[1])
//        .attr('r', 1)
//        .style('fill', 'red')
}
