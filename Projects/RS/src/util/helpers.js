export default {
  byName: function(name){

    const fetchSettings = {
      method: 'GET'
    }
    return fetch('https://data.cityofnewyork.us/resource/xx67-kt59.json?dba='+ name, fetchSettings).then((response) => {
      return response.json();
    });
  }
};
