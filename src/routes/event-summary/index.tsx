import { Flex, Image, Text } from "@chakra-ui/react";
import moment from "moment";
import React from "react";
import { useEvent } from "../../App";

export function EventSummary() {
  const [event] = useEvent();
  return (
    <Flex style={{ flexDirection: "column" }}>
      <Image
        src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/17d6299f-f287-469c-a403-b8ab9d75aa62/Birthday_cake.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221001%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221001T075341Z&X-Amz-Expires=86400&X-Amz-Signature=61bf2112ffc9931d8ca424020d6b5d2049d94e7d422b306bfd4cee16780d2d7d&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Birthday%2520cake.png%22&x-id=GetObject"
        maxH={593}
        maxW={593}
        width="100%"
        height={"100%"}
      />
      <Flex style={{ flexDirection: "column", padding: 20 }}>
        <Flex style={{ flexDirection: "column", marginBottom: 32 }}>
          <Text
            color={"primary.purpleDark"}
            style={{ fontSize: 28, fontWeight: "700" }}
          >
            {event.title || "Birthday Bash"}
          </Text>
          <Flex>
            <Text
              color={"neutrals.light"}
              style={{ fontSize: 14, fontWeight: "400" }}
            >
              {"Hosted by"}
            </Text>
            <Text
              color={"neutrals.light"}
              style={{ fontSize: 14, fontWeight: "700", marginLeft: 4 }}
            >
              {event.host || "Bhavesh"}
            </Text>
          </Flex>
        </Flex>
        <Flex style={{ gap: 20, marginBottom: 20 }}>
          <Image src="/calendar.png" style={{ width: 48, height: 48 }} />
          <Flex style={{ flexDirection: "column" }}>
            <Text
              style={{ fontSize: 16, fontWeight: "700" }}
              color="primary.purpleDark"
            >
              {(event.startTime &&
                moment(event.startTime).format("DD MMM h:mm")) ||
                "18 August 6:00PM"}
            </Text>
            <Text style={{ fontSize: 16 }} color="neutrals.dark">
              to <b>{event.endTime || "18 August 6:00PM"}</b>
            </Text>
          </Flex>
        </Flex>
        <Flex style={{ gap: 20 }}>
          <Image src="/location.png" style={{ width: 48, height: 48 }} />
          <Flex style={{ flexDirection: "column", justifyContent: "center" }}>
            <Text
              style={{ fontSize: 16, fontWeight: "700" }}
              color="primary.purpleDark"
            >
              {event.location || "Street Name"}
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
