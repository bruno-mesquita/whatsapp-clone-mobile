import { Text, View } from "react-native";

type ChatCardProps = {
    username: string;
    avatar: string;
    lastMessage: string;
}

export function ChatCard({ avatar, lastMessage, username }: ChatCardProps) {
    return (
        <View className="h-20 flex-row items-center gap-3">
        <View className="rounded-full size-12 bg-zinc-500" />
        <View>
          <Text>{username}</Text>
          <Text>{lastMessage}</Text>
        </View>
      </View>
    )
}