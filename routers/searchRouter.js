import { Router } from "express";

export const searchRouter = Router();

import { getSearchItems } from "../controllers/searchController.js";

searchRouter.get("/:searchString", getSearchItems);
