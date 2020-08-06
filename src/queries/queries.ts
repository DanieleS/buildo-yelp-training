import { queryStrict, available } from "avenger";
import { getBusinessesList } from "../api/api";

export const businessListQuery = queryStrict(
    getBusinessesList,
    available
)