d3.csv('dataset.csv', function (error, data) {
    
    var byAge = d3.nest()
        .key(function(d){
            return d.Age  
        })
        .sortKeys(d3.ascending)
        .entries(data)
    
    // sort by length values array
    byAge.sort(function(a, b){
        return d3.ascending(a.values.length, b.values.length)
    })
    
    console.log(byAge)
    
})