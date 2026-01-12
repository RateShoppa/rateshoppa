/* eslint-disable @next/next/no-img-element */
"use client";

import Cta from "../components/Cta";

export default function TermsAndConditions() {
  return (
        <>
            <section className="flex min-h-[85vh] items-center justify-center px-6 text-center">
                <h1 className="max-w-5xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl text-[#084040]">
                    Created by a <span className="text-[#B6EA25]">team</span> that knows how <span className="text-[#B6EA25]">frustrating</span> exchanging money can be and demanded <span className="text-[#B6EA25]">better</span>.
                </h1>
            </section>

            <section className="mx-auto max-w-7xl px-6 pt-5 pb-24">
                <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
                    <div>
                        <h2 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl text-black">
                            Find the best exchange rates for you.
                        </h2>
                    </div>
                    
                    <div className="space-y-6 text-gray-600 leading-relaxed">
                        <p>
                            Our simple goal is to increase your earnings, every time.  Dealing with foreign currency can be repetitive and exhausting, so we aim to eliminate the confusion and frustration of exchanging money.  It all began with a group of friends constantly discussing the best rates for sending money home or exchanging funds for payments.  This often involved multiple rate comparisons, “window-shopping,” and sometimes memorizing rates to the exact decimal.  The motto “Every penny counts” fuelled the idea of Rateshoppa.
                        </p>
                    </div>
                </div>
            </section>

            <section className="mx-auto max-w-7xl px-6 pb-32">
                <div className="grid grid-cols-1 border border-gray-100 md:grid-cols-3">
                    <div className="border-b border-gray-100 p-8 md:border-b-0 md:border-r last:border-r-0">
                        <p className="leading-relaxed">
                            We created this free, easy-to-use tool to ensure you always get the best value when converting currency.  It eliminates hidden fees, complicated math, and endless searching.  We explored several bank or fintech solutions, each with its own specialized tool designed to differentiate their product. While understandable, we wanted more: greater transparency, more options, and simply more.
                        </p>
                    </div>

                    <div className="border-b border-gray-100 p-8 md:border-b-0 md:border-r last:border-r-0">
                        <h3 className="mb-2 text-lg font-semibold">Your Personal Money Superpower</h3>
                        <p className="leading-relaxed">
                            Our website is your central hub for the foreign exchange market. We do the heavy lifting for you by constantly scanning the market and bringing all the best exchange rate offers (bids) from trusted providers into one simple list.
                        </p>
                    </div>

                    <div className="border-b border-gray-100 p-8 md:border-b-0 md:border-r last:border-r-0">
                        <p className="leading-relaxed">
                            <strong>See Everything in One Place:</strong> No more opening five different browser tabs! We show you all the best live rates side-by-side.
                        </p>
                        <p className="leading-relaxed">
                            <strong>Always Get the Best Value:</strong> We instantly highlight the absolute top rate available right now, so you never miss a chance to save.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 border border-gray-100 md:grid-cols-3">
                    <div className="border-b border-gray-100 p-8 md:border-b-0 md:border-r last:border-r-0">
                        <p className="leading-relaxed">
                            <strong>Never Miss a Sweet Drop (coming soon!):</strong> Sign up for our free Rate Alerts! Tell us the currency pair and your preferred rate, and we'll instantly notify you when rates drop across your selected sites or reach the value you're looking for.
                        </p>
                    </div>

                    <div className="border-b border-gray-100 p-8 md:border-b-0 md:border-r last:border-r-0">
                        <p className="leading-relaxed">
                         <strong>Instant Access:</strong> Once you spot the best rate for your transaction, one click takes you directly to the provider's specific page to complete the exchange. It's fast, easy, and secure.
                        </p>
                    </div>

                    <div className="border-b border-gray-100 p-8 md:border-b-0 md:border-r last:border-r-0">
                        <p className="leading-relaxed">
                            <strong>100% Free for You:</strong> We don't charge you a thing to use this tool. Our mission is just to help you keep more of your hard-earned money.<br />
                            Think of us as your smart, friendly guide that always makes sure you get the biggest bang for your buck on every exchange.
                        </p>
                    </div>
                </div>
            </section>
            

            <section className="mx-auto max-w-7xl px-6 py-12">
                <div className="grid grid-cols-1 items-center gap-16 md:grid-cols-2">
                    
                    <div className="relative overflow-hidden rounded-3xl mx-auto">
                        <img
                            src="/rateshoppa-abt.jpg"
                            alt="About Rates"
                            className="h-full w-full object-cover"
                        />
                    </div>

                    <div className="text-center md:text-left">
                        <h2 className="mb-8 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
                            Who is this service for?
                        </h2>

                        <div className="space-y-6 text-gray-600 leading-relaxed">
                            <p>
                            This tool is designed for anyone exchanging currency, including travellers, small businesses, and new residents or immigrants. Whether you’re planning a trip, importing or exporting goods, or moving large sums for property or relocation, this service helps you save money on international invoices and transfers. Stop settling for average and start getting the best rate today!
                            </p>
                        </div>

                        <div className="flex justify-center md:justify-start gap-4 mt-5">
                            <a
                                href="https://app.rateshoppa.com/signup"
                                className="px-12 py-3 bg-[#084040] text-[#B6EA25] rounded hover:bg-[#B6EA25] hover:text-[#084040] transition"
                            >
                                Get started
                            </a>
                        </div>
                    </div>

                </div>
            </section>


            <Cta />
        </>
    );
}