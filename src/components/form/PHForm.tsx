import { ReactNode } from "react";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";

type TPHForm = {
  children: ReactNode;
  onSubmit: SubmitHandler<FieldValues>;
};

const PHForm = ({ children, onSubmit }: TPHForm) => {
  const methods = useForm();
  const { handleSubmit, reset } = methods;

  const submitHandler: SubmitHandler<FieldValues> = (data) => {
    onSubmit(data);
    reset();
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(submitHandler)}>{children}</form>
    </FormProvider>
  );
};

export default PHForm;
