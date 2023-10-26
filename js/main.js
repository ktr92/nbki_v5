$(document).ready(function () {
  $(".contenttoggler").on("click", function (e) {
    $(".hiddenemtro").slideToggle()
  })
  $(".hiddenemtro__close").on("click", function (e) {
    $(".hiddenemtro").slideToggle()
  })

  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $(".totop").fadeIn()
    } else {
      $(".totop").fadeOut()
    }
  })

  $(".changelang__button").on("click", function (e) {
    e.preventDefault()
    $(this).siblings(".changelang__more").slideToggle()
  })
  $(".tabstoggler__btn").on("click", function (e) {
    e.preventDefault()
    $(this).closest(".tabstoggler").toggleClass("active")
  })
  $(".tablecolor__scroller").on("click", function (e) {
    $(this).closest(".tablecolor").animate({ scrollLeft: "+=180px" })
  })
  $('[data-click="corp__links"]').on("click", function (e) {
    e.preventDefault()
    $('[data-toggle="corp__links"]').toggle()
    $('[data-place="corp__links"]').toggle()
  })

  if ($(window).width() <= 999) {
    $('[data-slider="slider_card_xs"]').each(function () {
      $(this).not(".slick-initialized").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        fade: true,
      })
    })
  }

  if ($(window).width() <= 999) {
    $(".itemcardlist__header").each(function (e) {
      $(this).on("click", function (e) {
        $(this).toggleClass("active")
        $(this).siblings(".itemcardlist--acc").slideToggle()
        $(this)
          .siblings(".itemcardlist--acc")
          .find('[data-slider="slider_card_acc"]')
          .not(".slick-initialized")
          .slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            fade: true,
          })
      })
    })
  }

  $("a.scrollTo").click(function () {
    var destination = $($(this).attr("href")).offset().top - 30
    $("html:not(:animated),body:not(:animated)").animate(
      {
        scrollTop: destination,
      },
      400
    )
    return false
  })

  /*
    $('.changelang__button').on('click', function(e) {
        e.preventDefault()
        $(this).siblings('.changelang__more').slideToggle()
    })
 */

  $(".js-rsmainslider").each(function () {
    $(this).slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 6000,
      prevArrow: ".rsmainslider__arrowleft",
      nextArrow: ".rsmainslider__arrowright",
      dots: true,
      fade: true,
      speed: 400,
      cssEase: "linear",
    })
  })
  $("[data-slider='infslider_v5']").each(function () {
    $(this).slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      dots: true,
      responsive: [
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    })
  })

  $(".js-reviews").each(function () {
    $(this).slick({
      infinite: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 6000,
      arrows: false,
      dots: false,
      fade: false,
      swipe: true,
      variableWidth: true,
      responsive: [
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            variableWidth: false,
          },
        },
      ],
    })
  })
  $(".js-rspartners").each(function () {
    $(this).slick({
      infinite: false,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 10000,
      arrows: false,
      dots: false,
      fade: false,
      swipe: true,
      variableWidth: true,
      responsive: [
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
      ],
    })
  })

  const $howslider = $(".howslider__slider")
  const $progressBar = $(".progress")

  $howslider.each(function () {
    $(this).slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      arrows: false,
      dots: true,
      fade: true,
    })
  })

  const $points = $(".slick-dots li")

  function setProgress(index) {
    const calc = (index / ($howslider.slick("getSlick").slideCount - 1)) * 100
    $progressBar
      .css("background-size", `${calc}% 100%`)
      .attr("aria-valuenow", calc)

    $points.each(function () {
      if ($(this).index() < index + 1) {
        $(this).addClass("slick-passed")
      } else {
        $(this).removeClass("slick-passed")
      }
    })
  }

  $howslider.on(
    "beforeChange",
    function (event, slick, currentSlide, nextSlide) {
      setProgress(nextSlide)
    }
  )
  setProgress(0)

  $(".maptooltip__close").on("click", function (e) {
    $(".maptooltip").hide()
  })

  $("a.showmaptooltip").on("click", function (e) {
    e.preventDefault()
    $(".maptooltip").hide()
    $(".maptooltip_how").show()
  })

  $(".showmapaddress").on("click", function (e) {
    e.preventDefault()
    $(".maptooltip").hide()
    $(".maptooltip_address").show()
  })

  // ховер на верхний текст
  $(".howtabs__passp_1").on("mouseover", function (e) {
    $(".howtabs__passp").addClass("el-inactive ")
    $(this).removeClass("el-inactive")
    $(".howtabs__item2").addClass("before-inactive ")
  })

  $(".howtabs__passp_1").on("mouseout", function (e) {
    $(".howtabs__passp").removeClass("el-inactive ")
    $(".howtabs__item2").removeClass("before-inactive ")
  })

  // ховер на нижний текст
  $(".howtabs__passp_2").on("mouseover", function (e) {
    $(".howtabs__passp").addClass("el-inactive ")
    $(this).removeClass("el-inactive")
    $(".howtabs__item2").addClass("after-inactive ")
  })

  $(".howtabs__passp_2").on("mouseout", function (e) {
    $(".howtabs__passp").removeClass("el-inactive ")
    $(".howtabs__item2").removeClass("after-inactive ")
  })

  // ховер на картинку 1
  $(".howtabs__item1").on("mouseover", function (e) {
    $(".howtabs__passp").addClass("el-inactive ")
    $(this).addClass("pseudo-inactive")
    $(".howtabs__item2").addClass("pseudo-inactive")
  })

  $(".howtabs__item1").on("mouseout", function (e) {
    $(".howtabs__passp").removeClass("el-inactive ")
    $(this).removeClass("pseudo-inactive")
    $(".howtabs__item2").removeClass("pseudo-inactive")
  })

  // ховер на картинку 2
  $(".howtabs__item2").on("mouseover", function (e) {
    $(".howtabs__passp").addClass("el-inactive ")
    $(this).addClass("pseudo-inactive")
  })

  $(".howtabs__item2").on("mouseout", function (e) {
    $(".howtabs__passp").removeClass("el-inactive ")
    $(this).removeClass("pseudo-inactive")
  })

  $(".header_landing .mobilemenu__menu a").on("click", function (e) {
    $(".mobilemenu").hide()
  })
  $(".headertop__link a").on("click", function (e) {
    e.preventDefault()
    $(this).toggleClass("clicked")
    $(".headertop__dropdown").slideToggle()
  })

  $(".js-accord").on("click", function (e) {
    $(this).toggleClass("active")
    $(this).closest(".accordmenu").find(".accordmenu__content").slideToggle()
  })

  $(".guideslider__slider").each(function () {
    $(this).slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 3000,
      arrows: false,
      dots: true,
      fade: true,
      customPaging: function (slider, i) {
        var thumb = $(slider.$slides[i]).data()
        return `<a>${+(i + 1)}</a>`
      },
    })
  })

  $(".guideslider__slider .slick-dots li").on("mouseover", function () {
    $(".guideslider__slider").slick("slickGoTo", $(this).index())
  })
  ;(function ($) {
    $(function () {
      $(".howtabs__ul ul").on("click", "li:not(.active)", function () {
        $(this)
          .addClass("active")
          .siblings()
          .removeClass("active")
          .closest("div.howtabs__wrapper")
          .find("div.howtabs__content")
          .removeClass("active")
          .eq($(this).index())
          .addClass("active")
      })
    })

    //auto-rotate every 5 seconds
    var tabs = $(".howtabs__ul ul li")

    const ftabs = function () {
      //get currently-on tab
      var onTab = tabs.filter(".active")

      //click either next tab, if exists, else first one
      var nextTab =
        onTab.index() < tabs.length - 1 ? onTab.next() : tabs.first()
      nextTab.click()
    }

    const chagetabs = setInterval(ftabs, 4000)

    $(".howtabs__wrapper").on("mouseover", function () {
      clearInterval(chagetabs)
    })
  })(jQuery)

  new WOW().init()

  $(".kisteps__slider").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    arrows: false,
    fade: true,
    dots: false,
    responsive: [
      {
        breakpoint: 999,
        settings: "unslick",
      },
    ],
  })

  $(".kislide__image").click(function (e) {
    $(this)
      .closest(".kisteps__container")
      .find(".slick-slider")
      .slick("slickNext")
  })

  $(".anchor-link").click(function (e) {
    $(".mobilemenu").hide()
  })

  $(".slideRight").click(function (e) {
    $(this).parent().parent().find(".slick-slider").slick("slickNext")
  })
  $(".slideLeft").click(function (e) {
    $(this).parent().parent().find(".slick-slider").slick("slickPrev")
  })

  $(".newsslider__slider").each(function () {
    var slToShow = 3

    var slcount = $(this).find(".newscard__slide").length - slToShow + 1

    var $slider = $(this)
    var $progressBar = $(this).parent().find(".progress")
    var $progressBarLabel = $(this).parent().find(".slider__label")

    var initcalc = (1.0 / slcount) * 100

    $progressBar.css("width", initcalc + "%").attr("aria-valuenow", initcalc)

    $slider.on(
      "beforeChange",
      function (event, slick, currentSlide, nextSlide) {
        var calc = (nextSlide / slcount) * 100

        $progressBar
          .css("left", calc + "%")
          .attr("aria-valuenow", initcalc + calc)
      }
    )

    $(this).on("init reInit", function (event, slick) {
      var amount = $(this).find(".newscard__slide").length
      $(this).parent().find(".range").attr("max", amount)
    })

    $(this).on("afterChange", function (e, slick, currentSlide) {
      $(this)
        .parent()
        .find(".range")
        .val(currentSlide + 1)
    })

    $(this)
      .parent()
      .find(".range")
      .on("input change", function () {
        $(this).slick("slickGoTo", $(this).value - 1)
      })

    $(this).slick({
      infinite: false,
      slidesToShow: slToShow,
      slidesToScroll: 1,
      arrows: false,
      centerPadding: "0",
      autoplay: true,
      autoplaySpeed: 3000,
      dots: false,
    })
  })

  $(".partnersslider__slider").each(function () {
    var slToShow = 4

    var slcount = $(this).find(".partnersslider__slide").length - slToShow + 1

    var $slider = $(this)
    var $progressBar = $(this).parent().find(".progress")
    var $progressBarLabel = $(this).parent().find(".slider__label")

    var initcalc = (1.0 / slcount) * 100

    $progressBar.css("width", initcalc + "%").attr("aria-valuenow", initcalc)

    $slider.on(
      "beforeChange",
      function (event, slick, currentSlide, nextSlide) {
        var calc = (nextSlide / slcount) * 100

        $progressBar
          .css("width", initcalc + calc + "%")
          .attr("aria-valuenow", initcalc + calc)
      }
    )

    $(this).slick({
      infinite: false,
      slidesToShow: slToShow,
      slidesToScroll: 1,
      arrows: false,
      centerPadding: "0",
      autoplay: true,
      autoplaySpeed: 3000,

      dots: false,
      responsive: [
        {
          breakpoint: 720,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
      ],
    })
  })

  $(".faqmenu").on("click", function () {
    $(this).closest(".faqnav").find("li").show()
    $(this).toggle()
    $(".faqclose").toggle()
  })
  $(".faqclose").on("click", function () {
    $(this).closest(".faqnav").find("li:not(:eq(0))").hide()
    $(this).toggle()
    $(".faqmenu").toggle()
  })

  $(".langs__current").on("click", function () {
    $(this).toggleClass("active")
    $(this).siblings(".langs__list").slideToggle()
  })
  $(".likepopuplink").on("click", function () {
    $(this).siblings(".likepopup").show()
  })
  $(".likepopupclose").on("click", function () {
    $(this).closest(".likepopup").hide()
  })

  $(".searchbutton").click(function (e) {
    e.preventDefault()
    $(".search__full").toggleClass("search__full_open")
    $(".searchbutton").toggleClass("search__button_open")
    $(".s-overlay").toggleClass("active_search")
  })

  $(".search__button_close").click(function (e) {
    e.preventDefault()
    $(".search__full").toggleClass("search__full_open")
    $(".searchbutton").toggleClass("search__button_open")
    $(".s-overlay").toggleClass("active_search")
  })

  $(".js-menu").on("click", function () {
    $(this).toggleClass("active")
    $(".mainmenu ").fadeToggle().toggleClass("active")
    $(this).find(".burgermenu--open ").toggle()
    $(this).find(".burgermenu--close ").toggle()
    /* $('.s-overlay').toggleClass('active_headertop'); */
  })

  $(function () {
    $("[data-tabsheader]").on(
      "click",
      "[data-tabsbutton]:not(.active)",
      function () {
        $(this)
          .addClass("active")
          .siblings()
          .removeClass("active")
          .closest("[data-tabs]")
          .find("[data-tabscontent]")
          .removeClass("active")
          .eq($(this).index())
          .addClass("active")
      }
    )
  })

  $(document).mouseup(function (e) {
    var container = $(".mainmenu.active")
    var button = $(".js-menu")
    // if the target of the click isn't the container nor a descendant of the container
    if (
      !container.is(e.target) &&
      container.has(e.target).length === 0 &&
      !button.is(e.target) &&
      button.has(e.target).length === 0
    ) {
      container.hide()
      container.removeClass("active")
      button.removeClass("active")
      button.find(".burgermenu--open").show()
      button.find(".burgermenu--close").hide()
    }
  })

  $(".popupapp__close").on("click", function () {
    $(".popupapp ").hide()
    $(".s-overlay").toggleClass("active_headertop")
  })

  $("#blogfilter").on("click", function () {
    $(this).toggleClass("active")
    $(".blogfilter__items").slideToggle()
  })

  $("#closefilter").on("click", function () {
    $(this).toggleClass("active")
    $(".blogfilter__items").slideToggle()
  })
  ;(function ($) {
    $(function () {
      $("ul.tabs__caption_js").on("click", "li:not(.active)", function () {
        $(this)
          .addClass("active")
          .siblings()
          .removeClass("active")
          .closest("div.tabs")
          .find("div.prevblock__item")
          .removeClass("active")
          .eq($(this).index())
          .addClass("active")
      })
    })
  })(jQuery)
  ;(function ($) {
    $(function () {
      $(".accordion__title").on("click", "", function () {
        $(this)
          .toggleClass("active")
          .closest(".questionwrapper")
          .find("div.accordion__content")
          .slideToggle()
      })
    })
  })(jQuery)

  if ($(window).width() <= 999) {
    $(".js-blogfilter").on("click", function () {
      $(this).toggleClass("active")
      $(".blogfilter__items").slideToggle()
    })
    /*  $('.headertop__link a.current').on('click', function (e) {
             e.preventDefault();
             $(this).toggleClass('clicked');
             $(this).parent().siblings('.headertop__link').slideToggle();
         }); */

    /* $(window).scroll(function () {
            scroll = $(window).scrollTop();

            if (scroll >= 1) {
                $('.header').addClass('fixed');
                $('body').addClass('fixed');
            } else {
                $('.header').removeClass('fixed');
                $('body').removeClass('fixed');
            }
        }); */
  }

  /*  if ($(window).width() > 999) {
         $(window).scroll(function () {
             scroll = $(window).scrollTop();

             if (scroll >= 1) {
                 $('.header').addClass('fixed');
                 $('body').addClass('fixed2');
             } else {
                 $('.header').removeClass('fixed');
                 $('body').removeClass('fixed2');
             }
         });
     }; */

  $("span.mobilemenuclose").click(function (e) {
    $(".mobilemenu").hide()
    $(".mobilemenu__item").hide()
    $(".mobilemenu__menu li").removeClass("active")
  })

  $("span.mobilemenubtn").click(function (e) {
    $(".mobilemenu").slideToggle()
  })

  $(".mobilemenu__title").click(function (e) {
    $(this).closest(".mobilemenu__item").toggle("slide")
    $(".mobilemenu__menu li").removeClass("active")
  })
  ;(function ($) {
    $(function () {
      $(".mobilemenu__menu ul").on(
        "click",
        "li.mobilemenu__parent:not(.active)",
        function () {
          $(this)
            .addClass("active")
            .siblings()
            .removeClass("active")
            .closest("div.mobilemenu__wrapper")
            .find("div.mobilemenu__item")
            .removeClass("active")
            .eq($(this).index())
            .toggle("slide")
        }
      )
    })
  })(jQuery)

  $(".faqblock__items .faqblock__item:first")
    .find(".faq-question")
    .addClass("active")
  $(".faqblock__items .faqblock__item:first").find(".faq-answer").show()
})

$(document).ready(function () {
  var $uiAccordion = $(".js-ui-accordion")

  $uiAccordion.accordion({
    collapsible: true,
    active: false,
    heightStyle: "content",
    beforeActivate: function (event, ui) {
      // The accordion believes a panel is being opened
      if (ui.newHeader[0]) {
        var currHeader = ui.newHeader
        var currContent = currHeader.next(".ui-accordion-content")
        // The accordion believes a panel is being closed
      } else {
        var currHeader = ui.oldHeader
        var currContent = currHeader.next(".ui-accordion-content")
      }
      // Since we've changed the default behavior, this detects the actual status
      var isPanelSelected = currHeader.attr("aria-selected") == "true"

      // Toggle the panel's header
      currHeader
        .toggleClass("ui-corner-all", isPanelSelected)
        .toggleClass(
          "accordion-header-active ui-state-active ui-corner-top",
          !isPanelSelected
        )
        .attr("aria-selected", (!isPanelSelected).toString())

      // Toggle the panel's icon
      currHeader
        .children(".ui-icon")
        .toggleClass("ui-icon-triangle-1-e", isPanelSelected)
        .toggleClass("ui-icon-triangle-1-s", !isPanelSelected)

      // Toggle the panel's content
      currContent.toggleClass("accordion-content-active", !isPanelSelected)
      if (isPanelSelected) {
        currContent.slideUp()
      } else {
        currContent.slideDown()
      }

      return false // Cancels the default action
    },

    /*  $uiAccordion.accordion({
        collapsible: true,
        heightStyle: 'content',
        active: false, */

    /*  activate: function activate(event, ui) {
            var newHeaderId = ui.newHeader.attr('id');

            if (newHeaderId) {
                history.pushState(null, null, '#' + newHeaderId);
            }
        },

        create: function create(event, ui) {
            var $this = $(event.target);
            var $activeAccordion = $(window.location.hash);

            if ($this.find($activeAccordion).length) {
                $this.accordion('option', 'active', $this.find($this.accordion('option', 'header')).index($activeAccordion));
            }
        } */
  })

  /*  $(window).on('hashchange', function (event) {
        var $activeAccordion = $(window.location.hash);
        var $parentAccordion = $activeAccordion.parents('.js-ui-accordion');

        if ($activeAccordion.length) {
            $parentAccordion.accordion('option', 'active', $parentAccordion.find($uiAccordion.accordion('option', 'header')).index($activeAccordion));
        }
    }); */
})

$(document).ready(function () {
  $(".pkrbanks__slider").on("init", function (event, slick) {
    addCustomSlickAttributes()
    $(this).addClass("notchanged")
  })

  $(".pkrbanks__slider").slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,

    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    dots: false,

    responsive: [
      {
        breakpoint: 999,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 719,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  })

  $(".appreviews__slider").slick({
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,

    autoplay: false,
    autoplaySpeed: 3000,
    arrows: false,
    dots: false,

    responsive: [
      {
        breakpoint: 1024,
        settings: "unslick",
      },
    ],
  })

  $(".pkrbanks__slider").on(
    "beforeChange",
    function (event, slick, current_slide_index, next_slide_index) {
      addCustomSlickAttributes()
      if (next_slide_index > current_slide_index) {
        $(this).addClass("changed")
        $(this).removeClass("notchanged")
      } else {
        $(this).addClass("changed2")
        $(this).removeClass("notchanged")
      }
    }
  )

  function addCustomSlickAttributes() {
    // Remove old attributes
    $("[data-my-slick-attr]").removeAttr("data-my-slick-attr")

    // Iterate through each active slide and add our custom attribute
    $(".pkrbanks__slider .slick-active").each(function (index, el) {
      $(el).attr("data-my-slick-attr", index)
    })
  }

  if ($(window).width() < 481) {
    var koef = $(window).width() / 10 + 7

    $(".pkrbanks__slider")
      .find(".slick-list")
      .css("padding-right", koef + "%")
  }

  if ($(window).width() < 481) {
    $(window).resize(function () {
      var koef = $(window).width() / 10 + 7 + $(window).width() / 150

      $(".pkrbanks__slider")
        .find(".slick-list")
        .css("padding-right", koef + "%")
    })
  }
  ;(function ($) {
    $(function () {
      $("ul.pagetabs__caption_js").on("click", "li:not(.active)", function () {
        $(this)
          .addClass("active")
          .siblings()
          .removeClass("active")
          .closest("div.tabs")
          .find("div.pagetabs__content_js")
          .removeClass("active")
          .eq($(this).index())
          .addClass("active")
      })
    })
  })(jQuery)

  $(".pageaccordion__title").click(function (event) {
    $(".pageaccordion__content")
      .not($(this).next())
      .hide()
      .removeClass("active")
    $(".pageaccordion__title").not($(this)).removeClass("active")
    $(this).toggleClass("active")
    $(this).next(".pageaccordion__content").slideToggle().toggleClass("active")
  })
  $(".pageaccordion2__title").click(function (event) {
    $(".pageaccordion2__content")
      .not($(this).next())
      .hide()
      .removeClass("active")
    $(".pageaccordion2__title").not($(this)).removeClass("active")
    $(this).toggleClass("active")
    $(".pageaccordion2__item").not($(this).parent()).removeClass("active")
    $(this).parent().toggleClass("active")
    $(this).next(".pageaccordion2__content").slideToggle()
  })
  $(".pageaccordion3__title").click(function (event) {
    $(this).toggleClass("active")
    $(this).next(".pageaccordion3__content").slideToggle()
  })
  ;(function ($) {
    $(function () {
      $("ul.tabs__captionforms").on("click", "li:not(.active)", function () {
        if (!$(this).hasClass("expt")) {
          $(this)
            .addClass("active")
            .siblings()
            .removeClass("active")
            .closest("div.tabs")
            .find("div.tabs__content_js")
            .removeClass("active")
            .eq($(this).index())
            .addClass("active")
        }
      })
    })
  })(jQuery)

  $(".metro__metka a").click(function (event) {
    event.preventDefault()
    $(this).parent().parent().find(".metro__tooltip").slideToggle()
  })
  $(".metro__close").click(function (event) {
    event.preventDefault()
    $(this).parent().slideToggle()
  })
  $(document).on("click", ".faq-question", function () {
    $(this).toggleClass("active")
    $(this).next(".faq-answer").slideToggle()
  })

  $("body").on("click", ".js-accept-cookie", function () {
    $.ajax({
      type: "POST",
      url: "/empis/ajax.php?action=yes",
      success: function (msg) {
        $(".newcookies").css("display", "none")
      },
    })
  })

  $(document).on("click", ".js-show-more", function (e) {
    e.preventDefault()

    var targetContainer = $(".js-ajax-content"), //  Контейнер, в котором хранятся элементы
      url = $(".js-show-more").attr("data-url") //  URL, из которого будем брать элементы

    if (url !== undefined) {
      $.ajax({
        type: "GET",
        url: url,
        dataType: "html",
        success: function (data) {
          //  Удаляем старую навигацию
          $(".js-show-more-wrapper").remove()

          var elements = $(data).find(".js-ajax-item"), //  Ищем элементы
            pagination = $(data).find(".js-show-more-wrapper") //  Ищем навигацию

          targetContainer.append(elements) //  Добавляем посты в конец контейнера
          pagination.insertAfter(targetContainer) //  добавляем навигацию следом
        },
      })
    }
  })

  $(document).on("click", ".js-load-more", function (e) {
    e.preventDefault()

    var url = $(".js-load-more").attr("data-url") //  URL, из которого будем брать элементы

    if (url !== undefined) {
      $.ajax({
        type: "GET",
        url: url,
        dataType: "html",
        success: function (data) {
          //  Удаляем старую навигацию
          $(".js-load-more-wrapper").remove()

          var elements = $(data).find('[data-entity="ajax-content"]'), //  Ищем элементы
            pagination = $(data).find(".js-load-more-wrapper") //  Ищем навигацию

          $('[data-entity="ajax-content"]:last').append(elements) //  Добавляем посты в конец контейнера
          // pagination.insertAfter(targetContainer); //  добавляем навигацию следом
        },
      })
    }
  })

  setTimeout(function () {
    document.getElementById("newcookies").style.display = "block"
  }, 500)
  setTimeout(function () {
    $("#newcookies").show()
  }, 500)

  $(".blograting__rating").each(function () {
    $(this)
      .find("span")
      .css("width", $(this).text() * 24)
  })
  $(".blograting__form .blograting__rating").mousemove(function (e) {
    var stars = parseInt((e.pageX - $(this).offset().left) / 24) * 24 + 24
    $(this).children("span").css("width", stars)
  })
  $(".blograting__form .blograting__rating").mouseout(function (e) {
    $(this)
      .children("span")
      .css("width", $(this).text() * 24)
  })
  $(".blograting__form .blograting__rating").click(function (e) {
    var stars = parseInt((e.pageX - $(this).offset().left) / 24) + 1
    var $inp = $('.blograting__form input[name="blograting"]')
    $inp.val(stars)
    $(".blograting__form .blograting__rating span").html(stars)
    $.post(
      "/ajax/rating.php",
      {
        vote: stars,
        id: $inp.data("id"),
      },
      function (result) {
        $("#rating-counter").text(result.rating)
        $("#rating-votes").text(result.votes)
      },
      "json"
    )
  })

  $(".togglemodal").click(function (e) {
    e.preventDefault()
    $("#modal_pay").modal("toggle")
  })

  $("#js-region-select").change(function () {
    var url = $(this).val()
    $(this).parents("form").attr("action", url).prop("active", url)
  })

  $(".js-subscribe").on("submit", function (e) {
    e.preventDefault()
    var $form = $(this)

    $.post(
      "/local/ajax/subscribe.nbki.php",
      $form.serialize(),
      function (result) {
        $(".asidenewsletter__result").html(result)
      }
    )
  })
  $(".stform").on("submit", function (e) {
    $([document.documentElement, document.body]).animate(
      {
        scrollTop: $(".stform").offset().top,
      },
      300
    )
  })

  $("[data-ym]").on("click", function () {
    const goal = $(this).attr("data-ym")
    ym(9726127, "reachGoal", goal)
  })

  $(".tabslidermain__slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: ".tablenav__slider",
  })
  $(".tablenav__slider").slick({
    vertical: true,
    verticalSwiping: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: ".tabslidermain__slider",
    focusOnSelect: true,
  })
  $(".tablenav__slide").on("mouseover", function () {
    $(".tablenav__slider").slick("slickGoTo", $(this).index())
    $(".tabslidermain__slider").slick("slickGoTo", $(this).index())
  })

  $(".tabslidermain__slider--mobile").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    infinite: false,
    dots: true,
    prevArrow: ".tableslidermain__arrowleft",
    nextArrow: ".tableslidermain__arrowright",
    fade: false,
    asNavFor: ".tablenav__slider",
  })

  $(".contactsform .custom-select select").on("change", function () {
    if ($(this).val()) {
      return $(this).css("color", "#000")
    } else {
      return $(this).css("color", "#AEB5D1")
    }
  })

  $('[data-entity="corp-page-form"]').on("submit", function (e) {
    e.preventDefault()
    const $form = $(this)

    if (validatePageForm('[data-entity="corp-page-form"]')) {
      $.post("/local/ajax/form.corp.php", $form.serialize(), function (result) {
        $("#myModal_ty").modal("show")
      })
    }
  })
})

function validatePageForm(x) {
  //let x = document.querySelectorAll("[data-stepcontent]");
  let y,
    i,
    valid = true
  y = $(x).find("[minlength]")
  for (i = 0; i < y.length; i++) {
    if (y[i].value < +$(y).attr("minlength")) {
      y[i].className += " error_input"
      valid = false
    } else {
      y[i].classList.remove("error_input")
    }
  }

  let sel = $(x).find("select.required")
  for (i = 0; i < sel.length; i++) {
    if (sel[i].value == "") {
      sel[i].className += " error_input"
      valid = false
    } else {
      sel[i].classList.remove("error_input")
    }
  }

  let check = $(x).find("#idCorpCheck")
  for (i = 0; i < check.length; i++) {
    if (!check[i].checked) {
      check[i].className += " error_input"
      valid = false
    } else {
      check[i].classList.remove("error_input")
    }
  }
  return valid // return the valid status
}

$(document).ready(function () {
  var x, i, j, l, ll, selElmnt, a, b, c
  /* Look for any elements with the class "custom-select": */
  x = document.getElementsByClassName("custom-select")
  l = x.length
  for (i = 0; i < l; i++) {
    selElmnt = x[i].getElementsByTagName("select")[0]
    ll = selElmnt.length
    /* For each element, create a new DIV that will act as the selected item: */
    a = document.createElement("DIV")
    a.setAttribute("class", "select-selected")
    a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML
    x[i].appendChild(a)
    /* For each element, create a new DIV that will contain the option list: */
    b = document.createElement("DIV")
    b.setAttribute("class", "select-items select-hide")
    for (j = 1; j < ll; j++) {
      /* For each option in the original select element,
        create a new DIV that will act as an option item: */
      c = document.createElement("DIV")
      c.innerHTML = selElmnt.options[j].innerHTML
      c.addEventListener("click", function (e) {
        /* When an item is clicked, update the original select box,
            and the selected item: */
        var y, i, k, s, h, sl, yl
        s = this.parentNode.parentNode.getElementsByTagName("select")[0]
        sl = s.length
        h = this.parentNode.previousSibling
        for (i = 0; i < sl; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i
            h.innerHTML = this.innerHTML
            y = this.parentNode.getElementsByClassName("same-as-selected")
            yl = y.length
            for (k = 0; k < yl; k++) {
              y[k].removeAttribute("class")
            }
            this.setAttribute("class", "same-as-selected")
            h.classList.add("active")
            break
          }
        }
        h.click()
      })
      b.appendChild(c)
    }
    x[i].appendChild(b)
    a.addEventListener("click", function (e) {
      /* When the select box is clicked, close any other select boxes,
        and open/close the current select box: */
      e.stopPropagation()
      closeAllSelect(this)
      this.nextSibling.classList.toggle("select-hide")
      this.classList.toggle("select-arrow-active")
    })
  }

  function closeAllSelect(elmnt) {
    /* A function that will close all select boxes in the document,
    except the current select box: */
    var x,
      y,
      i,
      xl,
      yl,
      arrNo = []
    x = document.getElementsByClassName("select-items")
    y = document.getElementsByClassName("select-selected")
    xl = x.length
    yl = y.length
    for (i = 0; i < yl; i++) {
      if (elmnt == y[i]) {
        arrNo.push(i)
      } else {
        y[i].classList.remove("select-arrow-active")
      }
    }
    for (i = 0; i < xl; i++) {
      if (arrNo.indexOf(i)) {
        x[i].classList.add("select-hide")
      }
    }
  }

  /* If the user clicks anywhere outside the select box,
    then close all select boxes: */
  document.addEventListener("click", closeAllSelect)
})
