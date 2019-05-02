import React, { FC, useState, useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react';
import { ColDef, GridApi } from 'ag-grid-community';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

import { Order, TradeType } from 'types';
import { styled } from 'theme';
import { useWindowWidth } from 'hooks';

const Container = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  .buy-cell {
    background-color: ${({ theme }) => theme.palette.buy.faded};
    color: ${({ theme }) => theme.palette.buy.contrastText};
  }
  .sell-cell {
    background-color: ${({ theme }) => theme.palette.sell.faded};
    color: ${({ theme }) => theme.palette.sell.contrastText};
  }
`;

type Field = keyof Order;
type OrderColDef = ColDef & {
  field: Field;
};

const defaultColDef: ColDef = {
  sortable: true,
  filter: true,
  suppressAutoSize: true,
  suppressSizeToFit: true
};

type CellParams = {
  value: TradeType;
};

const columnDefs: OrderColDef[] = [
  {
    headerName: 'Action',
    field: 'tradeType',
    width: 50,
    cellClassRules: {
      'buy-cell': ({ value }: CellParams) => value === TradeType.BUY,
      'sell-cell': ({ value }: CellParams) => value === TradeType.SELL
    }
  },
  {
    headerName: 'Symbol',
    field: 'symbol'
  },
  {
    headerName: 'Qty',
    field: 'qty'
  },
  {
    headerName: 'Order Type',
    field: 'orderType'
  },
  {
    headerName: 'TIF',
    field: 'tif'
  },
  {
    headerName: 'Price',
    field: 'price'
  },
  {
    headerName: 'Stop Price',
    field: 'stopPrice'
  },
  {
    headerName: 'Comment',
    field: 'comment',
    width: 300,
    autoHeight: true,
    resizable: true,
    suppressAutoSize: false,
    suppressSizeToFit: false,
    tooltipField: 'comment'
  }
];

type Props = {
  className?: string;
  orders: Order[];
};

const OrderBlotter: FC<Props> = ({ className, orders }) => {
  const [gridApi, setGridApi] = useState<GridApi | undefined>(undefined);
  const width = useWindowWidth();

  // Dynamically resize column widths. Should probably throttle/debounce
  useEffect(() => {
    if (gridApi) {
      gridApi.sizeColumnsToFit();
    }
  }, [width, gridApi]);

  return (
    <Container className={`ag-theme-balham ${className || ''}`}>
      <AgGridReact
        columnDefs={columnDefs}
        rowData={orders}
        defaultColDef={defaultColDef}
        onGridReady={({ api, columnApi }) => {
          setGridApi(api);
          columnApi.autoSizeAllColumns();
          setTimeout(() => {
            api.sizeColumnsToFit();
          }, 0);
        }}
      />
    </Container>
  );
};

export default OrderBlotter;
