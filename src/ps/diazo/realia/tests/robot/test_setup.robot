*** Settings ***

Resource  keywords.robot

Suite Setup  Setup
Suite Teardown  Teardown


*** Test cases ***

Show how to activate the add-on
    Enable autologin as  Manager
    Go to  ${PLONE_URL}/prefs_install_products_form
    Page should contain element  id=ps.diazo.realia
    Assign id to element
    ...  xpath=//*[@id='ps.diazo.realia']/parent::*
    ...  addons-psdiazorealia
    Assign id to element
    ...  xpath=//*[@id='ps.diazo.realia']/ancestor::form
    ...  addons-enabled

    Highlight  addons-psdiazorealia
    Capture and crop page screenshot
    ...  setup_select_add_on.png
    ...  id=addons-enabled
