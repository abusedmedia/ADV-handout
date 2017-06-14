d3.csv('dataset.csv', function (error, data) {
    
    var byAge = d3.nest()
        .key((d) => d.Age)
        .sortKeys(d3.ascending)
        .entries(data)
    
    // sort by length values array
    byAge.sort( (a, b) => d3.ascending(a.values.length, b.values.length) )
    
    console.log(byAge)
    
})