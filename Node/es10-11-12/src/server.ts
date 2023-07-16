import express from "express";
import "express-async-errors";
import morgan from "morgan";
import { getAll,getOnebyId,create,updateById,deleteById } from "./controllers/planets";
const app = express();
const port = 3000;

app.use(morgan("dev"));
app.use(express.json())

app.get("/api/planets", getAll);

app.get("/api/planets/:id", getOnebyId);

app.post("/api/planets/", create);

app.put("/api/planets/:id",updateById);

app.delete("/api/planets/:id", deleteById );

app.listen(port, () => {
    console.log(`listening on port http://localhost:${port}`);
});
