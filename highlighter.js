var flag = 0,
    element = document;
element.addEventListener("mousedown", function () {
    flag = 0;
}, false);
element.addEventListener("mousemove", function () {
    flag = 1;
}, false);
element.addEventListener("mouseup", function () {
    if (flag === 1) {
        getSelText();
    }
}, false);

function getSelText() {
    var sel = window.getSelection ? window.getSelection() : document.selection.createRange(); // FF : IE
    if (sel.getRangeAt) { // thats for FF
        var range = sel.getRangeAt(0);
        var newNode = document.createElement("span");
        newNode.setAttribute('class', 'highlighter');
        range.surroundContents(newNode);
    } else { //and thats for IE7
        sel.pasteHTML('<span class="highlighter">' + sel.htmlText + '</span>');

    }
}
