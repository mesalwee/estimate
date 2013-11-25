/*jslint browser: true*/
/*global $, jQuery, alert*/

$(function () {
    "use strict";
    var button, box, form;
    button = $('#login_button');
    box = $('#login_box');
    form = $('#login_form');
    button.removeAttr('href');
    button.mouseup(function (login) {
        box.toggle();
        button.toggleClass('active');
    });
    form.mouseup(function () {
        return false;
    });
    $(this).mouseup(function (login) {
        if (!($(login.target).parent('#login_button').length > 0)) {
            button.removeClass('active');
            box.hide();
        }
    });
    
    $("#datepicker").datepicker();
});