// xfinity remote
var BTN_LEFT = 37, BTN_UP = 38, BTN_RIGHT = 39, BTN_DOWN = 40, BTN_OK = 13;

var currentFocus = 0;
var buttonList = [];

function handleKeydown(e) {
    currentFocus = currentFocus || 0;
   
    switch (e.keyCode) {
        case BTN_OK:
            buttonList[currentFocus].click();
            break;

        case BTN_LEFT:
            if(currentFocus > 0)
                currentFocus -= 1;
            else
                currentFocus = buttonList.length - 1;
            buttonList[currentFocus].focus();
            break;

        case BTN_RIGHT:
            currentFocus += 1;
            if(currentFocus == buttonList.length)
                currentFocus = 0;
            buttonList[currentFocus].focus();
            break;

        case BTN_UP:
            if(currentFocus <= 2)
                currentFocus = 6;
            else if((currentFocus >= 3) && (currentFocus <= 5))
                currentFocus = 0;
            else if(currentFocus >= 6)
                currentFocus = 3;
            buttonList[currentFocus].focus();
            break;

        case BTN_DOWN:
            if(currentFocus <= 2)
                currentFocus = 3;
            else if((currentFocus >= 3) && (currentFocus <= 5))
                currentFocus = 6;
            else if(currentFocus >= 6)
                currentFocus = 0;
            buttonList[currentFocus].focus();
            break;
    }

    console.log("Handle Key Down: " + e.keyCode + " : " + currentFocus + "/" + buttonList.length + " : " + buttonList[currentFocus].id);
}

window.onload = function() {
    currentFocus = 0;
    buttonList = document.getElementsByTagName("button");
    buttonList[currentFocus].focus();

    // Add keydown handler
    window.addEventListener('keydown', handleKeydown, false);
}
