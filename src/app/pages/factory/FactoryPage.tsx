import React from 'react';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import {ActionDrawer, DRAWER_WIDTH} from './ActionDrawer';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import {Recipe} from 'models';
import {FactoryContext} from './FactoryContext';
import {InMemoryDBWrapper, db} from 'services/data';

export default function FactoryPage() {
    const [selectedRecipes, updateSelectedRecipes] = React.useState<Recipe[]>([
        db.getRecipe('se-deep-space-science-pack-4'),
    ]);

    return (
        <FactoryContext.Provider
            value={{
                selectedRecipes,
                updateSelectedRecipes,
            }}
        >
            <Box sx={{display: 'flex'}}>
                <CssBaseline />
                <AppBar
                    position="fixed"
                    sx={{
                        width: `calc(100% - ${DRAWER_WIDTH}px)`,
                        ml: `${DRAWER_WIDTH}px`,
                    }}
                >
                    <Toolbar>
                        <Typography variant="h6" noWrap component="div">
                            Forge
                        </Typography>
                    </Toolbar>
                </AppBar>
                <ActionDrawer />
                <Box
                    component="main"
                    sx={{flexGrow: 1, bgcolor: 'background.default', p: 3}}
                >
                    <Toolbar />
                </Box>
            </Box>
        </FactoryContext.Provider>
    );
}
