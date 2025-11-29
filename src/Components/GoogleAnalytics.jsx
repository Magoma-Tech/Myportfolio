import { useEffect } from "react"


export const GoogleAnalytics = ({measurementId}) => {


    useEffect(() => {
        const script = document.createElement("script");
        script.async = true;
        script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
        document.head.appendChild(script);

        window.dataLayer = window.dataLayer||[];
        function gtag() {
            window.dataLayer.push(arguments);
        }

        gtag("js" , new Date());
        gtag("config" , measurementId);
    }, [measurementId]);

    return  null;

};