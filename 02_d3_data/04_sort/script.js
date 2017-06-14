d3.csv('dataset.csv', (d, i) => {
    
    return d
    
},  (error, data) => {
    
    
    // sort by property in array
    data.sort( (a, b) => d3.ascending(a.Age, b.Age) )
    
    console.log(data)
    
})