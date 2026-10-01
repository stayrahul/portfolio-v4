/**
 * Robust clipboard copy helper with fallback for environments where
 * navigator.clipboard is unsupported or throws NotAllowedError / permission errors.
 */
export async function copyToClipboard(text: string): Promise<boolean> {
  if (typeof window === "undefined") return false;

  // Primary method: modern asynchronous Clipboard API
  if (navigator?.clipboard && typeof navigator.clipboard.writeText === "function") {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch {
      // Permission denied, iframe constraint, or browser context blocked - proceed to fallback
    }
  }

  // Fallback method: hidden textarea with document.execCommand
  try {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    // Avoid scrolling to bottom on mobile
    textArea.style.position = "fixed";
    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.width = "2em";
    textArea.style.height = "2em";
    textArea.style.padding = "0";
    textArea.style.border = "none";
    textArea.style.outline = "none";
    textArea.style.boxShadow = "none";
    textArea.style.background = "transparent";
    textArea.style.opacity = "0";
    textArea.setAttribute("readonly", "");

    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    textArea.setSelectionRange(0, text.length);

    const successful = document.execCommand("copy");
    document.body.removeChild(textArea);
    return successful;
  } catch (err) {
    console.warn("Failed to copy text to clipboard:", err);
    return false;
  }
}
