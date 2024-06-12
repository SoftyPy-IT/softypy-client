import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Route.jsx";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store.js";
import { Toaster } from "sonner";
const queryClient = new QueryClient();
import { PersistGate } from "redux-persist/integration/react";
import Providers from "./lib/Theme/Providers.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Providers>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <RouterProvider router={router} />
            <Toaster position="bottom-right" richColors />
          </PersistGate>
        </Provider>
      </QueryClientProvider>
    </Providers>
  </React.StrictMode>
);
