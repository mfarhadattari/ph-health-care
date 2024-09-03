"use client";

import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import OutlinedInput from "@mui/material/OutlinedInput";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Theme, useTheme } from "@mui/material/styles";
import * as React from "react";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(
  value: string,
  selectedValues: readonly string[],
  theme: Theme
) {
  return {
    fontWeight:
      selectedValues.indexOf(value) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

type TProps = {
  options: { value: string; label: string }[];
  selected: string[];
  setSelected: React.Dispatch<React.SetStateAction<string[]>>;
};

export default function SchedulesSelector({
  options,
  selected,
  setSelected,
}: TProps) {
  const theme = useTheme();
  const handleChange = (event: SelectChangeEvent<typeof selected>) => {
    const {
      target: { value },
    } = event;
    setSelected(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    <Box>
      <FormControl sx={{ width: "100%" }}>
        <InputLabel id="ph-multiple-chip-label">Select</InputLabel>
        <Select
          labelId="ph-multiple-chip-label"
          id="ph-multiple-chip"
          multiple
          value={selected}
          onChange={handleChange}
          input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
          renderValue={(selected) => (
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
              {selected.map((value) => {
                const current = options.find(
                  (option) => option.value === value
                );
                if (current) {
                  return <Chip key={current.value} label={current.label} />;
                }
              })}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {options.map((option) => (
            <MenuItem
              key={option?.value}
              value={option?.value}
              style={getStyles(option.value, selected, theme)}
            >
              {option?.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
