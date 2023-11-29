import { useState, useEffect } from "react";
import "flowbite/dist/flowbite.min.css";
import "flowbite/dist/flowbite.min.js";

const headers = {
  Accept: "application/json",
};
function CarbonCard({ searchTerm }) {
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
        .then(function (res) {
          return res.json();
        })
        .then(function (body) {
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
              <p>Carbon Intensity data for current half hour:</p>{" "}
              <p> Forecast: {area.data[0].data[0].intensity.forecast}</p>
              <p>index: {area.data[0].data[0].intensity.index}</p>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
export default CarbonCard;
