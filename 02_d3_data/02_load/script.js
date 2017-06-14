d3.csv('dataset.csv', function (error, data) {
    
    // check whether there's an error while loading the file
    if(error) console.log(error.responseText)
    
    // otherwise do something with it
    console.log(data)

})