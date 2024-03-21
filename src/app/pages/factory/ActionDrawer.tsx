import React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Fab from '@mui/material/Fab';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import {FactoryContext} from './FactoryContext';
import {RecipeCard} from './RecipeCard';

export const DRAWER_WIDTH = 400;

export const ActionDrawer = () => {
    const {selectedRecipes} = React.useContext(FactoryContext);

    return (
        <Drawer
            sx={{
                width: DRAWER_WIDTH,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: DRAWER_WIDTH,
                    boxSizing: 'border-box',
                },
            }}
            variant="permanent"
            anchor="left"
        >
            <Toolbar />
            <Divider />
            <Stack p={2} spacing={2}>
                <Fab variant="extended">
                    <HowToRegIcon />
                    Schedule
                </Fab>
                {selectedRecipes.map((recipe) => (
                    <RecipeCard key={recipe.name} recipe={recipe} />
                ))}
            </Stack>
        </Drawer>
    );
};
