import { createRoot } from "react-dom/client";

import Stopwatch from "./Stopwatch";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<Stopwatch />);
