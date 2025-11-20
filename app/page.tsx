'use client';

import Hero from "@/app/components/Hero";
import FlagMarquee from "./components/FlagMarquee";
import RateComparisonTable, {
  ProviderRate,
} from "./components/RateComparisonTable";
import Cta from "./components/Cta";



export default function Home() {

  const providers: ProviderRate[] = [
    {
      name: "Wise",
      logo: "/vendors/wise-logo.svg",
      rate: 1.40525,
      rateGood: true,
      fee: "5.76 USD",
      recipientGets: "1,397.16 CAD",
      isBest: true,
    },
    {
      name: "MonieWorld",
      logo: "/vendors/monieworld-logo.svg",
      rate: 1.36526,
      rateGood: false,
      fee: "0.00 USD",
      recipientGets: "1,365.26 CAD",
      isBest: true,
    },
    {
      name: "Remitly",
      logo: "/vendors/remitly-logo.svg",
      rate: 1.36080,
      rateGood: false,
      fee: "0.00 USD",
      recipientGets: "1,360.80 CAD",
      isBest: true,
    },
    {
      name: "Lemfi",
      logo: "/vendors/lemfi-logo.png",
      rate: 1.36299,
      rateGood: false,
      fee: "5.00 USD",
      recipientGets: "1,356.17 CAD",
      isBest: true,
    },
    {
      name: "Sendwave",
      logo: "/vendors/sendwave-logo.svg",
      rate: 1.34037,
      rateGood: false,
      fee: "4.99 USD",
      recipientGets: "1,333.68 CAD",
      isBest: true,
    },
  ];
  
  return (
    <>
      <Hero />
      <FlagMarquee />
      <RateComparisonTable providers={providers} />
      <Cta />
    </>
  );
}
