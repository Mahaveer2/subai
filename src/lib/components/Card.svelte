<script>
	import Packaging from "./Packaging.svelte";

	export let colors;
  export let personality;
  export let slogan;
  export let typo;
  export let typo_p;
  export let logo;
  export let packaging;

  let msg = false;
  let showCards = false;

  const copyContent = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      msg = true;

      setTimeout(() => {
        msg = false;
      },1000)
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  }
</script>
{#if msg}
  
<div id="toast-default" class="flex items-center w-full max-w-xs p-4 sticky top-10 right-10 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800" role="alert">
  <div class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-blue-500 bg-blue-100 rounded-lg dark:bg-blue-800 dark:text-blue-200">
      <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clip-rule="evenodd"></path></svg>
  </div>
  <div class="ml-3 text-sm font-normal">Copied succesfully!</div>
  <button type="button" class="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" data-dismiss-target="#toast-default" aria-label="Close">
      <span class="sr-only">Close</span>
      <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
  </button>
</div>

{/if}

{#if showCards}
<button class="text-white mb-6" on:click={() => showCards = !showCards}>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
  </svg>
  </button>
<h1 class="text-2xl md:mt-0 mt-12">Packaging Designs</h1>
<Packaging packaging={packaging}/>

{:else}
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
        <div class="flex flex-col items-center justify-center">
          <button on:click={() => showCards = !showCards} class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Packaging Designs</button>
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
          <button on:click={() => copyContent(color.hexcode)} class="bg-gray-700 transition hover:bg-gray-800 h-[100px] w-[40px] flex justify-center items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75" />
            </svg>            
          </button>
				</div>
			{/each}
		</div>
  </div>
	</div>
</div>

{/if}
