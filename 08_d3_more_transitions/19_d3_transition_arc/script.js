var arc = d3.arc()
  .innerRadius(10)
  .outerRadius(50)

var arcTween = function(a) {
	 var i = d3.interpolate(this._current, a);
	 this._current = i(0);
	 return function(t) {
		 return arc(i(t));
	 };
 };

var path = d3.select('svg')
  .append('g')
  .attr('transform', 'translate(100,100)')
  .append('path')
  .datum({startAngle:0, endAngle:0})
  .each(function(d) {
	this._current = d;
  })
  
path.datum({startAngle:0, endAngle:Math.PI*2})
   .transition()
   .duration(2000)
   .attrTween('d', arcTween);



path.on('click', function(d){
	
	path.datum({startAngle:0, endAngle:Math.random()*Math.PI*2})
     .transition()
     .duration(2000)
	 .ease(d3.easeExpInOut)
     .attrTween('d', arcTween);
	
})