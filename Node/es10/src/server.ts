import express from "express";
import "express-async-errors";
import morgan from "morgan";
const app = express();
const port = 3000;
type Planet = {
    id: number,
    name: string,
  };

  type Planets = Planet[];

  let planets: Planets = [
    {
      id: 1,
      name: "Earth",
    },
    {
      id: 2,
      name: "Mars",
    },
  ];
  
app.use(morgan("dev"));
app.get("/", (req, res) => {
    res.status(200).json({ msg: "Hello World!" });
});
app.listen(port, () => {
    console.log(`listening on port http://localhost:${port}`);
});
