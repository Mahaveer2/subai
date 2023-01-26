<script>
	export let packaging;
</script>

<div class="mt-10 md:w-full grid grid-cols-2">
	{#each packaging as image}
		<div>
			<img
				class="w-full hover:brightness-75  cursor-pointer"
				src={image.url}
				alt="Ai generated packaging for your buisness"
			/>
		</div>
	{/each}
</div>
