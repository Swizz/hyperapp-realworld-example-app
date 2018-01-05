import { h as jsx } from "hyperapp"
import { Link } from "@hyperapp/router"


function ArticlePreview(article) {
  return (
    <div class="article-preview">
      <div class="article-meta">
        <Link to="/profile/ericsimons"><img src={article.author.image} /></Link>
        <div class="info">
          <Link to="/profile/ericsimons" class="author">{article.author.username}</Link>
          <span class="date">{new Date(article.updatedAt).toUTCString()}</span>
        </div>
        <button class="btn btn-outline-primary btn-sm pull-xs-right">
          <i class="ion-heart"></i> {article.favoritesCount}
        </button>
      </div>
      <a href="" class="preview-link">
        <h1>{article.title}</h1>
        <p>{article.description}</p>
        <span>Read more...</span>
        <ul class="tag-list">
          {article.tagList.map(tag =>
            <li class="tag-default tag-pill tag-outline">{tag}</li>
          )}
        </ul>
      </a>
    </div>
  )
}

function Home(state, actions) {
  return (
    <div class="home-page">

      <div class="banner">
        <div class="container">
          <h1 class="logo-font">conduit</h1>
          <p>A place to share your knowledge.</p>
        </div>
      </div>

      <div class="container page">
        <div class="row">

          <div class="col-md-9">
            <div class="feed-toggle">
              <ul class="nav nav-pills outline-active">
                {/* <li class="nav-item">
                  <a class="nav-link disabled" href="">Your Feed</a>
                </li> */}
                <li class="nav-item">
                  <a class={`nav-link ${!state.articles.tag && "active"}`} href="#" onclick={() => actions.articles.setTag("")}>Global Feed</a>
                </li>
                {state.articles.tag &&
                  <li class="nav-item">
                    <a class="nav-link active">
                      <i class="ion-pound"></i> {state.articles.tag}
                    </a>
                  </li>}
              </ul>
            </div>

            {state.articles.articles.map(article =>
              <ArticlePreview {...article}/>
            )}

          <nav>
            <ul class="pagination">
              {Array.from({ length: state.articles.articlesCount / 10 }).map((v,i) =>
                <li class={`page-item ${(state.articles.offset+state.articles.limit)/10 === i+1 && "active"}`}>
                  <a class="page-link" href="#" onclick={() => actions.articles.setPage(i)}>{i+1}</a>
                </li>
              )}
            </ul>
          </nav>

          </div>

          <div class="col-md-3">
            <div class="sidebar">
              <p>Popular Tags</p>

              <div class="tag-list">
                {state.tags.tags.map(tag =>
                  <a href="#" class="tag-pill tag-default" onclick={() => actions.articles.setTag(tag)}>{tag}</a>
                )}
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  )
}

export { Home as default }
