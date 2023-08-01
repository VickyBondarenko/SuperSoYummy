import ReactDOM from "react-dom/client";

import App from "./App";

import "./index.css";

import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "./redux/store";
import { store } from "./redux/store";

import { ScrollToTop } from "./components/ServiceComponents/ScrollToTop.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>

    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <App />
         <ScrollToTop />
      </BrowserRouter>
    </PersistGate>

  </Provider>
);
