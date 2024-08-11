import React from "react";
import { Icon } from "@chakra-ui/react";
import { MdPlaylistPlay, MdHome, MdCategory, MdLibraryMusic, MdMusicNote, MdMic, MdLyrics } from "react-icons/md";

// Admin Imports
import MainDashboard from "./views/admin/default";
import Song from "./views/admin/song";
// import Profile from "./views/admin/profile";
// import DataTables from "views/admin/dataTables";
import AddSong from "./views/admin/song/components/add";
import EditSong from "./views/admin/song/components/edit";
import Genre, { AddGenre, EditGenre, DeleteGenre } from "./views/admin/genre";
// import Follow, { AddFollow, EditFollow, DeleteFollow } from "./views/admin/follow";
import Lyric, { AddLyric, EditLyric, DeleteLyric } from "./views/admin/lyric";
// import Favorite, { AddFavorite, EditFavorite, DeleteFavorite } from "./views/admin/fav";
import Albums, { DeleteAlbum } from "./views/admin/albums";
import AddAlbum from "./views/admin/albums/components/add";
import EditAlbum from "./views/admin/albums/components/edit";
import Artist from "./views/admin/artist";
import AddArtist from "./views/admin/artist/components/add";
import EditArtist from "./views/admin/artist/components/edit";





// Auth Imports
// import SignInCentered from "./views/auth/signIn";
// import Playlist from "./views/admin/playlist";
// import EditPlaylist from "./views/admin/playlist/components/edit";
// import AddPlaylist from "./views/admin/playlist/components/add";
// import DeletePlaylist from "./views/admin/playlist/components/delete";

import Playlist, { AddPlaylist, EditPlaylist, DeletePlaylist } from "./views/admin/playlist";
import Album_song, { AddAlbumSong, DeleteAlbumSong, EditAlbumSong } from "./views/admin/albums_song";
import { Album } from "@mui/icons-material";
const routes = [
  {
    name: "Dashboard",
    layout: "/admin",
    path: "/default",
    icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
    component: MainDashboard,
  },
  {
    name: "Song",
    layout: "/admin",
    path: "/song",
    icon: (<Icon as={MdMusicNote} width='20px' height='20px' color='inherit' />),
    component: Song,
  },
  {
    layout: '/admin',
    name: "Add Song",
    path: "/addSong",
    component: AddSong,
    displayInSidebar: false,
  },
  {
    layout: '/admin',
    name: "Edit Song",
    path: "/editSong/:id",
    component: EditSong,
    displayInSidebar: false,
  },
  {
    name: "Album_song",
    layout: "/admin",
    path: "/album_song",
    icon: (<Icon as={MdMusicNote} width='20px' height='20px' color='inherit' />),
    component: Album_song,
  },
  {
    layout: '/admin',
    name: "Add Album_Song",
    path: "/addAlbumSong",
    component: AddAlbumSong,
    displayInSidebar: false,
  },
  {
    layout: '/admin',
    name: "Edit Album_Song",
    path: "/editAlbumSong/:id",
    component: EditAlbumSong,
    displayInSidebar: false,
  },
  {
    layout: '/admin',
    name: "Delete Album_Song",
    path: "/deleteAlbumSong",
    component: DeleteAlbumSong,
    displayInSidebar: false,
  },
  {
    name: "Artist",
    layout: "/admin",
    icon: <Icon as={MdMic} width='20px' height='20px' color='inherit' />,
    path: "/artist",
    component: Artist,
  },
  {
    layout: '/admin',
    name: "Add Artist",
    path: "/addArtist",
    component: AddArtist,
    displayInSidebar: false,
  },
  {
    layout: '/admin',
    name: "Edit Artist",
    path: "/editArtist/:id",
    component: EditArtist,
    displayInSidebar: false,
  },
  {
    layout: '/admin',
    name: "Delete Artist",
    path: "/deleteArtist",
    component: DeleteAlbum,
    displayInSidebar: false,
  },
  // {
  //   name: "Profile",
  //   layout: "/admin",
  //   path: "/profile",
  //   icon: <Icon as={MdPerson} width='20px' height='20px' color='inherit' />,
  //   component: Profile,
  // },
  {
    name: "Albums",
    layout: "/admin",
    path: "/albums",
    icon: <Icon as={MdLibraryMusic} width='20px' height='20px' color='inherit' />,
    component: Albums,
  },
  {
    layout: '/admin',
    name: "Add Albums",
    path: "/addAlbums",
    component: AddAlbum,
    displayInSidebar: false,
  },
  {
    layout: '/admin',
    name: "Edit Albums",
    path: "/editAlbums/:id",
    component: EditAlbum,
    displayInSidebar: false,
  },
  {
    layout: '/admin',
    name: "Delete Alumbs",
    path: "/deleteAlbums",
    component: DeleteAlbum,
    displayInSidebar: false,
  },
  {
    name: "Playlist",
    layout: "/admin",
    path: "/playlist",
    icon: <Icon as={MdPlaylistPlay} width='20px' height='20px' color='inherit' />,
    component: Playlist,
  },
  {
    name: "Playlist",
    layout: "/admin",
    path: "/editPlaylist/:id",
    component: EditPlaylist,
    displayInSidebar: false,
  },
  {
    name: "Playlist",
    layout: "/admin",
    path: "/AddPlaylist",
    icon: <Icon as={MdPlaylistPlay} width='20px' height='20px' color='inherit' />,
    component: AddPlaylist,
    displayInSidebar: false,
  },
  {
    name: "Playlist",
    layout: "/admin",
    path: "/DeletePlaylist",
    icon: <Icon as={MdPlaylistPlay} width='20px' height='20px' color='inherit' />,
    component: DeletePlaylist,
    displayInSidebar: false,
  },
  {
    name: "Genre",
    layout: "/admin",
    path: "/genre",
    icon: <Icon as={MdCategory} width='20px' height='20px' color='inherit' />,
    component: Genre,
  },
  {
    layout: '/admin',
    name: "Add Genre",
    path: "/addGenre",
    component: AddGenre,
    displayInSidebar: false,
  },
  {
    layout: '/admin',
    name: "Edit Genre",
    path: "/editGenre/:id",
    component: EditGenre,
    displayInSidebar: false,
  },
  {
    layout: '/admin',
    name: "Delete Genre",
    path: "/deleteGenre",
    component: DeleteGenre,
    displayInSidebar: false,
  },
  // {
  //   name: "Follow",
  //   layout: "/admin",
  //   path: "/follow",
  //   icon: <Icon as={MdPersonAdd} width='20px' height='20px' color='inherit' />,
  //   component: Follow,
  // },
  // {
  //   layout: '/admin',
  //   name: "Add Follow",
  //   path: "/addFollow",
  //   component: AddFollow,
  //   displayInSidebar: false,
  // },
  // {
  //   layout: '/admin',
  //   name: "Edit Follow",
  //   path: "/editFollow/:id",
  //   component: EditFollow,
  //   displayInSidebar: false,
  // },
  // {
  //   layout: '/admin',
  //   name: "Delete Follow",
  //   path: "/deleteFollow",
  //   component: DeleteFollow,
  //   displayInSidebar: false,
  // },
  {
    name: "Lyric",
    layout: "/admin",
    path: "/lyric",
    icon: <Icon as={MdLyrics} width='20px' height='20px' color='inherit' />, // Sử dụng icon mới
    component: Lyric,
  },
  {
    layout: '/admin',
    name: "Add Lyric",
    path: "/addLyric",
    component: AddLyric,
    displayInSidebar: false,
  },
  {
    layout: '/admin',
    name: "Edit Lyric",
    path: "/editLyric/:id",
    component: EditLyric,
    displayInSidebar: false,
  },
  {
    layout: '/admin',
    name: "Delete Lyric",
    path: "/deleteLyric",
    component: DeleteLyric,
    displayInSidebar: false,
  },
  // {
  //   name: "Favorite",
  //   layout: "/admin",
  //   path: "/favorite",
  //   icon: <Icon as={MdFavorite} width='20px' height='20px' color='inherit' />,
  //   component: Favorite,
  // },
  // {
  //   layout: '/admin',
  //   name: "Add Favorite",
  //   path: "/addFavorite",
  //   component: AddFavorite,
  //   displayInSidebar: false,
  // },
  // {
  //   layout: '/admin',
  //   name: "Edit Favorite",
  //   path: "/editFavorite/:id",
  //   component: EditFavorite,
  //   displayInSidebar: false,
  // },
  // {
  //   layout: '/admin',
  //   name: "Delete Favorite",
  //   path: "/deleteFavorite",
  //   component: DeleteFavorite,
  //   displayInSidebar: false,
  // },

];

export default routes;
