import ReactGA from "react-ga4";

export const initGA = () => {
    ReactGA.initialize("G-TX6QBG42PJ");
};

export const trackPage = (page) => {
    if(!page) return;
    ReactGA.send({hitType: "pageview" , page: page});
};


export const trackEvent = ({category, action , label}) => {
    ReactGA.event({category, action, label });
};