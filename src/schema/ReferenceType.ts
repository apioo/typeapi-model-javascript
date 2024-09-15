/**
 * Represents a reference type. A reference type points to a specific type at the definitions map
 */
export interface ReferenceType {
    $ref?: string
    $template?: Record<string, string>
}
