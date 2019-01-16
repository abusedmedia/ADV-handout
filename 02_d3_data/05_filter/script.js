d3.csv('dataset.csv')
  .then(data => {
    var filtered = data.filter((a, b) => a.Age > 25)
    console.log('Total:', data.length, 'Filtered:', filtered.length)
  })
