import { Refine } from '@refinedev/core';
import { DevtoolsPanel, DevtoolsProvider } from '@refinedev/devtools';
import { RefineKbar, RefineKbarProvider } from '@refinedev/kbar';
import {
  notificationProvider,
  RefineSnackbarProvider,
  ThemedLayoutV2,
  ThemedTitleV2,
} from '@refinedev/mui';
import CssBaseline from '@mui/material/CssBaseline';
import GlobalStyles from '@mui/material/GlobalStyles';
import routerBindings, {
  DocumentTitleHandler,
  UnsavedChangesNotifier,
} from '@refinedev/react-router-v6';
import dataProvider from '@refinedev/simple-rest';
import { useTranslation } from 'react-i18next';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import { AppIcon } from './components/app-icon';
import { Header } from './components/header/Header';
import Home from './pages/home/Home';
import { ColorModeContextProvider } from './contexts/color-mode';
import { Bio } from './components/biografia/Bio';
import { Container } from '@mui/material';

function App() {
  const { t, i18n } = useTranslation();

  const i18nProvider = {
    translate: (key: string, params: object) => t(key, params),
    changeLocale: (lang: string) => i18n.changeLanguage(lang),
    getLocale: () => i18n.language,
  };

  return (
    <BrowserRouter>
      <RefineKbarProvider>
        <ColorModeContextProvider>
          <CssBaseline />
          <GlobalStyles styles={{ html: { WebkitFontSmoothing: 'auto' } }} />
          <RefineSnackbarProvider>
            <DevtoolsProvider>
              <Refine
                dataProvider={dataProvider('https://api.fake-rest.refine.dev')}
                notificationProvider={notificationProvider}
                i18nProvider={i18nProvider}
                routerProvider={routerBindings}
                options={{
                  syncWithLocation: true,
                  warnWhenUnsavedChanges: true,
                  useNewQueryKeys: true,
                  projectId: 'XoFPGh-MXGbn5-GyR8kb',
                }}
              >
                {/* <Routes>
                  <Route
                    element={
                      <ThemedLayoutV2
                        Header={() => <Header sticky />}
                        Title={({ collapsed }) => (
                          <ThemedTitleV2
                            collapsed={collapsed}
                            text="Vota Sardigna Luciana Mele"
                            icon={<AppIcon />}
                          />
                        )}
                      >
                        <Outlet />
                      </ThemedLayoutV2>
                    }
                  ></Route>
                </Routes> */}
                <Routes>
                  <Route
                    element={
                      <Container sx={{ p: '0 !important' }} maxWidth={false}>
                        <ThemedLayoutV2
                          Header={() => <Header homepage sticky />}
                          Sider={() => <div></div>}
                        >
                          <Outlet />
                        </ThemedLayoutV2>
                      </Container>
                    }
                  >
                    <Route path="*" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/biografia" element={<Bio />} />
                  </Route>
                </Routes>
                <RefineKbar />
                <UnsavedChangesNotifier />
                <DocumentTitleHandler />
              </Refine>
              <DevtoolsPanel />
            </DevtoolsProvider>
          </RefineSnackbarProvider>
        </ColorModeContextProvider>
      </RefineKbarProvider>
    </BrowserRouter>
  );
}

export default App;
