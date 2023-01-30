import { API } from "./api"
import { $$ as ilocaleIsABeforeB } from "./implementations/localeIsABeforeB.native"

export const $a: API = {
    'localeIsABeforeB': ilocaleIsABeforeB,
}