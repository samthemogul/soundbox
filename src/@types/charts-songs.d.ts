export interface ChartsRootObject {
 albums:    Albums;
 artists:   Artists;
 playlists: Playlists;
 podcasts:  Podcasts;
 tracks:    Tracks;
}

export interface Albums {
 data:  AlbumsDatum[];
 total: number;
}

export interface AlbumsDatum {
 artist:          ArtistElement;
 cover:           string;
 cover_big:       string;
 cover_medium:    string;
 cover_small:     string;
 cover_xl:        string;
 explicit_lyrics: boolean;
 id:              number;
 link:            string;
 md5_image:       string;
 position:        number;
 record_type:     string;
 title:           string;
 tracklist:       string;
 type:            AlbumType;
}

export interface ArtistElement {
 id:             number;
 link:           string;
 name:           string;
 picture:        string;
 picture_big:    string;
 picture_medium: string;
 picture_small:  string;
 picture_xl:     string;
 position?:      number;
 radio:          boolean;
 tracklist:      string;
 type:           ArtistType;
}

export enum ArtistType {
 Artist = "artist",
}

export enum AlbumType {
 Album = "album",
}

export interface Artists {
 data:  ArtistElement[];
 total: number;
}

export interface Playlists {
 data:  PlaylistsDatum[];
 total: number;
}

export interface PlaylistsDatum {
 checksum:       string;
 creation_date:  Date;
 id:             number;
 link:           string;
 md5_image:      string;
 nb_tracks:      number;
 picture:        string;
 picture_big:    string;
 picture_medium: string;
 picture_small:  string;
 picture_type:   PictureTypeEnum;
 picture_xl:     string;
 public:         boolean;
 title:          string;
 tracklist:      string;
 type:           PictureTypeEnum;
 user:           User;
}

export enum PictureTypeEnum {
 Playlist = "playlist",
}

export interface User {
 id:        number;
 name:      string;
 tracklist: string;
 type:      UserType;
}

export enum UserType {
 User = "user",
}

export interface Podcasts {
 data:  PodcastsDatum[];
 total: number;
}

export interface PodcastsDatum {
 available:      boolean;
 description:    string;
 fans:           number;
 id:             number;
 link:           string;
 picture:        string;
 picture_big:    string;
 picture_medium: string;
 picture_small:  string;
 picture_xl:     string;
 share:          string;
 title:          string;
 type:           PurpleType;
}

export enum PurpleType {
 Podcast = "podcast",
}

export interface Tracks {
 data:  TracksDatum[];
 total: number;
}

export interface TracksDatum {
 album:                   Album;
 artist:                  ArtistElement;
 duration:                number;
 explicit_content_cover:  number;
 explicit_content_lyrics: number;
 explicit_lyrics:         boolean;
 id:                      number;
 link:                    string;
 md5_image:               string;
 position:                number;
 preview:                 string;
 rank:                    number;
 title:                   string;
 title_short:             string;
 title_version?:          string;
 type:                    FluffyType;
}

export interface Album {
 cover:        string;
 cover_big:    string;
 cover_medium: string;
 cover_small:  string;
 cover_xl:     string;
 id:           number;
 md5_image:    string;
 title:        string;
 tracklist:    string;
 type:         AlbumType;
}

export enum FluffyType {
 Track = "track",
}
