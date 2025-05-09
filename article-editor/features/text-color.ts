export type ApplyTextColorProps = {
    color: string
};

export function applyTextColor({ color }: ApplyTextColorProps) {
    const selection = window.getSelection();
    if (!selection || selection.rangeCount === 0) { return };
    const range = selection.getRangeAt(0);
    if (range.collapsed) { return };

    let parentElement = range.commonAncestorContainer as HTMLElement;
    if (parentElement.nodeType === Node.TEXT_NODE) {
        parentElement = parentElement.parentElement as HTMLElement;
    }

    if (parentElement && parentElement.nodeName === "SPAN") {
        parentElement.style.color = color;
    }
    else {
        const span = document.createElement("span");
        span.style.color = color;
        range.surroundContents(span);
    }
}