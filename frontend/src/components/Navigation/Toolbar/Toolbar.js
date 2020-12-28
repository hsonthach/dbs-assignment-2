import React from "react";

import NavigationItems from "../NavigationItems/NavigationItems";

const toolbar = (props) => (
  <header className="toolbar">
    <nav className="toolbar__nav">
      <NavigationItems routes={props.routes} />
    </nav>
  </header>
);

export default toolbar;
