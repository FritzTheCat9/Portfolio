<script lang="ts">
  class Form {
    name = $state('');
    email = $state('');
    message = $state('');

    reset(): void {
      this.name = '';
      this.email = '';
      this.message = '';
    }
  }

  let form = new Form();

  let formMessage = $state('');
  let success = $state(false);

  // const secureToken = import.meta.env.VITE_SMTPJS_SECURE_TOKEN;
  // const recipientEmail = import.meta.env.VITE_RECIPIENT_EMAIL;

  const handleSubmit = async (event: SubmitEvent) => {
    event.preventDefault();
    formMessage = '';

    if (!form.name) {
      formMessage = 'Name is required.';
      return;
    }

    if (!form.email) {
      formMessage = 'Email is required.';
      return;
    }

    if (!form.message) {
      formMessage = 'Message is required.';
      return;
    }

    try {
      await sendEmail(form);
      success = true;
      formMessage = 'Message sent successfully!';
      form.reset();
    } catch (error) {
      console.error(error);
      formMessage = 'Failed to send message. Please try again.';
    }
  };

  const sendEmail = async (form: Form) => {
    // Load SMTPJS library from CDN dynamically
    // if (!window.Email) {
    //   const script = document.createElement('script');
    //   script.src = 'https://smtpjs.com/v3/smtp.js';
    //   document.body.appendChild(script);
    //   await new Promise((resolve) => {
    //     script.onload = resolve;
    //   });
    // }
    // return window.Email.send({
    //   SecureToken: secureToken,
    //   To: recipientEmail,
    //   From: form.email,
    //   Subject: `New message from ${form.name}`,
    //   Body: `Name: ${form.name} <br> Email: ${form.email} <br> Message: ${form.message}`,
    // });
  };
</script>

<form
  onsubmit={handleSubmit}
  class="flex flex-col gap-4 max-w-lg mx-auto my-4 p-4 bg-white rounded-lg shadow-md">
  <div class="flex flex-col">
    <label for="name" class="text-sm font-medium text-gray-700">Name:</label>
    <input
      id="name"
      bind:value={form.name}
      type="text"
      placeholder="Name"
      class="mt-1 p-2 border border-gray-300 rounded-md"
      required />
  </div>

  <div class="flex flex-col">
    <label for="email" class="text-sm font-medium text-gray-700">Email:</label>
    <input
      id="email"
      bind:value={form.email}
      type="email"
      placeholder="Email"
      class="mt-1 p-2 border border-gray-300 rounded-md"
      required />
  </div>

  <div class="flex flex-col">
    <label for="message" class="text-sm font-medium text-gray-700">Message:</label>
    <textarea
      id="message"
      bind:value={form.message}
      placeholder="Message"
      class="mt-1 p-2 border border-gray-300 rounded-md h-32"
      required></textarea>
  </div>

  <button
    type="submit"
    disabled={success}
    class="bg-blue-500 text-white font-medium py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed">
    Send Message
  </button>

  {#if formMessage}
    <p class="text-sm font-medium {success ? 'text-green-500' : 'text-red-500'}">
      {formMessage}
    </p>
  {/if}
</form>
