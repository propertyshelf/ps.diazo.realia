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
