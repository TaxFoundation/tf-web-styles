'use strict'

$(document).ready(function () {
  var responsiveTables;

  // Find Tables and Set Data Titles
  responsiveTables = {
    initialize: function () {
      $('table').each(function (index) {
        var headers = responsiveTables.findHeaders($(this));
        var rows = $(this).find('tbody tr');
        if (Object.keys(headers).length && responsiveTables.checkHeaderAndCellLengths(rows, Object.keys(headers).length)) {
          responsiveTables.setDataTitles(rows, headers);
        }
      });
    },

    findHeaders: function (table) {
      var headers = {};
      table.find('thead').find('th')
      .each(function (index) {
        headers[index] = $(this).text();
      });
      return headers;
    },

    setDataTitles: function (rows, headers) {
      rows.each(function (index) {
        var cells = $(this).find('td');
        cells.each(function (index) {
          $(this).attr('data-title', headers[index]);
        });
      });
    },

    checkHeaderAndCellLengths: function (rows, headersLength) {
      var previousLength = 0;
      var matches = true;
      rows.each(function (index) {
        if ($(this).find('td').length !== headersLength) {
          matches = false;
          return false;
        }
      });

      return matches;
    }
  }

  responsiveTables.initialize();
});
