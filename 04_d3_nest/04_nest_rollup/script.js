d3.csv('dataset.csv', function (error, data) {
    
    var sumFemale = function(d){
        return d3.sum(d, function(c){
            return (c.Sex == 'F') ? 1 : 0;
        })
    }

    var sumMale = function(d){
        return d3.sum(d, function(c){
            return (c.Sex == 'M') ? 1 : 0;
        })
    }

    var mydata = d3.nest()
        .key(function(d){
            return d.Sport;
        })
        .sortKeys(d3.ascending)
        .rollup(function(d){
            return {
                female: sumFemale(d),
                male: sumMale(d),
                athletes: d
            }
        })
        .entries(data)
    
    
    console.log(mydata)
    
})