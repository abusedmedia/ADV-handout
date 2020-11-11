d3.csv('dataset.csv').then(data => {
  // this is pre-v6.0
  // var byAge = d3.nest()
  //   .key((d) => d.Age)
  //   .sortKeys(d3.ascending)
  //   .entries(data)

  var byAgeMap = d3.group(data, d => d.Age)
  var byAge = Array.from(byAgeMap, ([key, value]) => ({ key, value }))

  byAge.sort((a, b) => d3.ascending(a.key, b.key))

  var min = d3.min(byAge, (d) => d3.min(d.value, (c) => c.Age))

  var max = d3.max(byAge, (d) => d3.max(d.value, (c) => c.Age))

  console.log(min, max)
})
