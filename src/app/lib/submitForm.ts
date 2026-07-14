const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

interface SubmitFormOptions {
  subject: string;
  fromName: string;
  replyTo?: string;
  fields: Record<string, string>;
}

export async function submitForm({
  subject,
  fromName,
  replyTo,
  fields,
}: SubmitFormOptions) {
  const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

  if (!accessKey) {
    throw new Error(
      "Form submissions aren't configured yet. Please call or email us directly."
    );
  }

  const response = await fetch(WEB3FORMS_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      access_key: accessKey,
      subject,
      from_name: fromName,
      replyto: replyTo,
      ...fields,
    }),
  });

  const result = await response.json();

  if (!result.success) {
    throw new Error(result.message || "Failed to submit the form.");
  }

  return result;
}
