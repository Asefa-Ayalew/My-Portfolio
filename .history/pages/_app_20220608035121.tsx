import "../styles/globals.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="grid grid-cols-12 gap-6 my-14 px-48">
      <div className="lg:col-span-3 bg-white rounded-2xl col-span-12">sidebaar</div>
      <div className="lg:col-span-9 bg-white rounded-2xl col-span-12">
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
