export const getGamingMode = (): boolean => {
  return localStorage.getItem("gamingMode") === "true";
};

export const setGamingMode = (value: boolean) => {
  localStorage.setItem("gamingMode", String(value));
};
