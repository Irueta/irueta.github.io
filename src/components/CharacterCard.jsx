// CharacterCard.js
import React, { useState } from 'react';
import ProgressBar from './ProgressBar';

const CharacterCard = ({ character, onCharacterClick }) => {
const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    onCharacterClick(character, !isChecked);
  };

  return (
    <div className="character-card">
      <img src={`/characters/imagen-${character.id}.gif`} alt={character.name} />
      <p id="nombre">Nombre: {character.name}</p>
      <p>Frontend: {character.frontend}<ProgressBar value={character.frontend} max={10} /></p>
      <p>Backend: {character.backend}<ProgressBar value={character.backend} max={10} /></p>
      <p>CSS: {character.css}<ProgressBar value={character.css} max={10} /></p>
      <p>Motivación: {character.motivacion}<ProgressBar value={character.motivacion} max={4} /></p>
      <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />Soy tu bro
    </div>
  );
};

export default CharacterCard;
