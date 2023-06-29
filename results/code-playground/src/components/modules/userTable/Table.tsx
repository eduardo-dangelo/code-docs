import React from 'react';
import {
  Paper,
  Table as MuiTable,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';

type ComponentProps = {
  data?: {
    [key: string]: any;
  }[];
  columns?: {
    field: string;
    label: string;
    renderCell?: (index: number) => JSX.Element;
  }[];
};

const Table: React.FC<ComponentProps> = ({
  data = [],
  columns = [],
}) => {
  return (
    <TableContainer component={Paper}>
      <MuiTable sx={{ minWidth: 650 }} aria-label='simple table'>
        <TableHead>
          <TableRow>
            {columns.map(({ label, ...props }, index) => (
              <TableCell key={index} {...props}>
                {label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, rowIndex) => (
            <TableRow
              key={rowIndex}
              sx={{
                '&:last-child td, &:last-child th': { border: 0 },
              }}
            >
              {columns.map(
                ({ field, renderCell, ...props }, index) => (
                  <TableCell key={index} {...props}>
                    {renderCell ? renderCell(rowIndex) : row[field]}
                  </TableCell>
                ),
              )}
            </TableRow>
          ))}
        </TableBody>
      </MuiTable>
    </TableContainer>
  );
};

export default Table;
