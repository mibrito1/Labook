import { Request, Response } from "express";

export class UserController {
    constructor() { }
    public oiMirian = async (req: Request, res: Response) => {
        res.send("Oi, Chegou a Mirian")
    }
}