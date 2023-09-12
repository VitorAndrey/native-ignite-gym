import { Button as NatibeBaseButton, IButtonProps, Text } from "native-base";

type ButtonProps = IButtonProps & {
  children: string;
  variant?: "solid" | "outline";
};

export function Button({ children, variant = "solid", ...rest }: ButtonProps) {
  return (
    <NatibeBaseButton
      {...rest}
      w="full"
      h={14}
      bg={variant === "outline" ? "trasnparent" : "green.700"}
      rounded="sm"
      borderWidth={variant === "outline" ? 1 : 0}
      borderColor="green.500"
      _pressed={{ bg: variant === "outline" ? "gray.500" : "green.500" }}
    >
      <Text
        fontFamily="heading"
        color={variant === "outline" ? "green.500" : "white"}
        fontSize="sm"
      >
        {children}
      </Text>
    </NatibeBaseButton>
  );
}
