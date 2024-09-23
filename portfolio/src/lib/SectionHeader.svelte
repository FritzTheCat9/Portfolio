<script lang="ts">
  interface Props {
    name: string;
    hidden?: boolean;
  }

  let { name, hidden = false }: Props = $props();
</script>

<h2 class="text-center" {hidden}>
  <p class="font-medium text-3xl">{name}</p>
</h2>
