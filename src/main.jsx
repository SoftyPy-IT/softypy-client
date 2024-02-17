import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Route.jsx";
import AuthProvider from "./contexts/AuthProvider";
import { QueryClient, QueryClientProvider, } from "react-query";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
       <Provider store={store}>
       <RouterProvider router={router} />
       </Provider>
      </AuthProvider>
    </QueryClientProvider>
    
  </React.StrictMode>
);
