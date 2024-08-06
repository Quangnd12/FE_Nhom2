import React from "react";
import { Icon } from "@chakra-ui/react";
import { MdPlaylistPlay, MdPerson, MdHome, MdCategory, MdLibraryMusic, MdMusicNote, MdMic, MdFavorite } from "react-icons/md";

// Admin Imports
import MainDashboard from "./views/admin/default";
import Song from "./views/admin/song";
import Profile from "./views/admin/profile";
// import DataTables from "views/admin/dataTables";
import AddSong from "./views/admin/song/components/add";
import EditSong from "./views/admin/song/components/edit";
import Genre, { AddGenre, EditGenre, DeleteGenre } from "./views/admin/genre";
import Album, {AddAlbum, EditAlbum, DeleteAlbum} from "./views/admin/albums";
import Artist, {AddArtist, EditArtist, DeleteArtist} from "./views/admin/artist";



// Auth Imports
// import SignInCentered from "./views/auth/signIn";
// import Playlist from "./views/admin/playlist";
// import EditPlaylist from "./views/admin/playlist/components/edit";
// import AddPlaylist from "./views/admin/playlist/components/add";
// import DeletePlaylist from "./views/admin/playlist/components/delete";

import Playlist, { AddPlaylist, EditPlaylist, DeletePlaylist } from "./views/admin/playlist";
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
  {
    name: "Profile",
    layout: "/admin",
    path: "/profile",
    icon: <Icon as={MdPerson} width='20px' height='20px' color='inherit' />,
    component: Profile,
  },
  {
    name: "Albums",
    layout: "/admin",
    path: "/albums",
    icon: <Icon as={MdLibraryMusic} width='20px' height='20px' color='inherit' />,
    component: Album,
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
    path: "/editGenre",
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
  {
    name: "Favorites",
    layout: "/admin",
    path: "/favorite",
    icon: <Icon as={MdFavorite} width='20px' height='20px' color='inherit' />,
    component: Favorite,
  },
  {
    layout: '/admin',
    name: "Edit favorite",
    path: "/editFavorite/:id",
    component: EditFavorite,
    displayInSidebar: false,
  },
  {
    layout: '/admin',
    name: "Add favorite",
    path: "/addFavorite",
    component: AddFavorite,
    displayInSidebar: false,
  },

];

export default routes;
