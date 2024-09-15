import {ReferenceType} from "./ReferenceType";
export interface Response {
    code?: number
    schema?: ReferenceType
    contentType?: string
}
