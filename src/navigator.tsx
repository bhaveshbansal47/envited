import { Route, Routes as RouteSwitch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { CreateEvent } from "./routes/create-event";
import { EventSummary } from "./routes/event-summary";
import { LandingPage } from "./routes/landing-page";

export const Navigation = () => {
  return (
    <BrowserRouter>
      <RouteSwitch>
        <Route path="/" element={<LandingPage />} />
        <Route path="/create-event" element={<CreateEvent />} />
        <Route path="/event-summary" element={<EventSummary />} />
      </RouteSwitch>
    </BrowserRouter>
  );
};
