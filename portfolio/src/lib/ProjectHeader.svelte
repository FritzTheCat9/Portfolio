<script lang="ts">
  interface Props {
    name: string;
  }

  let { name }: Props = $props();
</script>

<p class="text-2xl font-bold mb-4 text-center mt-4">{name}</p>
