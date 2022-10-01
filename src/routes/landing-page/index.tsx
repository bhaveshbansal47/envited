import { Button, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

export function LandingPage() {
  const navigate = useNavigate();
  return (
    <Flex
      style={{
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        flexDirection: "column",
      }}
      bg="secondary.purple3"
    >
      <Flex style={{ flexDirection: "column", textAlign: "center" }}>
        <Flex style={{ flexDirection: "column", marginBottom: 16 }}>
          <Text
            color="primary.purpleDark"
            style={{ fontSize: 36, fontWeight: "700", lineHeight: 1 }}
          >
            Imagine if
          </Text>
          <Text
            bgGradient="linear-gradient(90deg, primary.purple 24.2%, primary.pink 120.46%)"
            bgClip="text"
            style={{ fontSize: 36, fontWeight: "700", lineHeight: 1 }}
          >
            Snapchat
          </Text>
          <Text
            color="primary.purpleDark"
            style={{ fontSize: 36, fontWeight: "700", lineHeight: 1 }}
          >
            had events.
          </Text>
        </Flex>
        <Text
          style={{ fontSize: 16, lineHeight: 1, fontWeight: "300", width: 321 }}
          color="neutrals.dark"
        >
          Easily host and share events with your friends across any social
          media.
        </Text>
      </Flex>
      <Image
        src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/ea95af2d-7f06-4f25-859c-9069519053a7/Landing_page_image.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221001%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221001T053410Z&X-Amz-Expires=86400&X-Amz-Signature=75603add34aaa6737bfe404a282e2ef642e4f65f0c08d11f5e0302480812b0f4&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Landing%2520page%2520image.svg%22&x-id=GetObject"
        w={[166, 311]}
        borderRadius={[13, 25]}
        mt={[35, 55]}
        mb={[33, 51]}
      />
      <Button
        onClick={() => {
          navigate("/create-event");
        }}
        style={{ borderRadius: 10, fontSize: 16, fontWeight: "700" }}
        bgGradient="linear-gradient(90deg, primary.purple 3.25%, primary.pink 100%);"
        h={[50, 55]}
        textColor="#fff"
      >
        <Text fontSize={[16, 20]} style={{ fontWeight: 700, padding: 16 }}>
          🎉 Create my event
        </Text>
      </Button>
    </Flex>
  );
}
