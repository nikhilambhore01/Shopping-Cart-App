/** @format */

import noty from "noty";

const showNotification = (text) => {
  new noty({
    text: text,
    layout: "topRight",
    theme: "sunset",
    type: "alert",
    timeout: 500,
  }).show();
};

export { showNotification };
