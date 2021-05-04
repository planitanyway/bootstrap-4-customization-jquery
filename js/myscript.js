  
  $(document).ready(function() {

    //let button = $('#show-me');

  //$('#show-me').html('Something else');

    //console.log(button.html());

     $('#show-me').click(function(){
        $('#new-buttons').addClass('show');
     })

     $('button').click(function(){
         $('#title').addClass('hide');
     })

     $('#remove').click(function(){
         $('#title').removeClass('red');
     })

     setTimeout(function(){
         $('#title').addClass('red');
     }, 2000);

    console.log('the whole page is loaded')
  })
  
 

  






