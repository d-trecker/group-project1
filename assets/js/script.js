fetch(
  "https://trailapi-trailapi.p.rapidapi.com/?q-activities_activity_type_name_eq=hiking&radius=25&q-state_cont=California&q-country_cont=Australia&q-city_cont=Denver&lon=-105.2&limit=25&lat=34.1",
  {
    method: "GET",
    headers: {
      "x-rapidapi-key": "71594afed5msh50ce715d2d49ad9p1e4272jsn5e55143481b8",
      "x-rapidapi-host": "trailapi-trailapi.p.rapidapi.com",
    },
  }
)
  .then((response) => {
    console.log(response);
  })
  .catch((err) => {
    console.error(err);
  });
