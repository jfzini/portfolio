import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import { Close } from '@mui/icons-material';
import { Link, ListItemText } from '@mui/material';

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="menu-btn"
        aria-controls={open ? 'menu-panel' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        variant='outlined'
        color='inherit'
      >
        {open ? <Close /> : <MenuIcon />}
      </Button>
      <Menu
        id="menu-panel"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'menu-btn',
        }}
      >
        <Link href='#hero' underline='none' color='inherit'>
          <MenuItem onClick={handleClose}>
            Home
          </MenuItem>
        </Link>
        <Link href='#projects' underline='none' color='inherit'>
          <MenuItem onClick={handleClose}>
            Projects
          </MenuItem>
        </Link>
        <Link href='#about' underline='none' color='inherit'>
          <MenuItem onClick={handleClose}>
            About
          </MenuItem>
        </Link>
        <Link href='#contact' underline='none' color='inherit'>
          <MenuItem onClick={handleClose}>
            Contact
          </MenuItem>
        </Link>
      </Menu>
    </div>
  );
}