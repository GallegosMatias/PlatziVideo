import md5 from 'md5';

const gravatar = () => {
  const base = 'https://gravatar.com/avatar/';
  const formatteEmail = (email).trim().toLowerCase();
  const hash = md5(formatteEmail, { enconding: "binary" });
  return `${base}${hash}`;
}
