import React from "react";

const styles = {
    uploadContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "calc(100vh - 150px)",
        backgroundColor: "#121212",
    },
    uploadContent: {
        textAlign: "center",
        maxWidth: "500px",
        padding: "2rem",
        backgroundColor: "#1e1e1e",
        borderRadius: "10px",
        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
    },
    uploadHeading: {
        fontSize: "2.5rem",
        marginBottom: "1rem",
        color: "white",
    },
    uploadDescription: {
        fontSize: "1.2rem",
        color: "#777",
        marginBottom: "2rem",
    },
};

const ErrorPage = () => {
    return (
        <div style={styles.uploadContainer}>
            <div style={styles.uploadContent}>
                <h1 style={styles.uploadHeading}>Error 404</h1>
                <p style={styles.uploadDescription}>
                    Page not found
                </p>
            </div>
        </div>
    );
};

export default ErrorPage;
