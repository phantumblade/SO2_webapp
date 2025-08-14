import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import LessonsApp from './LessonsApp';
import './index.css';

// Entry point for the OS Lessons App with dark mode support.
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <LessonsApp />
  </StrictMode>,
);
