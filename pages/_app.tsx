import '../styles/globals.css';
import type { AppProps } from 'next/app';
import ProgressBar from '@badrap/bar-of-progress';
import Router from 'next/router';

const progress = new ProgressBar({
  size: 4, //increase for more thickness
  color: '#FD5B60', // couleur caractéristique d'AirBnb
  className: 'z-50', //pour que la barre de chagrmenbt soit au dessus de tout
  delay: 100,
  //to make it work we need to import the router
});

Router.events.on('routeChangeStart', progress.start); //enclenche ka barre de chargement
Router.events.on('routeChangeComplete', progress.finish); //termine la barre de chargement when loading is complete
Router.events.on('routerChangeError', progress.finish);

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
