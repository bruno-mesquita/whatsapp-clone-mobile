import { FlatList, Text, TextInput, View } from "react-native";

import { ChatCard } from "@/components/chat-card";

export default function Index() {
  return (
    <FlatList
      className="bg-white"
      contentContainerClassName="p-5"
      data={Array.from({ length: 20 })}
      keyExtractor={(_, index) => `${index}-item`}
      ItemSeparatorComponent={() => (
        <View className="w-[95%] h-0.5 bg-zinc-200 self-center" />
      )}
      ListHeaderComponent={
        <>
          <Text className="mb-2 text-lg">Chats</Text>
          <TextInput
            className="border border-zinc-200 h-10 rounded-md px-3"
            placeholder="Search"
          />
        </>
      }
      renderItem={() => (
        <ChatCard avatar="" lastMessage="Message" username="User 1" />
      )}
    />
  );
}
