d3.csv('dataset.csv', (d, i) => {
    
    // you can fix your dataset in this function
    console.log(d, i)
    
    // lets say we need to add ew properties
    d.Male = d.Sex == 'M'
    d.Female = d.Sex == 'S'
    
    // quick way to convert string value to real number
    d.Age = +d.Age
    
    // or fix some other properties
    d.Medals = (d.Medals == '') ? null : d.Medals
    
    return d
    
},  (error, data) => {
    
    // here the dataset with the above fixes
    console.log(data)

})