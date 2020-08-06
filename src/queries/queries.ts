import { available, queryShallow } from "avenger";
import { getBusinessesList } from "../api/api";

export const businessListQuery = queryShallow(
    getBusinessesList,
    available
)