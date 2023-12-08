//===Any global variables whose scope will need to be across the entire file...
var currentId;

var Global = {
	currentId: undefined,
	action: 'create',
	user: {
		userName: 'Tristan',
		email: 'trsxtnn@gmail.com',
		extension: '2470'
	}
};


//===My document.ready() handler...
$(document).ready(function(){

	//=== do some code stuff...

	//===finally, bind my events...
	bindEvents();
});

//===This function handles event binding for anything on the page....
function bindEvents(){
	// So, something simply like binding to a static anchor tag...
	$('#aSomeLink').on('click', function(event){


		$a = $(this);	// note, prefixing the variable with bling ($) is just a 
						// nice way for us to know that it is a jQuery object...

		// Or, I could do this...
		$a = $(event.target);

		// I could also get the id of the link like so:
		var id = event.target.id;

		// not a big difference, but it is nice to use native JavaScript when you can. 
	});


	$('#myTable').on('click', 'a[rel=delete],a[rel=edit]', function(event){
		$a = $(event.target);

		switch($a.attr('rel')){
			case 'edit':

				// do some stuff or call a function...
				
				break;
			case 'delete':
				// do some stuff or call a function...

				break;
		}
	});

	
}

//===Then everything below this is all of the other declared functions for my page...