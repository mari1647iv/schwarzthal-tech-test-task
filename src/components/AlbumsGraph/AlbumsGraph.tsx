import React, { useEffect, useRef, useState } from 'react';
import { Network, Node, Edge } from "vis-network";
import itunesService from '../../services/itunesService';
import { AlbumInterface } from '../../types/types';

interface Artist {
  id: number,
  name: string,
  songsNumber: number,
  albumsNumber: number,
  albums: AlbumInterface[],
}

const AlbumsGraph: React.FC<{ artists: Artist[] }> = (props) => {
  const { artists } = props;
  const visJsRef = useRef<HTMLDivElement>(null);
  let nodes: Node[] = [];
  let edges: Edge[] = [];

  artists.forEach((artist) => {
    nodes.push({ id: artist.id, label: artist.name, fixed: true });
    artist.albums.forEach((album) => {
      nodes.push({ id: album.collectionId, label: album.collectionName });
      edges.push({ from: artist.id, to: album.collectionId });
    });
  })

  useEffect(() => {
    console.log(edges)
    const network =
      visJsRef.current &&
      new Network(visJsRef.current, { nodes, edges }, {
        autoResize: true,
        edges: {
          color: "#411811"
        }
      });
  }, [visJsRef, nodes, edges]);

  async function extractAlbums(artist: string) {
    let albums = []
    albums = await itunesService.getAlbums(artist);
    if (!!albums) {
      albums = albums.filter((album: any) => album.trackCount >= 2)
    }
    console.log(albums.length);
    return albums;
  }

  return (<div ref={visJsRef}
    style={{
      height: "1000px",
      width: "100%",
    }} />);
}

export default AlbumsGraph;