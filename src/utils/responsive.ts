interface ResponsiveProps {
  ssm?: () => void;
  sm?: () => void;
  md?: () => void;
  lg?: () => void;
  xl?: () => void;
  xxl?: () => void;
}
export const responsiveCallback = ({
  ssm,
  sm,
  md,
  lg,
  xl,
  xxl,
}: ResponsiveProps) => {
  const screenWidth = window.innerWidth;
  if (screenWidth >= 1536) {
    xxl?.();
  } else if (screenWidth >= 1280) {
    xl?.();
  } else if (screenWidth >= 1024) {
    lg?.();
  } else if (screenWidth >= 768) {
    md?.();
  } else if (screenWidth >= 640) {
    sm?.();
  } else if (screenWidth < 640) {
    ssm?.();
  }
};
