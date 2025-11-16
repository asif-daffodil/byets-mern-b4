
const Hero = () => {
    return (
        <div className="px-4 sm:px-10 py-6">
            <div className="max-w-screen-xl max-lg:max-w-3xl mx-auto">
                <div className="grid lg:grid-cols-2 items-center gap-x-12 gap-y-16">
                    <div className="max-lg:text-center">
                        <h1 className="lg:text-5xl text-4xl !leading-tight font-bold text-slate-900 mb-6">Experience Future of Dining with AI</h1>
                        <p className="text-base text-slate-600 leading-relaxed">Discover a smarter way to order, crafted by artificial intelligence. From personalized menu suggestions to lightning-fast delivery, enjoy a dining experience designed just for you.</p>
                        <div className="mt-12 flex flex-wrap max-lg:justify-center gap-4">
                            <a href="javascript:void(0);" className="px-6 py-3 text-base font-semibold text-white border border-violet-600 bg-violet-600 hover:bg-violet-700 rounded-full transition-all focus:outline-none">Explore Our Menu</a>
                            <a href="javascript:void(0);" className="px-6 py-3 text-base font-semibold text-violet-700 border border-violet-600 rounded-full hover:bg-gray-100 transition-all focus:outline-none">Order Now</a>
                        </div>
                    </div>
                    <div className="w-full aspect-[12/9]">
                        <img src="https://readymadeui.com/images/ai-img1.webp" className="w-full h-full object-cover rounded-lg shadow-xl" alt="hero-img" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;