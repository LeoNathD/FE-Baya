<script setup>

</script>

<template>
    <div class="flex flex-col flex-1 rounded-[20px] p-5 gap-6 bg-white">
        <div class="header flex items-center justify-between">
            <div class="flex flex-col gap-2">
                <p class="font-bold text-xl">All Wallets</p>
                <div class="flex items-center gap-1">
                    <img src="@/assets/images/icons/wallet-3-grey.svg" class="flex size-6 shrink-0" alt="icon">
                    <p class="font-semibold text-custom-grey">4 Total Wallets</p>
                </div>
            </div>
        </div>
        <div id="Filter" class="flex items-center justify-between">
            <form action="#">
                <label
                    class="flex items-center w-[370px] h-14 rounded-2xl p-4 gap-2 bg-white border border-custom-stroke focus-within:border-custom-black transition-300">
                    <img src="@/assets/images/icons/wallet-search-grey.png" class="flex size-6 shrink-0" alt="icon">
                    <input type="text"
                        class="appearance-none w-full placeholder:text-custom-grey font-medium focus:outline-none"
                        placeholder="Search Wallet">
                </label>
            </form>
            <div class="flex items-center gap-4">
                <p class="font-medium text-custom-grey">Show</p>
                <label
                    class="flex items-center h-14 rounded-2xl border border-custom-stroke py-4 px-5 pl-3 bg-white focus-within:border-custom-black transition-300">
                    <select name="" id="" class="text-custom-black font-medium appearance-none focus:outline-none p-2">
                        <option value="10" class="font-medium">10 Entries</option>
                        <option value="20" class="font-medium">20 Entries</option>
                        <option value="40" class="font-medium">40 Entries</option>
                    </select>
                    <img src="@/assets/images/icons/arrow-down-black.svg" class="flex size-6 shrink-0 -ml-1"
                        alt="icon">
                </label>
            </div>
        </div>
        <section id="List-Transactions" class="flex flex-col flex-1 gap-6 w-full">
            <div class="list flex flex-col gap-5">
                <div
                    class="card flex flex-col rounded-[20px] border border-custom-stroke py-[18px] px-5 gap-5 bg-white">
                    <div class="flex items-center gap-5 justify-between pr-[30px]">
                        <div class="flex items-center gap-[14px] w-[320px]">
                            <div class="flex size-[84px] shrink-0 rounded-full bg-custom-background overflow-hidden">
                                <img src="@/assets/images/thumbnails/th-1.svg" class="size-full object-cover"
                                    alt="photo">
                            </div>
                            <div class="flex flex-col gap-[6px] w-full overflow-hidden">
                                <p class="font-bold text-lg leading-tight w-full truncate">
                                    {{ store?.username?.name }}
                                </p>
                                <p class="flex items-center gap-1 font-semibold text-custom-grey leading-none">
                                    <img src="@/assets/images/icons/user-grey.svg" class="size-5" alt="icon">
                                    {{ store?.name }}
                                </p>
                            </div>
                        </div>
                        <div class="flex items-center gap-[10px] w-[260px]">
                            <div
                                class="flex size-14 shrink-0 rounded-full bg-custom-icon-background overflow-hidden items-center justify-center">
                                <img src="@/assets/images/icons/stickynote-black.svg" class="flex size-6 shrink-0"
                                    alt="icon">
                            </div>
                            <div class="flex flex-col gap-1">
                                <p class="font-bold text-lg leading-none">1.260</p>
                                <p class="font-semibold text-custom-grey">Total Transaction</p>
                            </div>
                        </div>
                        <div class="flex items-center gap-[10px] w-[260px]">
                            <div
                                class="flex size-14 shrink-0 rounded-full bg-custom-icon-background overflow-hidden items-center justify-center">
                                <img src="@/assets/images/icons/shopping-cart-black.svg" class="flex size-6 shrink-0"
                                    alt="icon">
                            </div>
                            <div class="flex flex-col gap-1">
                                <p class="font-bold text-lg leading-none">{{ store?.product?.product_count }}</p>
                                <p class="font-semibold text-custom-grey">Total Products</p>
                            </div>
                        </div>
                    </div>
                    <hr class="border-custom-stroke">
                    <div class="flex items-center justify-between">
                        <div class="flex flex-col gap-[6px]">
                            <p class="font-bold text-xl text-custom-blue">Rp 3.200.506</p>
                            <p class="flex items-center gap-2 font-semibold text-custom-grey leading-none">
                                <img src="@/assets/images/icons/wallet-3-grey.svg" class="size-6 flex shrink-0"
                                    alt="icon">
                                Total Wallet
                            </p>
                        </div>
                        <div class="flex items-center justify-end gap-[14px]">
                            <button
                                class="flex items-center justify-center h-14 w-fit shrink-0 rounded-2xl p-4 gap-2 bg-custom-black">
                                <span class="font-semibold text-white">Export</span>
                                <img src="@/assets/images/icons/receive-square-white.svg" class="flex size-6 shrink-0"
                                    alt="icon">
                            </button>
                            <a href="wallet-details.html"
                                class="flex items-center justify-center h-14 w-[126px] shrink-0 rounded-2xl p-4 gap-2 bg-custom-blue">
                                <img src="@/assets/images/icons/eye-white.svg" class="flex size-6 shrink-0" alt="icon">
                                <span class="font-semibold text-white">Details</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div
                    class="card flex flex-col rounded-[20px] border border-custom-stroke py-[18px] px-5 gap-5 bg-white">
                    <div class="flex items-center gap-5 justify-between pr-[30px]">
                        <div class="flex items-center gap-[14px] w-[320px]">
                            <div class="flex size-[84px] shrink-0 rounded-full bg-custom-background overflow-hidden">
                                <img src="@/assets/images/thumbnails/th-2.svg" class="size-full object-cover"
                                    alt="photo">
                            </div>
                            <div class="flex flex-col gap-[6px] w-full overflow-hidden">
                                <p class="font-bold text-lg leading-tight w-full truncate">
                                    Ichsan Electronics
                                </p>
                                <p class="flex items-center gap-1 font-semibold text-custom-grey leading-none">
                                    <img src="@/assets/images/icons/user-grey.svg" class="size-5" alt="icon">
                                    Rizky Ichsan
                                </p>
                            </div>
                        </div>
                        <div class="flex items-center gap-[10px] w-[260px]">
                            <div
                                class="flex size-14 shrink-0 rounded-full bg-custom-icon-background overflow-hidden items-center justify-center">
                                <img src="@/assets/images/icons/stickynote-black.svg" class="flex size-6 shrink-0"
                                    alt="icon">
                            </div>
                            <div class="flex flex-col gap-1">
                                <p class="font-bold text-lg leading-none">1.260</p>
                                <p class="font-semibold text-custom-grey">Total Transaction</p>
                            </div>
                        </div>
                        <div class="flex items-center gap-[10px] w-[260px]">
                            <div
                                class="flex size-14 shrink-0 rounded-full bg-custom-icon-background overflow-hidden items-center justify-center">
                                <img src="@/assets/images/icons/shopping-cart-black.svg" class="flex size-6 shrink-0"
                                    alt="icon">
                            </div>
                            <div class="flex flex-col gap-1">
                                <p class="font-bold text-lg leading-none">240</p>
                                <p class="font-semibold text-custom-grey">Total Products</p>
                            </div>
                        </div>
                    </div>
                    <hr class="border-custom-stroke">
                    <div class="flex items-center justify-between">
                        <div class="flex flex-col gap-[6px]">
                            <p class="font-bold text-xl text-custom-blue">Rp 3.200.506</p>
                            <p class="flex items-center gap-2 font-semibold text-custom-grey leading-none">
                                <img src="@/assets/images/icons/wallet-3-grey.svg" class="size-6 flex shrink-0"
                                    alt="icon">
                                Total Wallet
                            </p>
                        </div>
                        <div class="flex items-center justify-end gap-[14px]">
                            <button
                                class="flex items-center justify-center h-14 w-fit shrink-0 rounded-2xl p-4 gap-2 bg-custom-black">
                                <span class="font-semibold text-white">Export</span>
                                <img src="@/assets/images/icons/receive-square-white.svg" class="flex size-6 shrink-0"
                                    alt="icon">
                            </button>
                            <a href="wallet-details.html"
                                class="flex items-center justify-center h-14 w-[126px] shrink-0 rounded-2xl p-4 gap-2 bg-custom-blue">
                                <img src="@/assets/images/icons/eye-white.svg" class="flex size-6 shrink-0" alt="icon">
                                <span class="font-semibold text-white">Details</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div
                    class="card flex flex-col rounded-[20px] border border-custom-stroke py-[18px] px-5 gap-5 bg-white">
                    <div class="flex items-center gap-5 justify-between pr-[30px]">
                        <div class="flex items-center gap-[14px] w-[320px]">
                            <div class="flex size-[84px] shrink-0 rounded-full bg-custom-background overflow-hidden">
                                <img src="@/assets/images/thumbnails/th-3.svg" class="size-full object-cover"
                                    alt="photo">
                            </div>
                            <div class="flex flex-col gap-[6px] w-full overflow-hidden">
                                <p class="font-bold text-lg leading-tight w-full truncate">
                                    Marcy Beauty
                                </p>
                                <p class="flex items-center gap-1 font-semibold text-custom-grey leading-none">
                                    <img src="@/assets/images/icons/user-grey.svg" class="size-5" alt="icon">
                                    Tata Renata
                                </p>
                            </div>
                        </div>
                        <div class="flex items-center gap-[10px] w-[260px]">
                            <div
                                class="flex size-14 shrink-0 rounded-full bg-custom-icon-background overflow-hidden items-center justify-center">
                                <img src="@/assets/images/icons/stickynote-black.svg" class="flex size-6 shrink-0"
                                    alt="icon">
                            </div>
                            <div class="flex flex-col gap-1">
                                <p class="font-bold text-lg leading-none">1.260</p>
                                <p class="font-semibold text-custom-grey">Total Transaction</p>
                            </div>
                        </div>
                        <div class="flex items-center gap-[10px] w-[260px]">
                            <div
                                class="flex size-14 shrink-0 rounded-full bg-custom-icon-background overflow-hidden items-center justify-center">
                                <img src="@/assets/images/icons/shopping-cart-black.svg" class="flex size-6 shrink-0"
                                    alt="icon">
                            </div>
                            <div class="flex flex-col gap-1">
                                <p class="font-bold text-lg leading-none">240</p>
                                <p class="font-semibold text-custom-grey">Total Products</p>
                            </div>
                        </div>
                    </div>
                    <hr class="border-custom-stroke">
                    <div class="flex items-center justify-between">
                        <div class="flex flex-col gap-[6px]">
                            <p class="font-bold text-xl text-custom-blue">Rp 3.200.506</p>
                            <p class="flex items-center gap-2 font-semibold text-custom-grey leading-none">
                                <img src="@/assets/images/icons/wallet-3-grey.svg" class="size-6 flex shrink-0"
                                    alt="icon">
                                Total Wallet
                            </p>
                        </div>
                        <div class="flex items-center justify-end gap-[14px]">
                            <button
                                class="flex items-center justify-center h-14 w-fit shrink-0 rounded-2xl p-4 gap-2 bg-custom-black">
                                <span class="font-semibold text-white">Export</span>
                                <img src="@/assets/images/icons/receive-square-white.svg" class="flex size-6 shrink-0"
                                    alt="icon">
                            </button>
                            <a href="wallet-details.html"
                                class="flex items-center justify-center h-14 w-[126px] shrink-0 rounded-2xl p-4 gap-2 bg-custom-blue">
                                <img src="@/assets/images/icons/eye-white.svg" class="flex size-6 shrink-0" alt="icon">
                                <span class="font-semibold text-white">Details</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div
                    class="card flex flex-col rounded-[20px] border border-custom-stroke py-[18px] px-5 gap-5 bg-white">
                    <div class="flex items-center gap-5 justify-between pr-[30px]">
                        <div class="flex items-center gap-[14px] w-[320px]">
                            <div class="flex size-[84px] shrink-0 rounded-full bg-custom-background overflow-hidden">
                                <img src="@/assets/images/thumbnails/th-4.svg" class="size-full object-cover"
                                    alt="photo">
                            </div>
                            <div class="flex flex-col gap-[6px] w-full overflow-hidden">
                                <p class="font-bold text-lg leading-tight w-full truncate">
                                    Rierru Fashion
                                </p>
                                <p class="flex items-center gap-1 font-semibold text-custom-grey leading-none">
                                    <img src="@/assets/images/icons/user-grey.svg" class="size-5" alt="icon">
                                    Feary Reyn
                                </p>
                            </div>
                        </div>
                        <div class="flex items-center gap-[10px] w-[260px]">
                            <div
                                class="flex size-14 shrink-0 rounded-full bg-custom-icon-background overflow-hidden items-center justify-center">
                                <img src="@/assets/images/icons/stickynote-black.svg" class="flex size-6 shrink-0"
                                    alt="icon">
                            </div>
                            <div class="flex flex-col gap-1">
                                <p class="font-bold text-lg leading-none">1.260</p>
                                <p class="font-semibold text-custom-grey">Total Transaction</p>
                            </div>
                        </div>
                        <div class="flex items-center gap-[10px] w-[260px]">
                            <div
                                class="flex size-14 shrink-0 rounded-full bg-custom-icon-background overflow-hidden items-center justify-center">
                                <img src="@/assets/images/icons/shopping-cart-black.svg" class="flex size-6 shrink-0"
                                    alt="icon">
                            </div>
                            <div class="flex flex-col gap-1">
                                <p class="font-bold text-lg leading-none">240</p>
                                <p class="font-semibold text-custom-grey">Total Products</p>
                            </div>
                        </div>
                    </div>
                    <hr class="border-custom-stroke">
                    <div class="flex items-center justify-between">
                        <div class="flex flex-col gap-[6px]">
                            <p class="font-bold text-xl text-custom-blue">Rp 3.200.506</p>
                            <p class="flex items-center gap-2 font-semibold text-custom-grey leading-none">
                                <img src="@/assets/images/icons/wallet-3-grey.svg" class="size-6 flex shrink-0"
                                    alt="icon">
                                Total Wallet
                            </p>
                        </div>
                        <div class="flex items-center justify-end gap-[14px]">
                            <button
                                class="flex items-center justify-center h-14 w-fit shrink-0 rounded-2xl p-4 gap-2 bg-custom-black">
                                <span class="font-semibold text-white">Export</span>
                                <img src="@/assets/images/icons/receive-square-white.svg" class="flex size-6 shrink-0"
                                    alt="icon">
                            </button>
                            <a href="wallet-details.html"
                                class="flex items-center justify-center h-14 w-[126px] shrink-0 rounded-2xl p-4 gap-2 bg-custom-blue">
                                <img src="@/assets/images/icons/eye-white.svg" class="flex size-6 shrink-0" alt="icon">
                                <span class="font-semibold text-white">Details</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <nav id="Pagination">
                <ul class="flex items-center gap-3">
                    <li class="group">
                        <button
                            class="flex size-11 shrink-0 rounded-full items-center justify-center bg-custom-blue/10 text-custom-blue group-[&.active]:bg-custom-blue group-[&.active]:text-white font-semibold"
                            disabled>
                            <img src="@/assets/images/icons/arrow-right-no-tail-blue.svg"
                                class="size-6 group-has-[:disabled]:opacity-20 rotate-180" alt="icon">
                        </button>
                    </li>
                    <li class="group active">
                        <button
                            class="flex size-11 shrink-0 rounded-full items-center justify-center bg-custom-blue/10 text-custom-blue group-[&.active]:bg-custom-blue group-[&.active]:text-white font-semibold">
                            1
                        </button>
                    </li>
                    <li class="group">
                        <button
                            class="flex size-11 shrink-0 rounded-full items-center justify-center bg-custom-blue/10 text-custom-blue group-[&.active]:bg-custom-blue group-[&.active]:text-white font-semibold">
                            2
                        </button>
                    </li>
                    <li class="group">
                        <button
                            class="flex size-11 shrink-0 rounded-full items-center justify-center bg-custom-blue/10 text-custom-blue group-[&.active]:bg-custom-blue group-[&.active]:text-white font-semibold">
                            3
                        </button>
                    </li>
                    <li class="group">
                        <button
                            class="flex size-11 shrink-0 rounded-full items-center justify-center bg-custom-blue/10 text-custom-blue group-[&.active]:bg-custom-blue group-[&.active]:text-white font-semibold">
                            4
                        </button>
                    </li>
                    <li class="group">
                        <button
                            class="flex size-11 shrink-0 rounded-full items-center justify-center bg-custom-blue/10 text-custom-blue group-[&.active]:bg-custom-blue group-[&.active]:text-white font-semibold">
                            5
                        </button>
                    </li>
                    <li class="group">
                        <button
                            class="flex size-11 shrink-0 rounded-full items-center justify-center bg-custom-blue/10 text-custom-blue group-[&.active]:bg-custom-blue group-[&.active]:text-white font-semibold">
                            <img src="@/assets/images/icons/arrow-right-no-tail-blue.svg"
                                class="size-6 group-has-[:disabled]:opacity-20" alt="icon">
                        </button>
                    </li>
                </ul>
            </nav>
        </section>
        <div id="Empty-State" class="hidden flex flex-col flex-1 items-center justify-center gap-4">
            <img src="@/assets/images/icons/note-remove-grey.svg" class="size-[52px]" alt="icon">
            <div class="flex flex-col gap-1 items-center text-center">
                <p class="font-semibold text-custom-grey">Oops, you don't have any data yet</p>
            </div>
        </div>
    </div>
</template>