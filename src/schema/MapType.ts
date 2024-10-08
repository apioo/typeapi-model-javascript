import {CommonType} from "./CommonType";
import {ArrayType} from "./ArrayType";
import {BooleanType} from "./BooleanType";
import {NumberType} from "./NumberType";
import {IntegerType} from "./IntegerType";
import {StringType} from "./StringType";
import {AnyType} from "./AnyType";
import {IntersectionType} from "./IntersectionType";
import {UnionType} from "./UnionType";
import {ReferenceType} from "./ReferenceType";
import {GenericType} from "./GenericType";

/**
 * Represents a map type. A map type contains variable key value entries of a specific type
 */
export interface MapType extends CommonType {
    type?: string
    additionalProperties?: ArrayType | BooleanType | NumberType | IntegerType | StringType | AnyType | IntersectionType | UnionType | ReferenceType | GenericType
    maxProperties?: number
    minProperties?: number
}
