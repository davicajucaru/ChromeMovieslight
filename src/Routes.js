import React, { useState } from "react";
import { Route, Switch } from "react-router";

import Favorites from "./components/Favorites";
import Film from "./components/Film";
import Films from "./components/Films";
import Header from "./components/Header";

const Routes = () => {
  const [value, setValue] = useState();

  const placeholder = "Search for you film by title";
  const placeholderFavorite = "Search for you film favorite by title";

  return (
    <main className="Content">
      <Switch>
        <Route path="/film/:id">
          <Header disabled="disabled" />
          <Film  />
        </Route>
        <Route path="/favorites">
          <Header
            value={value}
            setValue={setValue}
            placeholder={placeholderFavorite}
          />
          <Favorites value={value} />
        </Route>
        <Route path="/">
          <Header value={value} setValue={setValue} placeholder={placeholder} />
          <Films value={value} setValue={setValue} />
        </Route>
      </Switch>
    </main>
  );
};

export default Routes;
