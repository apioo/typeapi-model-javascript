import {TypeSchema} from "./../schema/TypeSchema";
import {Security} from "./Security";
import {Operation} from "./Operation";

/**
 * The TypeApi Root
 */
export interface TypeApi extends TypeSchema {
    baseUrl?: string
    security?: Security
    operations?: Record<string, Operation>
}
