console.log('app.js loaded');

$(document).ready(function(){
	$('.delete-btn').click(function(e){
		e.preventDefault();
		var url = $(this).attr('href');
	 	$.ajax({
			method: "DELETE",
			url: url
		}).done(function(data){
			// console.log('message:', data);
			window.location = '/fruit';
		}).fail(function(err){
			console.log('error message:', err);
		});
	});

 $('#updateform').submit(function(e){
   	e.preventDefault();
   	var url = $(this).attr('action');
    console.log('about to submit a PUT req', url );
	
       $.ajax({
      url: url,
      method: 'PUT',
     // data: {name: name, price: price, image:image}
    	data: $(this).serialize()
    }).done(function(res){
      console.log('success', res);
      window.location= '/fruit';
    }).fail(function(err){
      console.log('error', err);
   });
  });

	$('.delete-product').click(function(e){
		e.preventDefault();
		var url = $(this).attr('href');
	 	$.ajax({
			method: "DELETE",
			url: url
		}).done(function(data){
			// console.log('message:', data);
			window.location = '/cart';
		}).fail(function(err){
			console.log('error message:', err);
		});
	});



	$('.cart').click(function(e){
		e.preventDefault();
		console.log(this);
		let name = this.getAttribute('data-name');
		let price = this.getAttribute('data-price');
		var url = "/cart";
		var currentBtn = this;
		$.ajax({
			method: "POST",
			url: url,
			data: {name: name, price: price}
		}).done(function(data){
			console.log($(currentBtn).next().prop("tagName"));
			if($(currentBtn).next().prop("tagName") == 'BR'){
				$("<span>Successfully add to cart</span>").insertAfter(currentBtn);
			}
		}).fail(function(err){
			console.log('error message:', err);
		});
	});
});

