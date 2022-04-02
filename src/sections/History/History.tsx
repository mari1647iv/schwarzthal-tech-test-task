import React from 'react';
import Section from '../../components/Section/Section';
import SearchItemBlock from '../../components/SearchItem/SearchItemBlock';
import { useAppSelector } from '../../hooks/useAppSelector';

function History() {
  const favorites = useAppSelector(state => state.favorites);

  return (
    <Section title="Favorite">
      <div>
        {favorites.items?.map((item) => (
          <SearchItemBlock key={item.trackId} item={item} />
        ))}
      </div>
    </Section>
  );
}

export default History;