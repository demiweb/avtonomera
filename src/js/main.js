/**
 * Customizer enhancements for a better user experience.
 *
 * Contains handlers to make Customizer preview reload changes asynchronously.
 * Things like site title, description, and background color changes.
 */

( function( $ ) {

    $(document).ready(function(){
        $(".scroll").on("click", function (event) {
            //отменяем стандартную обработку нажатия по ссылке
            event.preventDefault();

            //забираем идентификатор бока с атрибута href
            var id  = $(this).attr('href'),

                //узнаем высоту от начала страницы до блока на который ссылается якорь
                top = $(id).offset().top;

            //анимируем переход на расстояние - top за 1500 мс
            $('body,html').animate({scrollTop: top}, 1500);
        });


  //       $('.type-link').click(function(){
  //           $('#slider_ramk').html('');
        //  var image=$(this).find('.type-link__img img').attr('src');
        //  var text=$(this).find('.title--h5').text();
        //  var price=$(this).find('.price strong').text();
        //  var slider=$(this).attr('data-slider');
        //  $('#slider_ramk').append(slider);
        //  $('.priceform').text(price);
        //  $('.type-top__img img').attr('src',image);
        //  $('.type-top__content-title .title--h5').text(text);
  //           $('.priceforminput').val(price);
  //           $('.priceforminput').attr('data-price',price);
  //           $('.type-number').val(text);
  //           setSliders();

        // });

        function setPopupSlider() {
            function setFormElements(btn) {                
                var image=$(btn).find('.type-link__img img').attr('src');
                var text=$(btn).find('.title--h5').text();
                var price=$(btn).find('.price strong').text();
                var slider=$(btn).attr('data-slider');
                $('#slider_ramk').html(slider);
                $('.priceform').text(price);
                $('.type-top__img img').attr('src',image);
                $('.type-top__content-title .title--h5').text(text);
                $('.priceforminput').val(price);
                $('.priceforminput').attr('data-price',price);
                $('.type-number').val(text);
            }

            var popup = new Popup();
            popup.onOpen = function() {
                if(popup.name !== 'order_number') return;
                setFormElements(popup.btn);
                formSlider.init()
            };
            popup.onClose = function() {
                if(popup.name !== 'order_number') return;
                formSlider.destroy()
            };
            popup.init()
        };
        setPopupSlider();

        $('#slider_ramk').on('change','input',function(){
            var price=$('.priceforminput').attr('data-price');
            var text='';
            $('#slider_ramk ').find('input').each(function(){
                if($(this).is(":checked")){
                    price=price+parseInt($(this).val());
                    text=text+' '+$(this).attr('data-name')+'-'+$(this).val()+', ';
                }
            });
            $('.priceform').text(price);
            $('.priceforminput').val(price);
            $('.type-ramk').val(text);
        });
    });

} )( jQuery );
