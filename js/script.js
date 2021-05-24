$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1200,
        
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/chev_lef.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/chev_rig.svg"></button>',
        responsive: [
            {
            breakpoint: 992,
            settings: {
                dots: true,
                arrows: false,
              
            }
            }

        ]
      });

      $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
          .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
          .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
      });

    $('.catalog-item__link').each(function(i){
        $(this).on('click',function(e){
            e.preventDefault();
            $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
            $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
        })
      })

      $('.catalog-item__back').each(function(i){
        $(this).on('click',function(e){
            e.preventDefault();
            $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
            $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
        })
      })


      //modall

            $('[data-modal=consulting]').on('click', function() {
            $('.overlay, #consulting').fadeIn('slow');
        });

            $('.modall__close').on('click', function() {
            $('.overlay, #consulting, #thanks, #order').fadeOut('slow');
        });

            $('.catalog-items__btn').each(function(i) {
            $(this).on('click', function() {
            $('#order .modall__descr').text($('.catalog-item__subtitle').eq(i).text());
            $('.overlay, #order').fadeIn('slow');

                })

            });

            


            function valideForms(form){
                $(form).validate({
                    rules: {
                        name: {
                            required: true,
                            minlength: 2
                          },
                        phone: "required",
                        email: {
                            required: true,
                            email: true
                        }
                    },
                    messages: {
                        name: {
                            required: "Пожалуйста, введите свое имя.",
                            minlength: jQuery.validator.format("Введите {0} символа!")
                          },
                        phone: "Пожалуйста, введите свой номер телефона.",
                        email: {
                          required: "Пожалуйста, введите свою электронную почту.",
                          email: "Неправильно введен адресс почты"
                        }
                      }
                });

            };

            valideForms('#consulting-form');
            valideForms('#consulting form');
            valideForms('#order form');

            $('input[name=phone]').mask("+7(999)999-99-99");

            //настройка отправки эл писем

            $('form').submit(function(e) {
              e.preventDefault();
              $.ajax({
                type: "POST",
                URL: "mailer/smart.php",
                data: $(this).serialize()
              }).done (function() {
                $(this).find("input").val("");
                $('#consulting, #order').fadeOut();
                $('.overlay, #thanks').fadeIn('slow');


                $('form').trigger('reset');
              });
              return false;

            }); 
            
            $(window).scroll(function(){
              if($(this).scrollTop()>800) {
                $('.pageup').fadeIn();
              }else {
                  $('.pageup').fadeOut();
                
              }
            });

            $("a[href^='#']").click(function(){
              const _href = $(this).attr("href");
              $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
              return false;
             });

             new WOW().init();

         });

          
      
    
  