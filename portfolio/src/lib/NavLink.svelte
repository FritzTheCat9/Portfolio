<script lang="ts">
  interface Props {
    href: string;
    text: string;
  }

  let { href, text }: Props = $props();

  function scrollIntoView(event: MouseEvent) {
    event.preventDefault();

    const target = event.currentTarget as HTMLAnchorElement;
    const href = target.getAttribute('href');
    if (!href) return;

    const el = document.querySelector(href);
    if (!el) return;

    el.scrollIntoView({
      behavior: 'smooth',
    });
  }
</script>

<a {href} class="font-medium text-2xl" onclick={scrollIntoView}>{text}</a>
