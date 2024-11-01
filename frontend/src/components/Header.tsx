// Header.tsx
function HTML() {
  const template = document.createElement("template");
  const colo = "bg-blue-200";

  template.innerHTML = `
    <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-32">
  <div class="md:flex">
    <div class="md:shrink-0">
      <img class="h-48 w-full object-cover md:h-full md:w-48" src="/assets/img/loro.webp">
    </div>
    <div class="p-8">
      <div class="uppercase tracking-wide text-sm text-indigo-900 font-semibold">Company retreats</div>
      <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">julio.corbaz@gmail.com</a>
      <p class="mt-2 text-slate-500">Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of places to do just that.</p>
    </div>
  </div>
</div>
    <div class="m-6 p-3 shadow-lg text-xl ${colo} text-purple-700 rounded-md">
      Hello world
    </div>
  `.trim();

  return template.content;
}

export default HTML();
