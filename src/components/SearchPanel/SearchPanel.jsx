import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Grid } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import Autocomplete from "@material-ui/lab/Autocomplete";

const useStyles = makeStyles({
  containerInactive: {
    // transition: "background-color 0.2s ease-in-out, width 0.2s ease-in-out",
    width: '92%',
    margin: '10px auto',
    padding: "0 7px",
        height: 35,
    alignItems: "center",
    "&:hover": {
      transition: "unset",
      backgroundColor: "#e6e9ef",
      cursor: "pointer",
    },
  },
  containerActive: {
    // transition: "background-color 0.2s ease-in-out, width 0.2s ease-in-out",
    alignItems: "center",
    borderBottom: "1px #e2e2e2 solid",
    backgroundColor: "#ffff",
    borderRadius: 3,
    color: "white",
    height: 35,
    width: '92%',
    margin: '10px auto',
    padding: "0 7px",
  },
  rootActive: {
    transition: "all 0.2s ease-in-out",
    background: "#fff",
    height: "100%",
    width: "80%",
    borderRadius: "5px",
    " &.MuiOutlinedInput-notchedOutline": {
      border: "none !important",
    },
  },
  rootInactive: {
    transition: "all 0.2s ease-in-out",
    width: "45%",
  },
  inputRoot: {
    width: "90%",
    borderRadius: "5px",
    "@media screen and (max-width: 991px)": {
      borderRadius: 0,
    },
  },
  outlined: {
    top: "-10px",
  },
  TextInput: {
    color: "black",
  },
  paper: {
    maxHeight: 381,
    width: 386,
    overflow: "auto",
    "@media screen and (max-width: 768px)": {
      overflow: "auto !important",
    },
    "@media screen and (max-width: 1980px)": {
      overflow: "hidden",
    },
    "@media screen and (max-width: 400px)": {
      width: 290,
      maxHeight: 215,
      height: "100%",
    },
  },
  popper: {
    top: "15px !important",
    "@media screen and (max-width: 400px)": {
      top: "1px !important",
    },
  },
  groupUl: {
    borderBottom: "0.5px solid #E8E8E8",
    margin: "0 auto",
    width: "86%",
    paddingBottom: 10,
    "& .MuiAutocomplete-option": {
      paddingLeft: 0,
    },
  },
  optionsStyle: {
    margin: 10,
  },
  groupLabel: {
    height: 38,
    paddingLeft: 26,
    color: "#787878",
    fontFamily: "Lato",
    fontSize: 12,
    letterSpacing: 0,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  listBox: {
    padding: "0px 0px",
  },
  endAdornment: {
    display: "none",
  },
  textField: {
    "& .MuiInput-root": {
      height: "100%",
      textAlign: "start",
      paddingLeft: 12,
      paddingRight: '0 !important',
      fontSize: 13,
      "& input": {
        padding: '10px 0px !important',

      },
      "&:focus": {
        backgroundColor: "transparent !important",
      },
      "&:before": {
        borderBottom: "none !important",
        "&:hover": {
          borderBottom: "none",
        },
      },
      "&:after": {
        borderBottom: "none !important",
      },
      "& .MuiSelect-select:focus": {
        backgroundColor: "transparent !important",
      },
    },
  },
  iconColor: {
    color: "#aaacae",
  },
  input: {
    "&::placeholder": {
      color: "#aaacae",
    },
  },
});
export const SearchPanel = () => {
  const [searchValue, setSearchValue] = useState("");
  const [isSearching, setSearchPanel] = useState(false);

  const top100Films = [
    { title: "Kalkhoff Endeavour 8 - 2019 - 28 Zoll" },
    { title: "Kompaktzelt für eine Person" },
    { title: "PG Bugatti Bike" },
    { title: "Trainer Kite REACT 2.5m SLE" },
    { title: "F2 Inflatable SUP-Board" },
    { title: "Rennsportrodel-1-sitze" },
    { title: "Apex wall 322" },
    { title: "IronBaltic Cargo Sled" },
    { title: "Jackson Figure Skates Mystique Ladies JS1490" },
  ];
  const finder = (label) => {
    let str = searchValue;
    const template = new RegExp(`${str}`, "ig");
    const newString = label.replace(template, (match) => {
      return `<b>${match}</b>`;
    });
    return newString;
  };
  const classes = useStyles();
  return (
    <Grid
      container
      className={
        isSearching ? classes.containerActive : classes.containerInactive
      }
      onBlur={() =>  setSearchPanel(false)}
      onClick={() => setSearchPanel(!isSearching)}
    >
      <SearchIcon
        fontSize="default"
        color="primary"
        classes={{ colorPrimary: classes.iconColor }}
      />
      <Autocomplete
        // inputValue={searchValue}
        options={top100Films}
        classes={{
          root: isSearching ? classes.rootActive : classes.rootInactive,
          inputRoot: classes.inputRoot,
          input: classes.TextInput,
          paper: classes.paper,
          popper: classes.popper,
          groupUl: classes.groupUl,
          groupLabel: classes.groupLabel,
          listbox: classes.listBox,
          endAdornment: classes.endAdornment,
        }}
        getOptionLabel={(option) => option.title}
        renderInput={(params) => {
          params.InputProps = {
            ...params.InputProps,
            classes: { input: classes.input },
          };
          return (
            <TextField
              className={classes.textField}
              {...params}
              variant="standard"
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Search by order ID or name or gear"
            />
          );
        }}
        renderOption={(option) => {
          return (
            <p
              dangerouslySetInnerHTML={{ __html: finder(option.title) }}
              className={classes.optionsStyle}
            ></p>
          );
        }}
      />
    </Grid>
  );
};
export default SearchPanel;
