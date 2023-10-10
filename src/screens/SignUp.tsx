import { VStack, Image, Text, Center, Heading, ScrollView } from "native-base";
import { useForm, Controller } from "react-hook-form";

import LogoSvg from "@assets/logo.svg";
import BackgoundImg from "@assets/background.png";

import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { useNavigation } from "@react-navigation/native";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

type FormDataProps = {
  name: string;
  email: string;
  password: string;
};

const signUpSchema = z.object({
  name: z.string().min(2, { message: "Insira o nome" }),
  email: z
    .string()
    .email({ message: "Insira um nome válido" })
    .min(5, { message: "Insira o email" }),
  password: z
    .string()
    .min(6, { message: "A senha deve conter ao menos 6 dígitos" }),
});

export function SignUp() {
  const navigation = useNavigation();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataProps>({
    resolver: zodResolver(signUpSchema),
  });

  function handleGoBack() {
    navigation.goBack();
  }

  function handleSignUp(data: FormDataProps) {
    const user = {
      name: data.name,
      email: data.email,
      password: data.password,
    };

    fetch("http://172.25.238.247:3333/users", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
  }

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <VStack flex={1} px={10}>
        <Image
          source={BackgoundImg}
          defaultSource={BackgoundImg}
          alt="Pessoas treinando"
          resizeMode="contain"
          position="absolute"
        />

        <Center my={24}>
          <LogoSvg />

          <Text color="gray.100" fontSize="sm">
            Treine sua mente e o seu corpo
          </Text>
        </Center>

        <Center flex={1}>
          <Heading color="gray.100" fontSize="xl" mb={6} fontFamily="heading">
            Crie sua conta
          </Heading>

          <Controller
            control={control}
            name="name"
            render={({ field: { onChange, value } }) => (
              <Input
                placeholder="Nome"
                onChangeText={onChange}
                value={value}
                errorMessage={errors.name?.message}
              />
            )}
          />

          <Controller
            control={control}
            name="email"
            render={({ field: { onChange, value } }) => (
              <Input
                placeholder="E-mail"
                keyboardType="email-address"
                autoCapitalize="none"
                onChangeText={onChange}
                value={value}
                errorMessage={errors.email?.message}
              />
            )}
          />

          <Controller
            control={control}
            name="password"
            render={({ field: { onChange, value } }) => (
              <Input
                placeholder="Senha"
                secureTextEntry
                onChangeText={onChange}
                value={value}
                onSubmitEditing={handleSubmit(handleSignUp)}
                errorMessage={errors.password?.message}
                returnKeyType="send"
              />
            )}
          />

          <Button onPress={handleSubmit(handleSignUp)}>Criar e acessar</Button>
        </Center>

        <Center my={20}>
          <Button variant="outline" onPress={handleGoBack}>
            Voltar para o login
          </Button>
        </Center>
      </VStack>
    </ScrollView>
  );
}
