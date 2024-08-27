import MicrosoftClarity from "./MicrosoftClarity";
// import { GoogleTagManager, GoogleAnalytics } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/react";
import GoogleAnalyticsTag from "./GoogleAnalyticsTag";

const Metrics = () => (
  <>
    <GoogleAnalyticsTag />
    <MicrosoftClarity />
    <Analytics />
  </>
);

export default Metrics;
