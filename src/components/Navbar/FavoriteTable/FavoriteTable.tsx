import React from 'react';
import { Person } from '@/models';
import { removeFavorite } from '@/redux/states';
import { AppStore } from '@/redux/store';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { GridRenderCellParams, DataGrid } from '@mui/x-data-grid';
import { useDispatch, useSelector } from 'react-redux';

export interface FavoriteTableInterface {}

const FavoriteTable : React.FC<FavoriteTableInterface> = () => {
	const dispatch = useDispatch();
	const pageSize = 5
	const stateFavorites = useSelector((store: AppStore) => store.favorite)
	type NewType = GridRenderCellParams;

	const handleClick = (person: Person) => {
		dispatch( removeFavorite(person))
	}

	const columns = [
		{
			field: 'actions',
			type: 'actions',
			sortable: false,
			headerName: '',
			width: 60,
			renderCell: (params: NewType ) => <>{
				<IconButton color='secondary' arial-label='favorite' component='label' onClick={() => handleClick(params.row) } >
					<DeleteIcon />
				</IconButton>
			}</>
		},
		{
			field: 'name',
			headerName: 'Nombre',
			flex: 1,
			minWidth: 150,
			renderCell: (params: NewType ) => <>{params.value}</>
		},
		{
			field: 'category',
			headerName: 'Categories',
			flex: 1,
			minWidth: 150,
			renderCell: (params: NewType ) => <>{params.value}</>
		},
		{
			field: 'company',
			headerName: 'Company',
			flex: 1,
			minWidth: 150,
			renderCell: (params: NewType ) => <>{params.value}</>
		},
		{
			field: 'levelOfHappiness',
			headerName: 'Level Of Happiness',
			flex: 1,
			minWidth: 150,
			renderCell: (params: NewType ) => <>{params.value}</>
		}
	]
	
	return (
		<DataGrid
			rows={ stateFavorites }
			columns={columns}
			disableColumnSelector
			disableSelectionOnClick
			autoHeight
			pageSize={pageSize}
			rowsPerPageOptions={[pageSize]}
			getRowId={(row: any) => row.id }
		/>
	)
};

export default FavoriteTable;
