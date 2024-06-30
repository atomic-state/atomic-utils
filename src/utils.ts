export {
  BrowserOnly,
  RenderList,
  useBoolean,
  useObject,
  useSecondRender,
  useWindowSize,
  WithLayout,
  ClientOnly,
} from "react-kuh"

export {
  useStorage,
  createPersistence,
  useStorageItem,
  session,
  storage,
} from "atomic-state"

export {
  isDefined,
  notNull,
  serialize,
  isFunction,
  isFormData,
  getMiliseconds,
  jsonCompare,
} from "http-react"

export function deserialize<T = any>(
  text: string,
  reviver?: (this: any, key: string, value: any) => any
) {
  return JSON.parse(text, reviver) as T
}

export function removeUndefinedProperties(obj: any) {
  return JSON.parse(JSON.stringify(obj))
}

export function omitProperties<T extends object, K extends keyof T>(
  obj: T,
  ...properties: K[]
): Omit<T, K> {
  const newObj = {} as Omit<T, K> // Initialize with the correct omitted type

  for (const prop in obj) {
    // @ts-expect-error
    if (!properties.includes(prop as K)) {
      // Safe type check
      // @ts-expect-error
      newObj[prop as keyof Omit<T, K>] = obj[prop] // Assign with the correct type
    }
  }

  return newObj
}

export { useIsomorphicLayoutEffect } from "http-react"
