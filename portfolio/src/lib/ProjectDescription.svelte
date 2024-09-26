<script lang="ts">
  interface Props {
    description: string;
  }

  let { description }: Props = $props();
</script>

<h2 class="mb-4 mt-4 text-justify">
  {description}
</h2>
