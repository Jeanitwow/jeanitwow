import '@fontsource/roboto/400.css';
import '@fontsource/roboto/700.css';
import '../../globalStyles/global.css';
import '../../globalStyles/theme.css';
import React, { useLayoutEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from '@reach/router';
import { Theme, useGlobalState } from '../../context';
import { SplashScreen } from '../SplashScreen';
import { Footer } from '../Footer';
import { Header } from '../Header';
import { CookieBar, EnsureActivatedTrackingCookie } from '../CookieBar';
import * as classes from './style.module.css';

interface LayoutProps {
    children: React.ReactElement;
    useSplashScreenAnimation: boolean;
    useCookieBar: boolean;
}
declare global {
    interface Window {
      $WowheadPower: any;
    }
  }
export function Layout(props: LayoutProps): React.ReactElement {
    const location = useLocation();
    const { globalState } = useGlobalState();
    const [isInternalNavigation, setIsInternalNavigation] = useState<boolean>(false);

    const showSplashScreen = !isInternalNavigation && props.useSplashScreenAnimation && !globalState.splashScreenDone;
    const darkModeEnabled = globalState.theme === Theme.Dark;

    useLayoutEffect(() => {
        const referrer = location.state && (location.state as { referrer: string | null }).referrer !== null;
        setIsInternalNavigation(!!referrer);
        window.$WowheadPower?.refreshLinks();
    }, []);

    const splashScreenView = (
        <>
            <Helmet bodyAttributes={{ 'data-theme': Theme.Light }} />
            <SplashScreen />
        </>
    );

    const layoutView = (
        <>
            <Helmet
                bodyAttributes={{
                    'data-theme': darkModeEnabled ? Theme.Dark : Theme.Light,
                }}
            >   
                <script type="text/javascript" src="https://vk.com/js/api/share.js?93"></script>
                <script>{'const whTooltips = {colorLinks: true, iconizeLinks: true, renameLinks: true};'}</script>
                <script src="https://wow.zamimg.com/widgets/power.js" defer={true}></script>
                
            </Helmet>
            <div className={classes.Layout}>
                <Header />
                <main>{props.children}</main>
                <Footer />
                {props.useCookieBar ? <CookieBar /> : <EnsureActivatedTrackingCookie />}
            </div>
        </>
    );

    return showSplashScreen ? splashScreenView : layoutView;
}
