import {Response} from "./Response";
import {Argument} from "./Argument";
export interface Operation {
    method?: string
    path?: string
    return?: Response
    arguments?: Record<string, Argument>
    throws?: Array<Response>
    description?: string
    stability?: number
    security?: Array<string>
    authorization?: boolean
    tags?: Array<string>
}
