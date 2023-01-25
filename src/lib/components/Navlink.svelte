<script>
  import { page } from '$app/stores';
  export let title;
  export let href;
</script>

<a {href} class:active={$page.url.pathname == href}>
  {title}
</a>

<style>
  a.active {
    background: inherit !important;
    color: #000;
    position: relative;
  }
a.active::after {
  content: '';
  position: absolute;
  bottom: 20%;
  border-radius: 2px;
  width: 35px;
  height:2px;
  background:#000;
}
</style>