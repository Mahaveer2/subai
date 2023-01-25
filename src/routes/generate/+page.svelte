<script>
	import './form.css';
	import { getResult, MakeImage, createTypo,createPallete } from '$lib/functions';
	import Spinner from '$lib/components/Spinner.svelte';
	import Form from '../../lib/components/Form.svelte';
	import { each } from 'svelte/internal';
	import Card from '../../lib/components/Card.svelte';
	let loading = false;
	let data = null;
	let url = null;
	let pallete = [];
  let typo = "";


	const handleSubmit = async (e) => {
		loading = true;
		const fomrdata = new FormData(e.target);
		getResult(fomrdata.get('buisness'), fomrdata.get('name'), fomrdata.get('description')).then(
			(d) => {
				data = d;
        console.log(d);
				createPallete(fomrdata.get('buisness'), fomrdata.get('name')).then((pall) => {
					pallete = pall;
				});
				MakeImage(d.logo_prompt).then((_url) => {
					loading = false;
					url = _url;
				});
        
        createTypo(fomrdata.get('buisness')).then(_response => {
					console.log(_response);
          typo = _response;
        })
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
		<h1 class="text-2xl">Tell us about your buisness</h1>
		<Form {handleSubmit} />
		<div>
			{#if data}
        <Card
        logo={url}
        personality={data.voice}
        slogan={data.slogan}
        typo={data.typography}
				typo_p={typo}
        colors={pallete}
        />
			{/if}
		</div>
	</main>
{/if}
