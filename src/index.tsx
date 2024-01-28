import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './i18n';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: 'AIzaSyCHdiMlGzDVAGVUgRN0oiJqngYNOLIUsPo',
  authDomain: 'luciana-mele.firebaseapp.com',
  projectId: 'luciana-mele',
  storageBucket: 'luciana-mele.appspot.com',
  messagingSenderId: '692186163023',
  appId: '1:692186163023:web:059f63f58c6b873373873a',
  measurementId: 'G-VEDFM0LD1M',
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <React.Suspense fallback="loading">
      <App />
    </React.Suspense>
  </React.StrictMode>
);
