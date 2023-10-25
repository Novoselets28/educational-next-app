"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const Characters: React.FC = () => {
  const [characters, setCharacters] = useState<any[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://rickandmortyapi.com/api/character');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setCharacters(data.results);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      <ul>
        {characters.map((character) => (
          <li key={character.id}>
            <Image
              src={character.image}
              alt={character.name}
              width={200}
              height={200}
            />            
            <p>{character.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Characters;
