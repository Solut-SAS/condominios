const registerForm = {
  fields: [
    {
      label: {
        name: "Nombre del comercio",
        htmlFor: "commerce-name",
      },
      input: {
        id: "commerce-name",
        name: "commerceName",
        type: "text",
        required: true,
        placeholder: "El nombre de tu negocio",
      },
    },
    {
      label: {
        name: "Nombre del encargado",
        htmlFor: "name",
      },
      input: {
        id: "name",
        name: "name",
        type: "text",
        required: true,
        placeholder: "Nombre del administrador",
      },
    },
    {
      label: {
        name: "Celular",
        htmlFor: "cellphone",
      },
      input: {
        id: "cellphone",
        name: "cellphone",
        type: "text",
        required: true,
        placeholder: "Celular",
      },
    },
    {
      label: { name: "Correo", htmlFor: "email" },
      input: {
        id: "email",
        name: "email",
        type: "email",
        required: true,
        placeholder: "Correo electrónico",
      },
    },
    {
      label: { name: "Contraseña", htmlFor: "password" },
      input: {
        id: "password",
        name: "password",
        type: "password",
        required: true,
        placeholder: "Contraseña",
      },
    },
  ],
  buttons: [
    {
      type: "primaryClass",
      title: "Registrarme",
      action: "signupAction",
    },
  ],
};

const login = {
  fields: [
    {
      label: {
        name: "Usuario",
        htmlFor: "username",
      },
      input: {
        id: "username",
        name: "username",
        type: "text",
        required: true,
        placeholder: "Usuario",
        validations: {
          required: {
            value: true,
            message: "El usuario es requerido",
          },
        },
      },
    },
    {
      label: {
        name: "Contraseña",
        htmlFor: "password",
      },
      input: {
        id: "password",
        name: "password",
        type: "password",
        required: true,
        placeholder: "Contraseña",
        validations: {
          required: {
            value: true,
            message: "La contraseña es requerida",
          },
          minLength: {
            value: 5,
            message: "Longitud mínima de 5",
          },
        },
      },
    },
  ],
  buttons: [
    // {
    //   type: "secondaryClass",
    //   title: "Regresar",
    //   action: "loginAction",
    // },
    {
      type: "primaryClass",
      title: "Iniciar sesión",
      action: "loginAction",
      submit: true
    },
  ],
};

const incidentForm = {
  fields: [
    {
      label: {
        name: "Descripción",
        htmlFor: "incidentForm",
      },
      input: {
        id: "description",
        name: "description",
        type: "text",
        required: true,
        placeholder: "Describa el incidente",
        validations: {
          required: {
            value: true,
            message: "EL detalle es requerido",
          },
          maxLength: {
            value: 280,
            message: "Longitud máxima de 280",
          },
        },
      },
    },
    {
      label: {
        name: "Tipo de incidente",
        htmlFor: "incidentForm",
      },
      select: {
        id: "type",
        name: "type",
        type: "text",
        required: true,
        placeholder: "",
        disabled: false,
        items: [
          {value: "security", text:"Seguridad"},
          {value: "coexistence", text:"Convivencia"}, 
          {value: "damage", text:"Daño"}
        ],
      },
    },
    // {
    //   label: {
    //     name: "",
    //     htmlFor: "incidentForm",
    //   },
    //   input: {
    //     id: "image",
    //     name: "image",
    //     type: "file",
    //     required: true,
    //     placeholder: "",
    //     disabled: false,
    //   },
    // }
  ],
  buttons: [

    {
      type: "incident",
      title: "Registrar",
      action: "IncidentAction",
      submit: true
    },
  ],
  
};

const incidentFormforEdit = {
  fields: [
    {
      label: {
        name: "Descripción",
        htmlFor: "incidentForm",
      },
      input: {
        id: "description",
        name: "description",
        type: "text",
        required: true,
        placeholder: "Describa el incidente",
        validations: {
          required: {
            value: true,
            message: "EL detalle es requerido",
          },
          maxLength: {
            value: 280,
            message: "Longitud máxima de 280",
          },
        },
      },
    },
    // {
    //   label: {
    //     name: "Tipo de incidente",
    //     htmlFor: "incidentForm",
    //   },
    //   select: {
    //     id: "type",
    //     name: "type",
    //     type: "text",
    //     required: true,
    //     placeholder: "",
    //     disabled: false,
    //     items: [
    //       {value: "security", text:"Seguridad"},
    //       {value: "coexistence", text:"Convivencia"}, 
    //       {value: "damage", text:"Daño"}
    //     ],
    //   },
    // },
    // {
    //   label: {
    //     name: "",
    //     htmlFor: "incidentForm",
    //   },
    //   input: {
    //     id: "image",
    //     name: "image",
    //     type: "file",
    //     required: true,
    //     placeholder: "",
    //     disabled: false,
    //   },
    // }
  ],
  buttons: [
    
    {
      type: "incident",
      title: "Guardar Cambios",
      action: "IncidentAction",
      submit: true
    },
  ],
  
};
export { login, registerForm, incidentForm, incidentFormforEdit };
