import '../styles/global.css'
// `App` componet is the top-level component which will be common across all the different pageXOffset,
// used to keep state when navigating between pages

// can add global CSS files by import them to _app.js, cannot import global CSS anywhere else
export default function App({ Component, pageProps }) {
    return <Component {...pageProps} />
}