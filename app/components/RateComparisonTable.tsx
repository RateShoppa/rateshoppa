"use client";

import Image from 'next/image';
import Link from 'next/link';

export interface ProviderRate {
  name: string;
  logo: string; // static file or URL
  rate: number;
  rateGood?: boolean;
  fee: string;
  recipientGets: string;
  isBest?: boolean;
}

interface Props {
  providers: ProviderRate[];
}

export default function RateComparisonTable({ providers }: Props) {
  return (
    <section className="bg-[#f7f9f7] pb-20">
        <div className="lg:w-1/2 text-center mx-auto">
          <h1 className="text-4xl lg:text-6xl uppercase font-black text-[#084040]">
            Compare the best exchange rates
          </h1>
          <p className="text-[#084040] text-lg mb-8">
            Comparing prices for international money transfers can be challenging. We’ve created this comparison table to help you identify hidden fees in exchange rate markups.
          </p>
        </div>
        <div className="w-full max-w-4xl mx-auto overflow-hidden rounded-2xl bg-white border border-gray-200">
            {/* Header */}
            <div className="grid grid-cols-4 bg-[#084040] text-white py-5 px-6 text-sm font-medium rounded-t">
                <div>Provider</div>
                <div>
                    Exchange rate
                    <div className="text-xs opacity-70">(1 USD → CAD)</div>
                </div>
                <div>Transfer fee</div>
                <div>
                    Recipient gets
                    <div className="text-xs opacity-70">Sending 1,000 USD</div>
                </div>
            </div>

            {/* Rows */}
            {providers.map((p, i) => (
                <div
                key={i}
                className="grid grid-cols-4 items-center px-6 py-6 border-b last:border-0 border-gray-200"
                >
                    {/* Provider */}
                    <div className="flex items-center space-x-3">
                        <Image
                        src={p.logo}
                        alt={p.name}
                        width={90}
                        height={40}
                        className="object-contain"
                        />
                    </div>

                    {/* Exchange rate */}
                    <div className="text-sm">
                        <div className="flex items-center space-x-2">
                            <span>{p.rate}</span>
                            <span
                                className={`h-2 w-2 rounded-full ${
                                p.rateGood ? "bg-green-600" : "bg-red-500"
                                }`}
                            />
                        </div>
                    </div>

                    {/* Fee */}
                    <div className="text-sm">
                        <div>{p.fee}</div>
                    </div>

                    {/* Recipient gets */}
                    <div className="text-right">
                        <div className="font-semibold text-gray-900">{p.recipientGets}</div>

                        {p.isBest && (
                        <button className="mt-2 bg-green-500 hover:bg-green-600 text-white text-xs font-medium px-3 py-1 rounded-full">
                            Send money
                        </button>
                        )}
                    </div>
                </div>
            ))}
                <div className="grid grid-cols-1 items-center px-6 py-6 border-b last:border-0 border-gray-200">
                    <Link 
                        href="/"
                        className="font-semibold underline text-center">
                        Show more providers
                    </Link>
                </div>
            </div>
    </section>
  );
}