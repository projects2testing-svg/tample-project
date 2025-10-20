'use client'
import { useState } from 'react';

const LanguageSwitcher = () => {
  const [currentLanguage, setCurrentLanguage] = useState('english');

  const languages = [
    { code: 'en', name: 'English', label: 'English' },
    { code: 'hi', name: 'Hindi', label: 'हिन्दी' },
    { code: 'es', name: 'Spanish', label: 'Español' },
    { code: 'fr', name: 'French', label: 'Français' },
    // Add more languages as needed
  ];

  const handleLanguageChange = (e) => {
    const selectedLanguage = e.target.value;
    setCurrentLanguage(selectedLanguage);
    
    // Here you can implement your language change logic
    // For example: i18n change language, context update, etc.
    console.log('Language changed to:', selectedLanguage);
    
    // If you're using i18next, you would do:
    // i18n.changeLanguage(selectedLanguage);
  };

  return (
    <select 
      value={currentLanguage} 
      onChange={handleLanguageChange}
      className="bg-transparent border-none focus:outline-none cursor-pointer"
    >
      {languages.map((language) => (
        <option key={language.code} value={language.code}>
          {language.label}
        </option>
      ))}
    </select>
  );
};

export default LanguageSwitcher;