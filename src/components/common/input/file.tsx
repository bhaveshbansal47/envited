import { Button, Flex, Input, Text } from "@chakra-ui/react";
import React, { useRef } from "react";

interface FileInputProps {
  labelStyle: any;
  buttonStyle: any;
  helperTextStyle?: any;
  errorTextStyle?: any;
  errorMessage?: string;
  helperText?: string;
  label: string;
  onChange: (value: string, file: File) => void;
  value: string;
  accept: string;
  buttonTextStyle: any;
}

export function FileInput({
  label,
  labelStyle,
  buttonStyle,
  helperText,
  helperTextStyle,
  errorMessage,
  errorTextStyle,
  onChange,
  value,
  accept,
  buttonTextStyle,
}: FileInputProps) {
  const inputRef = useRef<HTMLInputElement | null>(null);
  return (
    <Flex style={{ flexDirection: "column", width: "100%" }}>
      <Text style={labelStyle} color={labelStyle.color}>
        {label}
      </Text>
      <Input
        value={value}
        type="file"
        ref={(instance) => {
          inputRef.current = instance;
        }}
        hidden
        accept={accept}
        onChange={(e: any) => {
          onChange(e.target.value, e.target.files[0]);
        }}
      />
      <Flex>
        <Button
          style={buttonStyle}
          onClick={() => {
            inputRef.current?.click();
          }}
        >
          <Text style={buttonTextStyle} color={buttonTextStyle.color}>
            {value ? "Change image" : "Choose image"}
          </Text>
        </Button>
        {value && (
          <Text
            style={{ width: "100%", textAlign: "center", alignItems: "center" }}
            color={"primary.purpleDark"}
          >
            {value.split("\\").at(-1)}
          </Text>
        )}
      </Flex>
      {helperText && !errorMessage && (
        <Text style={helperTextStyle}>{helperText}</Text>
      )}
      {errorMessage && <Text style={errorTextStyle}>{errorMessage}</Text>}
    </Flex>
  );
}
