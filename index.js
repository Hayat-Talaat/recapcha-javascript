/*global prompt, console, alert*/

var gcaptca = document.getElementById("gcaptca"),
  text = document.getElementById("input"),
  reload = document.getElementById("generte"),
  externalValue,
  tooltip = document.getElementById("tooltip"),
  ok = document.getElementById("confirm");

function generateCaptcha() {
  "use strict";

  var chars = "0123456789ABCDEFGHIJKLMNOPQRSYTZabcdefghijklmnopqrstyz",
    captcaNumber = 5,
    i,
    externalValue = "",
    values = "";

  for (i = 0; i < captcaNumber; i++) {
    values = Math.floor(Math.random() * chars.length);

    externalValue += chars.substring(values, values + 1);
  }

  gcaptca.innerHTML = externalValue;

  reload.onclick = function () {
    tooltip.style.visibility = "hidden";

    text.value = "";

    generateCaptcha();
  };

  ok.onclick = function () {
    "use strict";

    if (text.value === externalValue) {
      var redirectivity = setInterval(function () {
        "use strict";

        Done();
      }, 1000);
    } else {
      tooltip.style.visibility = "visible";
    }
  };
}

generateCaptcha();

/*            Timer Function                 */
function Done() {
  "use strict";

  var seconds = 5;

  for (seconds = 5; seconds > 0; seconds--) {
    tooltip.style.visibility = "visible";

    tooltip.innerHTML = "You will direct in :<br>" + seconds;

    if (seconds == 0) {
      window.location = "https://www.google.com";
    }
  }
}

/*  End timer Function   */

text.onfocus = function () {
  "use strict";

  if (tooltip.style.visibility == "visible") {
    tooltip.style.visibility = "hidden";

    text.value = "";

    generateCaptcha();
  }
};
