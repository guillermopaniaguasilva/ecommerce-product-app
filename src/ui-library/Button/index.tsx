import { CSSProperties } from 'react';
import { StyledButton } from './styles';

type ButtonProps = {
  icon?: React.ReactNode;
  iconAlt?: string;
  withShadow?: boolean;
  width?: number;
  style?: CSSProperties;
  children: React.ReactNode;
};

export default function Button({
  icon,
  withShadow,
  width,
  children,
  style,
}: ButtonProps) {
  return (
    <StyledButton style={style} $width={width} $withShadow={!!withShadow}>
      <div className="d-flex justify-content-center align-items-center">
        {icon ? icon : null}
        <span style={{ marginLeft: '16px' }}>{children}</span>
      </div>
    </StyledButton>
  );
}
