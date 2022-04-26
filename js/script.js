// Copyright (c) 2022 Marshall All rights reserved
//
// Created by: Marshall
// Created on: Apr 2022
// This file contains the JS functions for index.html

/**
 * Check service worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS20-Unit5-02-JS/sw.js", {
    scope: "/ICS20-Unit5-02-JS/",
  })
}

"use strict"

/**
 * This function calculates random number and checks if you guessed it correctly
 */
function check() {
  // input
  var number = parseInt(document.getElementById("slider").value)

  // process and output
  if (number >= 0) {
    document.getElementById("boolean").innerHTML = "This number is positive"
  } else {
    document.getElementById("boolean").innerHTML = "This number is negative"
  }
}
