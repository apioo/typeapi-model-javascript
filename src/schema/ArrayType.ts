import {CommonType} from "./CommonType";
import {BooleanType} from "./BooleanType";
import {NumberType} from "./NumberType";
import {IntegerType} from "./IntegerType";
import {StringType} from "./StringType";
import {AnyType} from "./AnyType";
import {ReferenceType} from "./ReferenceType";
import {GenericType} from "./GenericType";

/**
 * Represents an array type. An array type contains an ordered list of a specific type
 */
export interface ArrayType extends CommonType {
    type?: string
    items?: BooleanType | NumberType | IntegerType | StringType | AnyType | ReferenceType | GenericType
    maxItems?: number
    minItems?: number
}
