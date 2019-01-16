d3.csv('dataset.csv').then(data => {
  var sumFemale = (d) => d3.sum(d, (c) => (c.Sex == 'F') ? 1 : 0)

  var sumMale = (d) => d3.sum(d, (c) => (c.Sex == 'M') ? 1 : 0)

  var mydata = d3.nest()
    .key((d) => d.Sport)
    .sortKeys(d3.ascending)
    .rollup((d) => {
      return {
        female: sumFemale(d),
        male: sumMale(d),
        athletes: d
      }
    })
    .entries(data)

  console.log(mydata)
})
