export const styles = (theme) => {
  const primaryColor = theme.palette.primary.main;
  const primaryTextColor = theme.palette.primary.textColor;
  const primaryButtonColor = theme.palette.primary.buttonTextColor;
  const defaultFont = theme.defaultFont.fontFamily;
  return {
    container: {
      display: "flex",
      flexDirection: "row",
      height: "100vh",
      fontFamily: defaultFont,
    },
    firstColumnBlock: {
      width: "40%",
      alignItems: "center",
      justifyContent: "space-evenly",
      textAlign: "center",
      flexDirection: "column",
      "@media screen and (max-width: 860px) ": {
        width: "50%",
      },
      "@media screen and (max-width: 767px) ": {
        width: "100%",
        textAlign: "unset",
      },
    },
    logoBlock: {
      flexGrow: 1,
      paddingTop: 80,
      "& p": {
        fontSize: 20,
        color: primaryTextColor,
        fontWeight: 700,
        "@media screen and (max-width: 767px) ": {
          fontSize: 16
        }
      },
      "& img": {
        width: "12%",
        height: "auto",
        "@media screen and (max-width: 767px) ": {
          paddingLeft: 20,
        },
      },
      "@media screen and (max-width: 767px) ": {
        padding: "20px 0px 0px 20px",
        alignSelf: "start",
      },
    },
    formBlock: {
      padding: "2rem",
      flexGrow: 2,
      margin: "0 auto",
      display: "flex",
      flexDirection: "column",
      width: 350,
      "& h1": {
        textAlign: "start",
        color: primaryTextColor,
        fontSize: 35,
        "@media screen and (max-width: 767px) ": {
          textAlign: "center",
        },
      },
      "@media screen and (max-width: 767px) ": {
        width: "50%",
        padding: "0 0 2rem",
      },
      "@media screen and (max-width: 600px) ": {
        width: "70%",
      },
      "@media screen and (max-width: 420px) ": {
        width: "80%",
      },
    },
    imgBlock: {
      width: "60%",
      height: "100vh",
      "& img": {
        height: "100%",
        width: "100%",
        objectFit: "cover",
      },
      "@media screen and (max-width: 860px) ": {
        width: "50%",
      },
      "@media screen and (max-width: 767px) ": {
        width: "100%",
        height: 'unset'
      },
      // backgroundImage: "url('/static/media/login-pic_bright.37115439.png')",
      // backgroundSize: "cover",
    },
    textField: {
      border: "1px #d9e3f9 solid",
      borderRadius: 8,
      margin: "10px 0px",
      height: 55,
      backgroundColor: "#f5f8fd",
      "& .MuiOutlinedInput-root": {
        "& fieldset": {
          borderColor: "transparent",
        },
        "&:hover fieldset": {
          borderColor: "#d9e3f9",
        },
        "&.Mui-focused fieldset": {
          borderColor: "#d9e3f9",
        },
      },
      "& .MuiInput-root": {
        height: "100%",
        textAlign: "start",
        paddingLeft: 12,
        borderColor: "#d9e3f9",
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
    buttonSignIn: {
      borderRadius: 8,
      width: "100%",
      fontSize: "1em",
      backgroundColor: primaryColor,
      color: primaryButtonColor,
      fontWeight: 700,
      height: 55,
      marginTop: 20,
      textTransform: "capitalize",
      "&:hover": {
        backgroundColor: '#29ab77'
      }
    },
  };
};
