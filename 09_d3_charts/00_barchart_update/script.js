
var widthGraph = 200;
var heightGraph = 150;

var svg = d3.select('svg')

svg.append('g')
	.attr('transform', 'translate(10,10)')


var mydataset = d3.range(10).map(function(){
    return Math.random();
})

var bar_mapx = d3.scaleLinear()
			.domain([0, mydataset.length])
			.range([0, widthGraph])
			
var bar_mapy = d3.scaleLinear()
			.domain([0, 1])
			.range([0, heightGraph])



svg.on('click', function(){
	var newdata = d3.range(10).map(function(){
		return Math.random();
	})
    console.log(newdata)
    drawChart(newdata)    
});




function drawChart(data){
    
    var objects = svg.selectAll('rect')
		.data(data)

    objects.enter()
		.append('rect')
		.attr('x', function(d, i){
			return bar_mapx(i)
		})
		.attr('y', heightGraph)
		.attr('height', 0.1)
		.attr('width', widthGraph/data.length-1)
		.style('fill', '#444')
        
	
	objects.transition()
	    .duration(2000)
        .delay(function(d, i){
            return 100*i
        })
	    .attr('height', function(d){
	    	return bar_mapy(d);
	    })
	    .attr('y', function(d){
	    	return heightGraph-bar_mapy(d);
	    })
    
}



drawChart(mydataset)