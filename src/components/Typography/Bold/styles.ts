import styled, { DefaultTheme, css } from "styled-components/native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";

const variantFontSize = (theme: DefaultTheme, variant = '16') => ({
  '12': css`
    font-size: ${hp(1.41)}px;
    letter-spacing: -${wp(0.061069)}px;
  `,
  '14': css`
   font-size: ${hp(1.64)}px;
   letter-spacing: -${wp(0.071247)}px;
  `,
  '16': css`
    font-size: ${hp(1.88)}px;
    letter-spacing: -${wp(0.081425)}px;
  `,
  '18': css`
   font-size: ${hp(2.11)}px;
   letter-spacing: -${wp(0.137405)}px;
  `,
  '20': css`
    font-size: ${hp(2.35)}px;
    letter-spacing: -${wp(0.152672)}px;
  `,
  '24': css`
    font-size: ${hp(2.82)}px;
    letter-spacing: -${wp(0.183206)}px;
  `,
  '32': css`
    font-size: ${hp(3.76)}px;
    letter-spacing: -${wp(0.244275)}px;
  `,
  '36': css`
    font-size: ${hp(4.23)}px;
    letter-spacing: -${wp(0.274809)}px;
  `,
  '40': css`
    font-size: ${hp(4.69)}px;
    letter-spacing: -${wp(0.305344)}px;
  `,
  '72': css`
    font-size: ${hp(8.45)}px;
    letter-spacing: -${wp(0.549618)}px;
  `,
}[variant]);

const variantColor = (theme: DefaultTheme, variant = 'secondary') => ({
  primary: css`
    color: ${theme.colors.primary_500};
  `,
  success: css`
    color: ${theme.colors.success_500};
  `,
  error: css`
    color: ${theme.colors.error_500};
  `,
  warning: css`
    color: ${theme.colors.warning_500};
  `,
  information: css`
    color: ${theme.colors.information_500};
  `,
  secondary: css`
    color: ${theme.colors.secondary_500};
  `,
}[variant])

interface ITextProps {
  fontSize?: "12" | "14" | "16" | "18" | "20" | "24" | "32" | "36" | "40" | "72";
  color?: string;
}

export const MyText = styled.Text<ITextProps>`
  font-family: ${({ theme }) => theme.fonts.bold};
  ${({ theme, fontSize }) => variantFontSize(theme, fontSize)};
  color: ${({ theme, color }) => theme.colors[color]};
`;

