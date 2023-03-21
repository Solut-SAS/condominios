export default (permission) => () => {
  let user = JSON.parse(window.localStorage.getItem("user"));
  return user.permissions.indexOf(permission) === -1;
};
