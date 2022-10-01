import { Flex, Input, Text } from "@chakra-ui/react";
import React from "react";

interface DateTimeInputProps {
  labelStyle: any;
  inputStyle: any;
  helperTextStyle?: any;
  errorTextStyle?: any;
  errorMessage?: string;
  helperText?: string;
  label: string;
  onChange: (value: string) => void;
  value: string,
  minimumValue?: string
}

export function DateTimeInput({
  label,
  labelStyle,
  inputStyle,
  helperText,
  helperTextStyle,
  errorMessage,
  errorTextStyle,
  onChange,
  value,
  minimumValue
}: DateTimeInputProps) {
  return (
    <Flex style={{ flexDirection: "column", width: "100%" }}>
      <Text style={labelStyle} color={labelStyle.color}>
        {label}
      </Text>
      <Input
        value={value}
        type='datetime-local'
        style={inputStyle}
        focusBorderColor="primary.purple"
        onChange={(e: any) => {
          onChange(e.target.value);
        }}
        min={minimumValue}
      />
      {helperText && !errorMessage && (
        <Text style={helperTextStyle}>{helperText}</Text>
      )}
      {errorMessage && <Text style={errorTextStyle}>{errorMessage}</Text>}
    </Flex>
  );
}
