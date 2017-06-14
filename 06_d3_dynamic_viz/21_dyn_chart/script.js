var data = d3.range(10);

console.log(data)

function updateViz(){

    // the data-join contract
    var elements = d3.select('svg')
        .selectAll('circle')
        .data(data)

    // the element creation logic
    elements.enter()
        .append('circle')
        .attr('r', 0)
        .attr('cx', function(d, i){
            return i*20;
        })
        .attr('cy', 50)


    // the element update logic
    elements.transition()
        .duration(1000)
        .attr('r', function(d, i){
            return d;
        })


    // the element remove logic
    elements.exit()
        .remove()
}



setInterval(function(){

    data.push( Math.random()*10 )
    console.log(data);

    data.splice(0, 1);

    updateViz();

}, 1000);