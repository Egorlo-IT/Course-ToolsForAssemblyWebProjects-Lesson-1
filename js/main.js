"use strict";

import { loadScript } from "./loadScript.js";
import { toggle } from "./toggle.js";
import { timer } from "./timer.js";
import { datesCalculator } from "./datesCalculator.js";

loadScript("./js/howler/howler.js", () => {
  loadScript("./js/luxon/luxon.js", () => {
    toggle();
    timer();
    datesCalculator();
  });
});
