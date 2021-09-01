/*

Server-side rendering (SSR) is a popular technique for rendering a client-side single page application (SPA) on the server and then sending a fully rendered page to the client. This allows for dynamic components to be served as static HTML markup.


This approach can be useful for search engine optimization (SEO) when indexing does not handle JavaScript properly. It may also be beneficial in situations where downloading a large JavaScript bundle is impaired by a slow network

we’ll use ReactDOM’s hydrate method instead of render to indicate to the DOM renderer that we’re rehydrating the app after a server-side render.

*/