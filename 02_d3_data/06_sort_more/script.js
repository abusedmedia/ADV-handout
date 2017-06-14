d3.csv('dataset.csv', function(d, i){
    
    return d
    
}, function (error, data) {
    
    
    // sort by two different properties in array
    data.sort(function(a, b){
        if(a.Age == b.Age){
            return d3.descending(a.Height, b.Height) 
        }
        return d3.ascending(a.Age, b.Age) 
    })
    
    console.log(data)
    
})