import { CssBaseline, ThemeProvider } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import Tuts from './components/Tuts';
import Contacts from './scenes/contacts';
import Dashboard from './scenes/dashboard';
import Sidebar from './scenes/globals/Sidebar';
import Topbar from './scenes/globals/Topbar';
import Invoices from './scenes/invoices';
import Team from './scenes/team';
import { ColorModeContext, useMode } from './theme';
// import Bar from './scenes/bar';
import Form from './scenes/form';
// import Line from './scenes/line';
// import Pie from './scenes/pie';
// import FAQ from './scenes/faqs';
// import Geography from './scenes/geography';
import Calender from './scenes/calender';

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar />
          <main className="content">
            <Topbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
              {/* <Route path="/bar" element={<Bar />} /> */}
              <Route path="/form" element={<Form />} />
              {/* <Route path="/line" element={<Line />} /> */}
              {/* <Route path="/pie" element={<Pie />} /> */}
              {/* <Route path="/faqs" element={<FAQ />} /> */}
              {/* <Route path="/geo" element={<Geography />} /> */}
              <Route path="/calender" element={<Calender />} />
            </Routes>
          </main>
        </div>
        <Tuts />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
