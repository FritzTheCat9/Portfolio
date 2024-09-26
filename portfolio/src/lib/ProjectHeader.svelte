<script lang="ts">
  interface Props {
    name: string;
  }

  let { name }: Props = $props();
</script>

<h1 class="text-2xl font-bold mb-4 text-center mt-4">{name}</h1>
