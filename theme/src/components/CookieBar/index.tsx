import React from 'react';
import CookieConsent from 'react-cookie-consent';
import Cookies from 'js-cookie';
import { initializeAndTrack } from 'gatsby-plugin-gdpr-cookies';
import { useLocation } from '@reach/router';
import { Animation } from '../Animation';
import './style.css'; // Uses the class names from the original package
import * as classes from './style.module.css';

export function CookieBar(): React.ReactElement {
    const location = useLocation();

    return (
        <Animation className={classes.CookieBar} type="fadeUp" delay={1000}>
            <CookieConsent
                cookieName="gatsby-gdpr-google-analytics"
                buttonId="confirm"
                buttonText="Принять"
                declineButtonId="decline"
                declineButtonText="Отменить"
                enableDeclineButton={true}
                disableStyles={true}
                onAccept={() => initializeAndTrack(location)}
            >
                <p>Этот сайт использует куки 🍪 </p>
            </CookieConsent>
        </Animation>
    );
}

export function EnsureActivatedTrackingCookie() {
    const location = useLocation();

    React.useEffect(() => {
        const configured = Cookies.get('portfolio-minimal-ga-configured');
        const enabled = Cookies.get('gatsby-gdpr-google-analytics');

        if (configured !== 'true') return;
        if (configured === 'true' && enabled === 'true') return;

        try {
            Cookies.set('gatsby-gdpr-google-analytics', 'true');
            initializeAndTrack(location);
        } catch {
            Cookies.remove('gatsby-gdpr-google-analytics');
            console.warn('Could not initialize Google Analytics');
        }
    }, []);

    return null;
}
