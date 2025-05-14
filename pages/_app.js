import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  console.log("🚨 _app.js IS RUNNING 🚨");

  return (
    <div style={{
      backgroundColor: 'red',
      color: 'white',
      padding: '40px',
      fontSize: '2rem',
      textAlign: 'center'
    }}>
      IF YOU CAN SEE THIS, _app.js IS ACTIVE.
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;