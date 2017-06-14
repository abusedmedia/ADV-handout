d3.csv('dataset.csv', function(d, i){
    
    return d
    
}, function (error, data) {
    
    // new dataset filtered using a condition
    var filtered = data.filter(function(a, b){
        return a.Age > 25  
    })
    
    console.log(data.length, filtered.length)
    
})