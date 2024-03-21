import {Recipe} from 'models';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
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
import {IconIndex} from 'data/icons';

const ICON_SIZE = `50px`;

export const ItemIcon = ({name}: {name: string}) => (
    <Paper
        elevation={12}
        sx={{
            p: 2,
            height: ICON_SIZE,
            width: ICON_SIZE,
            backgroundImage: `url("${
                IconIndex[name.replaceAll('-', '_')] || ''
            }")`,
            backgroundSize: 'contain',
            backgroundRepeat: 'round',
        }}
    />
);

export const RecipeCard = ({recipe}: {recipe: Recipe}) => {
    return (
        <Paper variant="outlined" sx={{py: 1}}>
            <Stack direction="column" divider={<Divider />} spacing={1}>
                <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent={'space-around'}
                >
                    {(recipe.products || []).map((quantity, quantityIndex) => (
                        <ItemIcon key={quantityIndex} name={quantity.name} />
                    ))}
                </Stack>

                <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent={'space-around'}
                >
                    {(recipe.ingredients || []).map(
                        (quantity, quantityIndex) => (
                            <ItemIcon
                                key={quantityIndex}
                                name={quantity.name}
                            />
                        )
                    )}
                </Stack>
            </Stack>
        </Paper>
    );
};
