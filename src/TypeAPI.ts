import {TypeSchema} from "./typeschema/TypeSchema";
import {Operation} from "./Operation";
import {Security} from "./Security";

/**
 * The TypeAPI Root
 */
export interface TypeAPI extends TypeSchema {
    baseUrl?: string
    operations?: Map<string, Operation>
    security?: Security
}

