import type {Security} from "./Security";

/**
 * Describes API key authentication passed via a header or query parameter.
 */
export interface SecurityApiKey extends Security {
    type: "apiKey"
    in?: string
    name?: string
}

