import {
  Input as NativeBaseInput,
  IInputProps,
  FormControl,
} from "native-base";

type InputProps = IInputProps & {
  bg?: "gray.700" | "gray.600";
  errorMessage?: string | null;
};

export function Input({
  errorMessage = null,
  isInvalid,
  bg = "gray.700",
  ...rest
}: InputProps) {
  const invalid = !!errorMessage || isInvalid;

  return (
    <FormControl isInvalid={invalid} mb={4}>
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
        _focus={{
          bg: bg,
          borderWidth: 1,
          borderColor: "green.500",
        }}
        isInvalid={invalid}
        _invalid={{
          borderColor: "red500",
          borderWidth: 1,
        }}
      />

      <FormControl.ErrorMessage _text={{ color: "red.500" }}>
        {errorMessage}
      </FormControl.ErrorMessage>
    </FormControl>
  );
}
