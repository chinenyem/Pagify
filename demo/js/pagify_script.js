 $(document).ready(function() {


 		//init all fx
 		(function(){
	 		links();
	 		form();
	 		//detailFormatter();
	 		//table();
	 		dashboard();
	 		animation_fun()
 		})()


 		function animation_fun(){
 				$(".nav").hide()
    			$(".navlinks").hide()
 		 	    $("#1").hide()
 			$("#video video").bind('ended', function(){
   				console.log("video ended");
	   			$("video").fadeOut(2000,function(){
	      		//$("video").remove();
	      		$(".nav").fadeIn(1995)
    			$(".navlinks").fadeIn(1995)
 		 	    $("#1").fadeIn(1995)
	   			});
			})
 		}


 		

 		   // nav links functions
 		function links(){

 		  $('.navLinks').hide();
 		  $('#1').show();
		  $('nav a').click(function() {
			  $('.navLinks').hide();
			  $(this.getAttribute('href')).fadeIn("slow");
    	  });
 		}
 		  

		 //form page functions
		 function form(){


		 	var numbers = [1, 2, 3, 4, 5],
			    option = '';
			for (var i=0; i<numbers.length; i++){
			   option += '<option value="'+ numbers[i] + '">' + numbers[i] + '</option>';
			}
			$('#multiselect').append(option);
			$('#dropdown').append(option);

			
		 	$("#submit").click('.close', function() {
			 	$.each($('form input, form option:selected, form input[type=checkbox], form input[type=radio] '), function(index, formField) {
		            if($(formField).val().trim().length == 0) {
		            	console.log($.each($('form input, form option, form input[type=checkbox], form input[type=radio] '), function(){
		            		$(this).val()
		            	}));
		                toastr.info('Please Complete the Form');
		                index.stopImmediatePropagation();
		            }else {
		                toastr.info('Thank you For completing the form!');
		                index.stopImmediatePropagation();	
		            }
        		});
  			
			});
		 }

		 //table page functions
		$('#instructions').popover();
		var table = $('.table'),
        button = $('#button');
	    $(function () {
	        $(button).click(function () {
	            var ids = $("input[name=btSelectItem]:checked").map(function (row) {
	            	row = $(this).closest("tr");
	            	//console.log(row)
	                $(row).remove();
	            });

	            table.bootstrapTable('remove', {
	                field: 'firstname',
	                values: ids
	            });
	        });
	    });

		// function detailFormatter(index, row) {
		// 	console.log(row)
			
	 //        var html = [];
	 //        $.each(row, function (key, value) {
	 //            html.push('<p><b>' + key + ':</b> ' + value + '</p>');
	 //        });

	 //        return html.join('');

     //  }

 
    	//Don't have to write code manually becuase of awesome Bootstrap table!!!! search feature works
    	// and the filter works. but why write so much code when there is bootstrap table?
		//  function table(){

		// 	//display data from json on page
		// 	$.getJSON("js/name.json", function(data) {
		// 		 $.each(data, function(key, val) {
		// 		    var tr = $('<tr></tr>');
		// 		    $.each(val, function(k, v){
		// 		        $('<td>'+ v +'</td>').appendTo(tr);
		// 		    });
		// 		    tr.appendTo('.love');
		// 		});
		// 	});

		// 	 //search fx
		// 	 $("#search").keyup(function(){
		// 	 	console.log("work")
		// 	        _this = this;
		// 	        // Show only matching TR, hide rest of them
		// 	        $.each($(".table tbody").find("tr"), function() {
		// 	            console.log($(this).text());
		// 	            if( $(this).text().toLowerCase().indexOf($(_this).val().toLowerCase()) == -1)
		// 	               $(this).hide();
		// 	            else
		// 	                 $(this).show();              
		// 	        });
  //   		 });

  //   		//sorted column headers fx
  //   		//grab all header rows
		// 		$('thead th').each(function(column) {
		// 		  $(this).addClass('sortable').click(function(){
		// 		    var findSortKey = function($cell) {
		// 		      return $cell.find('.sort-key').text().toUpperCase() + ' ' + $cell.text().toUpperCase();
		// 		    };
		// 		    var sortDirection = $(this).is('.sorted-asc') ? -1 : 1;
				 
		// 		    //step back up the tree and get the rows with data
		// 		    //for sorting
		// 		    var $rows = $(this).parent().parent().parent().find('tbody tr').get();
				 
		// 		    //loop through all the rows and find 
		// 		    $.each($rows, function(index, row) {
		// 		      row.sortKey = findSortKey($(row).children('td').eq(column));
		// 		    });
				 
		// 		    //compare and sort the rows alphabetically
		// 		    $rows.sort(function(a, b) {
		// 		        if (a.sortKey < b.sortKey) return -sortDirection;
		// 		        if (a.sortKey > b.sortKey) return sortDirection;
		// 		        return 0;
		// 		    });
				 
		// 		    //add the rows in the correct order to the bottom of the table
		// 		    $.each($rows, function(index, row) {
		// 		        $('tbody').append(row);
		// 		        row.sortKey = null;
		// 		    });
				 
		// 		    //identify the column sort order
		// 		    $('th').removeClass('sorted-asc sorted-desc');
		// 		    var $sortHead = $('th').filter(':nth-child(' + (column + 1) + ')');
		// 		    sortDirection == 1 ? $sortHead.addClass('sorted-asc') : $sortHead.addClass('sorted-desc');
				 
		// 		    //identify the column to be sorted by
		// 		    $('td').removeClass('sorted')
		// 		                .filter(':nth-child(' + (column + 1) + ')')
		// 		                .addClass('sorted');
				 
		// 		    $('.visible td').removeClass('odd');
				    
		// 		  });
		// 		});


		// }

		function dashboard(){


			var date = new Date();
			var monthNames = ["January", "February", "March", "April", "May", "June",
  				"July", "August", "September", "October", "November", "December"];
			    
			var m = monthNames[date.getMonth()];
			 function hours12(datehours) { 
				return (date.getHours() + 24) % 12 || 12; 
			}
				var  millitaryt = date.getHours()
				var ampm = (millitaryt >= 12) ? "PM" : "AM";
				mins = ('0'+ date.getMinutes()).slice(-2),
				time = hours12() + ":" + mins + " " + ampm ,
				day = m + " "  + date.getDay() + " , " + date.getFullYear();

			$("#datetime").append(time +"<br>" + day);

			
			$("#dashboardsec").click(function(){
				$('.counter').each(function () {
		    	$(this).prop('Counter',0).animate({
		        Counter: $(this).text()
		    	}, {
		        	duration: 8000,
		        	easing: 'swing',
		        	step: function (now) {
		            	$(this).text(Math.ceil(now));
		        	}
		    		});
			});

			})
			


		  $('.report').hide();
 		  $('#chart1').show();
		  $('#morecharts_ul li a').click(function() {
			  $('.report').hide();
			  $(this.getAttribute('href')).fadeIn("slow");
    	  });
		}



		  $('.feeder').hide();
 		  $('#feed1').show();
		  $('#Feed_ul li a').click(function() {
			  $('.feeder').hide();
			  $(this.getAttribute('href')).fadeIn("slow");
    	  });
 		


      });
    