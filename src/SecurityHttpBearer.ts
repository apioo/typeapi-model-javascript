import type {Security} from "./Security";

/**
 * Describes HTTP Bearer authentication, typically using a bearer token (e.g., JWT).
 */
export interface SecurityHttpBearer extends Security {
    type: "httpBearer"
}

