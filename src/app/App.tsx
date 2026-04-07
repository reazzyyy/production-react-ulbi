import './styles/index.scss';
import { classNames } from 'shared/lib/helpers/classNames';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { Suspense, useEffect } from 'react';
import { AppRouter } from './providers/router';
import { useTheme } from './providers/ThemeProvider';
import { BugButton, ErrorBoundary } from './providers/ErrorBoundary';

export default function App() {
    const { theme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <ErrorBoundary>
                <Suspense fallback="">
                    <Navbar />
                    <div className="content-page">
                        <Sidebar />
                        <AppRouter />
                        <BugButton />
                    </div>
                </Suspense>
            </ErrorBoundary>
        </div>
    );
}
