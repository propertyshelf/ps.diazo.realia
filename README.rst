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

    This package have 2 features for its header
    
    **Default: "List your property"-button**

    In "Site Setup" > "Theming Toolkit Settings"
    
    - checkbox "Show Social Header Viewlet" is checked
    
    - in "Social Plugins Code" text-area you will need the html below:

        <div id="site_contact_link">
            <a class="btn btn-primary btn-large list-your-property arrow-right" href="URL">TEXT</a>
        </div>
        
    You can adjust URL and TEXT as you need.
    If you want to switch slogan

    **"Slogan"-header**
    
    In "Site Setup" > "Theming Toolkit Settings"
    
    - checkbox "Show Social Header Viewlet" is checked
    
    - in "Social Plugins Code" text-area you will need the html below:
        
        <div class="slogan">
            <h1>Customer Slogan</h1>
            
            <p>Smaller text below</p>
        </div>
    
    **Multi-lingual Slogans**
    
    - to identify a content as language-active you will need to add the css class lang at your slogan
    - to identify the language of the content you will need to add the css class lang-XX (XX is the used language code)
    **Example:**
    
        <div class="slogan">
            <div class= "lang lang-en" >
                <h1>Customer Slogan</h1>
            
                <p>Smaller text below</p>
            </div>
        
            <div class= "lang lang-es" >
                <h1>Slogan cliente</h1>
            
                <p>Texto más pequeño debajo</p>
            </div>
        </div>
    
    **Skype Contact:**
    
    In **"Site Setup" > "Theming Toolkit Settings"**
	
    - checkbox "Show Site title & contact viewlet" is checked
	    
    - in its input field you can add your Skype name
        
    - the Skype-icon will show automatically
