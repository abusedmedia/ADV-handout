d3.csv('dataset.csv', function (error, data) {
    
    var byAge = d3.nest()
        .key(function(d){
            return d.Age  
        })
        .sortKeys(d3.ascending)
        .entries(data)
    
    
    
    var min = d3.min(byAge, function(d){
        return d3.min(d.values, function(c){
            return c.Age;
        })
    })
    
    var max = d3.max(byAge, function(d){
        return d3.max(d.values, function(c){
            return c.Age;
        })
    })
    
    
    console.log(min, max)
    
})