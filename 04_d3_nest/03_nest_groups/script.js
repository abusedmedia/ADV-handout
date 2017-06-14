d3.csv('dataset.csv', function (error, data) {
    
    var res = d3.nest()
		.key(function(d){
			if( d.Age < 15 ){
				return " - 15";
			}else if( 15 <= d.Age && d.Age < 20 ){
				return "15 - 20";
			}else if( 20 <= d.Age && d.Age < 30 ){
				return "20 - 30";
			}else if( 30 <= d.Age && d.Age < 40 ){
				return "30 - 40";
			}else if( 40 <= d.Age  ){
				return "40 - ";
			}else{
				return "Unknown";
			}
		})
		// sort the  keys
		.sortKeys(d3.ascending)
		// sort the values (leafs) by Age
		.sortValues(function(a, b){
			return (a.Age - b.Age)>0 ? -1 : 1;
		})
		.entries(data)
    
    
    console.log(res)
    
})