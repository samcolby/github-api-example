import React, { memo } from "react";
import PropTypes from "prop-types";

import { AgGridReact } from "ag-grid-react";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-material.css";

// Configuration for grid columns
const defaultColumnDefs = {
  filter: true,
  resizable: true,
  sortable: true
};

const columnDefs = [
  {
    checkboxSelection: true,
    field: "name",
    headerName: "Name"
  },
  {
    field: "description",
    headerName: "Description"
  },
  {
    field: "html_url",
    headerName: "Url"
  },
  {
    field: "fork",
    headerName: "Fork"
  },
  {
    field: "created_at",
    headerName: "Created"
  },
  {
    field: "updated_at",
    headerName: "Updated"
  },
  {
    field: "stargazers_count",
    headerName: "No of Stars"
  },
  {
    field: "language",
    headerName: "Language"
  },
  {
    field: "forks",
    headerName: "No of forks"
  },
  {
    field: "license.key",
    headerName: "License type"
  }
];

function Grid({ data, onGridReady }) {
  return (
    <AgGridReact
      columnDefs={columnDefs}
      defaultColDef={defaultColumnDefs}
      onGridReady={onGridReady}
      rowData={data}
      rowSelection="multiple"
    />
  );
}

Grid.propTypes = {
  data: PropTypes.object,
  onGridReady: PropTypes.func.isRequired
};

export default memo(Grid);
