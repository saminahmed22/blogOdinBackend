import { query } from "express-validator";

export const validateSearch = [query("query").trim()];
