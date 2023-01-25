<script>
  import "../app.css";
	import Navbar from "../lib/components/Navbar.svelte";
  import Footer from "$lib/components/Footer.svelte";
	import Progressbar from "../lib/components/Progressbar.svelte";
</script>
<Progressbar/>
<main>
  <Navbar/>
  <slot></slot>
  <Footer/>
</main>