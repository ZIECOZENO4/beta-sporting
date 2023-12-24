'use client'

// import { ForwardTable } from 'antd';

const columns = [
  { title: 'Name', dataIndex: 'name' },
  { title: 'Age', dataIndex: 'age' },
  { title: 'Address', dataIndex: 'address' },
];

import * as React from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';



function createData(
 
  TEAMS: string,
  PTS: number,
  MP: number,
  W: number,
  L: number,
  D  : number,
  GF  : number,
  GA  : number,
  GD  : number,
  RATING: number,
  AR: number,
  CR: string,
) {
  return {
    TEAMS,
    PTS,
    MP,
    W,
    L,
    D,
    GF,
    GA,
    GD,
    RATING,
  AR,
  CR,
    history: [
      {
        date: '2020-01-05',
        customerId: '11091700',
        amount: 3,
      },
      {
        date: '2020-01-02',
        customerId: 'Anonymous',
        amount: 1,
      },
    ],
  };
}

function Row(props: { row: ReturnType<typeof createData> }) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ?
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4">
  <path fillRule="evenodd" d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1Zm-.75 10.25a.75.75 0 0 0 1.5 0V6.56l1.22 1.22a.75.75 0 1 0 1.06-1.06l-2.5-2.5a.75.75 0 0 0-1.06 0l-2.5 2.5a.75.75 0 0 0 1.06 1.06l1.22-1.22v4.69Z" clipRule="evenodd" />
</svg>
 : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4">
 <path fillRule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14Zm.75-10.25a.75.75 0 0 0-1.5 0v4.69L6.03 8.22a.75.75 0 0 0-1.06 1.06l2.5 2.5a.75.75 0 0 0 1.06 0l2.5-2.5a.75.75 0 1 0-1.06-1.06L8.75 9.44V4.75Z" clipRule="evenodd" />
</svg>
}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.TEAMS}
        </TableCell>
        <TableCell align="right">{row.PTS}</TableCell>
        <TableCell align="right">{row.MP}</TableCell>
        <TableCell align="right">{row.W}</TableCell>
        <TableCell align="right">{row.L}</TableCell>
        <TableCell align="right">
          {row.D}
        </TableCell>
        <TableCell align="right">
          {row.GF}
        </TableCell>
        <TableCell align="right">
          {row.GA}
        </TableCell>
        <TableCell align="right">
          {row.GD}
        </TableCell>
        <TableCell align="right">
          {row.RATING}
        </TableCell>
        <TableCell align="right">
          {row.AR}
        </TableCell>
        <TableCell align="right">
          {row.CR}
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                PREDICTIONS
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell>Customer</TableCell>
                    <TableCell align="right">Amount</TableCell>
                    <TableCell align="right">Total price ($)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history.map((historyRow) => (
                    <TableRow key={historyRow.date}>
                      <TableCell component="th" scope="row">
                        {historyRow.date}
                      </TableCell>
                      <TableCell>{historyRow.customerId}</TableCell>
                      <TableCell align="right">{historyRow.amount}</TableCell>
                      <TableCell align="right">
                        {Math.round(historyRow.amount * row.AR* 100) / 100}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

const rows = [
  createData( 'Arsenal',  6.0, 24, 4.0, 3.99, 1,7,678,9,19,78,'low'),
  createData( 'Arsenal',  6.0, 24, 4.0, 3.99, 1,7,678,9,19,78,'low'),
  createData( 'Arsenal',  6.0, 24, 4.0, 3.99, 1,7,678,9,19,78,'low'),
  createData( 'Arsenal',  6.0, 24, 4.0, 3.99, 1,7,678,9,19,78,'low'),
  createData( 'Arsenal',  6.0, 24, 4.0, 3.99, 1,7,678,9,19,78,'low'),
  createData( 'Arsenal',  6.0, 24, 4.0, 3.99, 1,7,678,9,19,78,'low'),
  createData( 'Arsenal',  6.0, 24, 4.0, 3.99, 1,7,678,9,19,78,'low'),
  createData( 'Arsenal',  6.0, 24, 4.0, 3.99, 1,7,678,9,19,78,'low'),
  createData( 'Arsenal',  6.0, 24, 4.0, 3.99, 1,7,678,9,19,78,'low'),
];

export default function MyTableBody() {
  return (
    <div>
      <h1 className=' md:ml-[5rem] p-5 justify-start flex font-heading text-xl md:text-3xl '>SELECT LEAGUE</h1>
    <TableContainer component={Paper} className=' '>
      <Table aria-label="collapsible table">
        <TableHead className=' '>
          <TableRow>
            <TableCell />
            <TableCell>TEAMS</TableCell>
       
            <TableCell align="right">PTS</TableCell>
            <TableCell align="right">MP</TableCell>
            <TableCell align="right">W</TableCell>
            <TableCell align="right">L</TableCell>
            <TableCell align="right">D</TableCell>
            <TableCell align="right">GF</TableCell>
              <TableCell align="right">GA</TableCell>
                <TableCell align="right">GD</TableCell>
                <TableCell align="right">RATING</TableCell>
                <TableCell align="right">AR</TableCell>
                <TableCell align="right">CR</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.TEAMS} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}