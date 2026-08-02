import type {TypeSchema} from "typeschema-model";
import type {Operation} from "./Operation";
import type {Security} from "./Security";
import type {SecurityApiKey} from "./SecurityApiKey";
import type {SecurityHttpBasic} from "./SecurityHttpBasic";
import type {SecurityHttpBearer} from "./SecurityHttpBearer";
import type {SecurityOAuth} from "./SecurityOAuth";

/**
 * The root specification object of TypeAPI.
 */
export interface TypeAPI extends TypeSchema {
    baseUrl?: string
    operations?: Record<string, Operation>
    security?: SecurityApiKey|SecurityHttpBasic|SecurityHttpBearer|SecurityOAuth
}

