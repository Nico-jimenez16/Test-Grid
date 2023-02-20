import React, { useEffect, useState } from 'react';
import { Person } from '@/models';
import { addFavorite } from '@/redux/states';
import { AppStore } from '@/redux/store';
import { Checkbox } from '@mui/material';
import { GridRenderCellParams, DataGrid } from '@mui/x-data-grid';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

export interface PeopleTableInterface {}

const PeopleTable : React.FC<PeopleTableInterface> = () => {
	const dispatch = useDispatch();

	const [selectedPeople, setSelectedPeople] = useState<Person[]>([])
	const pageSize = 5
	const storePeople = useSelector((store: AppStore) => store.people);
	const favoritePeople = useSelector((store: AppStore) => store.favorite);

	const findPerson = ( person: Person ) => !! favoritePeople.find(p => p.id === person.id)
	const filterPerson = ( person: Person ) => favoritePeople.filter(p => p.id !== person.id)

	const handleChange = (person: Person) => {
		const filteredPeople = findPerson(person) ? filterPerson(person) : [...selectedPeople , person]
		dispatch( addFavorite(filteredPeople))
		setSelectedPeople( filteredPeople )
	}

	type NewType = GridRenderCellParams;


	const columns = [
		{
			field: 'actions',
			type: 'actions',
			sortable: false,
			headerName: '',
			width: 60,
			renderCell: (params: NewType ) => <>{
				<Checkbox 
					checked={findPerson(params.row)}
					onChange={() => handleChange( params.row) }
				/>
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

	useEffect(() => {
		setSelectedPeople(favoritePeople)
	}, [favoritePeople])
	

	return (
		<DataGrid
			rows={ storePeople }
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

export default PeopleTable;
