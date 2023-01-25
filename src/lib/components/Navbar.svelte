<script>
	import Navlink from "./Navlink.svelte";

</script>
<div class="navbar sticky top-0 bg-transparent backdrop-blur-md z-[1000]">
  <div class="flex-1">
    <a href="/" class="btn btn-ghost normal-case text-xl">Amd</a>
  </div>
  <div class="flex-none">
    <ul class="menu menu-horizontal px-1">
      <li>
        <Navlink
        title="Home"
        href="/"
        />
      </li>
      <li>
        <Navlink
        title="About"
        href="/about"
        />
      </li>
    </ul>
  </div>
</div>