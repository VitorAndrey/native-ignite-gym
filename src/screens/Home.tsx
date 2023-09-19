import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import { VStack, FlatList, HStack, Heading, Text } from "native-base";

import { Group } from "@components/Group";
import { HomeHeader } from "@components/HomeHeader";
import { ExerciseCard } from "@components/ExerciseCard";
import { AppNavigationRoutesProps } from "@routes/app.routes";

type GroupsType = string[];

type SelectedGroupType = GroupsType[number]; // Isso cria um tipo que só pode ser uma das strings no array 'groups'

export function Home() {
  const [groups, setGroups] = useState<GroupsType>([
    "Costas",
    "Bíceps",
    "Tríceps",
    "Ombro",
  ]);
  const [selectedGroup, setSelectedGroup] =
    useState<SelectedGroupType>("Costas");

  const [exercises, setExercises] = useState([
    "Remada Unilateral",
    "Supino Inclinado",
    "Rosca Direta",
  ]);

  const navigation = useNavigation<AppNavigationRoutesProps>();

  function handleOpenExerciseDetails() {
    navigation.navigate("exercise");
  }

  return (
    <VStack flex={1}>
      <HomeHeader />

      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Group
            name={item} // Converta o nome para minúsculas para corresponder ao estado
            IsActive={selectedGroup === item}
            onPress={() => setSelectedGroup(item)}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        _contentContainerStyle={{ px: 5 }}
        my={8}
        maxH={10}
        minH={10}
      />

      <VStack flex={1} px={4}>
        <HStack justifyContent="space-between" mb={5}>
          <Heading color="gray.200" fontSize="md" fontFamily="heading">
            Exercícios
          </Heading>

          <Text color="gray.200" fontSize="sm">
            {exercises.length}
          </Text>
        </HStack>

        <FlatList
          data={exercises}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <ExerciseCard
              exercise={item}
              onPress={() => handleOpenExerciseDetails()}
            />
          )}
          showsVerticalScrollIndicator={false}
          _contentContainerStyle={{ paddingBottom: 10 }}
        />
      </VStack>
    </VStack>
  );
}
