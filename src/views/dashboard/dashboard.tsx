import React from 'react'
import AdminViewport from '../../layouts/adminViewPort/adminViewport'
import DashboardItemContainer from '../../components/dashboardItemContainer/dashboardItemContainer'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, tableCellClasses } from '@mui/material'

export default function Dashboard() : JSX.Element {
  /* the dashboard page content in the viewport */

  const rows = [
    {id : '001', description : {name :'Lifebuoy Soap'}, quantity : '256', category: 'sanitary product'},
    {id : '002', description : {name:'Bourbon Biscuit'}, quantity : '80', category: 'food'},
    {id : '003', description : {name : 'Bourbon Biscuit'}, quantity : '80', category: 'food'},
    {id : '004', description : {name : 'Bourbon Biscuit'}, quantity : '80', category: 'food'},
    {id : '005', description : {name: 'Bourbon Biscuit'}, quantity : '80', category: 'food'},
    
  ];

  return (
    <div>
      <AdminViewport pageName="Dashboard" freeChildren={true}>
        <div>
          <DashboardItemContainer heading='Top Selling'>
            <div>
            <TableContainer sx={{ maxHeight:400}}>
      <Table size="small" sx={{  [`& .${tableCellClasses.root}`]: {
      borderBottom: "none"
    } }} aria-label="top selling table">
        {/* <caption>this weeks top selling products</caption> */}
        <TableHead>
          <TableRow>
            <TableCell style={{ fontWeight: 'bold', fontSize:'21px' }} align="center">ID</TableCell>
            <TableCell style={{ fontWeight: 'bold', fontSize:'21px' }} align="left">Product Name</TableCell>
            <TableCell style={{ fontWeight: 'bold', fontSize:'21px' }} align="center">Price&nbsp;(Birr)</TableCell>
            <TableCell style={{ fontWeight: 'bold', fontSize:'21px' }} align="center">Category</TableCell>
            <TableCell style={{ fontWeight: 'bold', fontSize:'21px' }} align="center">Quantity Sold&nbsp;(Unit)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.description.name}>
              <TableCell align="center">{row.id}</TableCell>
              <TableCell component="th" scope="row" align="left">
                {row.description.name}
              </TableCell>
              <TableCell align="center">{row.quantity}</TableCell>
              <TableCell align="center">{row.category}</TableCell>
              <TableCell align="center">{row.quantity}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
            </div>
          </DashboardItemContainer>
        </div>
      </AdminViewport>
    </div>
  )
}
