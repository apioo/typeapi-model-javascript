import type {PropertyType} from "typeschema-model";
import type {AnyPropertyType} from "typeschema-model";
import type {ArrayPropertyType} from "typeschema-model";
import type {BooleanPropertyType} from "typeschema-model";
import type {GenericPropertyType} from "typeschema-model";
import type {IntegerPropertyType} from "typeschema-model";
import type {MapPropertyType} from "typeschema-model";
import type {NumberPropertyType} from "typeschema-model";
import type {ReferencePropertyType} from "typeschema-model";
import type {StringPropertyType} from "typeschema-model";

/**
 * Describes an argument passed to an operation.
 */
export interface Argument {
    contentType?: string
    in?: string
    name?: string
    schema?: AnyPropertyType|ArrayPropertyType|BooleanPropertyType|GenericPropertyType|IntegerPropertyType|MapPropertyType|NumberPropertyType|ReferencePropertyType|StringPropertyType
}

