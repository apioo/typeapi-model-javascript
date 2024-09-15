import {ScalarType} from "./ScalarType";

/**
 * Represents a number type
 */
export interface NumberType extends ScalarType {
    type?: string
    maximum?: number
    minimum?: number
}
