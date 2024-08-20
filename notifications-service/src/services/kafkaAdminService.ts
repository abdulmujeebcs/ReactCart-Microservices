import Kafka from "@/config/kafkaConfig";

export async function createTopic(topicName: string, numPartitions: number) {
    const admin = Kafka.admin();
    console.log("Admin connecting...");
    admin.connect();
    console.log("Adming Connection Success...");

    console.log(`Creating Topic [${topicName}]`);
    await admin.createTopics({
        topics: [
            {
                topic: topicName,
                numPartitions,
            },
        ],
    });
    console.log(`Topic Created Success [${topicName}]`);

    console.log("Disconnecting Admin..");
    await admin.disconnect();
}
