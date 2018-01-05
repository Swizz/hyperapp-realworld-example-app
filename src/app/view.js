import { h as jsx } from "hyperapp"
import { Link, Switch, Route, Redirect } from "@hyperapp/router"

import { Home } from "./routes"

function NavBar({ state }) {
  const activeFor = route => state.location.pathname === route && "active"

  return (
    <nav class="navbar navbar-light">
      <div class="container">
        <Link class="navbar-brand" to="/">conduit</Link>
        <ul class="nav navbar-nav pull-xs-right">
          <li class="nav-item">
            <Link class={`nav-link ${activeFor("/") || activeFor("/home")}`} to="/home">Home</Link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="">
              Sign in
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="">
              Sign up
            </a>
          </li>
          {/* <li class="nav-item">
            <a class="nav-link" href="">
              <i class="ion-compose"></i>&nbsp;New Post
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="">
              <i class="ion-gear-a"></i>&nbsp;Settings
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="">Sign up</a>
          </li> */}
        </ul>
      </div>
    </nav>
  )
}

function Footer() {
  return (
    <footer>
      <div class="container">
        <Link class="logo-font" to="/">conduit</Link>
        <span class="attribution">
          An interactive learning project from <a href="https://thinkster.io">
          Thinkster</a>. Code &amp; design licensed under MIT.
        </span>
      </div>
    </footer>
  )
}

function view(state, actions) {
  console.table(state)
  return (
    <app>
      <NavBar state={state}/>
      <Switch>
        <Route path="/" render={() => <Redirect to="/home"/>}/>
        <Route path="/home" render={() => Home(state, actions)}/>
      </Switch>
      <Footer/>
    </app>
  )
}

export { view as default }
