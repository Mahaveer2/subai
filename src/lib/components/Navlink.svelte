<script>
  import { page } from '$app/stores';
  export let title;
  export let href;
</script>

<a href={href} class={`block py-2 pl-3 pr-4 ${ ($page.url.pathname == href) ? "text-white bg-blue-700" : "text-gray-400"} rounded md:bg-transparent  md:p-0 `} >{title}</a>