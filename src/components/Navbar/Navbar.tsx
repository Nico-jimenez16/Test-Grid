import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import React from 'react';
import { CustomDialog } from '../CustomDialog';
import { dialogOpenSubject$ } from '../CustomDialog/CustomDialog';
import { FavoriteTable } from './FavoriteTable';

export interface NavbarInterface {}

const Navbar : React.FC<NavbarInterface> = () => {

	const handleClick = () => {
		dialogOpenSubject$.setSubject = true
	}

	return (
		<>
			<CustomDialog>
				<FavoriteTable />
			</CustomDialog>
			<AppBar position="fixed">
				<Toolbar>
					<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
						Nicolas Jimenez Grid-Test
					</Typography>
					<IconButton color='secondary' size='large' onClick={handleClick} >
						<FavoriteIcon />
					</IconButton>
				</Toolbar>
			</AppBar>
		</>
	)
};

export default Navbar;
