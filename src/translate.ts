/**
 * Translate text via an OpenAI-compatible chat completions API.
 * No dependency on SillyTavern internals — pure fetch.
 */
export async function translateText(
    text: string,
    promptTemplate: string,
    languageName: string,
    apiUrl: string,
    apiKey: string,
    model: string,
): Promise<string> {
    const filledPrompt = promptTemplate
        .replace(/{{text}}/g, text)
        .replace(/{{language}}/g, languageName);

    const baseUrl = apiUrl.replace(/\/+$/, '');
    const endpoint = baseUrl.endsWith('/chat/completions') ? baseUrl : `${baseUrl}/chat/completions`;

    const headers: Record<string, string> = { 'Content-Type': 'application/json' };
    if (apiKey) {
        headers['Authorization'] = `Bearer ${apiKey}`;
    }

    const response = await fetch(endpoint, {
        method: 'POST',
        headers,
        body: JSON.stringify({
            model: model,
            messages: [{ role: 'user', content: filledPrompt }],
            temperature: 0.3,
            max_tokens: 4096,
        }),
    });

    if (!response.ok) {
        const errorBody = await response.text().catch(() => 'Unknown error');
        throw new Error(`API error (${response.status}): ${errorBody}`);
    }

    const data = await response.json();
    const content: string | undefined = data?.choices?.[0]?.message?.content;
    if (!content) {
        throw new Error('API returned empty response — check model and API key');
    }
    return content.trim();
}
