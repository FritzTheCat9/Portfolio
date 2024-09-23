<script lang="ts">
  interface Props {
    description: string;
  }

  let { description }: Props = $props();
</script>

<p class="mb-6 text-justify mt-4">
  {description}
</p>
