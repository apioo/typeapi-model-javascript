/**
 * Represents a base type. Every type extends from this common type and shares the defined properties
 */
export interface CommonType {
    description?: string
    type?: string
    nullable?: boolean
    deprecated?: boolean
    readonly?: boolean
}
