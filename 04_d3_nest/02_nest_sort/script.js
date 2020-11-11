d3.csv('dataset.csv').then(data => {
  // this is pre-v6.0
  // var byAge = d3.nest()
  //   .key((d) => d.Age)
  //   .sortKeys(d3.ascending)
  //   .entries(data)

  var byAgeMap = d3.group(data, d => d.Age)
  var byAge = Array.from(byAgeMap, ([key, value]) => ({ key, value }))

  // sort by length values array
  byAge.sort((a, b) => d3.ascending(a.value.length, b.value.length))

  console.log(byAge)
})
