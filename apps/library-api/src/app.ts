import express from "express";
import cors from "cors";
import routes from "./routes";

const app = express();
app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:3001",
    methods: ["GET", "POST", "DELETE", "PUT"],
  })
);
app.use(routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
