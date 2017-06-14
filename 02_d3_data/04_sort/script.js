d3.csv('dataset.csv', function(d, i){
    
    return d
    
}, function (error, data) {
    
    
    // sort by property in array
    data.sort(function(a, b){
        return d3.ascending(a.Age, b.Age);
    })
    
    console.log(data)
    
})