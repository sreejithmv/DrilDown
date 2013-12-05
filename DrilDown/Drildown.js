/*! Drildown v1.0*/
/************************************************
* Copyright 2013, Sreejith Viswambharan
*************************************************/

(function ($) {
    var _properties = {
        _id: 'Drildown',
        _isOpen: false,
        _barColor: "lightblue",
        _textColor: "black",
        _iconPosition: "left",
        _expandIcon: "images/expand.png",
        _collapesIcon: "images/collapse.png"
    }


    // $.fn.getReady = function (el, isOpen) {
    $.fn.getReady = function (el) {
        _properties._isOpen = el.isOpen ? el.isOpen : _properties._isOpen;
        _properties._id = el.id ? el.id : el.id;
        _properties._barColor = el.barColor ? el.barColor : _properties._barColor;
        _properties._textColor = el.textColor ? el.textColor : _properties._textColor;
        _properties._iconPosition = el.iconPosition ? el.iconPosition : _properties._iconPosition;
        _properties._expandIcon = el.expandIcon ? el.expandIcon : _properties._expandIcon;
        _properties._collapesIcon = el.collapesIcon ? el.collapesIcon : _properties._collapesIcon;
        $('.Drildown').each(function (item) {
            $(this).attr('id', _properties._id + 'MenuItem' + item);
            $(this.nextElementSibling).attr('id', _properties._id + "MenuItem" + item + "List");
            $(this.getElementsByTagName('img')).attr('id', _properties._id + 'MenuItem' + item + 'Icon');
        });
        $(this).click(function () {
            $("#" + _properties._id).drildown(this, _properties._id);
        });
        $('.Drildown').css("padding", 10);
        $('.Drildown').css("margin-bottom", 1);
        $('.Drildown').css("background-color", _properties._barColor);
        $('.Drildown').css("color", _properties._textColor);
        $('.Drildown').append(' <img class="ListIconImg" src="' + _properties._collapesIcon + '"/>')
        $('.ListIconImg').css("width", 20);
        $('.ListIconImg').css("float", _properties._iconPosition);
        $(".Drildown").next().each(function () {
            $(this).css('height', 0);
            $(this).css('display', 'none');
        });

    }
    $.fn.drildown = function (element, el) {
        this.id = element.id;
        if ($("#" + this.id).attr("Expand") == "true") {
            $("#" + this.id + "List").hide();
            $("#" + this.id).attr("Expand", false);
            $("#" + this.id + " .ListIconImg").attr("src", _properties._collapesIcon);
            $("#" + this.id + "List").animate({
                height: "0px",
            }, 0);
        } else {
            if (!_properties._isOpen) {
                $('.Drildown').each(function (item) {
                    $("#" + el + "MenuItem" + item).attr("Expand", false);
                    $("#" + el + "MenuItem" + item + " .ListIconImg").attr("src", _properties._collapesIcon);
                    $("#" + el + "MenuItem" + item + "List").attr('style', 'min-height: 0px');
                    $("#" + el + "MenuItem" + item + "List").hide();
                });
            }
            var height = ($("#" + this.id + "TableList table tr .tableinnerdata").length * 20);
            $("#" + this.id + "List").show();
            $("#" + this.id).attr("Expand", true);
            $("#" + this.id + " .ListIconImg").attr("src", _properties._expandIcon);
            $("#" + this.id + "List").attr('style', 'min-height: ' + height + 'px');
        }
    };

    $.fn.expandAll = function (el) {
        $('.Drildown').each(function (item) {
            var height = ($("#MenuItem" + item + "TableList table tr .tableinnerdata").length * 20);
            $("#" + el + "MenuItem" + item + "List").show();
            $("#" + el + "MenuItem" + item).attr("Expand", true);
            $("#" + this.id + " .ListIconImg").attr("src", _properties._expandIcon);
            $("#" + el + "MenuItem" + item + "List").attr('style', 'min-height: ' + height + 'px');
        });
    }
    $.fn.collapesAll = function (el) {
        $('.Drildown').each(function (item) {
            $("#" + el + "MenuItem" + item).attr("Expand", false);
            $("#" + this.id + " .ListIconImg").attr("src", _properties._collapesIcon);
            $("#" + el + "MenuItem" + item + "List").attr('style', 'min-height: 0px');
            $("#" + el + "MenuItem" + item + "List").hide();
        });
    }
})(jQuery);