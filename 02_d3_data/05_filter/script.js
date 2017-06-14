d3.csv('dataset.csv', (d, i) => d, (error, data) => {
    
    // new dataset filtered using a condition
    var filtered = data.filter( (a, b) => a.Age > 25 )
    
    console.log(data.length, filtered.length)
    
})