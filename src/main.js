import { setLocale, localizeHref } from "./paraglide/runtime.js";

setLocale("de");

console.log(localizeHref("/#page"));

// expected "/de#page"
// actual "/de/#page"
