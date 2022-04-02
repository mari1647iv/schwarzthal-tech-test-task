import "./SearchItemBlock.css";
import React, { useState } from 'react';
import { SearchItem } from '../../types/types';
import { Heart } from "react-feather";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useAppSelector } from "../../hooks/useAppSelector";
import { like, unlike } from "../../store/slices/favoritesSlice";

function SearchItemBlock(props: { item: SearchItem }) {
  const dispatch = useAppDispatch();
  const result = props.item;
  const favorites = useAppSelector(state => state.favorites);

  function isFavorite() {
    let data = favorites.items.find((item) => item.trackId === result.trackId);
    return !!data;
  }

  function changeLike() {
    if (!isFavorite()) dispatch(like(result))
    else dispatch(unlike(result.trackId))
  }

  return (
    <div className="search-item">
      {result.artistName} - {result.trackName}
      <button type="button" onClick={changeLike}>
        <Heart size={16} color="#746bfc" fill={isFavorite() ? "#746bfc" : "none"} />
      </button>
    </div>
  );
}

export default SearchItemBlock;