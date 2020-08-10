import React, { useState } from "react";
import { form, input } from "./SearchBusinessForm.treat";
import Input from "../../design-system/form/Input/Input";
import Button from "../../design-system/form/Button/Button";

type BusinessSearchResult = {
  location: string;
  term: string;
};

type Props = {
  onSubmit: (result: BusinessSearchResult) => void;
};

function SearchBusinessForm({ onSubmit }: Props) {
  const [formState, setFormState] = useState({
    location: "Milano",
    term: "",
  });

  const onChange = (field: keyof typeof formState) => (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormState({
      ...formState,
      [field]: e.target.value,
    });
  };

  return (
    <form
      className={form}
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(formState);
      }}
    >
      <Input
        label="Location"
        value={formState.location}
        onChange={onChange("location")}
        className={input}
      />
      <Input
        label="Term"
        value={formState.term}
        onChange={onChange("term")}
        className={input}
      />
      <Button>Search</Button>
    </form>
  );
}

export default SearchBusinessForm;
