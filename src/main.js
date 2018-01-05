import { app } from "hyperapp"

import { state, actions, view } from "./app"

export const main = app(state, actions, view, document.body)

main.articles.fetch({ offset: 0, limit: 10 })
main.tags.fetch()