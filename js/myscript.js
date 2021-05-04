  
  $(document).ready(function() {

    //let button = $('#show-me');

  //$('#show-me').html('Something else');

    //console.log(button.html());

     $('#show-me').click(function(){
        $('#new-buttons').addClass('show');
     })

     $('#get-started').click(function(){
        $('#blue-block').removeClass('bg-primary');
        $('#blue-content').removeClass('text-white');
    })

    setTimeout(function(){
        $('#shop-button').fadeIn(5000);
    })

    console.log('the whole page is loaded')
  })
  
 

  






