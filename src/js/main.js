$(document).ready(function(){
		
	function setEqualHeight( objj ) {

	   var maxHeight = -1;

	   $(objj).each(function() {
	     maxHeight = maxHeight > $(this).height() ? maxHeight : $(this).height();
	   });

	   $(objj).each(function() {
	     $(this).height(maxHeight);
	   });

	}


	setEqualHeight('.testim__cont-1 .testim__txt');
	setEqualHeight('.testim__cont-2 .testim__txt');
	// setEqualHeight('.testim__cont-2 .testim__txt');

	$(window).resize(function(){
	  setEqualHeight('.testim__cont-1 .testim__txt');
		setEqualHeight('.testim__cont-2 .testim__txt');
	});

});





$(window).on('load',function(){
	$('body').addClass('loaded');
});