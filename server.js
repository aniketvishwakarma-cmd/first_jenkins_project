const express = require("express");
require("dotenv").config();

const sequelize = require("./src/config/db");
require("./src/models/student.model");

const studentRoutes = require("./src/routes/student.routes");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "Student CRUD API is running"
    });
});

app.use("/api/students", studentRoutes);

const PORT = process.env.PORT || 3000;

async function startServer() {
    try {
        await sequelize.authenticate();

        console.log("PostgreSQL connected successfully");

        await sequelize.sync();

        console.log("Database synchronized");

        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    } catch (error) {
        console.error("Unable to start server:", error);
    }
}

startServer();