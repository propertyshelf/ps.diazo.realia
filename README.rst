Propertyshelfs Realia-II Theme
========================================

*This installable Plone product enables a Diazo implementation of the mobile-ready HTML5 theme, based on the popular Realia Theme.*

:Platform:
  * Plone 4.XX (Plone >4.3 recommented)
  * requires plone.app.theming
  * requires Diazo support

:Supports:
  * mobile-ready
  * Html5, CSS3
  * use as Zip Upload
  * propertyshelfs listing embedding solutions

:Setup Steps:
  Deactivate the following Plone default css files in portal_css via ZMI:

      * reset.css
      * public.css

:Parameter:
    *You can adjust the following Diazo parameters in Advanced settings of the "Theming" in Site Setup*

    *header_class:*
        - normal
        - light
        - dark
        - dark-dark
        - *Default:* header_class = string:normal

    *slider_fullscreen:*
        - true
        - false
        - *Default:* slider_fullscreen = string:false

    *nr_phone_show:*
        - This phone number shows on header contact information
        - *Default:* nr_phone_show = string:+166 1418 7657

    *nr_phone:*
        - Is dialed by apps when click on header phone number
        - *Default:* nr_phone = string:16614187657

    *email:*
        - This email is use in the header contact imformation
        - *Default:* email = string:info@propertyshelf.com

	*theme_color:*
	    - red
	    - gray-red
	    - magenta
	    - gray-magenta
	    - brown
	    - gray-brown
	    - brown-dark
	    - gray-brown-dark
	    - orange
	    - gray-orange
	    - green-light
	    - gray-green-light
	    - green
	    - gray-green
	    - turquiose
	    - gray-turquiose
	    - blue
	    - gray-blue
	    - violet
	    - gray-violet
	    - *Default:* theme_color = string:blue

:Header features:

    *This package have 2 features for its header 
    
    Default: "List your property"-button

    In "Site Setup" > "Theming Toolkit Settings"
        - Check Box "Show Social Header Viewlet"
	- Space on "Social Plugins Code" have html

    <div id="site_contact_link">
	<a class="btn btn-primary btn-large list-your-property arrow-right" href="http://test.com/">List your property</a>
    </div>

    You can change URL and TEXT whatever you want
    If you want to switch slogan

    just change <div id="site_contact_link"> to <div class="slogan">
    and write H1 for title P for text

    Dont forget check box "Show Site title & contact viewlet"

    And Then put your name Skype

    Example

    <div class="slogan">
	<h1>Real Estate</h1>
	<p>Your Global Real Estate & MLS Connection</p>
    </div>

    *For multilanguage* 

    Just create new html inside div slogan <div class="lang lang-??"> for language

    Exmaple

    <div class="slogan">
	<div class="lang lang-es">
             <h1>Title for page es</h1>
	     <p>Text for page es</p>
	</div>
	<div class="lang lang-en">
             <h1>Title for page es</h1>
	     <p>Text for page es</p>
	</div>
    </div>
