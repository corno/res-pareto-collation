import { API } from "./api.generated"
import { $$ as ilocaleIsABeforeB } from "./implementations/localeIsABeforeB.native"

export const $api: API = {
    'localeIsABeforeB': ilocaleIsABeforeB,
}