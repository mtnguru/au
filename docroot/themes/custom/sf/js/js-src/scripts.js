/**
 * @file
 * Aureon Energey - Top Navigation Menu bar
 *
 * @type {{attach: Drupal.behaviors.menu_top.attach}}
 */

(function ($) {
  'use strict';

  function resizeWindow() {
    // Calculate the aspect ratio
    var width = $(window).width();
    var height = $(window).height();
    var ratio = width / height;
    if (ratio > 1.5) {
      $('#header-background').addClass('wide')
      $('#header-background').removeClass('skinny')
    } else {
      $('#header-background').removeClass('wide')
      $('#header-background').addClass('skinny')
    }
  }

  resizeWindow();
  $(window).resize(function () {
    resizeWindow();
  })
}(jQuery));

