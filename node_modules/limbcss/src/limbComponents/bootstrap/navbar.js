let navbar = (theme) => {
  return {
    a: {
      cursor: theme("cursor.pointer"),
    },
    ".navbar": {
      padding: theme("padding.2"),
      position: "relative   ",
    },
    ".navbar-container": {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",

      ul: {
        display: "flex",
        columnGap: "15px",
      },
    },
    ".dropdown-container-dekstop": {
      position: "relative",
      cursor: theme("cursor.pointer"),
      "&:hover .dropdown": {
        opacity: theme("opacity.100"),
        visibility: "visible",
      },
    },

    ".dropdown-container-mobile": {
      position: "relative",
      cursor: theme("cursor.pointer"),
    },

    ".dropdown": {
      position: "absolute",
      top: "100%",
      left: "0",
      minWidth: theme("minWidth.max"),
      padding: theme("padding.5"),
      borderRadius: theme("borderRadius.md"),
      boxShadow: theme("boxShadow.md"),
      opacity: theme("opacity.0"),
      visibility: "hidden",
      transition: theme("transitionDuration.300"),
      textAlign: "left",
    },

    ".dropdown-container-mobile:focus .dropdown": {
      opacity: theme("opacity.100"),
      visibility: "visible",
    },
    ".navbar-desktop": {
      width: theme("width.full"),
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center",
      columnGap: "15px",
    },
    ".toggle-btn": {
      display: "none",
    },
    ".toggle-btn-responsive": {
      position: "absolute",
      top: "-8px",
      right: "0",
      fontSize: theme("fontSize.2xl"),
    },
    ".navbar-responsive": {
      display: "none",
    },
    "#toggle-btn:checked ~ .navbar-responsive": {
      display: "block",
    },
  };
};

module.exports = navbar;
