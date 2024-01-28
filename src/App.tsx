import { Refine } from '@refinedev/core';
import { DevtoolsPanel, DevtoolsProvider } from '@refinedev/devtools';
import { RefineKbar, RefineKbarProvider } from '@refinedev/kbar';

import {
  ErrorComponent,
  notificationProvider,
  RefineSnackbarProvider,
  ThemedLayoutV2,
  ThemedTitleV2,
} from '@refinedev/mui';

import CssBaseline from '@mui/material/CssBaseline';
import GlobalStyles from '@mui/material/GlobalStyles';
import routerBindings, {
  DocumentTitleHandler,
  NavigateToResource,
  UnsavedChangesNotifier,
} from '@refinedev/react-router-v6';
import dataProvider from '@refinedev/simple-rest';
import { useTranslation } from 'react-i18next';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import { AppIcon } from './components/app-icon';
import { Header } from './components/header';
import { ColorModeContextProvider } from './contexts/color-mode';
import {
  BlogPostCreate,
  BlogPostEdit,
  BlogPostList,
  BlogPostShow,
} from './pages/blog-posts';
import Home from './pages/home/Home';
import { ThemeProvider } from '@mui/material';
import theme from './Theme';

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
              <ThemeProvider theme={theme}>
                <Refine
                  dataProvider={dataProvider(
                    'https://api.fake-rest.refine.dev'
                  )}
                  notificationProvider={notificationProvider}
                  i18nProvider={i18nProvider}
                  routerProvider={routerBindings}
                  resources={[
                    {
                      name: 'home',
                      list: '/home',
                    },
                    // {
                    //   name: 'blog_posts',
                    //   list: '/blog-posts',
                    //   create: '/blog-posts/create',
                    //   edit: '/blog-posts/edit/:id',
                    //   show: '/blog-posts/show/:id',
                    //   meta: {
                    //     canDelete: true,
                    //   },
                    // },
                    // {
                    //   name: 'categories',
                    //   list: '/categories',
                    //   create: '/categories/create',
                    //   edit: '/categories/edit/:id',
                    //   show: '/categories/show/:id',
                    //   meta: {
                    //     canDelete: true,
                    //   },
                    // },
                  ]}
                  options={{
                    syncWithLocation: true,
                    warnWhenUnsavedChanges: true,
                    useNewQueryKeys: true,
                    projectId: 'XoFPGh-MXGbn5-GyR8kb',
                  }}
                >
                  <Routes>
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
                    >
                      {/* <Route
                        index
                        element={<NavigateToResource resource="blog_posts" />}
                      />
                      <Route path="/blog-posts">
                        <Route index element={<BlogPostList />} />
                        <Route path="create" element={<BlogPostCreate />} />
                        <Route path="edit/:id" element={<BlogPostEdit />} />
                        <Route path="show/:id" element={<BlogPostShow />} />
                      </Route> */}
                      <Route path="/home">
                        <Route index element={<Home />} />
                      </Route>
                      {/* <Route path="*" element={<Home />} /> */}
                    </Route>
                  </Routes>
                  <Routes>
                    <Route path="*" element={<Home />} />
                  </Routes>

                  <RefineKbar />
                  <UnsavedChangesNotifier />
                  <DocumentTitleHandler />
                </Refine>
              </ThemeProvider>
              <DevtoolsPanel />
            </DevtoolsProvider>
          </RefineSnackbarProvider>
        </ColorModeContextProvider>
      </RefineKbarProvider>
    </BrowserRouter>
  );
}

export default App;
