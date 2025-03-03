declare namespace JSX {
  interface IntrinsicElements {
    "button-x": React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement
    > & {
      color?: string;
      label?: string;
    };
  }
}

export {};
