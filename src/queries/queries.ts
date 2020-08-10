import { available, queryShallow } from "avenger";
import { getBusinessesList, getBusinessesDetails } from "../api/api";

export const businessListQuery = queryShallow(
    getBusinessesList,
    available
)

export const businessDetailsQuery = queryShallow(
    getBusinessesDetails,
    available
)