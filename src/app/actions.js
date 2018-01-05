import { location as router } from "@hyperapp/router"

import { createAdapter } from "./store"

const actions = {
  location: router.actions,

  articles: createAdapter("articles", {
    setPage(number) {
      return (state, actions) => {
        actions.fetch({ offset: 10*number, limit: 10, tag: state.tag })
      }
    },

    setTag(tag) {
      return (state, actions) => {
        actions.fetch({ offset: 0, limit: 10, tag })
      }
    }
  }),

  tags: createAdapter("tags")
}

export { actions as default }