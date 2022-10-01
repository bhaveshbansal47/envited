import { Flex, Input, Text } from "@chakra-ui/react";
import React from "react";

interface TextInputProps {
  labelStyle: any;
  inputStyle: any;
  helperTextStyle?: any;
  errorTextStyle?: any;
  errorMessage?: string;
  helperText?: string;
  label: string;
  onChange: (value: string) => void;
  value: string
}

export function TextInput({
  label,
  labelStyle,
  inputStyle,
  helperText,
  helperTextStyle,
  errorMessage,
  errorTextStyle,
  onChange,
  value
}: TextInputProps) {
  return (
    <Flex style={{ flexDirection: "column", width: "100%" }}>
      <Text style={labelStyle} color={labelStyle.color}>
        {label}
      </Text>
      <Input
        value={value}
        type="text"
        style={inputStyle}
        focusBorderColor="primary.purple"
        onChange={(e: any) => {
          onChange(e.target.value);
        }}
      />
      {helperText && !errorMessage && (
        <Text style={helperTextStyle}>{helperText}</Text>
      )}
      {errorMessage && <Text style={errorTextStyle}>{errorMessage}</Text>}
    </Flex>
  );
}
