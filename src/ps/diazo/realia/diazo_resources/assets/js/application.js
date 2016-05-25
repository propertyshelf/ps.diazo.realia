function config_reset_height_listing(listing) {
  var h = ['h3', 'h2', '.item.listing_type', '.item.location', '.item.location_type', '.item.view_type', '.item.lot_size', '.item.object_type'];
  jQuery(listing).children(h).each(function(index) {
    jQuery(this).height('auto');
  });
}


function column_counter(items) {
  my_width = jQuery(items).width();
  my_head_width = jQuery(items).find('.collection-item h2:first').width();
  //find out how many items in one row
  if (my_width > 800) {
    listing_col = 3;
  } else if (my_width > 200) {
    if (my_head_width < 400) {
      listing_col = 2;
    } else {
      listing_col = 1;
    }
  } else if (my_width < 200) {
    listing_col = 1;
  } else {
    listing_col = false;
  }
  return listing_col;
}


function balance_height(items) {
  // get nr. of item columns
  columns = column_counter(items);
  //we have more then 1 column
  if (columns > 1) {
    //set height depending on column nr.
    lastelement = jQuery(items).children('.collection-item').length;
    lastelement = lastelement - 1;
    jQuery(items).children('.collection-item').each(function(index) {
      // Modulo operator to fing begin of each row
      mod = index % columns;
      if (mod < 1) {
        // 0%2 = 0
        // 1%2 = 1
        // 2%2 = 0
        // 3%2 = 1
        //mod == 0 -> first element in a row
        if (index > 0) {
          balance_item(item0, item1, item2);
          height0 = item0.height();
          if (item1) {
            height1 = item1.height();
          } else {
            height1 = 0;
          }
          if (item2) {
            height2 = item2.height();
          } else {
            height2 = 0;
          }
          row_height = Math.max(height0, height1, height2);
          if (item0) {
            jQuery(item0).height(row_height);
          }
          if (item1) {
            jQuery(item1).height(row_height);
          }
          if (item2) {
            jQuery(item2).height(row_height);
          }
        }
        // remember first row item with the name 'item0'
        item0 = jQuery(this);
        // unset css defaults for calculate real height
        item0.height('auto');
        item0.css('min-height', 'auto');
        item1 = null;
        height1 = 0;
        item2 = null;
        height2 = 0;
      } else {
        if (mod == 1) {
          // remember second row item with the name 'item1'
          // last item when have 2 columns
          item1 = jQuery(this);
          // unset css defaults for calculate real height
          item1.height('auto');
          item1.css('min-height', 'auto');
        }
        if (mod == 2) {
          // remember third row item with the name 'item2'
          // last when have 3 columns
          item2 = jQuery(this);
          // unset css defaults for calculate real height
          item2.height('auto');
          item2.css('min-height', 'auto');
        }
      }

      // For last row
      if (lastelement == index) {
        balance_bedbath(item0, item1, item2);
        balance_item(item0, item1, item2);
        height0 = item0.height();
        if (item1) {
          height1 = item1.height();
        } else {
          height1 = 0;
        }
        if (item2) {
          height2 = item2.height();
        } else {
          height2 = 0;
        }
        row_height = Math.max(height0, height1, height2);
        if (item0) {
          jQuery(item0).height(row_height);
        }
        if (item1) {
          jQuery(item1).height(row_height);
        }
        if (item2) {
          jQuery(item2).height(row_height);
        }
      }
    });
  } else {
    //do nothing
  }
}


function balance_field(name, item0, item1, item2) {
  item_field0 = jQuery(item0).children(name);
  item_field1 = jQuery(item1).children(name);
  item_field2 = jQuery(item2).children(name);
  field_height0 = item_field0.height();
  if (item1) {
    field_height1 = item_field1.height();
  } else {
    field_height1 = 0;
  }
  if (item2) {
    field_height2 = item_field2.height();
  } else {
    field_height2 = 0;
  }
  listing_field_height = Math.max(field_height0, field_height1, field_height2);
  if (item_field0) {
    jQuery(item_field0).height(listing_field_height);
  }
  if (item_field1) {
    jQuery(item_field1).height(listing_field_height);
  }
  if (item_field2) {
    jQuery(item_field2).height(listing_field_height);
  }
}


function balance_bedbath(item0, item1, item2) {
  selector = '.item.beds_baths';
  item_field0 = jQuery(item0).children(selector);
  item_field1 = jQuery(item1).children(selector);
  item_field2 = jQuery(item2).children(selector);
  if (jQuery('.collection-item.tileItem .item.beds_baths').length > 0) {
    next_class = jQuery('.collection-item.tileItem').find(selector).next().attr('class').replace(' ', '.');
    clone = '<div class="item beds_baths">&nbsp;</div>';
    if (item_field0.length>0 || item_field1.length>0 || item_field2.length > 0) {
      if (item_field0.length < 1 ) {
        jQuery(item0).children('.' + next_class).before(clone);
      }
      if (item_field1.length < 1) {
        jQuery(item1).children('.' + next_class).before(clone);
      }
      if (item_field2.length < 1) {
        jQuery(item2).children('.' + next_class).before(clone);
      }
    }
  } else {
    return false;
  }
  // One item have bedbath else return false
  // Find out with item dont have bedbath
  // Prepend this div class to next field
}


function balance_item(item0, item1, item2) {
    balance_bedbath(item0, item1, item2);
    // class title
    balance_field('h2, h3', item0, item1, item2);
    // class item
    balance_field('.item.listing_type', item0, item1, item2);
    balance_field('.item.location', item0, item1, item2);
    balance_field('.item.location_type', item0, item1, item2);
    balance_field('.item.view_type', item0, item1, item2);
    balance_field('.item.lot_size', item0, item1, item2);
    balance_field('.item.object_type', item0, item1, item2);
}


function map_listing_data(obj) {
  //use data input to give back a easy to access array for mapping
  dict = [];
  new_structure = jQuery(obj).children('div').length > 0;
  if (new_structure) {
    if (obj.find('.listing__beds_baths dd').length > 0) {
      dict.type = 'house';
    } else {
      dict.type = 'land';
    }

    dict.price = obj.find('.listing__price dd').html();
    dict.listingtype = obj.find('.listing__listing_type dd').html();
    dict.propertytype = obj.find('.listing__object_type dd').html();
    dict.location = obj.find('.listing__location dd').html();
    dict.area = obj.find('.listing__lot_size dd').html();
    dict.bedbath = obj.find('.listing__beds_baths dd').html();
    dict.locationtype = obj.find('.listing__location_type dd').html();
  } else {
    counter = jQuery(obj).children('dd').length;
    if (counter < 10) {
      dict.type = 'land';
    } else {
      dict.type = 'house';
    }

    try {
      dict.price = obj[0].children[1].innerHTML;
    } catch(err) {
      dict.price = '';
    }

    try {
      dict.listingtype = obj[0].children[5].innerHTML;
    } catch(err) {
      dict.listingtype = '';
    }

    try {
      dict.propertytype = obj[0].children[9].innerHTML;
    } catch(err) {
      dict.propertytype = '';
    }

    if (dict.type == "house") {
      dict.location = obj[0].children[13].innerHTML;
      dict.area = obj[0].children[19].innerHTML;
      dict.bedbath = obj[0].children[11].innerHTML;
      dict.locationtype = obj[0].children[15].innerHTML;
    } else {
      // land listings have different indexes
      dict.location = obj[0].children[11].innerHTML;
      dict.area = obj[0].children[17].innerHTML;
      dict.bedbath = "";
      dict.locationtype = obj[0].children[13].innerHTML;
    }
  }

  // parse location
  dict.location = parse_location(dict.location);
  return dict;
}


function parse_location(location) {
  // unparsed: San Joaquín, San Joaquín de Flores, Flores, Heredia, Costa Rica
  // parsed: San Joaquín, Heredia, Costa Rica

  try {
    var splitter = location.split(",");
    // react on different location types
    var last = splitter.length - 1;
    var center = splitter.length - 2;
    if (center > 0 && last > 1) {
      location = splitter[0] + "," + splitter[center] + "," + splitter[last];
    }
  } catch(err) {
    console.log(error);
  }
  return location;
}


function enhance_listiggrid() {
  jQuery(".listing-collection-tile .collection-item .item.location .item-body").each(function(index) {
    mylocation = parse_location(jQuery(this).text());
    jQuery(this).text(mylocation);
  });
  jQuery(".listing-collection-tile .collection-item .item.lot_size").each(function(index) {
    // remove the label of lot size to replace it with css icon
    jQuery(this).children('.item-heading').remove();
    jQuery(this).prepend('<span class="key" title="Area"> </span>');
  });
}


function enhance_listingbar() {
  /* Improve listing bar. */
  // Remove the ugly [ 1 ] notation and give it a class
  jQuery('.listingBar').html(function(i,html) {
    foo = html.replace('[', '<span class="active">').replace(']', '</span>');
    return foo;
  });
}


function enhance_filterportlet() {
  /* Improve Filter Listing Portlet. */
  // open or close collapsible fields
  jQuery('.portletQuickSearch .collapsible').each(function(index) {
    // if collapsible div have checked checkboxes inside
    checkers = jQuery(this).find('input[type="checkbox"]:checked');
    if (checkers.length > 0) {
      // open this field by default
      jQuery(this).children('.collapse').show('slow');
      // clean up classes
      jQuery(this).children(".collapser").removeClass().addClass('horizontal collapser expanded');
    } else {
      // nothing selected -> close field
      jQuery(this).children('.collapse').hide('slow');
      jQuery(this).children(".collapser").removeClass().addClass('horizontal collapser collapsed');
    }
  });
}


function hover_remove_active() {
  jQuery(".tileItem figure").each(function(index) {
    jQuery(this).hover(function() {
      jQuery(this).siblings(".workflow_status").hide();
    }, function() {
      jQuery(this).siblings(".workflow_status").show();
    });
  });
}


function getDoormatClass() {
  /* Get the existing doormat columns and translate them to the span grid system. */
  var col_class = "";
  if (jQuery('.doormatColumn.column-0').length > 0) {
    // just one column
    col_class = "span12";
  }
  if (jQuery('.doormatColumn.column-1').length > 0) {
    // two columns
    col_class = "span6";
  }
  if (jQuery('.doormatColumn.column-2').length > 0) {
    // three columns
    col_class = "span4";
  }
  if (jQuery('.doormatColumn.column-3').length > 0) {
    // four columns
    col_class = "span3";
  }
  if (jQuery('.doormatColumn.column-4').length > 0) {
    //five columns
    col_class = "";
  }
  if (jQuery('.doormatColumn.column-5').length > 0) {
    // six columns
    col_class = "span2";
  }

  return col_class;
}


function clickshow_option() {
  /* Click bluebox show option. */
  jQuery(".listing-search-tile #formfield-form-widgets-jacuzzi span").hide('slow');
  jQuery(".listing-search-tile #formfield-form-widgets-jacuzzi label.horizontal").addClass('collapser collapsed');
  jQuery(".listing-search-tile #formfield-form-widgets-pool span").hide('slow');
  jQuery(".listing-search-tile #formfield-form-widgets-pool label.horizontal").addClass('collapser collapsed');
  jQuery(".listing-search-tile #formfield-form-widgets-air_condition span").hide('slow');
  jQuery(".listing-search-tile #formfield-form-widgets-air_condition label.horizontal").addClass('collapser collapsed');
  jQuery(".listing-search-tile #formfield-form-widgets-view_type span").hide('slow');
  jQuery(".listing-search-tile #formfield-form-widgets-view_type label.horizontal").addClass('collapser collapsed');
  jQuery(".listing-search-tile #formfield-form-widgets-location_type span").hide('slow');
  jQuery(".listing-search-tile #formfield-form-widgets-location_type label.horizontal").addClass('collapser collapsed');
  jQuery(".listing-search-tile #formfield-form-widgets-geographic_type span").hide('slow');
  jQuery(".listing-search-tile #formfield-form-widgets-geographic_type label.horizontal").addClass('collapser collapsed');
  jQuery(".listing-search-tile #formfield-form-widgets-object_type span").hide('slow');
  jQuery(".listing-search-tile #formfield-form-widgets-object_type label.horizontal").addClass('collapser collapsed');
  jQuery(".listing-search-tile #formfield-form-widgets-ownership_type span").hide('slow');
  jQuery(".listing-search-tile #formfield-form-widgets-ownership_type label.horizontal").addClass('collapser collapsed');

  jQuery(".listing-search-tile #formfield-form-widgets-air_condition label.horizontal").click(function() {
    jQuery(".listing-search-tile #formfield-form-widgets-air_condition span").slideToggle("slow");
    if (jQuery(".listing-search-tile #formfield-form-widgets-air_condition label.horizontal.collapsed").length > 0) {
      jQuery(".listing-search-tile #formfield-form-widgets-air_condition label.horizontal.collapsed").removeClass('collapsed').addClass('expanded');
    } else {
      jQuery(".listing-search-tile #formfield-form-widgets-air_condition label.horizontal.expanded").removeClass('expanded').addClass('collapsed');
    }
  });

  jQuery(".listing-search-tile #formfield-form-widgets-pool label.horizontal").click(function() {
    jQuery(".listing-search-tile #formfield-form-widgets-pool span").slideToggle("slow");
    if (jQuery(".listing-search-tile #formfield-form-widgets-pool label.horizontal.collapsed").length > 0) {
      jQuery(".listing-search-tile #formfield-form-widgets-pool label.horizontal.collapsed").removeClass('collapsed').addClass('expanded');
    } else {
      jQuery(".listing-search-tile #formfield-form-widgets-pool label.horizontal.expanded").removeClass('expanded').addClass('collapsed');
    }
  });

  jQuery(".listing-search-tile #formfield-form-widgets-jacuzzi label.horizontal").click(function() {
    jQuery(".listing-search-tile #formfield-form-widgets-jacuzzi span").slideToggle("slow");
    if (jQuery(".listing-search-tile #formfield-form-widgets-jacuzzi label.horizontal.collapsed").length > 0) {
      jQuery(".listing-search-tile #formfield-form-widgets-jacuzzi label.horizontal.collapsed").removeClass('collapsed').addClass('expanded');
    } else {
      jQuery(".listing-search-tile #formfield-form-widgets-jacuzzi label.horizontal.expanded").removeClass('expanded').addClass('collapsed');
    }
  });

  jQuery(".listing-search-tile #formfield-form-widgets-view_type label.horizontal").click(function() {
    jQuery(".listing-search-tile #formfield-form-widgets-view_type span").slideToggle("slow");
    if (jQuery(".listing-search-tile #formfield-form-widgets-view_type label.horizontal.collapsed").length > 0) {
      jQuery(".listing-search-tile #formfield-form-widgets-view_type label.horizontal.collapsed").removeClass('collapsed').addClass('expanded');
    } else {
      jQuery(".listing-search-tile #formfield-form-widgets-view_type label.horizontal.expanded").removeClass('expanded').addClass('collapsed');
    }
  });

  jQuery(".listing-search-tile #formfield-form-widgets-location_type label.horizontal").click(function() {
    jQuery(".listing-search-tile #formfield-form-widgets-location_type span").slideToggle("slow");
    if (jQuery(".listing-search-tile #formfield-form-widgets-location_type label.horizontal.collapsed").length > 0) {
      jQuery(".listing-search-tile #formfield-form-widgets-location_type label.horizontal.collapsed").removeClass('collapsed').addClass('expanded');
    } else {
      jQuery(".listing-search-tile #formfield-form-widgets-location_type label.horizontal.expanded").removeClass('expanded').addClass('collapsed');
    }
  });

  jQuery(".listing-search-tile #formfield-form-widgets-geographic_type label.horizontal").click(function() {
    jQuery(".listing-search-tile #formfield-form-widgets-geographic_type span").slideToggle("slow");
    if (jQuery(".listing-search-tile #formfield-form-widgets-geographic_type label.horizontal.collapsed").length > 0) {
      jQuery(".listing-search-tile #formfield-form-widgets-geographic_type label.horizontal.collapsed").removeClass('collapsed').addClass('expanded');
    } else {
      jQuery(".listing-search-tile #formfield-form-widgets-geographic_type label.horizontal.expanded").removeClass('expanded').addClass('collapsed');
    }
  });

  jQuery(".listing-search-tile #formfield-form-widgets-object_type label.horizontal").click(function() {
    jQuery(".listing-search-tile #formfield-form-widgets-object_type span").slideToggle("slow");
    if (jQuery(".listing-search-tile #formfield-form-widgets-object_type label.horizontal.collapsed").length > 0) {
      jQuery(".listing-search-tile #formfield-form-widgets-object_type label.horizontal.collapsed").removeClass('collapsed').addClass('expanded');
    } else {
      jQuery(".listing-search-tile #formfield-form-widgets-object_type label.horizontal.expanded").removeClass('expanded').addClass('collapsed');
    }
  });

  jQuery(".listing-search-tile #formfield-form-widgets-ownership_type label.horizontal").click(function() {
    jQuery(".listing-search-tile #formfield-form-widgets-ownership_type span").slideToggle("slow");
    if (jQuery(".listing-search-tile #formfield-form-widgets-ownership_type label.horizontal.collapsed").length > 0) {
      jQuery(".listing-search-tile #formfield-form-widgets-ownership_type label.horizontal.collapsed").removeClass('collapsed').addClass('expanded');
    } else {
      jQuery(".listing-search-tile #formfield-form-widgets-ownership_type label.horizontal.expanded").removeClass('expanded').addClass('collapsed');
    }
  });
}


function input_addclass() {
  /* Add arrow on input , submit. */
  jQuery('input[type="submit"].context').addClass("btn btn-primary arrow-right");
  jQuery('.portletAgentContact input[type="submit"].submit-widget').addClass("btn btn-primary arrow-right");
  jQuery('input[type="submit"]#form-buttons-cancel').addClass("btn btn-primary arrow-right");
}


function InitOffCanvasNavigation() {
  jQuery('#btn-nav').on({
    click: function() {
      jQuery('body').toggleClass('nav-open');
    }
  });
}


function have_search() {
  jQuery(".container .navigation ul.nav").addClass("have-search");
}


function no_register() {
  var register = jQuery(".account-register > a").size();
  if (register == "0") {
    jQuery(".account-login").css("float","right");
  }
}


function phone_parameter_string_empty() {
  jQuery(".site_contact_phone a").remove();
}


function email_parameter_string_empty() {
  jQuery("#site_contact_email a").remove();
}


function nr_phone() {
  jQuery('#header-inner .navbar .navbar-inner .site-phone').each(function() {
    if (jQuery(this).find('div').length > 1) {
      jQuery('#header-wrapper #header #header-inner .navbar .navbar-inner .info').addClass('multi-info');
      jQuery('#header-wrapper #header #header-inner .navbar .navbar-inner .site-email').addClass('multi-email');
      jQuery('#header-wrapper #header #header-inner .navbar .navbar-inner .site-phone').addClass('multi-phone');
      jQuery('#header-wrapper #header #header-inner .navbar .navbar-inner #site_contact_link').addClass('contact_link_hide');
    }
  });
}


//set jquery
jq = $;

jQuery(document).ready(function($) {
  isdevelopment = $('.development-summary').length;
  islistingsummery = $('.listing-summary').length;

  var width_indicator = $('#maincontent').attr('class');
  if (islistingsummery > 0 && isdevelopment < 1 ) {
    $(".listing-summary .tileItem").addClass('property ' + width_indicator).wrapInner('<div class="row propertyrow" />');
    $(".listing-summary .property .row figure").addClass('image').wrapInner('<div class="content" />');
    $(".listing-summary").addClass('properties-rows').wrapInner('<div class="row" />');
  }

  if ($(".site_contact_phone a").html().length < 1) {
    phone_parameter_string_empty();
  }
  if ($("#site_contact_email a").html().length < 1) {
    email_parameter_string_empty();
  }

  nr_phone();
  if ($(".accordion").length > 0) {
    $("table.accordion_table").wrap("<div class='accordion_wrapper'></div>");
    $(".accordion").accordion({
      header: "h2",
      heightStyle:"content",
      collapsible: true,
      active:false
    });
  }

  if ($("#portal-searchbox").length > 0) {
    have_search();
  }
  InitOffCanvasNavigation();

  no_register();

  //add arrow on input , submit
  if ($("form").length > 0) {
    input_addclass();
  }

  // remove this class when js working
  $("body").removeClass("no-js");

  // only do when we have listing collection
  if ($(".listing-collection-tile").length > 0) {
    hover_remove_active();
  }

  // only do when we have search tiles
  if ($(".listing-search-tile").length > 0) {
    clickshow_option();
  }

  // only do when we have a listingbar
  if ($('.listingBar').length > 0) {
    enhance_listingbar();
  }

  if ($('.portletQuickSearch .collapsible').length > 0 ) {
    enhance_filterportlet();
  }

  switch(width_indicator) {
    case 'span12':
      //no portlet
      text_width_indicator = 'span9';
      title_width_indicator = 'span6';
      price_width_indicator = 'span3';
      break;
    case 'span9':
      // one portlet
      text_width_indicator = 'span6';
      title_width_indicator = 'span4';
      price_width_indicator = 'span2';
      break;
    case 'span6':
      //two portlets
      text_width_indicator = 'span3';
      title_width_indicator = 'span2';
      price_width_indicator = 'span1';
      break;
    default:
      text_width_indicator = 'span6';
  }

  if ($('.nav li ul').length) {
    var parent;

    //Improve submenue
    $(".nav li ul.submenu").each(function(index) {
      parent = $(this).parent();
      $(parent).addClass("menuparent");
      $(this).siblings("a.plain").addClass("menuparent");
      $(".nav.nav-pills").append($("#portal-personaltools"));
    });
  }
  $(".submenu").removeClass("submenu");

  //Improve footer
  doormat_col_class = getDoormatClass();
  $("#footer-top #footer-top-inner .doormatColumn").addClass("title");
  $("#footer-top-inner").addClass("container");
  $("#footer-top-inner .doormatColumn").addClass(doormat_col_class);

  //Improve searchbox
  $("#portal-searchbox").addClass("site-search").show();

  //Remove Plone classes from content rows
  $("#portal-column-content").addClass(width_indicator).show();

  //listing grid
  if ($(".listing-collection-tile").length > 0) {
    //prepare listing grid
    enhance_listiggrid();
  }

  //listing row
  //add some classes

  // move image out of parent link
  $(".listing-summary .property .row .image .content a").each(function(index) {
    child = $(this).children('img');
    $(this).empty().after(child);
  });

  //prepare listing text
  $(".listing-summary .property .row section").addClass('body ' + text_width_indicator);
  $( ".listing-summary .property .row .body" ).each(function(index) {
    dictonary = map_listing_data($(this).children('dl'));
    dictonary.title = $(this).siblings('.tileHeadline').html();
    dictonary.linktarget = $(this).parent().find('a:first').attr('href');
    $(this).siblings('.tileHeadline').remove();

    //clear existing detail structure
    $(this).empty();
    //set price & title
    $(this).append('<div class="title-price row"><div class="title ' + title_width_indicator + '"><h2><a href="' + dictonary.linktarget + '">' + dictonary.title + '</a></h2></div></div>');
    //set location
    $(this).append('<div class="location"><a href="'+ dictonary.linktarget + '">' + dictonary.propertytype + ' - ' + dictonary.listingtype + '</a></div>');
    $(this).append('<p class="freetext">' + dictonary.location + '</p>');

    if (dictonary.type == "house") {
      $(this).append('<div class="bedrooms" title="Bedroom and Bathroom">' + dictonary.bedbath + '</div><div class="bathrooms" />');
    } else {
      $(this).append('<div class="locationtype"><span class="key" title="Location Type" >&nbsp</span><span class="value">' + dictonary.locationtype + '</span></div>');
    }
    $(this).append('<div class="area"><span class="key" title="Area" >&nbsp</span><span class="value">' + dictonary.area + '</span></div>');
    $(this).append('<div class="price">' + dictonary.price + '</div>');
  });

  $("#recent-listings .tileItem section").addClass("new-listings");
  // $(".item h5.item-heading").text("Area");
  $(window).resize(function() {
    if ($('.listing-collection-tile').length > 0) {
      $('.listing-collection-tile .collection-item').each(function(index) {
        config_reset_height_listing($(this));
      });
      $('.listing-collection-tile').each(function(index) {
        balance_height($(this));
      });
    }
  });
  $(window).load(function() {
    if ($('.listing-collection-tile').length > 0) {
      $('.listing-collection-tile').each(function(index) {
        balance_height($(this));
      });
    }
  });
});
