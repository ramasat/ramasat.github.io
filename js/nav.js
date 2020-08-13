// xfinity remote
var BTN_LEFT = 37, BTN_UP = 38, BTN_RIGHT = 39, BTN_DOWN = 40, BTN_OK = 13;

var currentFocus = 0;
var prevFocus = 0;
var buttonList = [];

function handleKeydown(e) {
    console.log("Handle Key Down: " + e.keyCode);
    
    currentFocus = currentFocus || 0;
   
    switch (e.keyCode) {
        case BTN_OK:
            //buttonList[currentFocus].click();
            break;

        case BTN_LEFT:
            prevFocus = currentFocus;
            if(currentFocus > 0)
                currentFocus -= 1;
            else
                currentFocus = buttonList.length - 1;
            console.log("Set previously focused button " + buttonList[prevFocus].id + " to BLUE");
            buttonList[prevFocus].style.background = '#00A2E8';
            console.log("And, Set currently focused button " + buttonList[currentFocus].id + " to ORANGE");
            buttonList[currentFocus].style.background = '#FF7F27';
            buttonList[currentFocus].focus();
            break;

        case BTN_RIGHT:
            prevFocus = currentFocus;
            currentFocus += 1;
            if(currentFocus == buttonList.length)
                currentFocus = 0;
            console.log("Set previously focused button " + buttonList[prevFocus].id + " to BLUE");
            buttonList[prevFocus].style.background = '#00A2E8';
            console.log("And, Set currently focused button " + buttonList[currentFocus].id + " to ORANGE");            
            buttonList[currentFocus].style.background = '#FF7F27';
            buttonList[currentFocus].focus();
            break;

        case BTN_UP:
            prevFocus = currentFocus;
            if(currentFocus <= 2)
                currentFocus = 6;
            else if((currentFocus >= 3) && (currentFocus <= 5))
                currentFocus = 0;
            else if(currentFocus >= 6)
                currentFocus = 3;
            console.log("Set previously focused button " + buttonList[prevFocus].id + " to BLUE");
            buttonList[prevFocus].style.background = '#00A2E8';
            console.log("And, Set currently focused button " + buttonList[currentFocus].id + " to ORANGE");            
            buttonList[currentFocus].style.background = '#FF7F27';
            buttonList[currentFocus].focus();
            break;

        case BTN_DOWN:
            prevFocus = currentFocus;
            if(currentFocus <= 2)
                currentFocus = 3;
            else if((currentFocus >= 3) && (currentFocus <= 5))
                currentFocus = 6;
            else if(currentFocus >= 6)
                currentFocus = 0;
            console.log("Set previously focused button " + buttonList[prevFocus].id + " to BLUE");
            buttonList[prevFocus].style.background = '#00A2E8';
            console.log("And, Set currently focused button " + buttonList[currentFocus].id + " to ORANGE");
            buttonList[currentFocus].style.background = '#FF7F27';
            buttonList[currentFocus].focus();
            break;
    }

    console.log("Handle Key Down: " + e.keyCode + " : " + currentFocus + "/" + buttonList.length + " : " + buttonList[currentFocus].id);
}

window.onload = function() {
    var arrayLength = 0;
    currentFocus = 0;
    buttonList = document.getElementsByTagName("button");
    arrayLength = buttonList.length;
    console.log("*******On Load*********");
    for (var i = 0; i < arrayLength; i++) {
        console.log("Set button " + buttonList[i].id + " to BLUE");
        buttonList[i].style.background = '#00A2E8';
    }
    console.log("And, Set currently focused button " + buttonList[currentFocus].id + " to ORANGE");
    buttonList[currentFocus].style.background = '#FF7F27';
    buttonList[currentFocus].focus();

    // Add keydown handler
    window.addEventListener('keydown', handleKeydown, false);
}
