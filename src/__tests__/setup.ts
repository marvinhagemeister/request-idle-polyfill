import { jsdom } from "jsdom";

global.document = jsdom("");
global.window = document.defaultView;

const keys = Object.keys(document.defaultView);
for (let i = 0; i < keys.length; i++) {
  if (typeof (global as any)[keys[i]] === "undefined") {
    (global as any)[keys[i]] = (document.defaultView as any)[keys[i]];
  }
}

global.navigator = {
  userAgent: "node.js"
};
