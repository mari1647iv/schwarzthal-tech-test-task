import "./Search.css";
import React, { useState } from 'react';
import itunesService from '../../services/itunesService';
import { SearchItem } from '../../types/types';
import Section from '../../components/Section/Section';
import SearchItemBlock from "../../components/SearchItem/SearchItemBlock";


function Search() {
  const [results, setResults] = useState<SearchItem[] | undefined>(undefined);
  const [searchEntry, setSearchEntry] = useState("");

  async function search(term: string) {
    let data = await itunesService.searchMusic(term);
    if (!!data) {
      setResults(data)
    }
    console.log(results);
  }

  return (
    <Section title="Search">
      <div>
        <input type="text" value={searchEntry} onChange={(e) => { setSearchEntry(e.target.value) }} />
        <button type="submit" onClick={() => search(searchEntry)}>Search</button>
        <div>
          {results?.map((result) => (
            <SearchItemBlock key={result.trackId} item={result} />
          ))}
        </div>
      </div>
    </Section>
  );
}

export default Search;