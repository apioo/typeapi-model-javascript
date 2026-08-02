import type {SecurityApiKey} from "./SecurityApiKey";
import type {SecurityHttpBasic} from "./SecurityHttpBasic";
import type {SecurityHttpBearer} from "./SecurityHttpBearer";
import type {SecurityOAuth} from "./SecurityOAuth";

/**
 * Describes the authentication mechanism used by the API.
 */
export interface Security {
    type?: string
}

