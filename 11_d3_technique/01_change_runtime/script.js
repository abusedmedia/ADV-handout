
d3.select('body')
  .on('click', function(){
    
	
	d3.select('#mask circle')
      .transition()
      .duration(2000)
      .attr('r', Math.random()*50)

})