(function ($) {
    $.fn.highlighter = function (options) {
        var settings = $.extend({
            // Defaults.
            highlighted: "highlighter"
        }, options);
        var getSelText = function () {
            var sel = window.getSelection ? window.getSelection() : document.selection.createRange(); // FF : IE
            if (sel.getRangeAt) { // thats for FF
                var range = sel.getRangeAt(0);
                var newNode = document.createElement("span");
                newNode.setAttribute('class', settings.highlighted);
                range.surroundContents(newNode);
            } else { //and thats for IE7
                sel.pasteHTML('<span class="' + settings.highlighted + '">' + sel.htmlText + '</span>');

            }
        }

        return this.each(function () {
            var flag = 0,
                element = this;
            element.addEventListener("mousedown", function () {
                flag = 0;
            }, false);
            element.addEventListener("mousemove", function () {
                flag = 1;
            }, false);
            element.addEventListener("mouseup", function () {
                if (flag === 0) {
                    console.log("click");
                } else if (flag === 1) {
                    getSelText();
                }
            }, false);
        });
    };
}(jQuery));
