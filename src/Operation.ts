import {Argument} from "./Argument";
import {Response} from "./Response";

export interface Operation {
    arguments?: Map<string, Argument>
    authorization?: boolean
    description?: string
    method?: string
    path?: string
    return?: Response
    security?: Array<string>
    stability?: number
    tags?: Array<string>
    throws?: Array<Response>
}

