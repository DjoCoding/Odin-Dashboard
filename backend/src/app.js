import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import cookieParser from "cookie-parser"

import db from "./db/db.js"
import authRouter from "./routes/auth.route.js"
import userRouter from "./routes/user.route.js"
import projectRouter from "./routes/project.route.js"
import errorHandler from "./middlewares/errorHandler.js"

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(cookieParser());

app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);
app.use("/api/projects", projectRouter);

app.use(errorHandler);

dotenv.config();

db.connect().then(() => {
    console.log(`db connected`);
    const PORT = process.env.PORT;
    app.listen(PORT, () => {
        console.log(`Application running on port ${PORT}`);
    })
})
.catch((err) => {
    console.log(`DB ERROR: ${err}`);
    process.exit(1);
})
