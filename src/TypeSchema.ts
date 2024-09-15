import {StructType} from "./StructType";
import {MapType} from "./MapType";
import {ReferenceType} from "./ReferenceType";

/**
 * The root TypeSchema
 */
export interface TypeSchema {
    $import?: Record<string, string>
    definitions?: Record<string, StructType | MapType | ReferenceType>
    $ref?: string
}
