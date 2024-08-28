import pluginConfig from './cookieConsentConfig';

describe('Cookie Consent Plugin Configuration', () => {
  test('should have the correct default language set', () => {
    expect(pluginConfig.current_lang).toBe('en');
  });

  test('should autoclear cookies by default', () => {
    expect(pluginConfig.autoclear_cookies).toBe(true);
  });

  test('should allow page scripts to run before consent', () => {
    expect(pluginConfig.page_scripts).toBe(true);
  });

    const { languages } = pluginConfig;
    const englishSettings = languages.en.settings_modal;
  
    test('should have the correct settings modal title', () => {
      expect(englishSettings.title).toBe('Cookie Settings');
    });
  
    test('should have all the required buttons in settings modal', () => {
      expect(englishSettings.save_settings_btn).toBe('Save settings');
      expect(englishSettings.accept_all_btn).toBe('Accept all');
      expect(englishSettings.reject_all_btn).toBe('Reject all');
    });
  
    test('should display the correct cookie table headers', () => {
      expect(englishSettings.cookie_table_headers).toEqual([
        { col1: 'Name' },
        { col2: 'Domain' },
        { col3: 'Expiration' },
        { col4: 'Description' },
      ]);
    });
  
    test('should contain the correct information blocks', () => {
      const blocks = englishSettings.blocks;
      expect(blocks[0].title).toBe('Cookie usage 📢');
      expect(blocks[1].title).toBe('Strictly necessary cookies');
      expect(blocks[2].title).toBe('Advertisement and Targeting cookies');
    });
  });
  