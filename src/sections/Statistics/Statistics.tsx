import React, { useEffect, useState } from 'react';
import AlbumsGraph from '../../components/AlbumsGraph/AlbumsGraph';
import Section from '../../components/Section/Section';
import { useAppSelector } from '../../hooks/useAppSelector';
import itunesService from '../../services/itunesService';

interface Artist {
  id: number,
  name: string,
  songsNumber: number,
  albumsNumber: number,
  albums: [],
}

function Statistics() {
  const [topArtists, setTopArtists] = useState<Artist[]>([])
  const favorites = useAppSelector(state => state.favorites);

  function calculateSongsByArtist() {
    let artistsList: Artist[] = [];

    favorites.items.map((item) => {
      let artist = artistsList.find((artist) => artist.id === item.artistId);
      if (!artist) {
        artistsList.push({
          id: item.artistId,
          name: item.artistName,
          songsNumber: 1,
          albumsNumber: 0,
          albums: [],
        });
      } else {
        artistsList[artistsList.indexOf(artist)].songsNumber += 1;
      }
    })

    return artistsList;
  }

  async function extractAlbums(artist: string) {
    let albums = []
    albums = await itunesService.getAlbums(artist);
    if (!!albums) {
      albums = albums.filter((album: any) => album.trackCount >= 2)
    }
    console.log(albums.length);
    return albums;
  }

  async function calculateTopArtists() {
    let artistsList = calculateSongsByArtist();

    artistsList = artistsList.sort((artist1, artist2) => artist2.songsNumber - artist1.songsNumber)
    artistsList = artistsList.slice(0, 5);
    artistsList.forEach(async (artist) => {
      artist.albums = await extractAlbums(artist.name);
      artist.albumsNumber = artist.albums.length;
    })
    setTopArtists(artistsList);
    console.log(topArtists)
  }

  useEffect(() => {
    calculateTopArtists();
    console.log(topArtists)
  }, [favorites])

  console.log(topArtists)

  return (
    <Section title="Statistics">
      <p>Top-5 Favorite Artists</p>
      <ol>
        {console.log(topArtists)}
        {topArtists.map((artist) => {
          console.log(topArtists)
          return (
            <li key={artist.id}>{artist.name} - {artist.songsNumber} songs liked</li>
          )
        })}
      </ol>
      {!!topArtists && <AlbumsGraph artists={topArtists} />}
    </Section>
  );
}

export default Statistics;