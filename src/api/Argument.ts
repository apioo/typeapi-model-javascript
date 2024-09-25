import {BooleanType} from "./../schema/BooleanType";
import {NumberType} from "./../schema/NumberType";
import {IntegerType} from "./../schema/IntegerType";
import {StringType} from "./../schema/StringType";
import {ReferenceType} from "./../schema/ReferenceType";
export interface Argument {
    in?: string
    schema?: BooleanType | NumberType | IntegerType | StringType | ReferenceType
    contentType?: string
    name?: string
}
