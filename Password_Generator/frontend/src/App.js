import React, { useState } from "react";
import { useTranslation } from 'react-i18next';
import './App.css';
import './i18n';


function App() {
  const { t, i18n } = useTranslation();

  const [length, setLength] = useState(12);
  const [digit, setDigit] = useState(true);
  const [uppercase, setUppercase] = useState(true);
  const [symbol, setSymbol] = useState(true);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const strToBoolString = (b) => (b ? 'true' : 'false');

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const copyToClipboard = () => {
    if (!password) return;
    navigator.clipboard.writeText(password).then(() => {
      alert('copy !');
    }, () => {
      alert('Error while copying');
    });
  };

  const generate = async () => {
    setError('');
    if (!digit && !uppercase && !symbol) {
      setError('At least one character type must be selected');
      setPassword('');
      return;
    }
    try {
      const params = new URLSearchParams({
        length: length.toString(),
        digit: strToBoolString(digit),
        uppercase: strToBoolString(uppercase),
        symbol: strToBoolString(symbol),
      });
      const response = await fetch(`http://localhost:5000/generate-password?${params.toString()}`);
      const data = await response.json();
      if (response.ok) {
        setPassword(data.password);
      } else {
        setError(data.error || 'Unknown error');
        setPassword('');
      }
    } catch (err) {
      setError('Network or server error');
      setPassword('');
    }
  };

  return (

    <div className="app-container">

      <div className="language-switcher">
        <button onClick={() => changeLanguage('en')}>English</button>
        <button onClick={() => changeLanguage('fr')}>Français</button>
      </div>

      <h1>{t('title')}</h1>

      <label htmlFor="lengthRange">
        {t('length')} : {length}
      </label>
      <input
        id="lengthRange"
        type="range"
        min="8"
        max="64"
        value={length}
        onChange={(e) => setLength(Number(e.target.value))}
      />

      <label>
        <input
          type="checkbox"
          checked={digit}
          onChange={() => setDigit(!digit)}
        />
        {t('numbers')}
      </label>

      <label>
        <input
          type="checkbox"
          checked={uppercase}
          onChange={() => setUppercase(!uppercase)}
        />
        {t('uppercase')}
      </label>

      <label>
        <input
          type="checkbox"
          checked={symbol}
          onChange={() => setSymbol(!symbol)}
        />
        {t('symbols')}
      </label>

      <button onClick={generate}>{t('generate')}</button>


      {error && <p className="error">{t('error_type')}</p>}

      <div className="password-box">
      {password || 'The password will appear here'}
      
    </div>
    {password && (
      <button className="copy-button" onClick={copyToClipboard}>
        {t('copy')}
        </button>
      )}
    </div>

      );
}

export default App;