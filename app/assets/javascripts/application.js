// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require jquery.ui.datepicker
//= require cocoon
//= require twitter/bootstrap
//= require_tree .
//= require twitter/bootstrap/bootstrap-transition
//= require twitter/bootstrap/bootstrap-alert
//= require twitter/bootstrap/bootstrap-modal
//= require twitter/bootstrap/bootstrap-button
//= require twitter/bootstrap/bootstrap-collapse
/*
 * Smart event highlighting
 * Handles for when events span rows, or don't have a background color
 */
Event.observe(window, "load", function() {
  var highlight_color = "#2EAC6A";
  
  // highlight events that have a background color
  $$(".ec-event-bg").each(function(ele) {
    ele.observe("mouseover", function(evt) {
      event_id = ele.readAttribute("data-event-id");
      event_class_name = ele.readAttribute("data-event-class");
      $$(".ec-"+event_class_name+"-"+event_id).each(function(el) {
        el.setStyle({ backgroundColor: highlight_color });
      });
    });
    ele.observe("mouseout", function(evt) {
      event_id = ele.readAttribute("data-event-id");
      event_class_name = ele.readAttribute("data-event-class");
      event_color = ele.readAttribute("data-color");
      $$(".ec-"+event_class_name+"-"+event_id).each(function(el) {
        el.setStyle({ backgroundColor: event_color });
      });
    });
  });
  
  // highlight events that don't have a background color
  $$(".ec-event-no-bg").each(function(ele) {
    ele.observe("mouseover", function(evt) {
      ele.setStyle({ color: "white" });
      ele.select("a").each(function(link) {
        link.setStyle({ color: "white" });
      });
      ele.select(".ec-bullet").each(function(bullet) {
        bullet.setStyle({ backgroundColor: "white" });
      });
      ele.setStyle({ backgroundColor: highlight_color });
    });
    ele.observe("mouseout", function(evt) {
      event_color = ele.readAttribute("data-color");
      ele.setStyle({ color: event_color });
      ele.select("a").each(function(link) {
        link.setStyle({ color: event_color });
      });
      ele.select(".ec-bullet").each(function(bullet) {
        bullet.setStyle({ backgroundColor: event_color });
      });
      ele.setStyle({ backgroundColor: "transparent" });
    });
  });
});

// tabs



!function( $ ){

  function activate ( element, container ) {
    container
      .find('> .active')
      .removeClass('active')
      .find('> .dropdown-menu > .active')
      .removeClass('active')

    element.addClass('active')

    if ( element.parent('.dropdown-menu') ) {
      element.closest('li.dropdown').addClass('active')
    }
  }

  function tab( e ) {
    var $this = $(this)
      , $ul = $this.closest('ul:not(.dropdown-menu)')
      , href = $this.attr('href')
      , previous

    if ( /^#\w+/.test(href) ) {
      e.preventDefault()

      if ( $this.parent('li').hasClass('active') ) {
        return
      }

      previous = $ul.find('.active a').last()[0]
      $href = $(href)

      activate($this.parent('li'), $ul)
      activate($href, $href.parent())

      $this.trigger({
        type: 'change'
      , relatedTarget: previous
      })
    }
  }


 /* TABS/PILLS PLUGIN DEFINITION
  * ============================ */

  $.fn.tabs = $.fn.pills = function ( selector ) {
    return this.each(function () {
      $(this).delegate(selector || '.tabs li > a, .pills > li > a', 'click', tab)
    })
  }

  $(document).ready(function () {
    $('body').tabs('ul[data-tabs] li > a, ul[data-pills] > li > a')
  })

}( window.jQuery || window.ender );

