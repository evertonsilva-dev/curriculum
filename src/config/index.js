const baseUrl =
  process.env.NODE_ENV === 'development' ? 'http://localhost:1337' : 'https://strapi-api-curriculum.herokuapp.com/';
console.log(process.env.NODE_ENV);
export default {
  title: 'Front End Developer',
  baseUrl,
};
