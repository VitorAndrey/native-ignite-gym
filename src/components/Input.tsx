import { Input as NativeBaseInput, IInputProps } from "native-base";

type InputProps = IInputProps & {
  bg?: "gray.700" | "gray.600";
};

export function Input({ bg = "gray.700", ...rest }: InputProps) {
  return (
    <NativeBaseInput
      {...rest}
      bg={bg}
      h={14}
      px={4}
      borderWidth={0}
      fontSize="md"
      color="white"
      fontFamily="body"
      placeholderTextColor="gray.300"
      mb={4}
      _focus={{
        bg: bg,
        borderWidth: 1,
        borderColor: "green.500",
      }}
    />
  );
}
