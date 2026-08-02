import type {Security} from "./Security";

/**
 * Describes OAuth 2.0 authentication, defining endpoints and scopes required by the API.
 */
export interface SecurityOAuth extends Security {
    type: "oauth2"
    authorizationUrl?: string
    scopes?: Array<string>
    tokenUrl?: string
}

