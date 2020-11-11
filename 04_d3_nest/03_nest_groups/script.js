d3.csv('dataset.csv').then(data => {
  var resMap = d3.group(data, (d) => {
    if (d.Age < 15) {
      return ' - 15'
    } else if (d.Age >= 15 && d.Age < 20) {
      return '15 - 20'
    } else if (d.Age >= 20 && d.Age < 30) {
      return '20 - 30'
    } else if (d.Age >= 30 && d.Age < 40) {
      return '30 - 40'
    } else if (d.Age >= 40) {
      return '40 - '
    } else {
      return 'Unknown'
    }
  })

  var res = Array.from(resMap, ([key, value]) => ({ key, value }))

  console.log(res)
})
