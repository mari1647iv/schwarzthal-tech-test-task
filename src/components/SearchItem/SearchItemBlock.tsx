import "./SearchItemBlock.css";
import React, { useState } from 'react';
import { SearchItem } from '../../types';
import { Heart } from "react-feather";

function SearchItemBlock(props: { item: SearchItem }) {
  const result = props.item;
  const [isLiked, setLike] = useState(false);

  return (
    <div key={result.trackId} className="search-item">
      {result.artistName} - {result.trackName}
      <button type="button" onClick={() => setLike(!isLiked)}>
        <Heart size={16} color="#746bfc" fill={isLiked ? "#746bfc" : "none"} />
      </button>
    </div>
  );
}

export default SearchItemBlock;