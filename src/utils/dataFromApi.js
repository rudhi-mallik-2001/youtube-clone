 import  axios  from "axios";

const BASE_URL='https://youtube-v31.p.rapidapi.com';
const options = {
  url: BASE_URL,
  params: {
    maxResults: '50'
  },
  //rudhimallik234:---75a1d8f6e9msh370dea24b536bbap1b0d4djsn30622fbebb94
  //mallik.rudhi:---5d50d1ba1amsh46795bcf4a4d873p14281djsn927d87d7fd87
  headers: {
    'X-RapidAPI-Key': '75a1d8f6e9msh370dea24b536bbap1b0d4djsn30622fbebb94',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

export const dataFromApi=async(url)=>{
  const { data }=await axios.get(`${BASE_URL}/${url}`,options);
return data;
}


// const BASE_URL='https://youtube-v31.p.rapidapi.com';
// const options = {
//   params: {
//     maxResults: '50'
//   },
//   headers: {
//     'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
//     'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
//   }
// };
// export const dataFromApi=(async(url)=>{
//   const {data}=await axios.get(`${BASE_URL}/${url}`,options)
//   // .then(function (response) {
//   //   console.log(response.data);
//   // }).catch(function (error) {
//   //   console.error(error);
//   // });
//   return data;
// })
