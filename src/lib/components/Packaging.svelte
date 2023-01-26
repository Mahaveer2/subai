<script>
	export let packaging;
</script>

<div class="md:flex mt-10 md:w-[800px] md:flex-row grid grid-cols-2">
	{#each packaging as image}
		<div>
			<img
				class="w-[200px] hover:brightness-75 h-[200px] cursor-pointer"
				src={image.url}
				alt="Ai generated packaging for your buisness"
			/>
		</div>
	{/each}
</div>
