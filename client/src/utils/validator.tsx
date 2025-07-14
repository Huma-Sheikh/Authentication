export const nameRegex = /^[a-zA-Z\s]{2,30}$/;
export const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
export const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;
export const ageRegex = /^([1-9][0-9]?|100)$/;
export const genderRegex = /^(male|female|other)$/i;