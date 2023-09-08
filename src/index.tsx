import ReactDOM from "react-dom/client";

import App from "./App";
import Modal from "react-modal";

import "./index.css";

import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "./redux/store";
import { store } from "./redux/store";
import { ScrollToTop } from "./components/ServiceComponents/ScrollToTop";
import { Suspense } from "react";
import { Loader } from "./components/Preloader/Loader";

Modal.setAppElement("#root");

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Suspense fallback={<Loader />}>
        <BrowserRouter>
          <App />
          <ScrollToTop />
        </BrowserRouter>
      </Suspense>
    </PersistGate>
  </Provider>
);
