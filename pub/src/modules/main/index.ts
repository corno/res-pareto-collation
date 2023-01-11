import { API } from "./api"
import { ilocaleIsABeforeB } from "./implementations/localeIsABeforeB.p"

export * from "./api"

export const $a: API = {
    "localeIsABeforeB": ilocaleIsABeforeB,
}