import { Router } from "express";
import userRoutes from "./user";

const routes = Router({ mergeParams: true });

routes.use('/users', userRoutes);

export default routes;