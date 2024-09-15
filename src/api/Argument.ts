import {BooleanType} from "./BooleanType";
import {NumberType} from "./NumberType";
import {IntegerType} from "./IntegerType";
import {StringType} from "./StringType";
import {ReferenceType} from "./ReferenceType";
export interface Argument {
    in?: string
    schema?: BooleanType | NumberType | IntegerType | StringType | ReferenceType
    contentType?: string
    name?: string
}
