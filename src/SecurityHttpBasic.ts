import type {Security} from "./Security";

/**
 * Describes HTTP Basic authentication, requiring a base64-encoded username and password.
 */
export interface SecurityHttpBasic extends Security {
    type: "httpBasic"
}

