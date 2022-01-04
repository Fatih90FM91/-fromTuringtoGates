$(document).ready(function(){
 console.log($());

    // $('img').click(function() {

    //     $(this).attr("alt-pic");
    //     $(this).fadeout();
      
    // });
    let count =0;
    $('img').click(function() {
      
       

    count++;
        
            $(this).fadeOut();
            $(this).attr('src','./images/'+count+'b.jpg').fadeIn();

     if(count==3){
         count=0;
     }

        
          
    });





});