function column_counter(items){
console.log('column counter');
  my_width = $(items).width();
  my_head_width = $(items).find('.collection-item h2:first').width();
  //find out how many items in one row
  if(my_width > 800){
    listing_col=3;
  }
  else if(my_width > 200){
    if(my_head_width < 400){
      listing_col=2;
    }
    else{
      listing_col=1;
    }
  }
  else if(my_width < 200){
    listing_col=1;
  }
  else{
    listing_col=false;
  }
  
  return listing_col;
}

function balance_height(items){
console.log('balance height');
  //get nr. of item columns
  columns= column_counter(items);
  //we have more then 1 column
  if(columns>1){
    //set height depending on column nr.
    $(items).children('.collection-item').each(function(index){
      // Modulo operator to fing begin of each row 
      mod=index%columns;
      
      if(mod<1){
        //mod == 0 -> first element in a row
        if(index > 0){
          // we are at least in second row
          // get the max height of last row items
          row_height= Math.max(height0, height1, height2);
          // set the new heights for each item in the last row
          if(item0){
            $(item0).height(row_height);
          }
          if(item1){
            $(item1).height(row_height);
          }
          if(item2){
            $(item2).height(row_height);
          }
        }

        // remember first row item with the name 'item0'
        item0 =$(this);
        // unset css defaults for calculate real height
        item0.height('auto');
        item0.css('min-height', 'auto');
        height0=item0.height();
        item1=null;
        height1=0;
        item2=null;
        height2=0;

      }
      else{
        if(mod==1){
          // remember second row item with the name 'item1'
          // last item when have 2 columns
          item1 = $(this);
          // unset css defaults for calculate real height
          item1.height('auto');
          item1.css('min-height', 'auto');
          height1=item1.height();
        }
        if(mod==2){
          // remember third row item with the name 'item2'
          // last when have 3 columns
          item2= $(this);
          // unset css defaults for calculate real height
          item2.height('auto');
          item2.css('min-height', 'auto');
          height2=item2.height();
        }
      }
      
    });
  }
  else{
    //do nothing
  }
}
function map_listing_data(obj){
 //use data input to give back a easy to access array for mapping
  dict=[];
  counter = $(obj).children('dd').length;
  if(counter<10){
    dict.type ='land';  
  }
  else{
    dict.type ='house';
  }
  
  dict.price= obj[0].children[1].innerHTML;
  dict.listingtype= obj[0].children[5].innerHTML;
  dict.propertytype= obj[0].children[9].innerHTML;
  
  if(dict.type =="house"){
    dict.location = obj[0].children[13].innerHTML;
    dict.area = obj[0].children[19].innerHTML;
    dict.bedbath = obj[0].children[11].innerHTML;
    dict.locationtype = obj[0].children[15].innerHTML;
  }
  else{
      //landlistings have different indexes
      dict.location = obj[0].children[11].innerHTML;
      dict.area = obj[0].children[17].innerHTML;
      dict.bedbath ="";
      dict.locationtype = obj[0].children[13].innerHTML;
  }
  // parse location
  dict.location = parse_location(dict.location);
  return dict;
}
function parse_location(location){
    //unparsed: San Joaquín, San Joaquín de Flores, Flores, Heredia, Costa Rica
    //parsed: San Joaquín, Heredia, Costa Rica 
    
    try {
        var splitter = location.split(",");
        //react on different location types
        var last = splitter.length - 1;
        var center = splitter.length - 2;
        if(center>0 && last>1){
            location = splitter[0] +","+ splitter[center] +","+ splitter[last];
        }      
    }
    catch(err) {
        console.log(error);
    }
    return location;
}

function enhance_listiggrid(){ 
    $( ".listing-collection-tile .collection-item .item.location .item-body" ).each(function( index ) {
            mylocation = parse_location($(this).text());
            $(this).text(mylocation);
    });
    $( ".listing-collection-tile .collection-item .item.lot_size" ).each(function( index ) {
            //remove the label of lot size to replace it with css icon
            $(this).children('.item-heading').remove();
            $(this).prepend('<span class="key" title="Area"> </span>');
            
    });
    
    
}

/*Improve listing bar*/
function enhance_listingbar(){
    //remove the ugly [ 1 ] notation and give it a class
    $('.listingBar').html(function(i,html){
        foo = html.replace('[','<span class="active">').replace(']','</span>');
        return foo;
});
}

/*Improve Filter Listing Portlet*/
function enhance_filterportlet(){
    //open or close collapsible fields
   $('.portletQuickSearch .collapsible').each(function( index ){  
       //if collapsible div have checked checkboxes inside
       checkers = $(this).find('input[type="checkbox"]:checked');      
        if(checkers.length>0){
            //open this field by default
             $(this).children('.collapse').show('slow');
            // clean up classes
            $(this).children(".collapser").removeClass().addClass('horizontal collapser expanded');
            
        }
        else{
            //nothing selected -> close field
             $(this).children('.collapse').hide('slow');
             $(this).children(".collapser").removeClass().addClass('horizontal collapser collapsed');
        }
   });
}
/**/
function hover_remove_active(){
    $(".tileItem figure").each(function( index ) {
        $(this).hover(function(){
            $(this).siblings(".workflow_status").hide();
            },function(){
            $(this).siblings(".workflow_status").show();
        });
    });
}

/*get the existing doormat columns and translate them to the span grid system*/
function getDoormatClass(){
    var col_class="";
    if($('.doormatColumn.column-0').length>0){
        //just one column
        col_class="span12";
    }
    if($('.doormatColumn.column-1').length>0){
        //two columns
        col_class="span6";
    }
    if($('.doormatColumn.column-2').length>0){
        //three columns
        col_class="span4";
    }
    if($('.doormatColumn.column-3').length>0){
        //four columns
        col_class="span3";
    }
    if($('.doormatColumn.column-4').length>0){
        //five columns
        col_class="";
    }
    if($('.doormatColumn.column-5').length>0){
        //six columns
        col_class="span2";
    }
    
    return col_class;
}
/*Click bluebox show option*/
function clickshow_option(){
    $(".listing-search-tile #formfield-form-widgets-jacuzzi span").hide('slow');
    $(".listing-search-tile #formfield-form-widgets-jacuzzi label.horizontal").addClass('collapser collapsed');
    $(".listing-search-tile #formfield-form-widgets-pool span").hide('slow');
    $(".listing-search-tile #formfield-form-widgets-pool label.horizontal").addClass('collapser collapsed');
    $(".listing-search-tile #formfield-form-widgets-air_condition span").hide('slow');
    $(".listing-search-tile #formfield-form-widgets-air_condition label.horizontal").addClass('collapser collapsed');
    $(".listing-search-tile #formfield-form-widgets-view_type span").hide('slow');
    $(".listing-search-tile #formfield-form-widgets-view_type label.horizontal").addClass('collapser collapsed');
    $(".listing-search-tile #formfield-form-widgets-location_type span").hide('slow');
    $(".listing-search-tile #formfield-form-widgets-location_type label.horizontal").addClass('collapser collapsed');
    $(".listing-search-tile #formfield-form-widgets-geographic_type span").hide('slow');
    $(".listing-search-tile #formfield-form-widgets-geographic_type label.horizontal").addClass('collapser collapsed');
    $(".listing-search-tile #formfield-form-widgets-object_type span").hide('slow');
    $(".listing-search-tile #formfield-form-widgets-object_type label.horizontal").addClass('collapser collapsed');
    $(".listing-search-tile #formfield-form-widgets-ownership_type span").hide('slow');
    $(".listing-search-tile #formfield-form-widgets-ownership_type label.horizontal").addClass('collapser collapsed');
    
    $(".listing-search-tile #formfield-form-widgets-air_condition label.horizontal").click(function(){
        $(".listing-search-tile #formfield-form-widgets-air_condition span").slideToggle("slow");
        if($(".listing-search-tile #formfield-form-widgets-air_condition label.horizontal.collapsed").length>0){
            $(".listing-search-tile #formfield-form-widgets-air_condition label.horizontal.collapsed").removeClass('collapsed').addClass('expanded');
        }
        else{
            $(".listing-search-tile #formfield-form-widgets-air_condition label.horizontal.expanded").removeClass('expanded').addClass('collapsed');
        }
        
    });
    $(".listing-search-tile #formfield-form-widgets-pool label.horizontal").click(function(){
        $(".listing-search-tile #formfield-form-widgets-pool span").slideToggle("slow");
        if($(".listing-search-tile #formfield-form-widgets-pool label.horizontal.collapsed").length>0){
            $(".listing-search-tile #formfield-form-widgets-pool label.horizontal.collapsed").removeClass('collapsed').addClass('expanded');
        }
        else{
            $(".listing-search-tile #formfield-form-widgets-pool label.horizontal.expanded").removeClass('expanded').addClass('collapsed');
        }
    });
    $(".listing-search-tile #formfield-form-widgets-jacuzzi label.horizontal").click(function(){
        $(".listing-search-tile #formfield-form-widgets-jacuzzi span").slideToggle("slow");
        if($(".listing-search-tile #formfield-form-widgets-jacuzzi label.horizontal.collapsed").length>0){
            $(".listing-search-tile #formfield-form-widgets-jacuzzi label.horizontal.collapsed").removeClass('collapsed').addClass('expanded');
        }
        else{
            $(".listing-search-tile #formfield-form-widgets-jacuzzi label.horizontal.expanded").removeClass('expanded').addClass('collapsed');
        }
    });
    $(".listing-search-tile #formfield-form-widgets-view_type label.horizontal").click(function(){
        $(".listing-search-tile #formfield-form-widgets-view_type span").slideToggle("slow");
        if($(".listing-search-tile #formfield-form-widgets-view_type label.horizontal.collapsed").length>0){
            $(".listing-search-tile #formfield-form-widgets-view_type label.horizontal.collapsed").removeClass('collapsed').addClass('expanded');
        }
        else{
            $(".listing-search-tile #formfield-form-widgets-view_type label.horizontal.expanded").removeClass('expanded').addClass('collapsed');
        }
    });
    $(".listing-search-tile #formfield-form-widgets-location_type label.horizontal").click(function(){
        $(".listing-search-tile #formfield-form-widgets-location_type span").slideToggle("slow");
        if($(".listing-search-tile #formfield-form-widgets-location_type label.horizontal.collapsed").length>0){
            $(".listing-search-tile #formfield-form-widgets-location_type label.horizontal.collapsed").removeClass('collapsed').addClass('expanded');
        }
        else{
            $(".listing-search-tile #formfield-form-widgets-location_type label.horizontal.expanded").removeClass('expanded').addClass('collapsed');
        }
    });
    $(".listing-search-tile #formfield-form-widgets-geographic_type label.horizontal").click(function(){
        $(".listing-search-tile #formfield-form-widgets-geographic_type span").slideToggle("slow");
        if($(".listing-search-tile #formfield-form-widgets-geographic_type label.horizontal.collapsed").length>0){
            $(".listing-search-tile #formfield-form-widgets-geographic_type label.horizontal.collapsed").removeClass('collapsed').addClass('expanded');
        }
        else{
            $(".listing-search-tile #formfield-form-widgets-geographic_type label.horizontal.expanded").removeClass('expanded').addClass('collapsed');
        }
    });
    $(".listing-search-tile #formfield-form-widgets-object_type label.horizontal").click(function(){
        $(".listing-search-tile #formfield-form-widgets-object_type span").slideToggle("slow");
        if($(".listing-search-tile #formfield-form-widgets-object_type label.horizontal.collapsed").length>0){
            $(".listing-search-tile #formfield-form-widgets-object_type label.horizontal.collapsed").removeClass('collapsed').addClass('expanded');
        }
        else{
            $(".listing-search-tile #formfield-form-widgets-object_type label.horizontal.expanded").removeClass('expanded').addClass('collapsed');
        }
    });
    $(".listing-search-tile #formfield-form-widgets-ownership_type label.horizontal").click(function(){
        $(".listing-search-tile #formfield-form-widgets-ownership_type span").slideToggle("slow");
        if($(".listing-search-tile #formfield-form-widgets-ownership_type label.horizontal.collapsed").length>0){
            $(".listing-search-tile #formfield-form-widgets-ownership_type label.horizontal.collapsed").removeClass('collapsed').addClass('expanded');
        }
        else{
            $(".listing-search-tile #formfield-form-widgets-ownership_type label.horizontal.expanded").removeClass('expanded').addClass('collapsed');
        }
    });
}
/*add arrow on input , submit*/
function input_addclass(){
        $('input[type="submit"].context').addClass("btn btn-primary arrow-right");
        $('.portletAgentContact input[type="submit"].submit-widget').addClass("btn btn-primary arrow-right");
        $('input[type="submit"]#form-buttons-cancel').addClass("btn btn-primary arrow-right");
}

function InitOffCanvasNavigation() {
    $('#btn-nav').on({
		click: function() {
			$('body').toggleClass('nav-open');
		}
	})
}
function have_search(){
    $(".container .navigation ul.nav").addClass("have-search");
}
function no_register(){
        var register = $(".account-register > a").size();
        if (register == "0")
            {
                $(".account-login").css("float","right");
            }
}

function phone_parameter_string_empty(){
    $(".site_contact_phone a").remove();
}
function email_parameter_string_empty(){
    $("#site_contact_email a").remove();
}

function nr_phone(){
    $('#header-inner .navbar .navbar-inner .site-phone').each(function() {
        if ($(this).find('div').length > 1) {
            $('#header-wrapper #header #header-inner .navbar .navbar-inner .info').addClass('multi-info');
            $('#header-wrapper #header #header-inner .navbar .navbar-inner .site-email').addClass('multi-email');
            $('#header-wrapper #header #header-inner .navbar .navbar-inner .site-phone').addClass('multi-phone');
            $('#header-wrapper #header #header-inner .navbar .navbar-inner #site_contact_link').addClass('contact_link_hide');
        }
});

}

//set jquery
jq=$;
$(document).ready(function() {
    if($(".site_contact_phone a").html().length < 1){
        phone_parameter_string_empty();
    }  
     if($("#site_contact_email a").html().length < 1){
        email_parameter_string_empty();
    }
    
    nr_phone();
    if($(".accordion").length >0){
        $( "table.accordion_table" ).wrap( "<div class='accordion_wrapper'></div>" );
        $( ".accordion" ).accordion({ header: "h2", heightStyle:"content", collapsible: true, active:false });
    }

    
    if($("#portal-searchbox").length >0){
        have_search();
    }
    InitOffCanvasNavigation();
    
    no_register();
    //add arrow on input , submit
    if($("form").length >0){
        input_addclass();
    }

    // remove this class when js working
    $("body").removeClass("no-js");
    
    // only do when we have listing collection  
    if($(".listing-collection-tile").length >0){
        hover_remove_active();
    }
    // only do when we have search tiles   
    if($(".listing-search-tile").length >0){
        clickshow_option();
    }
    // only do when we have a listingbar
    if($('.listingBar').length > 0){
        enhance_listingbar();
    }
    if($('.portletQuickSearch .collapsible').length >0 ){
        enhance_filterportlet();
    }
    var width_indicator = $('#maincontent').attr('class');
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
    
    if($('.nav li ul').length){
        var parent;
        //Improve submenue
        $(".nav li ul.submenu").each(function( index ) {
            parent = $(this).parent();
            $(parent).addClass("menuparent");
            $( this ).siblings( "a.plain" ).addClass( "menuparent" );
            $(".nav.nav-pills").append( $( "#portal-personaltools" ) );
        });   
    }
        $(".submenu").removeClass("submenu");
        //Improve footer
        doormat_col_class=getDoormatClass();
        $("#footer-top #footer-top-inner .doormatColumn").addClass( "title" );
        $("#footer-top-inner").addClass( "container" );
        $("#footer-top-inner .doormatColumn").addClass(doormat_col_class);
        //Improve searchbox
        $("#portal-searchbox").addClass("site-search").show();
        //Remove Plone classes from content rows
        $("#portal-column-content").removeClass().addClass(width_indicator).show();
        $("#portal-column-one").removeClass();
        $("#portal-column-two").removeClass();
     
        //listing grid
        if($(".listing-collection-tile").length>0){
            //prepare listing grid
            enhance_listiggrid();      
        }
     
        //listing row
        //add some classes
        $(".listing-summary").addClass('properties-rows').wrapInner('<div class="row" />');
        $(".listing-summary .tileItem").addClass('property ' + width_indicator).wrapInner('<div class="row propertyrow" />');
        $(".listing-summary .property .row figure").addClass('image span3').wrapInner('<div class="content" />');
        // move image out of parent link
        $( ".listing-summary .property .row .image .content a" ).each(function( index ) {
            child = $(this).children('img');
            $(this).empty().after(child);
        });
        //prepare listing text
        $(".listing-summary .property .row section").addClass('body ' + text_width_indicator);
        $( ".listing-summary .property .row .body" ).each(function( index ) {
            dictonary = map_listing_data($(this).children('dl'));
            dictonary.title =$(this).siblings('.tileHeadline').html();
            dictonary.linktarget= $(this).parent().find('a:first').attr('href');
            $(this).siblings('.tileHeadline').remove();
            //clear existing detail structure
            $(this).empty();
            //set price & title
            $(this).append('<div class="title-price row" ><div class="title '+title_width_indicator+'"><h2><a href="'+ dictonary.linktarget +'">'+dictonary.location+'</a></h2></div><div class="price" >'+ dictonary.price +'</div></div>');
            //set location
            $(this).append('<div class="location"><a href="'+ dictonary.linktarget +'">'+dictonary.propertytype+' - '+ dictonary.listingtype +'</a></div>');
            $(this).append('<p class="freetext">'+dictonary.title+'</p>');
           

            if(dictonary.type=="house"){
                $(this).append('<div class="bedrooms" title="Bedroom and Bathroom" >'+dictonary.bedbath+'</div><div class="bathrooms" />');    
            }
            else{
                $(this).append('<div class="locationtype"><span class="key" title="Location Type" >&nbsp</span><span class="value">'+dictonary.locationtype+'</span></div>');   
            }
             $(this).append('<div class="area"><span class="key" title="Area" >&nbsp</span><span class="value">'+dictonary.area+'</span></div>');
            
            
        });
    
        $("#recent-listings .tileItem section").addClass("new-listings");
       // $(".item h5.item-heading").text("Area");
		$(window).resize(function() {
			if ($('.listing-collection-tile').length >0){
				$('.listing-collection-tile').each(function(index){
					balance_height($(this));
				});
			}
		});
		$( window ).load(function() {
			if ($('.listing-collection-tile').length >0){
				$('.listing-collection-tile').each(function(index){
					balance_height($(this));
				});
			}
		});
});