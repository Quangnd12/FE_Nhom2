import React from "react";
import { Icon } from "@chakra-ui/react";
import {
  MdPlaylistPlay,
  MdPerson,
  MdHome,
  MdCategory,
  MdLibraryMusic,
  MdMusicNote,
  MdMic
} from "react-icons/md";

// Admin Imports
import MainDashboard from "views/admin/default";
import Marketplace from "views/admin/marketplace";
import Profile from "views/admin/profile";
import DataTables from "views/admin/dataTables";
import AddSong from "views/admin/marketplace/components/add";

// Auth Imports
import SignInCentered from "views/auth/signIn";

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
    icon: (
      <Icon
        as={MdMusicNote}
        width='20px'
        height='20px'
        color='inherit'
      />
    ),
    component: Marketplace,
    secondary: true,
  },
  {
    name: "Artist",
    layout: "/admin",
    icon: <Icon as={MdMic} width='20px' height='20px' color='inherit' />,
    path: "/data-tables",
    component: DataTables,
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
    layout: "/auth",
    path: "/sign-in",
    icon: <Icon as={MdLibraryMusic} width='20px' height='20px' color='inherit' />,
    component: SignInCentered,
  },
  {
    name: "Playlist",
    layout: "/auth",
    path: "/sign-in",
    icon: <Icon as={MdPlaylistPlay} width='20px' height='20px' color='inherit' />,
    component: SignInCentered,
  },
  {
    name: "Genre",
    layout: "/auth",
    path: "/sign-in",
    icon: <Icon as={MdCategory} width='20px' height='20px' color='inherit' />,
    component: SignInCentered,
  },
];

export default routes;
