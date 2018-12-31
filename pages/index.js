import React, {Component} from 'react';
import Layout from '../components/layout';
import About from '../components/about';
import Technologies from '../components/technologies';
import Portfolio from "../components/portfolio";
import Hero from "../components/hero";

class App extends Component {
  componentDidMount() {
    //This is the "Offline page" service worker
    //Add this below content to your HTML page, or add the js file to your page at the very top to register service worker
    if (navigator.serviceWorker.controller) {
      console.log('[PWA Builder] active service worker found, no need to register')
    } else {
      //Register the ServiceWorker
      navigator.serviceWorker.register('pwabuider-sw.js', {
        scope: './'
      }).then(function (reg) {
        console.log('Service worker has been registered for scope:' + reg.scope);
      });
    }
  }

  render() {
    return (
      <Layout>
        <Hero/>
        <About/>
        <Technologies/>
        <Portfolio/>
      </Layout>
    );
  };
}

export default App;
