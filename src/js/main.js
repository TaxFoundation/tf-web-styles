'use strict'

$(document).ready(function () {
  var responsiveTables;

  // Find Tables and Set Data Titles
  responsiveTables = {
    initialize: function () {
      $('table').each(function (index) {
        var headers = responsiveTables.findHeaders($(this));
        responsiveTables.setDataTitles($(this), headers);
      });
    },

    findHeaders: function (table) {
      var headers = {};
      table.find('th')
      .each(function (index) {
        headers[index] = $(this).text();
      });
      return headers;
    },

    setDataTitles: function (table, headers) {
      var tableRows = $('tbody tr');
      tableRows.each(function (index) {
        var cells = $(this).find('td');
        if (cells.length === Object.keys(headers).length) {
          cells.each(function (index) {
            $(this).attr('data-title', headers[index]);
          })
        }
      });
    },
  }

  responsiveTables.initialize();
});
