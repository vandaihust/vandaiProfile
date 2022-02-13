import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';

import Button from '@mui/material/Button';

import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Mail, Inbox } from '@mui/icons-material';
import styles from './Navbar.module.css'
const pages = ['Trang chủ', 'Về tôi', 'Tóm tắt', 'Liên hệ'];

function Navbar() {
    //mobile
    const [mobile, setMobile] = React.useState(false);

    const toggleDrawer = (open) => (event) => {
        setMobile(open);
    };

    return (
        <div className={styles.navbarContainer}>
            <AppBar className={styles.appBar} style={{ backgroundColor: 'inherit', boxShadow: 'none' }} position="static">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                        >
                            LOGO
                        </Typography>

                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={toggleDrawer(true)}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Box
                                role="presentation"
                                onClick={toggleDrawer(false)}
                                onKeyDown={toggleDrawer(false)}
                            >
                                <Drawer
                                    anchor='left'
                                    open={mobile}
                                >
                                    <List>
                                        {pages.map((text, index) => (
                                            <ListItem button key={text}>
                                                <ListItemIcon>
                                                    {index % 2 === 0 ? <Inbox /> : <Mail />}
                                                </ListItemIcon>
                                                <ListItemText primary={text} />
                                            </ListItem>
                                        ))}
                                    </List>
                                </Drawer>
                            </Box>
                        </Box>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                        >
                            LOGO
                        </Typography>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            {pages.map((page) => (
                                <Button
                                    key={page}
                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                >
                                    {page}
                                </Button>
                            ))}
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </div>
    );
};
export default Navbar;
