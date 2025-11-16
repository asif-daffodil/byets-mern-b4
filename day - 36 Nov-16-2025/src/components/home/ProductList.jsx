
const ProductList = () => {
    return (
        <div className="p-4 mx-auto lg:max-w-6xl md:max-w-3xl my-5">
            <h2 class="text-2xl sm:text-3xl font-semibold text-slate-900 mb-6 sm:mb-8">Premium Cloths</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                <div className="bg-white flex flex-col overflow-hidden hover:shadow-md transition-all">
                    <div className="w-full bg-gray-50">
                        <a href="javascript:void(0)" className="block">
                            <img src="https://readymadeui.com/images/fashion-img-1.webp" alt="Product 1" className="w-full object-cover object-top aspect-[230/307]" />
                        </a>
                    </div>
                    <div className="p-2 flex-1 flex flex-col">
                        <div className="flex-1">
                            <a href="javascript:void(0)" className="block border-0 outline-0">
                                <h5 className="text-sm sm:text-base font-semibold text-slate-900 truncate">Crimson Grace Gown</h5>
                            </a>
                            <p className="text-sm mt-1 text-slate-600 truncate">Flowy and elegant red dress</p>
                            <div className="flex flex-wrap justify-between gap-2 mt-3">
                                <div className="flex gap-2">
                                    <h6 className="text-sm sm:text-base font-bold text-slate-900">$10</h6>
                                    <h6 className="text-sm sm:text-base text-slate-600"><strike>$15</strike></h6>
                                </div>
                                <div className="flex items-center gap-0.5">
                                    <svg className="w-[14px] h-[14px] fill-blue-600" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                    </svg>
                                    <svg className="w-[14px] h-[14px] fill-blue-600" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                    </svg>
                                    <svg className="w-[14px] h-[14px] fill-blue-600" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                    </svg>
                                    <svg className="w-[14px] h-[14px] fill-[#CED5D8]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                    </svg>
                                    <svg className="w-[14px] h-[14px] fill-[#CED5D8]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 mt-4">
                            <div className="bg-pink-200 hover:bg-pink-300 w-12 h-9 flex items-center justify-center rounded-sm cursor-pointer" title="Wishlist">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16px" className="fill-pink-600 inline-block" viewBox="0 0 64 64">
                                    <path d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z" data-original="#000000" />
                                </svg>
                            </div>
                            <button type="button" className="text-sm font-medium px-2 cursor-pointer min-h-[36px] w-full bg-blue-600 hover:bg-blue-700 text-white tracking-wide ml-auto outline-0 border-0 rounded-sm">Add to cart</button>
                        </div>
                    </div>
                </div>
                <div className="bg-white flex flex-col overflow-hidden hover:shadow-md transition-all">
                    <div className="w-full bg-gray-50">
                        <a href="javascript:void(0)" className="block">
                            <img src="https://readymadeui.com/images/fashion-img-2.webp" alt="Product 2" className="w-full object-cover object-top aspect-[230/307]" />
                        </a>
                    </div>
                    <div className="p-2 flex-1 flex flex-col">
                        <div className="flex-1">
                            <a href="javascript:void(0)" className="block border-0 outline-0">
                                <h5 className="text-sm sm:text-base font-semibold text-slate-900 truncate">Emerald Empress Gown</h5>
                            </a>
                            <p className="text-sm mt-1 text-slate-600 truncate">Regal, cape-style green outfit</p>
                            <div className="flex flex-wrap justify-between gap-2 mt-3">
                                <div className="flex gap-2">
                                    <h6 className="text-sm sm:text-base font-bold text-slate-900">$12</h6>
                                    <h6 className="text-sm sm:text-base text-slate-600"><strike>$15</strike></h6>
                                </div>
                                <div className="flex items-center gap-0.5">
                                    <svg className="w-[14px] h-[14px] fill-blue-600" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                    </svg>
                                    <svg className="w-[14px] h-[14px] fill-blue-600" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                    </svg>
                                    <svg className="w-[14px] h-[14px] fill-blue-600" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                    </svg>
                                    <svg className="w-[14px] h-[14px] fill-[#CED5D8]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                    </svg>
                                    <svg className="w-[14px] h-[14px] fill-[#CED5D8]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 mt-4">
                            <div className="bg-pink-200 hover:bg-pink-300 w-12 h-9 flex items-center justify-center rounded-sm cursor-pointer" title="Wishlist">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16px" className="fill-pink-600 inline-block" viewBox="0 0 64 64">
                                    <path d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z" data-original="#000000" />
                                </svg>
                            </div>
                            <button type="button" className="text-sm font-medium px-2 cursor-pointer min-h-[36px] w-full bg-blue-600 hover:bg-blue-700 text-white tracking-wide ml-auto outline-0 border-0 rounded-sm">Add to cart</button>
                        </div>
                    </div>
                </div>
                <div className="bg-white flex flex-col overflow-hidden hover:shadow-md transition-all">
                    <div className="w-full bg-gray-50">
                        <a href="javascript:void(0)" className="block">
                            <img src="https://readymadeui.com/images/fashion-img-3.webp" alt="Product 3" className="w-full object-cover object-top aspect-[230/307]" />
                        </a>
                    </div>
                    <div className="p-2 flex-1 flex flex-col">
                        <div className="flex-1">
                            <a href="javascript:void(0)" className="block border-0 outline-0">
                                <h5 className="text-sm sm:text-base font-semibold text-slate-900 truncate">Urban Edge Tee</h5>
                            </a>
                            <p className="text-sm mt-1 text-slate-600 truncate">Sleek black leather and white tee combo</p>
                            <div className="flex flex-wrap justify-between gap-2 mt-3">
                                <div className="flex gap-2">
                                    <h6 className="text-sm sm:text-base font-bold text-slate-900">$14</h6>
                                    <h6 className="text-sm sm:text-base text-slate-600"><strike>$15</strike></h6>
                                </div>
                                <div className="flex items-center gap-0.5">
                                    <svg className="w-[14px] h-[14px] fill-blue-600" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                    </svg>
                                    <svg className="w-[14px] h-[14px] fill-blue-600" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                    </svg>
                                    <svg className="w-[14px] h-[14px] fill-blue-600" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                    </svg>
                                    <svg className="w-[14px] h-[14px] fill-[#CED5D8]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                    </svg>
                                    <svg className="w-[14px] h-[14px] fill-[#CED5D8]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 mt-4">
                            <div className="bg-pink-200 hover:bg-pink-300 w-12 h-9 flex items-center justify-center rounded-sm cursor-pointer" title="Wishlist">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16px" className="fill-pink-600 inline-block" viewBox="0 0 64 64">
                                    <path d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z" data-original="#000000" />
                                </svg>
                            </div>
                            <button type="button" className="text-sm font-medium px-2 cursor-pointer min-h-[36px] w-full bg-blue-600 hover:bg-blue-700 text-white tracking-wide ml-auto outline-0 border-0 rounded-sm">Add to cart</button>
                        </div>
                    </div>
                </div>
                <div className="bg-white flex flex-col overflow-hidden hover:shadow-md transition-all">
                    <div className="w-full bg-gray-50">
                        <a href="javascript:void(0)" className="block">
                            <img src="https://readymadeui.com/images/fashion-img-4.webp" alt="Product 3" className="w-full object-cover object-top aspect-[230/307]" />
                        </a>
                    </div>
                    <div className="p-2 flex-1 flex flex-col">
                        <div className="flex-1">
                            <a href="javascript:void(0)" className="block border-0 outline-0">
                                <h5 className="text-sm sm:text-base font-semibold text-slate-900 truncate">Street Luxe Knit Set</h5>
                            </a>
                            <p className="text-sm mt-1 text-slate-600 truncate">Casual streetwear with a stylish knit top</p>
                            <div className="flex flex-wrap justify-between gap-2 mt-3">
                                <div className="flex gap-2">
                                    <h6 className="text-sm sm:text-base font-bold text-slate-900">$12</h6>
                                    <h6 className="text-sm sm:text-base text-slate-600"><strike>$15</strike></h6>
                                </div>
                                <div className="flex items-center gap-0.5">
                                    <svg className="w-[14px] h-[14px] fill-blue-600" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                    </svg>
                                    <svg className="w-[14px] h-[14px] fill-blue-600" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                    </svg>
                                    <svg className="w-[14px] h-[14px] fill-blue-600" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                    </svg>
                                    <svg className="w-[14px] h-[14px] fill-[#CED5D8]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                    </svg>
                                    <svg className="w-[14px] h-[14px] fill-[#CED5D8]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 mt-4">
                            <div className="bg-pink-200 hover:bg-pink-300 w-12 h-9 flex items-center justify-center rounded-sm cursor-pointer" title="Wishlist">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16px" className="fill-pink-600 inline-block" viewBox="0 0 64 64">
                                    <path d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z" data-original="#000000" />
                                </svg>
                            </div>
                            <button type="button" className="text-sm font-medium px-2 cursor-pointer min-h-[36px] w-full bg-blue-600 hover:bg-blue-700 text-white tracking-wide ml-auto outline-0 border-0 rounded-sm">Add to cart</button>
                        </div>
                    </div>
                </div>
                <div className="bg-white flex flex-col overflow-hidden hover:shadow-md transition-all">
                    <div className="w-full bg-gray-50">
                        <a href="javascript:void(0)" className="block">
                            <img src="https://readymadeui.com/images/fashion-img-5.webp" alt="Product 3" className="w-full object-cover object-top aspect-[230/307]" />
                        </a>
                    </div>
                    <div className="p-2 flex-1 flex flex-col">
                        <div className="flex-1">
                            <a href="javascript:void(0)" className="block border-0 outline-0">
                                <h5 className="text-sm sm:text-base font-semibold text-slate-900 truncate">Bold Stroll Coat Set</h5>
                            </a>
                            <p className="text-sm mt-1 text-slate-600 truncate">Statement black coat with red print trousers</p>
                            <div className="flex flex-wrap justify-between gap-2 mt-3">
                                <div className="flex gap-2">
                                    <h6 className="text-sm sm:text-base font-bold text-slate-900">$15</h6>
                                    <h6 className="text-sm sm:text-base text-slate-600"><strike>$15</strike></h6>
                                </div>
                                <div className="flex items-center gap-0.5">
                                    <svg className="w-[14px] h-[14px] fill-blue-600" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                    </svg>
                                    <svg className="w-[14px] h-[14px] fill-blue-600" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                    </svg>
                                    <svg className="w-[14px] h-[14px] fill-blue-600" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                    </svg>
                                    <svg className="w-[14px] h-[14px] fill-[#CED5D8]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                    </svg>
                                    <svg className="w-[14px] h-[14px] fill-[#CED5D8]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 mt-4">
                            <div className="bg-pink-200 hover:bg-pink-300 w-12 h-9 flex items-center justify-center rounded-sm cursor-pointer" title="Wishlist">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16px" className="fill-pink-600 inline-block" viewBox="0 0 64 64">
                                    <path d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z" data-original="#000000" />
                                </svg>
                            </div>
                            <button type="button" className="text-sm font-medium px-2 cursor-pointer min-h-[36px] w-full bg-blue-600 hover:bg-blue-700 text-white tracking-wide ml-auto outline-0 border-0 rounded-sm">Add to cart</button>
                        </div>
                    </div>
                </div>
                <div className="bg-white flex flex-col overflow-hidden hover:shadow-md transition-all">
                    <div className="w-full bg-gray-50">
                        <a href="javascript:void(0)" className="block">
                            <img src="https://readymadeui.com/images/fashion-img-6.webp" alt="Product 3" className="w-full object-cover object-top aspect-[230/307]" />
                        </a>
                    </div>
                    <div className="p-2 flex-1 flex flex-col">
                        <div className="flex-1">
                            <a href="javascript:void(0)" className="block border-0 outline-0">
                                <h5 className="text-sm sm:text-base font-semibold text-slate-900 truncate">Floral Blush Midi Dress</h5>
                            </a>
                            <p className="text-sm mt-1 text-slate-600 truncate">Soft, romantic floral dress</p>
                            <div className="flex flex-wrap justify-between gap-2 mt-3">
                                <div className="flex gap-2">
                                    <h6 className="text-sm sm:text-base font-bold text-slate-900">$14</h6>
                                    <h6 className="text-sm sm:text-base text-slate-600"><strike>$15</strike></h6>
                                </div>
                                <div className="flex items-center gap-0.5">
                                    <svg className="w-[14px] h-[14px] fill-blue-600" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                    </svg>
                                    <svg className="w-[14px] h-[14px] fill-blue-600" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                    </svg>
                                    <svg className="w-[14px] h-[14px] fill-blue-600" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                    </svg>
                                    <svg className="w-[14px] h-[14px] fill-[#CED5D8]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                    </svg>
                                    <svg className="w-[14px] h-[14px] fill-[#CED5D8]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 mt-4">
                            <div className="bg-pink-200 hover:bg-pink-300 w-12 h-9 flex items-center justify-center rounded-sm cursor-pointer" title="Wishlist">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16px" className="fill-pink-600 inline-block" viewBox="0 0 64 64">
                                    <path d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z" data-original="#000000" />
                                </svg>
                            </div>
                            <button type="button" className="text-sm font-medium px-2 cursor-pointer min-h-[36px] w-full bg-blue-600 hover:bg-blue-700 text-white tracking-wide ml-auto outline-0 border-0 rounded-sm">Add to cart</button>
                        </div>
                    </div>
                </div>
                <div className="bg-white flex flex-col overflow-hidden hover:shadow-md transition-all">
                    <div className="w-full bg-gray-50">
                        <a href="javascript:void(0)" className="block">
                            <img src="https://readymadeui.com/images/fashion-img-7.webp" alt="Product 3" className="w-full object-cover object-top aspect-[230/307]" />
                        </a>
                    </div>
                    <div className="p-2 flex-1 flex flex-col">
                        <div className="flex-1">
                            <a href="javascript:void(0)" className="block border-0 outline-0">
                                <h5 className="text-sm sm:text-base font-semibold text-slate-900 truncate">Chic Contrast Blazer Fit</h5>
                            </a>
                            <p className="text-sm mt-1 text-slate-600 truncate">Trendy blazer and denim street style</p>
                            <div className="flex flex-wrap justify-between gap-2 mt-3">
                                <div className="flex gap-2">
                                    <h6 className="text-sm sm:text-base font-bold text-slate-900">$14</h6>
                                    <h6 className="text-sm sm:text-base text-slate-600"><strike>$15</strike></h6>
                                </div>
                                <div className="flex items-center gap-0.5">
                                    <svg className="w-[14px] h-[14px] fill-blue-600" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                    </svg>
                                    <svg className="w-[14px] h-[14px] fill-blue-600" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                    </svg>
                                    <svg className="w-[14px] h-[14px] fill-blue-600" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                    </svg>
                                    <svg className="w-[14px] h-[14px] fill-[#CED5D8]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                    </svg>
                                    <svg className="w-[14px] h-[14px] fill-[#CED5D8]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 mt-4">
                            <div className="bg-pink-200 hover:bg-pink-300 w-12 h-9 flex items-center justify-center rounded-sm cursor-pointer" title="Wishlist">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16px" className="fill-pink-600 inline-block" viewBox="0 0 64 64">
                                    <path d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z" data-original="#000000" />
                                </svg>
                            </div>
                            <button type="button" className="text-sm font-medium px-2 cursor-pointer min-h-[36px] w-full bg-blue-600 hover:bg-blue-700 text-white tracking-wide ml-auto outline-0 border-0 rounded-sm">Add to cart</button>
                        </div>
                    </div>
                </div>
                <div className="bg-white flex flex-col overflow-hidden hover:shadow-md transition-all">
                    <div className="w-full bg-gray-50">
                        <a href="javascript:void(0)" className="block">
                            <img src="https://readymadeui.com/images/fashion-img-9.webp" alt="Product 3" className="w-full object-cover object-top aspect-[230/307]" />
                        </a>
                    </div>
                    <div className="p-2 flex-1 flex flex-col">
                        <div className="flex-1">
                            <a href="javascript:void(0)" className="block border-0 outline-0">
                                <h5 className="text-sm sm:text-base font-semibold text-slate-900 truncate">Effortless Café Casuals</h5>
                            </a>
                            <p className="text-sm mt-1 text-slate-600 truncate">Relaxed tank top and jeans outfit</p>
                            <div className="flex flex-wrap justify-between gap-2 mt-3">
                                <div className="flex gap-2">
                                    <h6 className="text-sm sm:text-base font-bold text-slate-900">$14</h6>
                                    <h6 className="text-sm sm:text-base text-slate-600"><strike>$15</strike></h6>
                                </div>
                                <div className="flex items-center gap-0.5">
                                    <svg className="w-[14px] h-[14px] fill-blue-600" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                    </svg>
                                    <svg className="w-[14px] h-[14px] fill-blue-600" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                    </svg>
                                    <svg className="w-[14px] h-[14px] fill-blue-600" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                    </svg>
                                    <svg className="w-[14px] h-[14px] fill-[#CED5D8]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                    </svg>
                                    <svg className="w-[14px] h-[14px] fill-[#CED5D8]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 mt-4">
                            <div className="bg-pink-200 hover:bg-pink-300 w-12 h-9 flex items-center justify-center rounded-sm cursor-pointer" title="Wishlist">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16px" className="fill-pink-600 inline-block" viewBox="0 0 64 64">
                                    <path d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z" data-original="#000000" />
                                </svg>
                            </div>
                            <button type="button" className="text-sm font-medium px-2 cursor-pointer min-h-[36px] w-full bg-blue-600 hover:bg-blue-700 text-white tracking-wide ml-auto outline-0 border-0 rounded-sm">Add to cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default ProductList;