import {ReferenceType} from "./ReferenceType";

/**
 * Represents an intersection type
 */
export interface IntersectionType {
    description?: string
    allOf?: Array<ReferenceType>
}
