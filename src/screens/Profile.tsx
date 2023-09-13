import { useState } from "react";

import {
  Center,
  ScrollView,
  VStack,
  Skeleton,
  Text,
  Heading,
} from "native-base";

import { ScreenHeader } from "@components/ScreenHeader";
import { UserPhoto } from "@components/UserPhoto";
import { TouchableOpacity } from "react-native";
import { Input } from "@components/Input";
import { Button } from "@components/Button";

export function Profile() {
  const [isPhotoLoading, setIsPhotoLoading] = useState<boolean>(false);

  const PHOTO_SIZE = 32;

  return (
    <VStack flex={1}>
      <ScreenHeader title="Perfil" />

      <ScrollView px={5} mt={6}>
        <Center>
          {isPhotoLoading ? (
            <Skeleton
              w={PHOTO_SIZE}
              h={PHOTO_SIZE}
              rounded="full"
              startColor="gray.300"
              endColor="gray.500"
            />
          ) : (
            <UserPhoto
              source={{ uri: "https://github.com/VitorAndrey.png" }}
              alt="Foto do usuário"
              size={PHOTO_SIZE}
            />
          )}

          <TouchableOpacity>
            <Text
              color="green.500"
              fontWeight="bold"
              fontSize="md"
              mt={2}
              mb={8}
            >
              Alterar Foto
            </Text>
          </TouchableOpacity>

          <Input bg="gray.600" placeholder="Nome" />

          <Input bg="gray.600" placeholder="Email" isDisabled />

          <Heading
            color="gray.200"
            fontSize="md"
            mb={2}
            mt={12}
            alignSelf="flex-start"
          >
            Alterar senha
          </Heading>

          <Input bg="gray.600" placeholder="Senha antiga" secureTextEntry />
          <Input bg="gray.600" placeholder="Nova senha" secureTextEntry />
          <Input
            bg="gray.600"
            placeholder="Confirmar nova senha"
            secureTextEntry
          />

          <Button mt={4} mb={9}>
            Atualizar
          </Button>
        </Center>
      </ScrollView>
    </VStack>
  );
}
