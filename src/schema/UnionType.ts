import {Discriminator} from "./Discriminator";
import {BooleanType} from "./BooleanType";
import {NumberType} from "./NumberType";
import {IntegerType} from "./IntegerType";
import {StringType} from "./StringType";
import {ReferenceType} from "./ReferenceType";

/**
 * Represents an union type. An union type can contain one of the provided types
 */
export interface UnionType {
    description?: string
    discriminator?: Discriminator
    oneOf?: Array<BooleanType | NumberType | IntegerType | StringType | ReferenceType>
}
