<script>
	export let colors;
  export let personality;
  export let slogan;
  export let typo;
  export let typo_p;
  export let logo;

  const copyContent = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      console.log('Content copied to clipboard');
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  }
</script>

<div class="w-[90%] mx-auto">
	<div class="shadow grid grid-cols-1 md:grid-cols-3 p-10 ">
    <div class="col-span-2">
      <div class="flex flex-col gap-10">
        <img src={logo} class="w-[150px] shadow h-[150px] rounded-full" alt="">
        <div>
          <h1 class="text-2xl mb-5">Personality : {personality}</h1>
        </div>
        <div>
          <h1 class="text-2xl mb-2">Slogan </h1>
          <p>{slogan}</p>
        </div>
        <div>
          <h1 class="text-2xl mb-5">Typography : {typo}</h1>
          <p>
            {typo_p}
          </p>
        </div>
      </div>

    </div>
    <div class="flex flex-col items-center justify-center">
      <h1 class="text-2xl mb-12 md:mt-0 mt-12">Color Palette</h1>
		<div class="md:flex md:justify-center md:flex-col md:items-center grid grid-cols-2">
			{#each colors as color}
				<div class="flex justify-center items-center">
					<div
						class="w-[100px] h-[100px] text-white flex items-center justify-center flex-col"
						style={`background:${color.hexcode}`}
					>
						<span class="font-bold">{color.colorname}</span>
						<p>{color.hexcode}</p>
					</div>
          <button class="bg-gray-700 transition hover:bg-gray-800 h-[100px] w-[40px] flex justify-center items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75" />
            </svg>            
          </button>
				</div>
			{/each}
		</div></div>
	</div>
</div>
