d3.csv('dataset.csv')
  .then(data => {
    data.sort((a, b) => d3.ascending(a.Age, b.Age))
    console.log(data)
  })
