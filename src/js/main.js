$(document).ready(function(){
	
	$('body').addClass('loaded');

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
	

	$(window).resize(function(){
	  setEqualHeight('.testim__cont-1 .testim__txt');
		setEqualHeight('.testim__cont-2 .testim__txt');
	});


	//ACCORDEON
	(function () {
		var acc = document.getElementsByClassName("accordion");
		var i;

		for (i = 0; i < acc.length; i++) {
		  acc[i].onclick = function() {
		    this.classList.toggle("active");
		    var panel = this.nextElementSibling;
		    if (panel.style.maxHeight){
		      panel.style.maxHeight = null;
		    } else {
		      panel.style.maxHeight = panel.scrollHeight + "px";
		    } 
		  }
		}
	})(); 


});
