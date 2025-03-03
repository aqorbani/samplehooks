declare global {
  namespace JSX {
    interface IntrinsicElements {
      "button-x": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        color?: string;
        label?: string;
      };
    }
  }
}

export {}; // برای اینکه TypeScript این فایل را به عنوان ماژول در نظر بگیرد
