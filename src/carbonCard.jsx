import { useState, useEffect } from "react";
const headers = {
  Accept: "application/json",
};
function CarbonCard({ searchTerm }) {
  console.log(searchTerm);
  const [areas, setArea] = useState([]);
  const [isLoading, SetIsLoading] = useState(true);
  useEffect(() => {
    if (searchTerm.length > 0) {
      SetIsLoading(true);
      fetch(
        `https://api.carbonintensity.org.uk/regional/postcode/${searchTerm}`,
        {
          method: "GET",
          headers: headers,
        }
      )
        // .then((response) => response.json())
        // .then((data) => {
        // .then((response) => {
        //   const d = response;
        //   setArea(response.data);
        //   SetIsLoading(false);
        //   console.log(d);
        // });
        .then(function (res) {
          return res.json();
        })
        .then(function (body) {
          console.log(body);
          setArea([body]);
          SetIsLoading(false);
        });
    }
  }, [searchTerm]);
  if (isLoading) {
    return <h3>Loading Carbon Information...</h3>;
  }

  return (
    <main>
      <ul>
        {areas.map((area) => {
          return (
            <li key={area.data[0].shortname}>
              <h2>
                Here is the information you requested on{" "}
                {area.data[0].shortname} {`postcode: `} {searchTerm}
              </h2>
              <p>
                Carbon Intensity data for current half hour:
                {/* {area.data[0].shortname} */}
              </p>{" "}
              <p> Forecast: {area.data[0].data[0].intensity.forecast}</p>
              <p>index: {area.data[0].data[0].intensity.index}</p>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
// data: [{regionid: 5, dnoregion: "NPG Yorkshire", shortname: "Yorkshire", postcode: "S11",…}]}
export default CarbonCard;
