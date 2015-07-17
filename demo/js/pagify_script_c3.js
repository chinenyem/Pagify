$(document).ready(function(){
	//chart1
	var chart = c3.generate({
		    bindto: '#chart1',
		    size: {
  				width: 540,
  				height: 450
			},
			
		    data: {
		      columns: [
		        ['data1', 30, 200, 100, 400, 150, 250],
		        ['data2', 50, 20, 10, 40, 15, 25]
		      ]
		    }
    });

	//chart2
	var chart = c3.generate({
		    bindto: '#chart2',
		    size: {
  				width: 540,
  				height: 450
			},
			
		    data: {
		      columns: [
		        ['data1', 30, 200, 100, 400, 150, 250],
		        ['data2', 50, 20, 10, 40, 15, 25]
		      ],
			    types: {
		            data1: 'area',
		            data2: 'area-spline'
	        	}

		    }
    });

	//chart3
	var chart = c3.generate({
		    bindto: '#chart3',
		    size: {
  				width: 540,
  				height: 450
			},
			
		    data: {
		      columns: [
		        ['data1', 30, 200, 100, 400, 150, 250],
		        ['data2', 50, 20, 10, 40, 15, 25]
		      ],
			    type: 'pie'
	        	
		    }
    });



    //chart5
    var chart = c3.generate({
    	bindto: '#chart5',
    	size: {
  				width: 540,
  				height: 550
			},
	    data: {
	        columns: [
	            ['data1', -30, 200, 200, 400, -150, 250],
	            ['data2', 130, 100, -100, 200, -150, 50],
	            ['data3', -230, 200, 200, -300, 250, 250]
	        ],
	        type: 'bar',
	        groups: [
	            ['data1', 'data2']
	        ]
	    },
	    grid: {
	        y: {
	            lines: [{value:0}]
	        }
	    }
	});

	var chart = c3.generate({
		bindto: '#chart6',
		size: {
  				width: 440,
  				height: 430
			},
	    data: {
	        columns: [
	            ['data1', 30],
	            ['data2', 120],
	        ],
	        type : 'donut'
	    },
	    donut: {
	        title: "Iris Petal Width"
	    }
	});




})