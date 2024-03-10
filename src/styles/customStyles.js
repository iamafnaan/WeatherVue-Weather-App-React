export const containerStyles = {
    my: "1rem",
    minHeight: "calc(100vh - 2rem)",
    display: "grid",
    placeItems: "center",
};

export const weatherCardStyles = {
    maxWidth: "500px",
    width: "90%",
    padding: "40px",
    borderRadius: "20px",
    textAlign: "center",
    backgroundColor: "rgba(0,123,255,.3)", 
    boxShadow: "0 10px 25px rgba(0,0,0,.4)",
    transition: "all 0.3s ease-in-out",
    ":hover": {
        transform: "scale(1.05)",
    },
};


export const weatherEmojisStyles = {
    letterSpacing: "10px",
    borderTop: "1px solid #ddd",
    display: "inline-block",
    padding: "20px",
    textAlign: "center",
};
