$(function () {


    var id = 0;

    $('input').on('input', function (e) {

        if ($(this).attr("required")) {
            if ($(this).is(":invalid")) {
                $(this).next().html("&#10006");
            }

            if ($(this).is(":valid")) {
                $(this).next().html("&#10003");
            }
        }


        if ($(this).attr("name") == "articlenumber") {

            if ($(this).val().length == 3) {

                $(this).val($(this).val() + "-");

            }

        }



    });

    $("form").submit(function (event) {

        $(".products").fadeIn(700);

        var name = $("[name=name]").val();
        var description = $("[name=description]").val();
        var articlenumber = $("[name=articlenumber]").val();
        var price = $("[name=price]").val();
        var date = $("[name=date]").val();
        var category = $("[name=category]").val();
        $(".products ul[class=product-list]").append('<li><div class="product" data="' + id + '"><div class="product title"><h3>' + name + '</h3></div><div class="product-content"><div class="product-image"><img src="https://raja.scene7.com/is/image/Raja/products/toalettpapper-p-rulle-tork-universal-t4-vitt-pr-glat_120210.jpg?template=withpicto410&$image=M_120210_O_S_NO&$picto=ALL_planet&hei=410&wid=410"></div><div class="product-description"><ul><li>Beskrivning: ' + description + '</li><li>Pris: ' + price + '</li><li>Artikelnummer: ' + articlenumber + '</li><li>Kategori:' + category + '</li><li>Uppladdad:' + date + '</li></ul></div></div></div></li>');

        $("[data=" + id + "]").hide().fadeIn(700);

        id++;

        return false;

    });

    $(".heading h3").click(function (event) {

        $(".product").fadeOut(400);

    });

});