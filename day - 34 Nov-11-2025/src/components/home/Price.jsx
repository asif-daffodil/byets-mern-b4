
const Price = () => {
    return (
        <div className="p-4">
            <div className="max-w-6xl max-lg:max-w-3xl mx-auto">
                <div className="text-center">
                    <h2 className="text-slate-900 text-3xl font-bold mb-4">Choose the right plan for you</h2>
                    <p className="text-[15px] text-slate-600">Flexible plans designed for individuals, teams, and growing businesses.</p>
                </div>
                <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-6 mt-12 max-sm:max-w-sm max-sm:mx-auto">
                    <div className="border border-gray-300 shadow-sm rounded-md p-6">
                        <h3 className="text-slate-900 text-xl font-semibold mb-3">Starter</h3>
                        <p className="text-[15px] text-slate-600">For Individuals and Small Teams</p>
                        <div className="mt-8">
                            <h3 className="text-slate-900 text-3xl font-semibold">$10 <sub className="text-slate-600 text-[15px] font-normal">/ per month</sub></h3>
                        </div>
                        <div className="mt-6">
                            <h4 className="text-slate-900 text-lg font-semibold mb-3">Include</h4>
                            <p className="text-[15px] text-slate-600">Everything you get in this plan</p>
                            <ul className="mt-8 space-y-4">
                                <li className="flex items-center text-[15px] text-slate-600 font-medium">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={16} className="mr-3 fill-green-500" viewBox="0 0 24 24">
                                        <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
                                    </svg>
                                    50 Page Unlock
                                </li>
                                <li className="flex items-center text-[15px] text-slate-600 font-medium">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={16} className="mr-3 fill-green-500" viewBox="0 0 24 24">
                                        <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
                                    </svg>
                                    10 GB Storage
                                </li>
                                <li className="flex items-center text-[15px] text-slate-600 font-medium">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={16} className="mr-3 fill-green-500" viewBox="0 0 24 24">
                                        <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
                                    </svg>
                                    6 Team Members
                                </li>
                                <li className="flex items-center text-[15px] text-slate-600 font-medium">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={16} className="mr-3 fill-green-500" viewBox="0 0 24 24">
                                        <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
                                    </svg>
                                    Unlimited Book Mark
                                </li>
                                <li className="flex items-center text-[15px] text-slate-600 font-medium">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={16} className="mr-3 fill-green-500" viewBox="0 0 24 24">
                                        <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
                                    </svg>
                                    Unlimited basic feature
                                </li>
                            </ul>
                            <button type="button" className="w-full mt-8 px-4 py-2.5 text-[15px] font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-md cursor-pointer">Buy Plan</button>
                        </div>
                    </div>
                    <div className="border border-indigo-600 shadow-sm rounded-md p-6">
                        <h3 className="text-slate-900 text-xl font-semibold mb-3 flex items-center">Professional <span className="px-2 py-1 text-xs font-semibold text-white bg-indigo-500 rounded-md ml-3">Best Deal</span></h3>
                        <p className="text-[15px] text-slate-600">For Individuals and Largest Teams</p>
                        <div className="mt-8">
                            <h3 className="text-slate-900 text-3xl font-semibold">$20 <sub className="text-slate-600 text-[15px] font-normal">/ per month</sub></h3>
                        </div>
                        <div className="mt-6">
                            <h4 className="text-slate-900 text-lg font-semibold mb-3">Include</h4>
                            <p className="text-[15px] text-slate-600">Everything you get in this plan</p>
                            <ul className="mt-8 space-y-4">
                                <li className="flex items-center text-[15px] text-slate-600 font-medium">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={16} className="mr-3 fill-green-500" viewBox="0 0 24 24">
                                        <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
                                    </svg>
                                    100 Page Unlock
                                </li>
                                <li className="flex items-center text-[15px] text-slate-600 font-medium">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={16} className="mr-3 fill-green-500" viewBox="0 0 24 24">
                                        <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
                                    </svg>
                                    20 GB Storage
                                </li>
                                <li className="flex items-center text-[15px] text-slate-600 font-medium">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={16} className="mr-3 fill-green-500" viewBox="0 0 24 24">
                                        <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
                                    </svg>
                                    8 Team Members
                                </li>
                                <li className="flex items-center text-[15px] text-slate-600 font-medium">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={16} className="mr-3 fill-green-500" viewBox="0 0 24 24">
                                        <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
                                    </svg>
                                    Unlimited Book Mark
                                </li>
                                <li className="flex items-center text-[15px] text-slate-600 font-medium">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={16} className="mr-3 fill-green-500" viewBox="0 0 24 24">
                                        <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
                                    </svg>
                                    Unlimited basic feature
                                </li>
                            </ul>
                            <button type="button" className="w-full mt-8 px-4 py-2.5 text-[15px] font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-md cursor-pointer">Buy Plan</button>
                        </div>
                    </div>
                    <div className="border border-gray-300 shadow-sm rounded-md p-6">
                        <h3 className="text-slate-900 text-xl font-semibold mb-3">Business</h3>
                        <p className="text-[15px] text-slate-600">For Multiples and Largest Teams</p>
                        <div className="mt-8">
                            <h3 className="text-slate-900 text-3xl font-semibold">$100 <sub className="text-slate-600 text-[15px] font-normal">/ per month</sub></h3>
                        </div>
                        <div className="mt-6">
                            <h4 className="text-slate-900 text-lg font-semibold mb-3">Include</h4>
                            <p className="text-[15px] text-slate-600">Everything you get in this plan</p>
                            <ul className="mt-8 space-y-4">
                                <li className="flex items-center text-[15px] text-slate-600 font-medium">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={16} className="mr-3 fill-green-500" viewBox="0 0 24 24">
                                        <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
                                    </svg>
                                    300 Page Unlock
                                </li>
                                <li className="flex items-center text-[15px] text-slate-600 font-medium">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={16} className="mr-3 fill-green-500" viewBox="0 0 24 24">
                                        <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
                                    </svg>
                                    100 GB Storage
                                </li>
                                <li className="flex items-center text-[15px] text-slate-600 font-medium">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={16} className="mr-3 fill-green-500" viewBox="0 0 24 24">
                                        <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
                                    </svg>
                                    100 Team Members
                                </li>
                                <li className="flex items-center text-[15px] text-slate-600 font-medium">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={16} className="mr-3 fill-green-500" viewBox="0 0 24 24">
                                        <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
                                    </svg>
                                    Unlimited Book Mark
                                </li>
                                <li className="flex items-center text-[15px] text-slate-600 font-medium">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={16} className="mr-3 fill-green-500" viewBox="0 0 24 24">
                                        <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" data-original="#000000" />
                                    </svg>
                                    Unlimited basic feature
                                </li>
                            </ul>
                            <button type="button" className="w-full mt-8 px-4 py-2.5 text-[15px] font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-md cursor-pointer">Buy Plan</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Price;