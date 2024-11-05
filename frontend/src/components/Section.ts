const Section = `
<!-- frontend/src/templates/Main.html -->
<!-- <script src="https://cdn.tailwindcss.com"></script> -->

<div class="bg-cyan-600">
    <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 class="text-2xl font-bold tracking-tight text-white">Los clientes también compraron</h2>

        <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            <div class="group relative">
                <div
                    class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                    <img src="https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-01.jpg"
                        alt="Front of men&#039;s Basic Tee in black."
                        class="h-full w-full object-cover object-center lg:h-full lg:w-full">
                </div>
                <div class="mt-4 flex justify-between">
                    <div>
                        <h3 class="text-sm text-yellow-300">
                            <a href="#">
                                <span aria-hidden="true" class="absolute inset-0 text-yellow-300"></span>
                                Basic Tee
                            </a>
                        </h3>
                        <p class="mt-1 text-sm text-yellow-300">Negra</p>
                    </div>
                    <p class="text-sm font-medium text-yellow-300">$35</p>
                </div>
            </div>

            <!-- Mas products... -->
        </div>
    </div>
</div>`;
export default Section;