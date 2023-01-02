//express is a lightweight web framework used to create http request 
import express from "express"
import cors from "cors"
import reviews from "./api/reviews.route.js"

const app = express()

app.use(cors())
app.use =(express.json())


//for this url we're gonna use the file mention above (./api/reviews.route.js)
app.use("/api/v1/reviews",reviews)
app.use("*",(req,res) => res.status(404).json({error:"404 n0t found"}))

export default app