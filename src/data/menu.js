export const menu = [
  {
    path: "commerces",
    name: "Mis condominios",
    icon: "home",
    roles: ["ADMIN", "GUARD", "OWNER"],
    status: "active",
  },
  {
    path: "invitations",
    name: "Invitaciones",
    icon: "home",
    roles: ["ADMIN", "GUARD", "OWNER"],
    status: "active",
  },
  {
    path: "user-annotations",
    name: "Incidentes",
    icon: "home",
    roles: ["OWNER", "ADMIN", "GUARD"],
    status: "active",
  },
  {
    path: "annotations",
    name: "Comunicados",
    icon: "home",
    roles: ["ADMIN", "GUARD"],
    status: "active",
  },
  {
    path: "zones",
    name: "Espacios",
    icon: "home",
    roles: ["ADMIN", "GUARD"],
    status: "inactive",
  },
  {
    path: "packages",
    name: "Paquetes",
    icon: "home",
    roles: ["ADMIN", "GUARD"],
    status: "inactive",
  },
];
