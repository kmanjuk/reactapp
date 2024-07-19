import { appDataProcessor } from './appDataProcessor';

describe('appDataProcessor', () => {
  test('returns null if appData does not contain formData', () => {
    const appData = { data: {} };
    const result = appDataProcessor(appData);
    expect(result).toBeNull();
  });

  test('returns expected object when formData is present and valid', () => {
    const mockAppData = {
      data: {
        formData: [
          {
            routesData: '[{"path": "/home", "component": "Home"}]',
            appElementsData: "[{\"seo\":{\"seo-defaultTitle\" : \"Site Title\",\"seo-logo\" : \"Site Title\",\"seo-author\" : \"Site Author\",\"seo-url\" : \"Site URL\",\"seo-legalName\" : \"Site Legal Name\",\"seo-defaultDescription\" : \"Site Default Description\",\"seo-sociallinks-twitter\" : \"Twitter Link\",\"seo-sociallinks-facebook\" : \"Facebook Link\",\"seo-sociallinks-linkedin\" : \"LinkedIn Link\",\"seo-sociallinks-youtube\" : \"Youtube Link\",\"seo-sociallinks-google\" : \"Google Link\",\"seo-googleAnalyticsId\" : \"Google Analytics Id\",\"seo-themeColor\" : \"#ED5353\",\"seo-backgroundColor\" : \"#ED5353\",\"seo-social-facebook\" : \"Facebook Id\",\"seo-social-twitter\" : \"Twitter Id\",\"seo-address-city\" : \"Address City\",\"seo-address-region\" : \"Address Region\",\"seo-address-country\" : \"Address Country\",\"seo-address-zipCode\" : \"Address ZipCode\",\"seo-contact-email\" : \"Contact Email\",\"seo-contact-phone\" : \"Contact Phone\",\"seo-foundingDate\" : \"Founding Date\"} },{\"webSettings\":{\"webSettings-defaultSPAPage\" : \"Home\",\"webSettings-navbarComponent\" : \"T1Navbar\",\"webSettings-footerComponent\" : \"T1Footer1\",\"webSettings-landingPageHeader\" : \"Landing Page Header\",\"webSettings-landingPageText\" : \"Landing Page Text\",\"webSettings-contactForm\" : {   \"contactForm\": {     \"formTitle\": \"Message\",     \"formAPI\": \"userMessage\",     \"disableClose\": true,     \"buildYupSchema\": true,     \"message\": { \"title\": \"Messages\", \"message\": \"Message sent successfully!\" },     \"buildValidation\": [       {         \"name\": \"message\",         \"validationType\": \"string\",         \"validations\": [           { \"type\": \"required\", \"params\": [\"Message is required!\"] }         ]       },       {         \"name\": \"subject\",         \"validationType\": \"string\",         \"validations\": [           { \"type\": \"required\", \"params\": [\"Subject is required!\"] }         ]       }     ],     \"schema\": [       {         \"name\": \"subject\",         \"element\": \"InputField\",         \"type\": \"text\",         \"hidden\": false,         \"size\": 12,         \"placeholder\": \"Subject\"       },       {         \"name\": \"message\",         \"element\": \"InputField\",         \"type\": \"text\",         \"hidden\": false,         \"size\": 12,         \"placeholder\": \"Message\"       }     ],     \"updateButtonName\": \"Send Message\",     \"loadingButtonName\": \"Sending...\"   },   \"componentSchema\": {     \"elementSchema\": [       { \"elementName\": \"Navbar\", \"childItems\": [] },       { \"elementName\": \"Hero\", \"childItems\": [] },       { \"elementName\": \"FeatureCard\", \"childItems\": [] },       { \"elementName\": \"Counter\", \"childItems\": [] },       { \"elementName\": \"Text\", \"childItems\": [] },       { \"elementName\": \"Image\", \"childItems\": [] },       { \"elementName\": \"Contact\", \"childItems\": [] },       { \"elementName\": \"ContentImageText\", \"childItems\": [] },       { \"elementName\": \"Footer\", \"childItems\": [] }     ],     \"elementCategories\": [       { \"components\": [\"Navbar\", \"T1Navbar\"], \"category\": \"Navbars\" },       {         \"components\": [\"Footer\", \"Footer1\", \"T1Footer1\"],         \"category\": \"Footers\"       },       { \"components\": [\"Contact\", \"T1Contact1\"], \"category\": \"Contacts\" },       { \"components\": [\"Hero\", \"T1Hero\"], \"category\": \"Hero\" },       { \"components\": [\"T1Documents\"], \"category\": \"Documents\" },       {         \"components\": [           \"Text\",           \"Image\",           \"TextWithHeader\",           \"TextWithQuote\",           \"T1Text\",           \"T1Content1\",           \"T1Content2\",           \"T1Content3\"         ],         \"category\": \"Content\"       },       { \"components\": [\"Team\", \"T1Team\"], \"category\": \"Teams\" },       { \"components\": [\"T1Jumbotron\"], \"category\": \"Jumbotronss\" },       { \"components\": [\"FeatureCard\"], \"category\": \"Cards\" },       { \"components\": [\"Counter\"], \"category\": \"Counters\" },       { \"components\": [\"ContentImageText\"], \"category\": \"Content\" }     ]   },   \"enabledModules\": {     \"Donors\": true,     \"ExpenseReport\": true,     \"ScholarshipDueReport\": true,     \"ScholarshipSummaryReport\": true,     \"Reports\": true,     \"ClassSectionSyllabusClassCombination\": true,     \"Attendance\": true,     \"FoundationProjects\": true,     \"Expenses\": true,     \"StaffPassCode\": true,     \"FoundationOrganizations\": true,     \"Organization\": true,     \"ClassSectionSyllabusCombinations\": true,     \"BiometricAttendance\": true,     \"StudentRegistrations\": true,     \"AcademicYears\": true,     \"ClassAttendance\": true,     \"Subjects\": true,     \"SyllabusClassCombinations\": true,     \"SyllabusCombinations\": true,     \"ClassSections\": true,     \"Classes\": true,     \"TeachingMedium\": true,     \"FeeReceipts\": true,     \"Syllabus\": true,     \"MyReceipts\": true,     \"Apps\": true,     \"AppProperties\": true,     \"Tenants\": true,     \"Users\": true,     \"CheckInOut\": true,     \"StaffAttendance\": true,     \"ChildAttendance\": true,     \"MyAttendance\": true,     \"AttendanceStaff\": true,     \"PickupDrop\": true,     \"Elements\": true,     \"ApplicationDocuments\": true,     \"Pages\": true,     \"PrivatePages\": true,     \"ChildRegistrations\": true,     \"StaffPasscode\": true,     \"StaffCheckIn\": true,     \"MyProfile\": true,     \"MyMessages\": true,     \"OrgMessages\": true,     \"MyFamily\": true,     \"MyKids\": true,     \"MyApplications\": true   },   \"userMenu\": [     {       \"userRole\": \"Support Staff\",       \"menu\": [         {           \"menuHeader\": \"Academics\",           \"menuItems\": [             { \"name\": \"Application Documents\", \"link\": \"application-documents\" }           ]         },         {           \"menuHeader\": \"Administration\",           \"menuItems\": [             {               \"name\": \"Scholarship Registrations\",               \"link\": \"scholarship-registrations\"             },             { \"name\": \"Users\", \"link\": \"users\" },             {               \"name\": \"Scholarship Distribution\",               \"link\": \"scholarship-distribution\"             },             { \"name\": \"Scholarship Dues\", \"link\": \"scholarship-due-report\" },             {               \"name\": \"Scholarship Summary\",               \"link\": \"scholarship-summary-report\"             },             { \"name\": \"Org Messages\", \"link\": \"messages\" }           ]         },         {           \"menuHeader\": \"Accounts\",           \"menuItems\": [             { \"name\": \"Expenses\", \"link\": \"expenses\" },             { \"name\": \"Expense Report\", \"link\": \"expense-report\" }           ]         }       ]     },     {       \"userRole\": \"Staff\",       \"menu\": [         {           \"menuHeader\": \"Administration\",           \"menuItems\": [             { \"name\": \"Child Attendance\", \"link\": \"child-attendance\" },             { \"name\": \"Staff Passcode\", \"link\": \"staff-passcode\" },             { \"name\": \"Attendance Staff\", \"link\": \"attendance-staff\" },             { \"name\": \"Org Messages\", \"link\": \"messages\" }           ]         }       ]     },     {       \"userRole\": \"AppUser\",       \"menu\": [         {           \"menuHeader\": \"My Family\",           \"menuItems\": [             { \"name\": \"My Family\", \"link\": \"my-family\" },             { \"name\": \"My Kids\", \"link\": \"my-kids\" }           ]         },         {           \"menuHeader\": \"Academics\",           \"menuItems\": [             { \"name\": \"My Applications\", \"link\": \"my-applications\" },             { \"name\": \"Pick Up/Drop\", \"link\": \"pickup-drop\" },             { \"name\": \"Kids Attendance\", \"link\": \"my-attendance\" },             { \"name\": \"My Receipts\", \"link\": \"my-receipts\" }           ]         },         {           \"menuHeader\": \"Account\",           \"menuItems\": [             { \"name\": \"My Profile\", \"link\": \"my-profile\" },             { \"name\": \"My Messages\", \"link\": \"my-messages\" }           ]         }       ]     },     {       \"userRole\": \"SysAdmin\",       \"menu\": [         {           \"menuHeader\": \"Sys Admin\",           \"menuItems\": [             { \"name\": \"App Properties\", \"link\": \"app-properties\" },             { \"name\": \"Apps\", \"link\": \"apps\" },             { \"name\": \"Elements\", \"link\": \"elements\" },             { \"name\": \"Modules\", \"link\": \"modules\" },             { \"name\": \"Users\", \"link\": \"users\" },             { \"name\": \"Reports\", \"link\": \"reports\" }           ]         },         {           \"menuHeader\": \"Account\",           \"menuItems\": [{ \"name\": \"My Profile\", \"link\": \"my-profile\" }]         }       ]     },     {       \"userRole\": \"AppAdmin\",       \"menu\": [         {           \"menuHeader\": \"App Admin\",           \"menuItems\": [             { \"name\": \"Organization\", \"link\": \"organization\" },             { \"name\": \"Apps\", \"link\": \"apps\" },             { \"name\": \"Pages\", \"link\": \"pages\" },             { \"name\": \"Users\", \"link\": \"users\" },             { \"name\": \"Org Messages\", \"link\": \"messages\" }           ]         },         {           \"menuHeader\": \"Account\",           \"menuItems\": [{ \"name\": \"My Profile\", \"link\": \"my-profile\" }]         }       ]     },     {       \"userRole\": \"Terminal\",       \"menu\": [         {           \"menuHeader\": \"Terminal\",           \"menuItems\": [{ \"name\": \"Check In/Out\", \"link\": \"check-in-out\" }]         }       ]     },     {       \"userRole\": \"Staff Terminal\",       \"menu\": [         {           \"menuHeader\": \"Staff Terminal\",           \"menuItems\": [{ \"name\": \"Attendance\", \"link\": \"staff-check-in\" }]         }       ]     },     {       \"userRole\": \"Staff Admin\",       \"menu\": [         {           \"menuHeader\": \"Staff Admin\",           \"menuItems\": [             { \"name\": \"Staff Attendance\", \"link\": \"staff-attendance\" }           ]         }       ]     }   ] }} },{\"siteData\":{\"id\" : \"null\",\"siteFavicon\" : \"/images/favicon.png\",\"className\" : \"null\",\"themeColor\" : \"#f4edf4\",\"cookieConsentRequired\" : 1,\"consentHeight\" : \"4-px\",\"consentBgColor\" : \"#5c5c5c\",\"consentTextColor\" : \"#000000\",\"UItemplate\" : \"trfWebs\",\"consentText\" : \"We use cookies to ensure you get the best experience on our website.\",\"consentBtnStyle\" : \"btn btn-primary btn-sm acceptcookies\",\"consentBtnText\" : \"Accept Cookies\",\"networkDetectorBgColor\" : \"#5c5c5c\",\"networkDetectorHeight\" : \"30px\",\"networkDetectorTopMargin\" : \"70px\",\"internetConnectionText\" : \"Internet connection lost...\",\"networkDetectorFontColor\" : \"#FFFFFF\",\"networkDetectorFontSize\" : \"15px\",\"networkDetectorLineHeight\" : \"35px\",\"forbiddenh1\" : \"Oops!\",\"forbiddenh2\" : \"403 - Access Denied\",\"forbiddenbtnLink\" : \"/\",\"forbiddenbtnClass\" : \"btn btn-primary\",\"forbiddenbtnText\" : \"Login To Access\",\"siteBgColor\" : \"#f4edf4\",\"siteCSS\" : \"reactBootstrap\",\"appCategory\" : \"1\",\"coockiePolicyName\" : \"Coockie Policy\",\"coockiePolicyLink\" : \"/policies/cookie-policy\",\"CSSLibrary_Theme\" : \"DefaultWeb\"} },{\"appSettings\":{\"appSettings-translateLanguages\" : \"en,es,te,kn,ta,hi\",\"appSettings-navbar\" : \"App Navbar\",\"appSettings-loader\" : \"App Loader\",\"appSettings-cookieConsentRequired\" : true,\"appSettings-cookieConsentColorScheme\" : {\"cc_bg\":\"#fff\",\"cc_text\":\"#2d4156\",\"cc_btn_primary_bg\":\"#2d4156\",\"cc_btn_primary_hover_bg\":\"#1d2e38\",\"cc_btn_secondary_bg\":\"#eaeff2\",\"cc_btn_secondary_hover_bg\":\"#d8e0e6\",\"cc_btn_border_radius\":\"4px\",\"cc_toggle_bg_off\":\"#919ea6\",\"cc_toggle_bg_readonly\":\"#d5dee2\",\"cc_toggle_knob_bg\":\"#fff\",\"cc_toggle_knob_icon_color\":\"#ecf2fa\",\"cc_cookie_category_block_bg\":\"#f0f4f7\",\"cc_cookie_category_block_bg_hover\":\"#e9eff4\",\"cc_section_border\":\"#f1f3f5\",\"cc_cookie_table_border\":\"#e9edf2\",\"cc_webkit_scrollbar_bg\":\"#cfd5db\",\"cc_webkit_scrollbar_bg_hover\":\"#9199a0\"},\"appSettings-cookieConsent\" : {\"delay\":5000,\"force_consent\":false,\"languages\":{\"en\":{\"consent_modal\":{\"title\":\"We use cookies\",\"description\":\"By clicking on the Accept & Close button, you  agree to the collection of cookies. You can manage your preferences by clicking on Manage Preferences. For more information please see our <a href=\\\"policies/privacy-policy\\\">Privacy policy</a>.\",\"primary_btn\":{\"text\":\"Accept & Close\",\"role\":\"accept_all\"},\"secondary_btn\":{\"text\":\"Manage Preferences\",\"role\":\"settings\"}},\"settings_modal\":{\"title\":\"Cookie Preferences\",\"save_settings_btn\":\"Save settings\",\"accept_all_btn\":\"Accept all\",\"blocks\":[{\"title\":\"Essential cookies\",\"description\":\"These cookies are required for the basic site functionality and cannot be switched off in our systems. The website cannot function properly without these cookies. They remember the choices you make to ensure the website runs smoothly. Finally they also assist in our own security and conforming to regulations.\",\"toggle\":{\"value\":\"balbhavan_essential\",\"enabled\":true,\"readonly\":true}},{\"title\":\"Analytical and Advertising cookies\",\"description\":\"These cookies allow us to analyze our site’s usage and improve the site’s functionality. These cookies also allow us to partner with companies to serve you ads relevant to your interests.\",\"toggle\":{\"value\":\"balbhavan_analytical\",\"enabled\":true,\"readonly\":false}}]}}},\"gui_options\":{\"consent_modal\":{\"layout\":\"cloud\",\"position\":\"bottom right\",\"transition\":\"slide\",\"swap_buttons\":false},\"settings_modal\":{\"layout\":\"box\",\"transition\":\"slide\"}}},\"menuSchema\" : [{\"userRole\":\"Staff\",\"menu\":[{\"menuHeader\":\"Syllabus\",\"menuItems\":[{\"name\":\"Syllabus\",\"link\":\"syllabus\"},{\"name\":\"Subjects\",\"link\":\"subjects\"},{\"name\":\"Syllabus Combinations\",\"link\":\"syllabus-combinations\"},{\"name\":\"Class Section Syllabus Combinations\",\"link\":\"class-section-syllabus-combinations\"}]},{\"menuHeader\":\"Academics\",\"menuItems\":[{\"name\":\"Teaching Medium\",\"link\":\"teaching-medium\"},{\"name\":\"Academic Years\",\"link\":\"academic-years\"},{\"name\":\"Application Documents\",\"link\":\"application-documents\"}]},{\"menuHeader\":\"Classes\",\"menuItems\":[{\"name\":\"Class\",\"link\":\"classes\"},{\"name\":\"Class Sections\",\"link\":\"class-sections\"},{\"name\":\"Class Attendance\",\"link\":\"class-attendance\"}]},{\"menuHeader\":\"Administration\",\"menuItems\":[{\"name\":\"Student Registrations\",\"link\":\"student-registrations\"},{\"name\":\"Fee Receipts\",\"link\":\"fee-receipts\"},{\"name\":\"Org Messages\",\"link\":\"messages\"}]}]},{\"userRole\":\"AppUser\",\"menu\":[{\"menuHeader\":\"My Family\",\"menuItems\":[{\"name\":\"My Family\",\"link\":\"my-family\"},{\"name\":\"My Kids\",\"link\":\"my-kids\"}]},{\"menuHeader\":\"Academics\",\"menuItems\":[{\"name\":\"My Applications\",\"link\":\"my-applications\"},{\"name\":\"My Receipts\",\"link\":\"my-receipts\"}]},{\"menuHeader\":\"Account\",\"menuItems\":[{\"name\":\"My Profile\",\"link\":\"my-profile\"},{\"name\":\"My Messages\",\"link\":\"my-messages\"}]}]},{\"userRole\":\"SysAdmin\",\"menu\":[{\"menuHeader\":\"Sys Admin\",\"menuItems\":[{\"name\":\"App Properties\",\"link\":\"app-properties\"},{\"name\":\"Apps\",\"link\":\"apps\"},{\"name\":\"Elements\",\"link\":\"elements\"},{\"name\":\"Modules\",\"link\":\"modules\"},{\"name\":\"Users\",\"link\":\"users\"}]},{\"menuHeader\":\"Account\",\"menuItems\":[{\"name\":\"My Profile\",\"link\":\"my-profile\"}]}]},{\"userRole\":\"AppAdmin\",\"menu\":[{\"menuHeader\":\"App Admin\",\"menuItems\":[{\"name\":\"Organization\",\"link\":\"organization\"},{\"name\":\"Apps\",\"link\":\"apps\"},{\"name\":\"Pages\",\"link\":\"pages\"},{\"name\":\"Users\",\"link\":\"users\"},{\"name\":\"Org Messages\",\"link\":\"messages\"}]},{\"menuHeader\":\"Account\",\"menuItems\":[{\"name\":\"My Profile\",\"link\":\"my-profile\"}]}]},{\"userRole\":\"Terminal\",\"menu\":[{\"menuHeader\":\"Terminal\",\"menuItems\":[{\"name\":\"Attendance\",\"link\":\"biometric-attendance\"}]}]}]} },{\"googleAdsData\":{\"googleAds-client\" : \".\",\"googleAds-slot\" : \".\",\"googleAds-enabled\" : true,\"googleAds-topHoriz\" : true,\"googleAds-bottomHoriz\" : true,\"googleAds-leftSide\" : true,\"googleAds-rightSide\" : true} }] ",
          },
        ],
      },
    };

    const expected = {
      routesData: [{ path: '/home', component: 'Home' }],
      applicationSchema: {
        appSettings: {},
        webSettings: {},
        seo: {},
      },
      appSettings: {},
      webSettings: {},
      seo: {},
    };

    const result = appDataProcessor(mockAppData);
    expect(result).toEqual(expected);
  });

  test('handles empty formData', () => {
    const mockAppData = {
      data: {
        formData: [],
      },
    };

    const result = appDataProcessor(mockAppData);
    expect(result).toBeNull();
  });

  test('handles empty routesData', () => {
    const mockAppData = {
      data: {
        formData: [{routesData:[]}],
      },
    };

    const result = appDataProcessor(mockAppData);
    expect(result).toBeNull();
  });

  test('handles invalid JSON parsing gracefully', () => {
    const mockAppData = {
      data: {
        formData: [
          {
            routesData: '[{"path": "/home", "component": "Home"}]',
            appElementsData: '{invalidJson}',
          },
        ],
      },
    };

    const result = appDataProcessor(mockAppData);
    expect(result.routesData).toEqual([{ path: '/home', component: 'Home' }]);
    expect(result.applicationSchema).toEqual({});
    expect(result.appSettings).toBeUndefined();
    expect(result.webSettings).toBeUndefined();
    expect(result.seo).toBeUndefined();
  });

  test('handles missing keys in applicationSchema', () => {
    const mockAppData = {
      data: {
        formData: [
          {
            routesData: '[{"path": "/home", "component": "Home"}]',
            appElementsData: '{"missingKey": {}}',
          },
        ],
      },
    };

    const result = appDataProcessor(mockAppData);
    expect(result.routesData).toEqual([{ path: '/home', component: 'Home' }]);
    expect(result.applicationSchema).toEqual({ missingKey: {} });
    expect(result.appSettings).toBeUndefined();
    expect(result.webSettings).toBeUndefined();
    expect(result.seo).toBeUndefined();
  });
});
