/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal) {
  Drupal.behaviors.au_claroAutoCompete = {
    attach: function attach(context) {
      $(context).find('input.form-autocomplete').once('au_claroAutoComplete').each(function (index, value) {
        var $input = $(value);
        var timeout = 400;
        var classRemoveTimeout = void 0;
        var classRemove = function classRemove($autoCompleteElem) {
          $autoCompleteElem.removeClass('is-autocompleting');
        };

        $input.on('input autocompletesearch autocompleteresponses', function (event) {
          if (event && event.type && event.type === 'autocompletesearch') {
            $(event.target).addClass('is-autocompleting');
          }
          clearTimeout(classRemoveTimeout);
          classRemoveTimeout = setTimeout(classRemove, timeout, $(event.target));
        });
      });
    }
  };
})(jQuery, Drupal);