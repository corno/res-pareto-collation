import { API } from "./definition/api.generated"
import { $$ as ilocaleIsABeforeB } from "./implementations/localeIsABeforeB.native"

export const $a: API = {
    'localeIsABeforeB': ilocaleIsABeforeB,
}