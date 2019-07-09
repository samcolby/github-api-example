import React, { useEffect, useState } from "react";

import Grid from "./components/Grid";
import QuickSearch from "./components/QuickSearch";
import SelectUser from "./components/SelectUser";
import UserDetails from "./components/UserDetails";

import { getUserData, getRepos } from "./github-api";

// Set up vars for ag_grid
let gridApi;
let gridColumnApi;

const onChangeQuickSearchText = query => {
  if (gridApi) {
    if (query.length > 3) {
      gridApi.setQuickFilter(query);
    } else {
      gridApi.setQuickFilter("");
    }
  }
};

const onGridReady = params => {
  gridApi = params.api;
  gridColumnApi = params.columnApi;
  let allColumnIds = [];
  gridColumnApi.getAllColumns().forEach(function(column) {
    allColumnIds.push(column.getColId());
  });
  gridColumnApi.autoSizeColumns(allColumnIds);
};

function App() {
  const [username, setUsername] = useState("samcolby");
  const [data, setData] = useState();
  const [userData, setUserData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const repos = getRepos(username);
    const userData = getUserData(username);
    Promise.all([repos, userData]).then(([data, userData]) => {
      setData(data);
      setUserData(userData);
      setIsLoading(false);
    });
  }, [username]);

  const onChangeUser = user => setUsername(user);

  if (isLoading) {
    return <div>Hey I'm loading</div>;
  } else {
    return (
      <div
        className="ag-theme-material"
        style={{
          height: "500px",
          width: "100%"
        }}
      >
        <SelectUser onChangeUser={onChangeUser} />

        <h1>Displaying github repositories for {username}</h1>
        <UserDetails data={userData} />

        <QuickSearch onChangeText={onChangeQuickSearchText} />

        <Grid data={data} onGridReady={onGridReady} />
      </div>
    );
  }
}

export default App;
