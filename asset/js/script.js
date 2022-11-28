//navbar
$('.hamburger').click(()=>{
    $('.hamburger i').toggleClass('bx-menu bx-menu-alt-right');
    $('.nav_menu').toggleClass('active_nav_menu');
})

//destination_swiper
let width = screen.width;
let slideIndex = 3;
let padding = '150px'
if(width <= 912){
    slideIndex = 1;
    padding = '0px'
}
$('.destination_swiper').slick({
    infinite: true,
    slidesToShow: slideIndex,
    centerMode: true,
    centerPadding: padding,
    arrows: false,
    focusOnSelect: true,

});

//explore_swiper
$('.button_box').slick({
  infinite: true,
  variableWidth: true,
  focusOnSelect: true,
  arrows: false,
});

//destination_swiper
$('.location_slider').slick({
    infinite: true,
    slidesToShow: slideIndex,
    centerMode: true,
    centerPadding: '0',
    arrows: false,
    focusOnSelect: true,
    dots: true,
});

//testimonial_swiper
$('.testimonial_swiper').slick({
  infinite: true,
  arrows: false,
  dots: true,
});

//accordion
$(function () {
    var Accordion = function (el, multiple) {
      this.el = el || {};
      this.multiple = multiple || false;
  
      // Variables privadas
      var links = this.el.find(".link");
      // Evento
      links.on("click", { el: this.el, multiple: this.multiple }, this.dropdown);
    };
  
    Accordion.prototype.dropdown = function (e) {
      var $el = e.data.el;
      ($this = $(this)), ($next = $this.next());
  
      $next.slideToggle();
      $this.parent().toggleClass("open");
  
      if (!e.data.multiple) {
        $el.find(".submenu").not($next).slideUp().parent().removeClass("open");
      }
    };
  
    var accordion = new Accordion($("#accordion"), false);
  });
  