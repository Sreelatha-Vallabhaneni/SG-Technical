import { ButtonProps } from '@src/typings/layout-components';
import { ButtonBase } from './Button.styles';


export default function Button({
  variant = 'primary',
  ...props
}: ButtonProps) {
  return <ButtonBase $variant={variant} {...props} />;
}
