"use client";

export default function Contact() {
  return (
        <>
            <section className="max-w-7xl mx-auto px-6 py-24">
                <div className="max-w-3xl mb-20">
                    <p className="text-sm tracking-widest text-gray-500 mb-4">CONTACT US</p>
                    <h1 className="text-5xl md:text-6xl font-semibold text-black mb-6">
                        How can we help?
                    </h1>
                    <p className="text-lg text-gray-600">
                        Whether you’re ready to start finding better exchange rates or just have a question, the Rateshoppa team is here to help.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="rounded-3xl bg-gray-50 p-10 flex flex-col justify-between min-h-80">
                        <div>
                            <h3 className="text-xl font-medium mb-3">Support</h3>
                            <p className="text-gray-600">
                                Fill out the form below or email us at support@rateshoppa.com with your question.
                            </p>
                        </div>
                        <a href="mailto:support@rateshoppa.com" className="mt-8 w-fit px-6 py-3 rounded-full bg-black text-white text-sm">
                            Submit an inquiry
                        </a>
                    </div>

                    <div className="rounded-3xl bg-[#f6efe9] p-10 flex flex-col justify-between min-h-80">
                        <div>
                            <h3 className="text-xl font-medium mb-3">Sales</h3>
                            <p className="text-gray-600">
                                Get in touch with our sales team to request a demo or explore pricing options.
                            </p>
                        </div>
                        <a href="mailto:hello@rateshoppa.com" className="mt-8 w-fit px-6 py-3 rounded-full bg-white text-sm">
                            Book a demo
                        </a>
                    </div>

                    <div className="rounded-3xl bg-gray-100 p-10 flex flex-col justify-between min-h-80">
                        <div>
                            <h3 className="text-xl font-medium mb-3">Media inquiry</h3>
                            <p className="text-gray-600">
                                Our team is available for press inquiries and media opportunities.
                            </p>
                        </div>
                        <a href="mailto:hello@rateshoppa.com" className="mt-8 w-fit px-6 py-3 rounded-full bg-white text-sm">
                        Email us
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}