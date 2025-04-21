import { initializeSwipers } from "./swipes.js";
import { initializeMenu } from "./menu.js";
import { initializeSearch } from "./search.js";

document.addEventListener("DOMContentLoaded", function () {
  initializeSwipers();
  initializeMenu();
  initializeSearch();
});
