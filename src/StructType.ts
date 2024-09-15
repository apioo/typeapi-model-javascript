import {CommonType} from "./CommonType";
import {MapType} from "./MapType";
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
 * Represents a struct type. A struct type contains a fix set of defined properties
 */
export interface StructType extends CommonType {
    $final?: boolean
    $extends?: string
    type?: string
    properties?: Record<string, MapType | ArrayType | BooleanType | NumberType | IntegerType | StringType | AnyType | IntersectionType | UnionType | ReferenceType | GenericType>
    required?: Array<string>
}
