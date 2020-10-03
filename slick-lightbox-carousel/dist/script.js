$(document).ready(function(){
  
$('.your-class1').slick({
    dots : true,
    slidesToShow :2,
    arrows:true,
    responsive: [

      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows:true
        }
      }
    ]
  });  

});


$('.your-class1').slickLightbox({
  itemSelector        : 'a',
  arrows              : true,
  navigateByKeyboard  : true
});