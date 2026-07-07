import { Switch, Route, Router as WouterRouter } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Game from "@/pages/game";

// Get base URL from environment variable or default to '/'
const routerBase = import.meta.env.BASE_URL === "/" ? "" : import.meta.env.BASE_URL.replace(/\/$/, "");

function AppRouter() {
  return (
    <WouterRouter base={routerBase}>
      <Switch>
        <Route path="/" component={Game} />
        <Route component={NotFound} />
      </Switch>
    </WouterRouter>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppRouter />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;