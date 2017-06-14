d3.csv('dataset.csv', (error, data) => {
    
    var byAge = d3.nest()
        .key((d) => d.Age)
        .sortKeys(d3.ascending)
        .entries(data)
    
    var min = d3.min(byAge, (d) => d3.min(d.values, (c) => c.Age) )
    
    var max = d3.max(byAge, (d) => d3.max(d.values, (c) => c.Age) )
    
    console.log(min, max)
    
})