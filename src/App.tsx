import React from "react";
import { extendTheme, ChakraProvider } from "@chakra-ui/react";
import { theme } from "./theme";
import { Navigation } from "./navigator";
import "./App.css";

interface Event {
  title: string;
  host: string;
  location: string;
  startTime: string;
  endTime: string;
  imageValue: string;
  imageFile: File | undefined;
}

const eventState: Event = {
  title: "",
  host: "",
  location: "",
  startTime: "",
  endTime: "",
  imageValue: "",
  imageFile: undefined,
};
const eventStateContext = React.createContext<Event>(eventState);
const eventDispatchStateContext = React.createContext<any>(undefined);

const EventStateProvider = ({ children }: any) => {
  const [event, setEvent] = React.useReducer(
    (state: Event, newValue: Event) => ({ ...state, ...newValue }),
    eventState
  );
  return (
    <eventStateContext.Provider value={event}>
      <eventDispatchStateContext.Provider value={setEvent}>
        {children}
      </eventDispatchStateContext.Provider>
    </eventStateContext.Provider>
  );
};

export const useEvent = () => [
  React.useContext(eventStateContext),
  React.useContext(eventDispatchStateContext),
];

function App() {
  return (
    <ChakraProvider theme={extendTheme(theme)}>
      <EventStateProvider>
        <Navigation />
      </EventStateProvider>
    </ChakraProvider>
  );
}

export default App;
