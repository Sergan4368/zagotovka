$(function(){ 
$('.buttonHead').click(function(){
     $('nav').fadeIn('slow');
});
$('.slider').slick({
  arrows: true,  //стрелки
  slidesToShow: 8,  //Колличество элементов в одном слайде
  slidesToScroll: 2,  //сколько прокручивается за раз элементов
  infinite: true,   //Зацикленное перелистывание
  dots: false,    //включить точки
  autoplay: true,
  autoplaySpeed: 5000,   //интервал при автопрокрутке
  speed: 700,     //скорость перелистывания
  centerMode: false,  /*вкл./выкл. слайдер начинается со средней картинки
   .можно стилизировать ее как хочешь*/  
    variableWidth: false,  //вкл./выкл. разную ширину картинок
     responsive: [
     {
      breakpoint: 1200,     //разрешение экрана
      settings: {
        dots: false,
          slidesToShow: 6
      }
    },
    {
      breakpoint: 991,     //разрешение экрана
      settings: {
        dots: false,
          slidesToShow: 4
      }
    },
      {
      breakpoint: 660,     //разрешение экрана
      settings: {
        dots: false,
          slidesToShow: 3
      }
    },
    {
      breakpoint: 500,     //разрешение экрана
      settings: {
        dots: false,
          slidesToShow: 2
      }
    }

  ]
});


});
