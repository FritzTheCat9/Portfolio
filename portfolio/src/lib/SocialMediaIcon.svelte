<script lang="ts">
  interface Props {
    href: string;
    iconPath: string;
    iconAlt: string;
  }

  let { href, iconPath, iconAlt }: Props = $props();
</script>

<a {href} target="_blank" aria-label={iconAlt}>
  <img class="w-10" src={iconPath} alt={iconAlt} />
</a>
