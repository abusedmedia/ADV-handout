d3.csv('dataset.csv').then(data => {
  var sumFemale = d => d3.sum(d, (c) => (c.Sex === 'F') ? 1 : 0)

  var sumMale = d => d3.sum(d, (c) => (c.Sex === 'M') ? 1 : 0)

  var mydata = d3.rollup(data,
    d => ({
      female: sumFemale(d),
      male: sumMale(d),
      athletes: d
    }),
    d => d.Sport)

  console.log(mydata)
})
