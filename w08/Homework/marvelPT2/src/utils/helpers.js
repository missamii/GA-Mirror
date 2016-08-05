export default {
  getMarvel: function(){
    const fetchSettings = {
      method: "GET"
    }
  return fetch('http://gateway.marvel.com:80/v1/public/',fetchSettings).then((response) => {
   return response.json();
 })
  }
}
