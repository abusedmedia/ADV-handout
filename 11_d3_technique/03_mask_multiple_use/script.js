
d3.select('body')
  .on('click', function(){
    
	
	d3.selectAll('#myMask circle')
      .transition()
      .duration(2000)
      .attr('r', 5)
      .attr('cx', 150)
	

})