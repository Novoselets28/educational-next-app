'use client'
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';

interface HeaderProps {
  backgroundColor: string;
  isSticky: boolean;
  marginBottom: number;
}

interface AppBarStyle {
  backgroundColor: string;
  position: 'static' | 'sticky';
  top: number;
  marginBottom: number;
}

const Header: React.FC<HeaderProps> = ({ backgroundColor, isSticky, marginBottom }) => {
    const session = useSession();

    console.log(session)

  const appBarStyle: AppBarStyle = {
    backgroundColor,
    position: isSticky ? 'sticky' : 'static',
    top: 0,
    marginBottom: 15,

  };

  const linkStyle = {
    textDecoration: 'none',
    color: 'inherit'
  };

  const menuIconStyle = {
    color: 'white'
  };

  return (
    <AppBar position="static" style={appBarStyle}>
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon style={menuIconStyle} />
        </IconButton>
        <Typography variant="h6">
          <Link href="/" style={linkStyle}>
            Rick and Morty
          </Link>
        </Typography>
        <ul style={{ listStyle: 'none', paddingLeft: 0, display: 'flex' }}>
          <li style={{ margin: '0 16px' }}>
            <Link href="/mainPage" style={{ ...linkStyle }}>
              MainPage
            </Link>
          </li>
          <li style={{ margin: '0 16px' }}>
            <Link href="/posts" style={linkStyle}>
              Posts
            </Link>
          </li>
          <li style={{ margin: '0 16px' }}>
            {session?.data && (
                <Link href={'/profile'}>Profile</Link>
            )}
          </li>
          <li style={{ margin: '0 16px' }}>
                {session?.data ? <Link href={'#'} onClick={() => signOut({callbackUrl:"/"})}>Sign out</Link> : <Link href={'/signin'}>Sing In</Link>}
          </li>
        </ul>
      </Toolbar>
    </AppBar>
  );
};

export default Header;