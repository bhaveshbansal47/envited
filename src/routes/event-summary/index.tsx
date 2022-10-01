import { Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { useEvent } from "../../App";

export function EventSummary() {
  const [event, setEvent] = useEvent();
  return (
    <Flex>
      <Image
        src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/17d6299f-f287-469c-a403-b8ab9d75aa62/Birthday_cake.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221001%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221001T075341Z&X-Amz-Expires=86400&X-Amz-Signature=61bf2112ffc9931d8ca424020d6b5d2049d94e7d422b306bfd4cee16780d2d7d&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Birthday%2520cake.png%22&x-id=GetObject"
        maxH={593}
        maxW={593}
        width="100%"
        height={"100%"}
      />
      <Flex>
        <Text>{event.title}</Text>
        <Flex>
          <Text>Hosted by</Text> <Text>{event.host}</Text>
        </Flex>
      </Flex>
      <Flex>
        <Image />
        <Flex>
          <Text>{event.startTime}</Text>
          <Text>to {event.endTime}</Text>
        </Flex>
      </Flex>
      <Flex>
        <Image />
        <Flex>
          <Text>{event.location}</Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
