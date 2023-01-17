import { API } from "./api"
import { $$ as ilocaleIsABeforeB } from "./implementations/localeIsABeforeB.p"

export * from "./api"

export const $a: API = {
    'localeIsABeforeB': ilocaleIsABeforeB,
}