// Future Improvements:
// - Improve image quality of RISCV project
//   - Add 'fullscreen' button
// - Add more images for the RTOS project
//   - Show the game on the LCD screen
// - Add more images for the QEGshare project
// - Add more images for the Car project
// - Add more projects
//   - Quiksites
//   - Trinity
//   - Stocks
//   - Digital Logic Projects
//   - APPM Projects
//   - GNN
//   - Acrylic lamp
//   - Data structures game
//   - Dungeon Escape
// - Add dynamic background to home page! (Graph based fluid dynamics?)
// - Fix format of "Overview" on project page -- it needs to fill the container from left to right
// - Navbar kinda jank
// - Add a 'previous page' feature




'use client'

import Navbar from "./components/Navbar";
import Main from "./pages/main"
import Project from "./pages/project";
import Resume from "./pages/resume";

// Context hooks
import { usePageContext } from './context/PageContext'

export default function Home() {
  const [{ page }, dispatch] = usePageContext()
  return (
    <div>
      <Navbar />
      {page == "main" ? (
        <Main />
      ) : page == "project" ? (
        <Project />
      ) : page == "resume" ? (
        <Resume />
      ) : (<p>Error - no page loaded</p>)}
        
    </div>
  );
}
