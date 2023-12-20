import { StyledButton } from './styles';

type ButtonProps = {
  icon?: React.ReactNode;
  iconAlt?: string;
  withShadow?: boolean;
  width?: number;
  children: React.ReactNode;
};

export default function Button({
  icon,
  withShadow,
  width,
  children,
}: ButtonProps) {
  return (
    <StyledButton $width={width} $withShadow={!!withShadow}>
      <div className="d-flex justify-content-center align-items-center">
        {icon ? icon : null}
        <span style={{ marginLeft: '16px' }}>{children}</span>
      </div>
    </StyledButton>
  );
}
