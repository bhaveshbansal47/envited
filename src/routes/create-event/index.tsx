import { Button, Flex, Text } from "@chakra-ui/react";
import moment from "moment";
import React from "react";
import { useEvent } from "../../App";
import { DateTimeInput } from "../../components/common/input/date-time";
import { FileInput } from "../../components/common/input/file";
import { TextInput } from "../../components/common/input/text";
import { useNavigate } from "react-router-dom";

export function CreateEvent() {
  const [event, setEvent] = useEvent();
  const navigate = useNavigate()
  console.log(event)
  return (
    <Flex
      style={{
        height: "100vh",
        flexDirection: "column",
        padding: 24,
      }}
    >
      <Flex style={{ justifyContent: "center", marginBottom: 24 }}>
        <Text
          style={{ fontSize: 16, fontWeight: "700" }}
          color="primary.purpleDark"
        >
          New event
        </Text>
      </Flex>
      <Flex style={{ flexDirection: "column", gap: 16 }}>
        <TextInput
          label="Event title"
          labelStyle={{
            color: "neutrals.dark",
            fontSize: 13,
            marginBottom: 4,
            fontWeight: "500",
          }}
          inputStyle={{ width: "100%", fontSize: 13, height: 32 }}
          onChange={(value: string) => {
            setEvent({
              ...event,
              title: value,
            });
          }}
          value={event.title}
        />
        <TextInput
          label="Host name"
          labelStyle={{
            color: "neutrals.dark",
            fontSize: 13,
            marginBottom: 4,
            fontWeight: "500",
          }}
          inputStyle={{ width: "100%", fontSize: 13, height: 32 }}
          onChange={(value: string) => {
            setEvent({
              ...event,
              host: value,
            });
          }}
          value={event.host}
        />

        <DateTimeInput
          label="Start date & time"
          labelStyle={{
            color: "neutrals.dark",
            fontSize: 13,
            marginBottom: 4,
            fontWeight: "500",
          }}
          inputStyle={{ width: "100%", fontSize: 13, height: 32 }}
          onChange={(value: string) => {
            setEvent({
              ...event,
              startTime: value,
            });
          }}
          value={event.startTime}
          minimumValue={moment().format("YYYY-MM-DDThh:mm")}
        />
        <DateTimeInput
          label="End date & time"
          labelStyle={{
            color: "neutrals.dark",
            fontSize: 13,
            marginBottom: 4,
            fontWeight: "500",
          }}
          inputStyle={{ width: "100%", fontSize: 13, height: 32 }}
          onChange={(value: string) => {
            setEvent({
              ...event,
              endTime: value,
            });
          }}
          value={event.endTime}
          minimumValue={moment().format("YYYY-MM-DDThh:mm")}
        />
        <TextInput
          label="Location"
          labelStyle={{
            color: "neutrals.dark",
            fontSize: 13,
            marginBottom: 4,
            fontWeight: "500",
          }}
          inputStyle={{ width: "100%", fontSize: 13, height: 32 }}
          onChange={(value: string) => {
            setEvent({
              ...event,
              location: value,
            });
          }}
          value={event.location}
        />
        <FileInput
          label="Event image"
          labelStyle={{
            color: "neutrals.dark",
            fontSize: 13,
            marginBottom: 4,
            fontWeight: "500",
          }}
          buttonStyle={{ width: "100%", height: 32 }}
          buttonTextStyle={{ color: "primary.purpleDark", fontSize: 13 }}
          accept="image/*"
          onChange={(value: string, file: File) => {
            setEvent({
              ...event,
              imageValue: value,
              imageFile: file,
            });
          }}
          value={event.imageValue}
        />
      </Flex>
      <Button
        style={{
          borderRadius: 10,
          fontSize: 16,
          fontWeight: "700",
          marginTop: 36,
        }}
        bgGradient="linear-gradient(90deg, primary.purple 3.25%, primary.pink 100%);"
        h={[50, 55]}
        textColor="#fff"
        onClick={() => navigate('/event-summary')}
      >
        <Text fontSize={[16, 20]} style={{ fontWeight: 700, padding: 16 }}>
          Next
        </Text>
      </Button>
    </Flex>
  );
}
