export interface IInput extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    type: string;
    className?: string;
    value?: string;
    placeholder?: string;
}