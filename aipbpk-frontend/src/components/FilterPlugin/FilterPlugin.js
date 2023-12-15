/*!

=========================================================
* Black Dashboard React v1.2.2
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import { Button, Dropdown, DropdownToggle, Badge } from "reactstrap";
import { ThemeContext, themes } from "contexts/ThemeContext";
import { backgroundColors } from "contexts/BackgroundColorContext";
import "./style.css"

import DrawerExample from "./drawerExample";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const components = {
  Drawer: {
    variants: {
      alwaysOpen: {
        parts: ["dialog, dialogContainer"],
        dialog: {
          pointerEvents: "auto"
        },
        dialogContainer: {
          pointerEvents: "none"
        }
      }
    }
  }
};

const theme = extendTheme({
  components
});

function FilterPlugin(props) {
  const [dropDownIsOpen, setdropDownIsOpen] = React.useState(false);
  const handleClick = () => {
    setdropDownIsOpen(!dropDownIsOpen);
  };
  return (
    <div className="filter-plugin">
          
          <ChakraProvider theme={theme}>
      <div>
        <DrawerExample />
      </div>
    </ChakraProvider>
    </div>
  );
}

export default FilterPlugin;
