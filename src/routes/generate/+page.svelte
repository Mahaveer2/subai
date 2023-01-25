<script>
  import "./form.css";
  import { getResult,MakeImage,createPallete } from "$lib/functions";
  import Spinner from "$lib/components/Spinner.svelte";
	import Form from "../../lib/components/Form.svelte";
  let loading = false;
  let data = null;
  let url = null;
  let pallete;

  const handleSubmit = async (e) => {
    loading = true;
    const fomrdata = new FormData(e.target);
    getResult(
      fomrdata.get("buisness"),
      fomrdata.get("name"),
      fomrdata.get("description")
    ).then(d => {
      data = d;
      createPallete(fomrdata.get("description")).then(p => {
        pallete = p;
      })
      MakeImage(d.logo_prompt).then(_url => {
        loading = false;
        url = _url;
        console.log(url)
      })
    })
  }
</script>


<svelte:head>
  <title>SubAi | Creator </title>
</svelte:head>
{#if loading}
  <Spinner/>
{:else}
<main class="mt-10 container mx-auto w-[90%]">
  <h1 class="text-2xl">Tell us about your buisness</h1>
  <Form
  handleSubmit={handleSubmit}
  />
  <div>
    {#if data}
    
    <div class="card card-side bg-base-100 shadow-xl mt-4">
      {#if url}
      <figure><img class="w-[400px] h-[400px]" src={url} alt="Movie"/></figure>
    {/if}
      <div class="card-body">
        <h2 class="card-title">Voice: {data.voice}</h2>
        <p><span class="rounded-lg text-white p-2 bg-blue-500">The Slogan :</span> {data.slogan}</p>
        <p>Collor Pallete : 
          <img class="w-[100px] h-[100px]" src={pallete} alt="color pallete">
        </p>
      </div>
    </div>
    {/if}
  </div>
</main>
{/if}