import React from "react";
import AppButton from "../ui/button/AppButton";
import { formContentStyle, formInputStyle } from "./form-styles";
// import formValidator from "../../services/utils/validations";

import AppErrorMessage from "./AppErrorMessage";
import { login } from "../../features/authentication";

export default function Form({ form, onSubmit }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const target = e.target;
    let formData = {};
    form.fields.map((f) => {
      formData[f.input.name] = target[f.input.name].value;
    });
    onSubmit(formData);
  };

  const FormInput = ({ label, input }) => {
    // let { validations } = input
    return (
      <div className="w-3/4">
        <label className="flex self-start mb-1" {...label}>
          {label.name}
        </label>
        <div className={formInputStyle}>
          <input {...input} className="basis-1/2" />
          <div className="basis-1/2 self-center">
            {/* {validations && Object.entries(validations).map(v => {
              formValidator(v, '1')
              return <AppErrorMessage key={v[0]} message={v[1].message} />
            })
            } */}
          </div>
        </div>
      </div>
    );
  };

  const DrawForm = () => (
    <>
      {form.fields.map((field, index) => (
        <FormInput
          key={"" + field.label + index}
          label={field.label}
          input={field.input}
        />
      ))}

      {form.buttons?.map((button, index) => (
        <AppButton
          key={button.title + index}
          title={button.title}
          type={button.type}
        />
      ))}
    </>
  );

  return (
    <form className={formContentStyle} onSubmit={handleSubmit}>
      <DrawForm />
    </form>
  );
}
