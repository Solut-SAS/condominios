import React, { useState } from "react";
import AppButton from "../ui/button/AppButton";
import { formContentStyle, formInputStyle } from "./form-styles";
import AppInputForm from "./AppInputForm";
import AppSelectForm from "./AppSelectForm";
// import formValidator from "../../services/utils/validations";
// import AppErrorMessage from "./AppErrorMessage";

export default function Form({
  form,
  onSubmit,
  loading = false,
  loadedData = {},
  onSelectChange,
}) {
  if (loadedData) {
    form.fields.map((field) => {
      field.input
        ? (field.input.value = loadedData[field.input.name])
        : field.select && (field.select.value = loadedData[field.select.name]);
    });
  }

  const toBase64 = (file, callback) => {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      callback(reader.result);
    };
    reader.onerror = function (error) {
      console.log("Error: ", error);
    };
  };

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      toBase64(file, (base64) => {
        resolve(base64);
      });
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const target = e.target;
    let formData = {};
    form.fields.forEach(async (f) => {
      f.input
        ? (formData[f.input.name] =
            f.input.type != "file"
              ? target[f.input.name].value
              : await convertToBase64(target[f.input.name].files[0]))
        : f.select && (formData[f.select.name] = target[f.select.name].value);
    });
    onSubmit(formData);
  };

  const Form = () => (
    <div>
      {form.fields.map((field, index) => {
        return field.input ? (
          field.input.type != "file" ? (
            <AppInputForm
              value={field.input.value}
              key={"" + field.label + index}
              label={field.label}
              input={field.input}
            />
          ) : !field.input.value ? (
            <AppInputForm
              value={field.input.value}
              key={"" + field.label + index}
              label={field.label}
              input={field.input}
            />
          ) : (
            <div>
              <span>Imagen del procedimiento</span>
              <img
                src={field.input.value}
                className="w-full"
                alt="Sin imagen"
              />
            </div>
          )
        ) : (
          field.select && (
            <AppSelectForm
              key={field.select.name + index}
              title={field.select.name}
              items={field.select.items}
              label={field.label}
              select={field.select}
              value={field.select.value}
              onChange={onSelectChange}
            />
          )
        );
      })}

      {form.buttons?.map((button, index) => (
        <AppButton
          key={button.title + index}
          title={button.title}
          type={button.type}
          submit={button.submit}
          loading={loading}
        />
      ))}
    </div>
  );

  return (
    <form onSubmit={handleSubmit}>
      <Form />
    </form>
  );
}
