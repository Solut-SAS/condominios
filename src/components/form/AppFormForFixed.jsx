import { useNavigate } from "react-router-dom";
import { FieldValues, useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import AppButton from "../ui/button/AppButton";
import { formContentStyle, formInputStyle } from "./form-styles";
import {
  FormInputProps,
  FormButtonsProps,
  FormProps,
  DynamicFormType,
} from "./types";

export default function Form({ form }) {
  // let navigate = useNavigate();

  // TODO
  const handleSubmit = (e) => {
    e.preventDefault();

    const target = e.target;

    form.fields.map((f) => {
      console.log(target[f.input.name].value);
    });
    // navigate("/dashboard", { replace: true });
    return {};
  };

  // TODO
  // const actions: ActionProps = { loginAction: handleSubmit, signupAction: handleSubmit };

  // const DrawComponent = ({ data, element, Component }: FormInputProps | FormButtonsProps | string): JSX.Element[] => {
  //   return Object.values(data[element]).map((args, index) => (
  //     <Component {...args} key={Symbol(index)} action={actions[args.action as keyof ActionProps]} />
  //   ));
  // };

  const FormInput = ({ label, input }) => {
    return (
      <>
        <label {...label}>{label.name}</label>
        <input className={formInputStyle} {...input} />
      </>
    );
  };

  const DrawForm = () => (
    <>
      {form.fields.map((field) => (
        <FormInput label={field.label} input={field.input} />
      ))}

      {form.buttons?.map((button) => (
        <AppButton title={button.title} type={button.type} />
      ))}
      {/* <DrawComponent data={form.fields} element='fields' Component={"FormInput"} />
      <DrawComponent data={form.buttons} element='buttons' Component={"AppButton"} /> */}
    </>
  );

  return (
    <div className={formContentStyle}>
      <form onSubmit={handleSubmit}>
        <DrawForm />
      </form>
    </div>
  );
}
