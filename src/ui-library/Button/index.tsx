import { CSSProperties } from 'react';
import { StyledButton } from './styles';

type ButtonProps = {
  icon?: React.ReactNode;
  iconAlt?: string;
  withShadow?: boolean;
  width?: number;
  style?: CSSProperties;
  onClick: () => void;
  children: React.ReactNode;
};

export default function Button({
  icon,
  withShadow,
  width,
  children,
  style,
  onClick,
}: ButtonProps) {
  return (
    <StyledButton
      onClick={onClick}
      style={style}
      $width={width}
      $withShadow={!!withShadow}
    >
      <div className="d-flex justify-content-center align-items-center">
        {icon ? icon : null}
        <span style={{ marginLeft: '16px' }}>{children}</span>
      </div>
    </StyledButton>
  );
}
