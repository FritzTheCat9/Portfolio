<script lang="ts">
  interface Props {
    name: string;
    hidden?: boolean;
  }

  let { name, hidden = false }: Props = $props();
</script>

<div class="text-center" {hidden}>
  <h1 class="font-medium text-3xl">{name}</h1>
</div>
