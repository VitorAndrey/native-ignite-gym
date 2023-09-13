import {
  Box,
  HStack,
  Heading,
  Icon,
  Image,
  ScrollView,
  Text,
  VStack,
} from "native-base";
import { TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

import { useNavigation } from "@react-navigation/native";
import { AppNavigationRoutesProps } from "@routes/app.routes";

import BodySvg from "@assets/body.svg";
import SeriesSvg from "@assets/series.svg";
import Repetitions from "@assets/repetitions.svg";
import { Button } from "@components/Button";

export function Exercise() {
  const navigation = useNavigation<AppNavigationRoutesProps>();

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <VStack flex={1}>
      <VStack px={8} bg="gray.600" pt={12}>
        <TouchableOpacity onPress={handleGoBack}>
          <Icon as={Feather} name="arrow-left" color="green.500" size={6} />
        </TouchableOpacity>

        <HStack justifyContent="space-between" alignItems="center" my={6}>
          <Heading color="gray.100" fontSize="lg" flexShrink={1}>
            Puxada frontal
          </Heading>

          <HStack alignItems="center">
            <BodySvg />
            <Text color="gray.200" ml={1} textTransform="capitalize">
              Costas
            </Text>
          </HStack>
        </HStack>
      </VStack>

      <ScrollView>
        <VStack p={8}>
          <Image
            w="full"
            h={80}
            source={{
              uri: "https://thumb.mais.uol.com.br/16669847-large.jpg?ver=0",
            }}
            alt="Nome do execício"
            mb={3}
            resizeMode="cover"
            rounded="lg"
          />

          <Box bg="gray.600" rounded="md" pb={4} px={6}>
            <HStack
              justifyContent="space-between"
              alignItems="center"
              mt={6}
              mb={6}
            >
              <HStack>
                <SeriesSvg />
                <Text fontSize="sm" color="gray.200" ml={2}>
                  3 séries
                </Text>
              </HStack>

              <HStack>
                <Repetitions />
                <Text fontSize="sm" color="gray.200" ml={2}>
                  12 repetições
                </Text>
              </HStack>
            </HStack>

            <Button>Marcar Como Realizado</Button>
          </Box>
        </VStack>
      </ScrollView>
    </VStack>
  );
}
