<script>
	import './form.css';
	import { getResult,MakePackaging, MakeImage, createTypo, createPallete } from '$lib/functions';
	import Spinner from '$lib/components/Spinner.svelte';
	import Form from '../../lib/components/Form.svelte';
	import { each } from 'svelte/internal';
	import Card from '../../lib/components/Card.svelte';
	let loading = false;
	let data = null;
	let url = null;
	let pallete = [];
	let typo = '';
	let packaging = [];

	const handleSubmit = async (e) => {
		loading = true;
		const fomrdata = new FormData(e.target);
		getResult(fomrdata.get('buisness'), fomrdata.get('name'), fomrdata.get('description')).then(
			(d) => {
				data = d;
				MakeImage(d.logo_prompt,fomrdata.get('name')).then((_url) => {
					loading = false;
					url = _url;
				});

				MakePackaging(fomrdata.get('buisness'),fomrdata.get('name')).then(res => {
					packaging = res;
				})

				createPallete(fomrdata.get('buisness'), fomrdata.get('name')).then((pall) => {
					pallete = pall;
				});

				createTypo(fomrdata.get('buisness')).then((_response) => {
					typo = _response;
				});

				if(pallete.length > 1 && data && typo){
					loading = false;
				}
			}
		);
	};
</script>

<svelte:head>
	<title>SubAi | Creator</title>
</svelte:head>
{#if loading}
	<Spinner />
{:else}
	<main class="mt-10 mb-10 container mx-auto w-[90%]">
		{#if !data}
			<h1 class="text-2xl">Tell us about your buisness</h1>
			<Form {handleSubmit} />
		{/if}
		<div>
			{#if !loading}
				{#if data}
					<Card
						logo={url}
						personality={data.voice}
						slogan={data.slogan}
						typo={data.typography}
						typo_p={typo}
						colors={pallete}
						packaging={packaging}
					/>
				{/if}
			{/if}
		</div>
	</main>
{/if}
