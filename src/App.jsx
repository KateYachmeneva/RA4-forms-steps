import { useState } from "react";
import "./App.css";
import { AddNewTrip } from "./components/AddNewTrip/AddNewTrip";
import TripList from "./components/TripList/TripList";

const DUMMY_DATA = [
  { id: "w1", date: 1614459600000, distance: 5.7 },
  { id: "w2", date: 1618426800000, distance: 10.2 },
  { id: "w3", date: 1624906800000, distance: 15.7 },
];

function App() {
  const [trips, setTrip] = useState(DUMMY_DATA);
  const [editData, setEditData] = useState({ date: "", distance: "" });

  const addNewTripHandler = (newTrip) => {
    console.log(trips);
    console.log(newTrip.date);
    const isNewTrip = trips.find(trip => trip.id=== newTrip.id);
    console.log(isNewTrip);
    if (isNewTrip) {
      const newObj = {
        ...isNewTrip,
        distance: +isNewTrip.distance + +newTrip.distance
      }
       setTrip((prevState) => {
        const filteredTrips = prevState.filter(
          (trip) => trip.date !== isNewTrip.date
        );
        return [...filteredTrips, newObj];
      });
    } else {
      setTrip((prevState) => [...prevState, newTrip]);
    }
  };

  const deleteTripHandler = (id) => {
    if (id) {
      setTrip((prevState) => {
        const filteredTrips = prevState.filter((trip) => trip.id !== id);
        return [...filteredTrips];
      });
    }
  };

  const editTripHandler = (id) => {
    const findTrip = trips.find((trip) => trip.id === id);
    setEditData({
      id: findTrip.id,
      date: new Date(findTrip.date)
        .toISOString()
        .slice(0, 10)
        .split("-")
        .reverse()
        .join("."),
      distance: findTrip.distance,
    });
  };

  return (
    <div className="container pt-5">
      <AddNewTrip addNewTrip={addNewTripHandler} data={editData} />
      <TripList
        trips={trips}
        deleteTrip={deleteTripHandler}
        editTrip={editTripHandler}
      />
    </div>
  );
}

export default App;
