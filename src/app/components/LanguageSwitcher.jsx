'use client';
import { useLanguage } from '@/context/LanguageContext';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  const languages = [
    { code: 'en', label: 'English' },
    { code: 'hi', label: 'हिन्दी' },
    { code: 'bn', label: 'বাংলা' },
    { code: 'as', label: 'অসমীয়া' },
  ];

  const handleChange = (e) => {
    setLanguage(e.target.value);
  };

  return (
    <select
      value={language}
      onChange={handleChange}
      className="border rounded px-3 py-1 ml-auto"
    >
      {languages.map((l) => (
        <option key={l.code} value={l.code}>
          {l.label}
        </option>
      ))}
    </select>
  );
};

export default LanguageSwitcher;
