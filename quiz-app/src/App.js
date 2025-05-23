import React, { useState } from 'react';
import './App.css';

function App() {
  const [englishWord, setEnglishWord] = useState('');
  const [tagalogTranslation, setTagalogTranslation] = useState('');

  const translateWord = () => {
    // Simulated translation mapping
    const translations = {
      hello: 'kamusta',
      world: 'mundo',
      example: 'halimbawa',
      good: 'mabuti',
      morning: 'umaga',
      evening: 'gabi',
      friend: 'kaibigan',
      house: 'bahay',
      food: 'pagkain',
      love: 'pag-ibig',
      school: 'paaralan',
      car: 'sasakyan',
      book: 'aklat',
      water: 'tubig',
      happy: 'masaya',
      sad: 'malungkot',
      family: 'pamilya'
      // You can keep adding more words here as needed
    };

    const translation = translations[englishWord.toLowerCase()];
    setTagalogTranslation(translation || 'Translation not found');
  };

  return (
    <div className="container">
      <h1>Tagalog Translator App v2</h1>
      <div className="input-group">
        <label>English Word:</label>
        <input 
          type="text" 
          value={englishWord} 
          onChange={(e) => setEnglishWord(e.target.value)} 
        />
      </div>
      <button onClick={translateWord}>Translate</button>
      {tagalogTranslation && (
        <div>
          <h2>Tagalog Translation:</h2>
          <p>{tagalogTranslation}</p>
        </div>
      )}
    </div>
  );
}

export default App;


