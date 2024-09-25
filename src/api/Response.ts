import {ReferenceType} from "./../schema/ReferenceType";
export interface Response {
    code?: number
    schema?: ReferenceType
    contentType?: string
}
