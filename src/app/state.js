import { location as router } from "@hyperapp/router"

import { createStore } from "./store"

const state = {
  location: router.state,

  articles: createStore("articles", {
    articlesCount: 0,
    offset: 0,
    limit: 0
  }),

  tags: createStore("tags")
}

export { state as default }
