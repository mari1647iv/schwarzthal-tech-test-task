export interface SearchItem {
  artistId: number,
  artistName: string,
  artworkUrl60: string,
  artworkUrl100: string,
  collectionId: number,
  collectionName: string,
  country?: string,
  kind: string,
  previewUrl: string,
  trackCensoredName?: string,
  trackId: number,
  trackName: string,
  trackTimeMillis: number,
  trackViewUrl?: string,
  wrapperType: string,
};

export interface AlbumInterface {
  wrapperType: string,
  collectionType: string,
  artistId: number,
  collectionId: number,
  artistName: string,
  collectionName: string,
  collectionCensoredName: string,
  artistViewUrl: string,
  collectionViewUrl: string,
  artworkUrl60: string,
  artworkUrl100: string,
  trackCount: number,
  releaseDate: string,
}