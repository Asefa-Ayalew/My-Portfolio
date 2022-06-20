import "../styles/globals.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="grid grid-cols-12 gap-6 my-14 px-48">
      <div className="col-span-3 bg-white rou">sidebaar</div>
      <div className="col-span-9 bg-white rou">
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
