$(document).ready(function () {
  try {
    $(".mainslider__slider").slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 6000,
      arrows: false,
      dots: true,
    })
  } catch (err) {}

  try {
    $(".landingpartners__slider").slick({
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 3000,
      arrows: true,
      dots: false,
      prevArrow: $(".landingpartners__left"),
      nextArrow: $(".landingpartners__right"),
      responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
      ],
    })
  } catch (err) {}
  new WOW().init()

  $(".lktitletop_row").on("click", "a", function (e) {
    e.preventDefault()
    var i = $(this).attr("href"),
      t = $(i).offset().top
    $("body,html").animate(
      {
        scrollTop: t,
      },
      400
    )
  })

  $('.form-pay-inline [name="phone"]').mask("+7 (999) 999-99-99")
  $("input[type=tel]").mask("+7 (999) 999-99-99")
  $("input[name=date]").mask("99.99.9999")
  $("input[name=paspcode]").mask("999-999")
  $("input[name=paspnomb]").mask("9999 999999")

  $("span.dateicon").on("click", function () {
    var input = $(this).siblings("input[data-select=datepicker]")
    var val = $(this).siblings("input[data-select=datepicker]").val()
    var date = val ? $.datePicker.defaults.dateParse(val) : null
    var widget = $.datePicker.api.show({
      views: {
        month: {
          show: val ? date : "",
          selected: val ? [date] : [],
        },
      },
      element: input,
    })
    input.data("widget", widget)
  })

  function checkVisible(elm) {
    var rect = elm.getBoundingClientRect()
    var viewHeight = Math.max(
      document.documentElement.clientHeight,
      window.innerHeight
    )
    return !(rect.bottom < 0 || rect.top - viewHeight >= 0)
  }

  $(".subscribe-form form").submit(function (event) {
    event.preventDefault()

    var form = this
    var displayMessage = function (msg, error) {
      error = error === undefined ? false : error

      if (error) {
        $(".subscribe-messsage", form).addClass("error")
      } else {
        $(".subscribe-messsage", form).removeClass("error")
      }

      $(".subscribe-messsage", form).html(msg)
      $(".subscribe-messsage", form).css("display", "block")
    }

    if ($("[name=agree]", form).prop("checked")) {
      $(".subscribe-messsage", form).css("display", "none")
      var email = $("[name=email]", form).val()

      $.ajax({
        url: "/ajax/subscribe_form.php",
        type: "POST",
        data: {
          email: email,
        },
        dataType: "json",
        success: function (data) {
          console.log(data)

          if (data.success) {
            displayMessage(data.success)
            ing_events({
              category: "forms",
              action: "submit",
              label: "email_na",
              ya_label: "email_na",
            })
          } else if (data.error) {
            displayMessage(data.error, true)
          }
        },
      })
    } else {
      displayMessage(
        "Необходимо дать согласие на&nbsp;обработк&nbsp;у персональных данных.",
        true
      )
    }
  })

  function payment_formin(
    form_wrap,
    text,
    service_name,
    price,
    service_val,
    descr = ""
  ) {
    if (text == "") {
      $(".payment_form_text2", form_wrap).html("").css("display", "none")
      $(".payment_form_text1", form_wrap).css("display", "inline")
    } else {
      $(".payment_form_text2", form_wrap).html(text).css("display", "inline")
      $(".payment_form_text2", form_wrap).css("display", "inline")
      $(".payment_form_text1", form_wrap).css("display", "none")
    }
    $(".pblock__value", form_wrap).html(price)
    $(".pblock__title", form_wrap).html(service_name)
    $(".pblock__text", form_wrap).html(descr)

    if (price) $("input[name=svpayment]", form_wrap).val(price)
    if (service_name) $("input[name=service_name]", form_wrap).val(service_name)
    if (service_val) $("input[name=service_val]", form_wrap).val(service_val)
    $(".lkform__error", form_wrap).html("")
  }

  $(".js-btn-payment1").on("click", function () {
    console.log("sad")
    var form_wrap = $("#myModal_payment")
    if (!form_wrap) return

    var price = "450 руб."
    var text = ""
    var service_name =
      "Повторное, в&nbsp;рамк&nbsp;ах 12 месяцев, получение к&nbsp;редитного отчета"
    var service_val = "450.00"

    payment_formin(form_wrap, text, service_name, price, service_val)
    $("#myModal_payment").modal("show")
  })

  $(".js-btn-payment2").on("click", function () {
    var form_wrap = $("#myModal_payment")
    if (!form_wrap) return

    var text = "Запрос в&nbsp;Цк&nbsp;к&nbsp;И"
    var descr = "(Центральный к&nbsp;аталог к&nbsp;редитных историй)"
    var service_name = text
    var price = "300 руб."
    var service_val = "300.00"

    payment_formin(form_wrap, text, service_name, price, service_val, descr)
    $("#myModal_payment").modal("show")
  })

  $(".js-btn-payment3").on("click", function () {
    var form_wrap = $("#myModal_payment")
    if (!form_wrap) return

    var text =
      "Формирование/замена/аннулирование к&nbsp;ода субъек&nbsp;та к&nbsp;редитной истории"
    var service_name = text
    var price = "300 руб."
    var service_val = "300.00"

    payment_formin(form_wrap, text, service_name, price, service_val)
    $("#myModal_payment").modal("show")
  })

  $(".js-btn-payment4").on("click", function () {
    var form_wrap = $("#myModal_payment")
    if (!form_wrap) return

    var text = "Отчет по&nbsp;к&nbsp;редитной истории"
    var descr =
      '<p><span style="color: #FF0029">Внимание!</span> Первый и&nbsp;второй (за&nbsp;12 месяцев) к&nbsp;редитный отчет оплачивать не&nbsp;нужно.</p>' +
      "<p>После оплаты к&nbsp;редитная история не&nbsp;будет отправлена, после оплаты необходимо направить запрос, смотри пунк&nbsp;ты выше</p>"

    var service_name = text
    var price = "450 руб."
    var service_val = "450.00"

    payment_formin(form_wrap, text, service_name, price, service_val, descr)
    $("#myModal_payment").modal("show")
  })

  $(".js-btn-payment").on("click", function () {
    var pid = $(this).attr("data-pid")

    var form_wrap = $("#myModal_payment")
    if (!form_wrap) return

    var price = 0
    var text = ""

    var service_name = ""
    var service_val = ""

    if (pid == 1) {
      price = "450 руб."
      service_name =
        "Повторное, в&nbsp;рамк&nbsp;ах 12 месяцев, получение к&nbsp;редитного отчета"
      service_val = "450.00"
    } else if (pid == 2) {
      text =
        "Запрос в&nbsp;Цк&nbsp;к&nbsp;И (Центральный к&nbsp;аталог к&nbsp;редитных историй)"
      service_name = text
      price = "300 руб."
      service_val = "300.00"
    } else if (pid == 3) {
      text =
        "Формирование/замена/аннулирование к&nbsp;ода субъек&nbsp;та к&nbsp;редитной истории"
      service_name = text
      price = "300 руб."
      service_val = "300.00"
    }

    if (text == "") {
      $(".payment_form_text2", form_wrap).html("").css("display", "none")
      $(".payment_form_text1", form_wrap).css("display", "inline")
    } else {
      $(".payment_form_text2", form_wrap).html(text).css("display", "inline")
      $(".payment_form_text2", form_wrap).css("display", "inline")
      $(".payment_form_text1", form_wrap).css("display", "none")
    }

    if (price) $("input[name=svpayment]", form_wrap).val(price)
    if (service_name) $("input[name=service_name]", form_wrap).val(service_name)
    if (service_val) $("input[name=service_val]", form_wrap).val(service_val)
    $(".lkform__error", form_wrap).html("")

    $("#myModal_payment").modal("show")
  })

  $("#formPay").submit(function (e) {
    var form = this
    e.preventDefault()
    $(form).find('[type="submit"]').attr("disabled", true)
    $(".lkform__error", form).html("")

    var is_agree = $("input[name=agree]", form).is(":checked")
    // alert(is_agree);
    if (is_agree == false) {
      $(".lkform__error", form).html(
        "Необходимо согласиться с Политик&nbsp;ой в&nbsp;области обработк&nbsp;и и&nbsp;защиты персональных данных"
      )
      $(form).find('[type="submit"]').removeAttr("disabled")
      return
    }

    var name = $("input[name=name]", form).val()
    var phone = $("input[name=phone]", form).val()
    var email = $("input[name=email]", form).val()
    var service_name = $("input[name=service_name]", form).val()
    var service_val = $("input[name=service_val]", form).val()

    if (name.length < 1) {
      $(form).find('[type="submit"]').removeAttr("disabled")
    }

    $.ajax({
      method: "POST",
      url: "/ajax/payment_initialization.php",
      data: {
        name: name,
        phone: phone,
        email: email,
        service: service_name,
        service_val: service_val,
      },
    })
      .done(function (msg) {
        console.log(msg)
        if (typeof ingEvents !== "undefined") {
          ingEvents.Event({
            category: "forms",
            action: "submit",
            label: "oplata_na",
            ya_label: "oplata_na",
          })
        }
        window.location = msg
      })
      .error(function () {
        $(form).find('[type="submit"]').removeAttr("disabled")
      })
  })

  $(".form-pay-inline").submit(function (e) {
    var form = this
    e.preventDefault()
    $(".lkform__error", form).html("")

    var is_agree = $("input[name=agree]", form).is(":checked")
    if (is_agree == false) {
      $(".lkform__error", form).html(
        "Необходимо согласиться с Политик&nbsp;ой в&nbsp;области обработк&nbsp;и и&nbsp;защиты персональных данных"
      )
      return
    }

    var name = $("input[name=name]", form).val()
    var phone = $("input[name=phone]", form).val()
    var email = $("input[name=email]", form).val()
    var service_name = $("input[name=service_name]", form).val()
    var service_val = $("input[name=service_val]", form).val()

    $.ajax({
      method: "POST",
      url: "/ajax/payment_initialization.php",
      data: {
        name: name,
        phone: phone,
        email: email,
        service: service_name,
        service_val: service_val,
      },
    }).done(function (msg) {
      console.log(msg)
      if (typeof ingEvents !== "undefined") {
        ingEvents.Event({
          category: "forms",
          action: "submit",
          label: "oplata_na",
          ya_label: "oplata_na",
        })
      }
      window.location = msg
    })
  })

  $("#formQuest").submit(function (e) {
    var form = this
    e.preventDefault()

    var displayMessage = function (msg, error) {
      error = error === undefined ? false : error

      if (error) {
        $(".question-messsage", form).addClass("error")
      } else {
        $(".question-messsage", form).removeClass("error")
      }

      $(".question-messsage", form).html(msg)
      $(".question-messsage", form).css("display", "block")
    }

    if ($("[name=agree]", form).prop("checked")) {
      $(".question-messsage", form).css("display", "none")

      var name = $("input[name=name]", form).val()
      var email = $("input[name=email]", form).val()
      var question = $("textarea[name=question]", form).val()

      $.ajax({
        method: "POST",
        url: "/ajax/question_form.php",
        data: { name: name, email: email, question: question },
        dataType: "json",
        success: function (data) {
          console.log(data)

          if (data.success) {
            displayMessage(data.success)
            $("input[name=name]", form).val("")
            $("input[name=email]", form).val("")
            $("textarea[name=question]", form).val("")

            setTimeout(function () {
              $("#myModal_question").modal("hide")
              $(".question-messsage", form).css("display", "none")
            }, 4000)
          } else if (data.error) {
            displayMessage(data.error, true)
          }
        },
      })
    } else {
      displayMessage(
        "Необходимо дать согласие на&nbsp;обработк&nbsp;у персональных данных",
        true
      )
    }
  })

  $("body").on("click", ".js-acc__link", function (e) {
    e.preventDefault()
    $("#myModal_login").modal("show")
  })
  $("body").on("click", ".js-forgotpass", function (e) {
    e.preventDefault()
    $("#myModal_login").modal("hide")
    $("#myModal_forgotpass").modal("show")
  })
})

$(function () {
  $(".landingmenu").click(function (event) {
    $(this).toggleClass("active")
    $(".headerlanding__menu").slideToggle()
  })
  $(".mobilemenu19").click(function (event) {
    $(this).toggleClass("active")
    $(".menu19").slideToggle()
  })

  $(".mobile__search").click(function (event) {
    $(".b-search-box")
      .animate(
        {
          width: "toggle",
        },
        320
      )
      .addClass("b-search-box--is-active")
  })

  $(".search-close").click(function (event) {
    $(".b-search-box")
      .animate(
        {
          width: "toggle",
        },
        0
      )
      .removeClass("b-search-box--is-active")
  })

  $("#topmenu, #top_menu1").click(function (event) {
    $(this).toggleClass("active")
    $(".allmenu").toggleClass("expand")
  })

  $(".mainmenu__mobile").click(function (event) {
    $(this).toggleClass("active")
    $(".mainmenu > ul").slideToggle()
  })

  $(".btn_blue_clients").click(function (event) {
    $(this).toggleClass("active")
    $(".clients__menu").slideToggle()
  })

  $("#mobilemenu, #top_menu2").click(function (event) {
    $(this).toggleClass("active")
    $(".menumobile").slideToggle()
  })

  $("#menumobile__btn").click(function (event) {
    $(this).toggleClass("active")
    $(".menumobile").slideToggle()
  })

  $(".showhide").click(function (event) {
    event.preventDefault()
    $(this).parent().find("p").slideToggle()
    $(this).toggleClass("clicked")

    var title = "Читать далее"
    if ($(this).hasClass("clicked")) {
      title = "Ск&nbsp;рыть"
    }
    $(this).text(title)
  })

  $(".accordion__caption li").click(function (event) {
    $(".accordion__content").not($(this).next()).hide().removeClass("active")
    $(".accordion__caption li").not($(this)).removeClass("active")
    $(this).toggleClass("active")
    $(this).next(".accordion__content").slideToggle()
  })

  /*$('.pageaccordion__title').click(function (event) {
        $('.pageaccordion__content').not($(this).next()).hide().removeClass('active');
        $('.pageaccordion__title').not($(this)).removeClass('active');
        $(this).toggleClass('active');
        $(this).next('.pageaccordion__content').slideToggle();
    });
    $('.pageaccordion2__title').click(function (event) {
        $('.pageaccordion2__content').not($(this).next()).hide().removeClass('active');
        $('.pageaccordion2__title').not($(this)).removeClass('active');
        $(this).toggleClass('active');
        $('.pageaccordion2__item').not($(this).parent()).removeClass('active');
        $(this).parent().toggleClass('active');
        $(this).next('.pageaccordion2__content').slideToggle();
    });
    $('.pageaccordion3__title').click(function (event) {

        $(this).toggleClass('active');
        $(this).next('.pageaccordion3__content').slideToggle();
    });*/

  $(".toggle-password").click(function () {
    var input = $($(this).siblings("input"))
    if (input.attr("type") == "password") {
      input.attr("type", "text")
    } else {
      input.attr("type", "password")
    }
  })

  function checkFIO(fio) {
    var parts = $.trim(fio).split(" ")
    if (parts.length < 3) {
      return false
    } else {
      var error = false
      $.each(parts, function (i, val) {
        if ($.trim(val).length < 2) error = true
      })
      if (error) {
        return false
      } else {
        return true
      }
    }
  }

  var sym = new Array(
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    ".",
    "@",
    "_",
    "-"
  )
  var code = new Array(
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9"
  )
  var dig = new Array("0", "1", "2", "3", "4", "5", "6", "7", "8", "9")

  $("#EmpisForm_feedback").on("submit", function () {
    var form = this
    var error = false
    $("#EmpisForm_feedback .error_txt").remove()

    var fio = $("[name=n9]", form)
    if (!checkFIO($(fio).val())) {
      empisFormInputSetError(fio, "Ук&nbsp;ажите полностью ФИО")
      error = true
    }

    var email = $("[name=n13]", form)
    if (
      $(email).val().indexOf("@") < 0 ||
      $(email).val().indexOf(".") < 0 ||
      $(email).val().length < 5
    ) {
      empisFormInputSetError(email, "Введите к&nbsp;оррек&nbsp;тный E-mail")
      error = true
    } else {
      var strEmail = $(email).val().toLowerCase()
      var emailError = false
      for (i = 0; i < strEmail.length; i++) {
        if (sym.indexOf(strEmail[i]) == -1) emailError = true
      }
      if (emailError) {
        empisFormInputSetError(email, "Введите к&nbsp;оррек&nbsp;тный E-mail")
        error = true
      }
    }

    var phone = $("[name=n11]", form)
    if ($.trim($(phone).val()).length < 10) {
      empisFormInputSetError(
        phone,
        "Введите номер телефона&nbsp;в&nbsp;федеральном формате"
      )
      error = true
    }

    var company = $("[name=n0]", form)
    if ($.trim($(company).val()).length < 6) {
      empisFormInputSetError(company, "Введите название к&nbsp;омпании")
      error = true
    }

    var cName = $("[name=n16]", form)
    if (!$.trim($(cName).val()).length) {
      error = true
      empisFormInputSetError(cName, "Введите адрес")
    }

    var cJob = $("[name=n10]", form)
    if (!$.trim($(cJob).val()).length) {
      error = true
      empisFormInputSetError(cJob, "Введите должность")
    }
    var cProg = $("[name=n6]", form)
    if (!$.trim($(cProg).val()).length) {
      error = true
      empisFormInputSetError(cProg, "Введите название программы")
    }

    if (!$(".n2:checked").length) {
      $('<div class="error_txt">Выберите вид деятельности</div>').insertAfter(
        ".n2block"
      )
    }
    if (!$(".n7:checked").length) {
      $(
        '<div class="error_txt">Ук&nbsp;ажите интересующие вас услуги</div>'
      ).insertAfter(".n7block")
    }

    var inn = $("[name=n1]", form)
    if (!$.trim($(inn).val()).length) {
      error = true
      empisFormInputSetError(inn, "Введите ИНН")
    } else if ($.trim($(inn).val()).length > 0) {
      if ($(inn).val().length != 10 && $(inn).val().length != 13) {
        error = true
        empisFormInputSetError(inn, "Введите к&nbsp;оррек&nbsp;тный ИНН")
      } else {
        var innError = false
        for (i = 0; i < $(inn).val().length; i++) {
          if (dig.indexOf($(inn).val()[i]) == -1) innError = true
        }
        if (innError) {
          error = true
          empisFormInputSetError(inn, "Введите к&nbsp;оррек&nbsp;тный ИНН")
        }
      }
    }

    if (error) {
      $([document.documentElement, document.body]).animate(
        {
          scrollTop: $(".error_txt:visible:first").offset().top - 200,
        },
        2000
      )

      return false
    }
  })

  function empisFormInputSetError(elem, msg) {
    $(elem)
      .closest(".formcols__item")
      .append('<div class="error_txt">' + msg + "</div>")
  }

  $("#URForm").submit(function () {
    var error = false
    $("#URForm .error").removeClass("error")
    $("#URForm .error_text").html("")

    if (!checkFIO($('#URForm [name="fio"]').val())) {
      $('#URForm [name="fio"]').addClass("error")
      $('#URForm [name="fio"]').next().html("Ук&nbsp;ажите полностью ФИО")
      error = true
    }
    if (
      $('#URForm [name="email"]').val().indexOf("@") < 0 ||
      $('#URForm [name="email"]').val().indexOf(".") < 0 ||
      $('#URForm [name="email"]').val().length < 5
    ) {
      $('#URForm [name="email"]').addClass("error")
      $('#URForm [name="email"]')
        .next()
        .html("Введите к&nbsp;оррек&nbsp;тный E-mail")
      error = true
    } else {
      var email = $('#URForm [name="email"]').val().toLowerCase()
      var emailError = false
      for (i = 0; i < email.length; i++) {
        if (sym.indexOf(email[i]) == -1) emailError = true
      }
      if (emailError) {
        error = true
        $('#URForm [name="email"]').addClass("error")
        $('#URForm [name="email"]')
          .next()
          .html("Введите к&nbsp;оррек&nbsp;тный E-mail")
      }
    }
    if ($.trim($('#URForm [name="phone"]').val()).length < 10) {
      error = true
      $('#URForm [name="phone"]').addClass("error")
      $('#URForm [name="phone"]')
        .next()
        .html("Введите номер телефона&nbsp;в&nbsp;федеральном формате")
    }

    if ($.trim($('#URForm [name="company"]').val()).length < 6) {
      $('#URForm [name="company"]').addClass("error")
      $('#URForm [name="company"]')
        .next()
        .html("Введите название к&nbsp;омпании")
      error = true
    }

    if (
      !$.trim($('#URForm [name="code"]').val()).length &&
      !$.trim($('#URForm [name="inn"]').val()).length
    ) {
      error = true
      $('#URForm [name="code"]').addClass("error")
      $('#URForm [name="code"]')
        .next()
        .html("Введите к&nbsp;од участник&nbsp;а или ИНН")
      $('#URForm [name="inn"]').addClass("error")
      $('#URForm [name="inn"]')
        .next()
        .html("Введите к&nbsp;од участник&nbsp;а или ИНН")
    } else {
      if ($.trim($('#URForm [name="code"]').val()).length > 0) {
        if ($('#URForm [name="code"]').val().length != 6) {
          error = true
          $('#URForm [name="code"]').addClass("error")
          $('#URForm [name="code"]')
            .next()
            .html("Введите к&nbsp;оррек&nbsp;тный к&nbsp;од участник&nbsp;а")
        } else {
          var innError = false
          var digs = 0
          for (i = 0; i < $('#URForm [name="code"]').val().length; i++) {
            if (code.indexOf($('#URForm [name="code"]').val()[i]) == -1)
              innError = true
            if (dig.indexOf($('#URForm [name="code"]').val()[i]) != -1) digs++
          }

          if (innError) {
            error = true
            $('#URForm [name="code"]').addClass("error")
            $('#URForm [name="code"]')
              .next()
              .html("Введите к&nbsp;оррек&nbsp;тный к&nbsp;од участник&nbsp;а")
          } else {
            if (digs == 0 || digs == $('#URForm [name="code"]').val().length) {
              error = true
              $('#URForm [name="code"]').addClass("error")
              $('#URForm [name="code"]')
                .next()
                .html(
                  "Введите к&nbsp;оррек&nbsp;тный к&nbsp;од участник&nbsp;а"
                )
            }
          }
        }
      }
      if ($.trim($('#URForm [name="inn"]').val()).length > 0) {
        if ($('#URForm [name="inn"]').val().length != 10) {
          error = true
          $('#URForm [name="inn"]').addClass("error")
          $('#URForm [name="inn"]')
            .next()
            .html("Введите к&nbsp;оррек&nbsp;тный ИНН")
        } else {
          var innError = false
          for (i = 0; i < $('#URForm [name="inn"]').val().length; i++) {
            if (dig.indexOf($('#URForm [name="inn"]').val()[i]) == -1)
              innError = true
          }
          if (innError) {
            error = true
            $('#URForm [name="inn"]').addClass("error")
            $('#URForm [name="inn"]')
              .next()
              .html("Введите к&nbsp;оррек&nbsp;тный ИНН")
          }
        }
      }
    }

    if (!$.trim($('#URForm [name="comm"]').val()).length) {
      error = true
      $('#URForm [name="comm"]').addClass("error")
      $('#URForm [name="comm"]').next().html("Введите тек&nbsp;ст сообщения")
    }

    if (!$('#URForm [type="checkbox"]').prop("checked")) {
      error = true
      $('#URForm [type="checkbox"]')
        .next()
        .next()
        .html("Необходимо дать согласие")
    }

    if (!$.trim($('#URForm [name="g-recaptcha-response"]').val()).length) {
      // error = true;
      // $('#URForm .captcha_error').html('Поставьте галочк&nbsp;у "Я не&nbsp;робот"');
    }
    if (!error) {
      $('#URForm [type="submit"]').attr("disabled", "disabled")
      $.post($(this).attr("action"), $("#URForm").serialize(), function (data) {
        $('#URForm [type="submit"]').removeAttr("disabled", "disabled")
        if (data == "good") {
          $(
            '#URForm [type="text"], #URForm [type="tel"], #URForm textarea'
          ).val("")
          $("#URForm .error").removeClass("error")
          $("#URForm .error_txt").html("")
          if (typeof ingEvents !== "undefined") {
            ingEvents.init({})
            ingEvents.Event({
              category: "forms",
              action: "submit",
              label: "klient_na",
              ya_label: "klient_na",
            })
          }
          alert("Спасибо!" + "\n" + "Ваше сообщение успешно отправлено!")
        } else {
          alert(data)
        }
        grecaptcha.reset()
      })
    }
    return false
  })

  $("#CHForm").submit(function () {
    var error = false
    $("#CHForm .error").removeClass("error")
    $("#CHForm .error_text").html("")

    if (!checkFIO($('#CHForm [name="fio"]').val())) {
      $('#CHForm [name="fio"]').addClass("error")
      $('#CHForm [name="fio"]').next().html("Ук&nbsp;ажите полностью ФИО")
      error = true
    }
    if (
      $('#CHForm [name="email"]').val().indexOf("@") < 0 ||
      $('#CHForm [name="email"]').val().indexOf(".") < 0 ||
      $('#CHForm [name="email"]').val().length < 5
    ) {
      $('#CHForm [name="email"]').addClass("error")
      $('#CHForm [name="email"]')
        .next()
        .html("Введите к&nbsp;оррек&nbsp;тный E-mail")
      error = true
    } else {
      var email = $('#CHForm [name="email"]').val().toLowerCase()
      var emailError = false
      for (i = 0; i < email.length; i++) {
        if (sym.indexOf(email[i]) == -1) emailError = true
      }
      if (emailError) {
        error = true
        $('#CHForm [name="email"]').addClass("error")
        $('#CHForm [name="email"]')
          .next()
          .html("Введите к&nbsp;оррек&nbsp;тный E-mail")
      }
    }
    if ($.trim($('#CHForm [name="phone"]').val()).length < 10) {
      error = true
      $('#CHForm [name="phone"]').addClass("error")
      $('#CHForm [name="phone"]')
        .next()
        .html("Введите номер телефона&nbsp;в&nbsp;федеральном формате")
    }

    if ($.trim($('#CHForm [name="company"]').val()).length > 0) {
      if ($.trim($('#CHForm [name="company"]').val()).length < 6) {
        $('#CHForm [name="company"]').addClass("error")
        $('#CHForm [name="company"]')
          .next()
          .html("Введите к&nbsp;оррек&nbsp;тное название к&nbsp;омпании")
        error = true
      }
    }

    if (!$.trim($('#CHForm [name="comm"]').val()).length) {
      error = true
      $('#CHForm [name="comm"]').addClass("error")
      $('#CHForm [name="comm"]').next().html("Введите тек&nbsp;ст сообщения")
    }

    if (!$('#CHForm [type="checkbox"]').prop("checked")) {
      error = true
      $('#CHForm [type="checkbox"]')
        .next()
        .next()
        .html("Необходимо дать согласие")
    }

    if (!$.trim($('#CHForm [name="g-recaptcha-response"]').val()).length) {
      // error = true;
      // $('#CHForm .captcha_error').html('Поставьте галочк&nbsp;у "Я не&nbsp;робот"');
    }
    if (!error) {
      $('#CHForm [type="submit"]').attr("disabled", "disabled")
      $.post($(this).attr("action"), $("#CHForm").serialize(), function (data) {
        $('#CHForm [type="submit"]').removeAttr("disabled", "disabled")
        if (data == "good") {
          $(
            '#CHForm [type="text"], #CHForm [type="tel"], #CHForm textarea'
          ).val("")
          $("#CHForm .error").removeClass("error")
          $("#CHForm .error_txt").html("")
          alert("Спасибо!" + "\n" + "Ваше сообщение успешно отправлено!")
          ing_events({
            category: "forms",
            action: "submit",
            label: "feedback_na",
            ya_label: "feedback_na",
          })
        } else {
          alert(data)
        }
        grecaptcha.reset()
      })
    }
    return false
  })

  $("a[href^='#']")
    .not('[data-toggle="modal"]')
    .not(".js-show-more")
    .not(".js-btn-payment3")
    .not(".js-btn-payment2")
    .click(function () {
      var _href = $(this).attr("href")
      $("html, body").animate({ scrollTop: $(_href).offset().top - 100 + "px" })
      return false
    })

  $("form.stform").on("focus", "input[name=n3]", function () {
    var form = $(this).closest("form")
    var id = $(this).closest("label").attr("for")
    $("#" + id, form).prop("checked", true)
  })

  $("#formReview").submit(function (e) {
    var $form = $(this),
      isError = false

    e.preventDefault()

    var $inpName = $form.find('[name="NAME"]')

    $(".error_input").removeClass("error_input")

    if ($inpName.val() == "" || $inpName.val().length < 3) {
      $inpName.addClass("error_input")
      isError = true
    }

    if (
      $form.find('[name="PLUS"]').val().length < 3 &&
      $form.find('[name="MINUS"]').val().length < 3 &&
      $form.find('[name="MESSAGE"]').val().length < 3
    ) {
      isError = true
    }

    if (!isError) {
      $.ajax({
        method: "POST",
        url: "/ajax/reviews_form.php",
        data: $form.serialize(),
        dataType: "json",
        success: function (data) {
          if (data.success) {
            $(".modal").modal("hide")
            $form[0].reset()
            $("#myModal_thx").modal("show")
          } else if (data.error) {
            // alert(data.error);
          }
        },
      })
    }
  })

  $(".rating").each(function () {
    $(this)
      .find("span")
      .css("width", $(this).text() * 24)
  })
  $(".rating-form .rating").mousemove(function (e) {
    var stars = parseInt((e.pageX - $(this).offset().left) / 24) * 24 + 24
    $(this).children("span").css("width", stars)
  })
  $(".rating-form .rating").mouseout(function (e) {
    $(this)
      .children("span")
      .css("width", $(this).text() * 24)
  })
  $(".rating-form .rating").click(function (e) {
    var stars = parseInt((e.pageX - $(this).offset().left) / 24) + 1
    $('.rating-form input[name="rating"]').val(stars)
    $(".rating-form .rating span").html(stars)
  })
})

$(".pagetext table").wrap('<div style="overflow-x: auto;"></div>')

$(document).ready(function () {
  try {
    $(".articleslist__slider").slick({
      infinite: true,
      slidesToShow: 6,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      arrows: true,
      dots: false,
      prevArrow: $(".articleslist__left"),
      nextArrow: $(".articleslist__right"),
      responsive: [
        {
          breakpoint: 1380,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 1280,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
      ],
    })
  } catch (err) {}

  try {
    $(".pkrstages__slider").each(function () {
      $(this).slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        dots: true,
        prevArrow: $(".pkrstages__arrowleft"),
        nextArrow: $(".pkrstages__arrowright"),
        customPaging: function (slider, i) {
          var thumb = $(slider.$slides[i]).data()
          return '<a class="dot">' + (i + 1) + "</a>"
        },
      })
    })
  } catch (err) {}

  $(".btn_modalvideo").on("click", function () {
    $("#myModal_video").modal("show")
  })
})
