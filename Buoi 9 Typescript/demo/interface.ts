// defined somewhere
interface HTMLInputProps {
  value: string;
  onChange: (e: unknown) => void;
  className: string;
}

type HTMLElementProps = {
  // className: 'test1';
  style: unknown;
}

interface ComponentProps extends HTMLInputProps, HTMLElementProps {
  value: number;
}
