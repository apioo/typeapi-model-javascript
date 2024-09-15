export interface Security {
    type?: string
    name?: string
    in?: string
    tokenUrl?: string
    authorizationUrl?: string
    scopes?: Array<string>
}
