import React, { useState } from 'react'
import AdminViewport from '../../layouts/adminViewPort/adminViewport'
import { Button, Checkbox, FormControl, FormControlLabel, InputAdornment, OutlinedInput, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import { FiSearch } from 'react-icons/fi'
import TablePagination from '@mui/material/TablePagination';

import './inventory.scss';
import SidenavItemContainer from '../../components/sidenavItemContainer/sidenavItemContainer';

export default function Inventory(): JSX.Element {

  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const rows = [
    {id : '001', description : {name :'Long Sleeve Dress'}, quantity : '256', category: 'sanitary product'},
    {id : '002', description : {name:'Crop Top'}, quantity : '80', category: 'food'},
    {id : '003', description : {name : 'Shorts'}, quantity : '80', category: 'food'},
    {id : '004', description : {name : 'Wedding Dress'}, quantity : '80', category: 'food'},
    {id : '005', description : {name: 'Bourbon Biscuit'}, quantity : '80', category: 'food'},
    {id : '006', description : {name: 'Bourbon Biscuit'}, quantity : '80', category: 'food'},
    {id : '007', description : {name: 'Bourbon Biscuit'}, quantity : '80', category: 'food'},
    {id : '008', description : {name: 'Bourbon Biscuit'}, quantity : '80', category: 'food'},
    {id : '009', description : {name: 'Bourbon Biscuit'}, quantity : '80', category: 'food'},
    {id : '010', description : {name: 'Bourbon Biscuit'}, quantity : '80', category: 'food'},
    {id : '011', description : {name: 'Bourbon Biscuit'}, quantity : '80', category: 'food'},
    {id : '012', description : {name: 'Bourbon Biscuit'}, quantity : '80', category: 'food'},
    {id : '013', description : {name: 'Bourbon Biscuit'}, quantity : '80', category: 'food'},
    {id : '014', description : {name: 'Bourbon Biscuit'}, quantity : '80', category: 'food'},
    {id : '015', description : {name: 'Bourbon Biscuit'}, quantity : '80', category: 'food'},
    {id : '016', description : {name: 'Bourbon Biscuit'}, quantity : '80', category: 'food'},
    {id : '017', description : {name: 'Bourbon Biscuit'}, quantity : '80', category: 'food'},
    {id : '018', description : {name: 'Bourbon Biscuit'}, quantity : '80', category: 'food'},
    {id : '019', description : {name: 'Bourbon Biscuit'}, quantity : '80', category: 'food'},
    {id : '020', description : {name: 'Bourbon Biscuit'}, quantity : '80', category: 'food'},
    {id : '021', description : {name: 'Bourbon Biscuit'}, quantity : '80', category: 'food'},
    {id : '022', description : {name: 'Bourbon Biscuit'}, quantity : '80', category: 'food'},
    {id : '023', description : {name: 'Bourbon Biscuit'}, quantity : '80', category: 'food'},
    {id : '024', description : {name: 'Bourbon Biscuit'}, quantity : '80', category: 'food'},
    {id : '025', description : {name: 'Bourbon Biscuit'}, quantity : '80', category: 'food'},
    {id : '026', description : {name: 'Bourbon Biscuit'}, quantity : '80', category: 'food'},

  ]

  const handleChangePage = (event: unknown, newPage: number) : void => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) : void => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div className='inventoryPage'>
      <AdminViewport 
        pageName="Inventory"
        sideBar={
          /* right side info bar section start */
            <div className='inventoryPage-sidebar'>
              <SidenavItemContainer heading='Filter Inventory' >
                <div className='inventoryPage-sidebar-filterInventory'>
                  <FormControlLabel 
                      control={
                        <Checkbox defaultChecked size='small'/>
                        }
                      style={{  lineHeight:'10px'}}
                      label={<div className='inventoryPage-sidebar-filterInventory-item-label'>All</div>}
                      className='inventoryPage-sidebar-filterInventory-item' />
                  <FormControlLabel 
                      control={
                        <Checkbox size='small'/>
                        }
                        style={{  lineHeight:'10px'}}
                        label={<div className='inventoryPage-sidebar-filterInventory-item-label'>Low Quantity</div>}
                        className='inventoryPage-sidebar-filterInventory-item' />
                </div>
              </SidenavItemContainer>
            </div> 
          /* right side info bar section end */
  
          }       
       >
        <>
        {/* main content start */}
        <div className='inventoryPage-content'>
          {/* inventory header start */}
          <div className='inventoryPage-content-header'>
            {/* search start */}
            <FormControl variant="outlined">
              <OutlinedInput
                id="search-input"
                startAdornment={<InputAdornment position="start"><FiSearch /></InputAdornment>}
                aria-describedby="search-input"
                inputProps={{
                  'aria-label': 'search',
                }}
                className='settings-body-header-search'
              />
            </FormControl>
            <Button variant="outlined" size="small">Export Data</Button>

            {/* search end */}

          </div>
          {/* inventory header end */}
          {/* inventory body start */}
          <div className='inventoryPage-content-body'>
            <TableContainer sx={{ maxHeight: 600 }}>
              <Table stickyHeader size='small'>

                <TableHead >
                  <TableRow>
                    <TableCell align='center' style={{ fontWeight: 'bold' , backgroundColor:'#fafafa' }} >
                      ID
                    </TableCell>
                    <TableCell style={{ fontWeight: 'bold', backgroundColor:'#fafafa' }} align="left">
                      Description
                    </TableCell>
                    <TableCell style={{ fontWeight: 'bold', backgroundColor:'#fafafa' }} align="center">
                      Quantity
                    </TableCell>
                    <TableCell style={{ fontWeight: 'bold', backgroundColor:'#fafafa' }} align="center">
                      Category
                    </TableCell>
                    <TableCell style={{ fontWeight: 'bold', backgroundColor:'#fafafa' }} align="left">
                      Action
                    </TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  {rows
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row) => (
                          <TableRow key={row.id}>
                            <TableCell align='center' >
                              {row.id}
                            </TableCell>
                            <TableCell style={{  }} align="left">
                            {row.description.name}
                            </TableCell>
                            <TableCell style={{  }} align="center">
                              {row.quantity}
                            </TableCell>
                            <TableCell style={{  }} align="center">
                              {row.category}
                            </TableCell>
                            <TableCell style={{  }} align="left">
                              <Button sx={{maxHeight:'25px', fontSize:'11px', maxWidth:'20px' }} variant="outlined" size="small">more</Button>
                            </TableCell>
                          </TableRow>
                        ))}
                </TableBody>
  
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[10, 25, 50]}
              component="div"
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </div>
          {/* inventory body end */}

        </div>
        {/* main content end */}
        
        </>
        

      </AdminViewport>
    </div>
  )
}
