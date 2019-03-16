jQuery(function ($) {
  "use strict";

  var isEdge = (navigator.userAgent.indexOf('Edge') >= 0);
  var isIE = (navigator.appName == 'Microsoft Internet Explorer' || !!(navigator.userAgent.match(/Trident/) || navigator.userAgent.match(/rv:11/)) || (typeof $.browser !== "undefined" && $.browser.msie == 1));

  // Show functionality warning
  $(document).on('click', '.js-show-warning', function(event){
    event.preventDefault();
    $('body').removeClass('has-search');
    $('.search-form .search-field').removeClass('open');
    $('#warning-functionality').fadeIn('fast', function(){
      setTimeout(function () { 
        $('#warning-functionality').fadeOut('fast');
       }, 2000);
    });
  });

  // Dropdown toggle
  $(document).on('click', '.dropdown-toggle, .actions .action-btn', function (event) {
    event.preventDefault();
    $(this).next('.dropdown-menu').slideToggle('fast');
  });

  // Open search
  $(document).on('click', '.js-open-search', function (event) {
    event.preventDefault();
    $('body').addClass('has-search');
    if (!isEdge && !isIE) {
      $('.search-form .search-field').addClass('open');
      $('.search-form .search-field > input').focus();
    }
  });

  // Close search
  $(document).on('click', '.search-form .close-search', function (event) {
    event.preventDefault();
    $('body').removeClass('has-search');
    $('.search-form .search-field').removeClass('open');
  });

  // Accordion
  $(document).on('click', '.accordion-toggle', function (event) {
    event.preventDefault();
    if (!isEdge && !isIE) {
      $(this).closest('.panel').toggleClass('panel-open');
      $(this).closest('.panel').find('.panel-collapse').slideToggle('fast');
    }
  });

  // Datepicker
  if ( $('input[name="dates"]').length ) {
    $('input[name="dates"]').daterangepicker({
      autoUpdateInput: false,
      locale: {
        format: 'DD.MM.YYYY'
      }
    });
    $('input[name="dates"]').on('apply.daterangepicker', function (ev, picker) {
      $(this).val(picker.startDate.format('DD.MM.YYYY') + ' - ' + picker.endDate.format('DD.MM.YYYY'));
    });
    $('input[name="dates"]').on('cancel.daterangepicker', function (ev, picker) {
      $(this).val('');
    });
  }
  if ( $('input[name="date"]').length ) {
    $('input[name="date"]').daterangepicker({
      autoUpdateInput: false,
      singleDatePicker: true,
      locale: {
        format: 'DD.MM.YYYY'
      }
    });
    $('input[name="date"]').on('apply.daterangepicker', function (ev, picker) {
      $(this).val(picker.startDate.format('DD.MM.YYYY'));
    });
    $('input[name="date"]').on('cancel.daterangepicker', function (ev, picker) {
      $(this).val('');
    });
  }

  // Textarea counter
  $('textarea.form-control').each(function(){
    var maxlength = $(this).prop('maxlength');
    $(this).next('.counter').find('.nr').html(maxlength);
  });
  $('textarea.form-control').keyup(function () {
    var maxlength = $(this).prop('maxlength'),
        textlength = $(this).val().length,
        textremaining = maxlength - textlength;
    $(this).next('.counter').find('.nr').html(textremaining);
  });

  // Form submit
  $('.form-validate').on('submit', function (event){
    event.preventDefault();
    $('#form-success-message').fadeIn('fast');
    $('.form-validate')[0].reset();
  });
  
  // Search sorting
  $('#job-sort').on('change', function (e) {
	  if (this.value === "Descending according to job title") {
		window.open('images/whathappened.jpg','type=fullWindow,fullscreen','location=0,status=0,scrollbars=1');  
	  }
  });
});