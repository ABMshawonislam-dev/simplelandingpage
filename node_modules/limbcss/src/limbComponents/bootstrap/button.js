let buttons = (theme) => {
  return {
    ".b-btn": {
      padding: theme("padding.2"),
      borderRadius: theme("borderRadius.md"),
      transition: theme("transitionDuration.300"),
      display: "inline-block",
      cursor: theme("cursor.pointer"),
    },
    ".b-btn-primary": {
      background: "#0d6efd",
      color: theme("colors.white"),
      "&:hover": {
        background: "#0B5ED7",
      },
    },
    ".b-btn-secondary": {
      background: "#6c757d",
      color: theme("colors.white"),
      "&:hover": {
        background: "#5c636a",
      },
    },
    ".b-btn-success": {
      background: "#198754",
      color: theme("colors.white"),
      "&:hover": {
        background: "#157347",
      },
    },
    ".b-btn-danger": {
      background: "#dc3545",
      color: theme("colors.white"),
      "&:hover": {
        background: "#bb2d3b",
      },
    },
    ".b-btn-warning": {
      background: "#ffca2c",
      color: theme("colors.black"),
      "&:hover": {
        background: "#ffc107",
      },
    },
    ".b-btn-info": {
      background: "#0dcaf0",
      color: theme("colors.black"),
      "&:hover": {
        background: "#31d2f2",
      },
    },
    ".b-btn-light": {
      background: "#f8f9fa",
      color: theme("colors.black"),
      "&:hover": {
        background: "#d3d4d5",
      },
    },
    ".b-btn-dark": {
      background: "#212529",
      color: theme("colors.white"),
      "&:hover": {
        background: "#424649",
      },
    },

    // outline button

    ".b-btn-outline-primary": {
      border: "1px solid #0d6efd",
      color: "#0d6efd",
      "&:hover": {
        background: "#0d6efd",
        color: theme("colors.white"),
      },
    },
    ".b-btn-outline-secondary": {
      border: "1px solid #6c757d",
      color: "#6c757d",
      "&:hover": {
        background: "#6c757d",
        color: theme("colors.white"),
      },
    },
    ".b-btn-outline-success": {
      border: "1px solid #198754",
      color: "#198754",
      "&:hover": {
        background: "#198754",
        color: theme("colors.white"),
      },
    },
    ".b-btn-outline-danger": {
      border: "1px solid #dc3545",
      color: "#dc3545",
      "&:hover": {
        background: "#dc3545",
        color: theme("colors.white"),
      },
    },
    ".b-btn-outline-warning": {
      border: "1px solid #ffca2c",
      color: "#ffca2c",
      "&:hover": {
        background: "#ffca2c",
        color: theme("colors.black"),
      },
    },
    ".b-btn-outline-info": {
      border: "1px solid #0dcaf0",
      color: "#0dcaf0",
      "&:hover": {
        background: "#31d2f2",
        color: theme("colors.black"),
      },
    },
    ".b-btn-outline-light": {
      border: "1px solid #f8f9fa",
      color: "#f8f9fa",
      "&:hover": {
        background: "#d3d4d5",
        color: theme("colors.black"),
      },
    },
    ".b-btn-outline-dark": {
      border: "1px solid #212529",
      color: "#212529",
      "&:hover": {
        background: "#424649",
        color: theme("colors.white"),
      },
    },
  };
};

module.exports = buttons;
