import React from "react"
import ReactDOM from "react-dom/client"
import App from "routes/App"

/* Redux Provider - Store */
import { Provider } from "react-redux"
import { store } from "store"

const root = ReactDOM.createRoot(document.getElementById("root") as Element)
root.render(
  <Provider store={store}>
    <App />
  </Provider>
)
