<script lang="ts">
  import cvPdfFile from './../assets/Bartłomiej_Umiński_CV.pdf';

  function downloadCV() {
    const a = document.createElement('a');
    a.href = cvPdfFile;
    a.download = 'Bartłomiej_Umiński_CV.pdf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }
</script>

<button
  onclick={downloadCV}
  class="bg-blue-500 text-white font-medium py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300">
  Download CV
</button>
