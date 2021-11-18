import { Router, Request, NextFunction } from "express";


//get     /users
const usersRoute = Router();
usersRoute.get("/users", req: Router, res: Request, next: NextFunction) => {
    const users = [{username:'Marcos'}];
    res.status(200).send({users});
});

export default usersRoute;


//get     /users/:uuid
//post    /users
//put     /users/:uuid
//delete  /users/:uuid
