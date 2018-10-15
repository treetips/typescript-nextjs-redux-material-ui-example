/**
 * Enum like interface
 */
export interface IEnum<T> {
  equals(t: T): boolean
  toString(): string
}
