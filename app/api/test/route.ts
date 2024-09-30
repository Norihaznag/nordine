import { NextApiRequest , NextApiResponse } from "next";

export async function GET(req : NextApiRequest , res : NextApiResponse) {
    if (req.method == "GET") {
        res.json('wwww')
    }
}