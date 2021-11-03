import React from "react";
import PropTypes from "prop-types";
import {TripItem} from "./TripItem/TripItem";

export default function TripList({ trips, deleteTrip, editTrip }) {
  const sortedTrips = trips.sort((prev, next) =>
    prev.date < next.date ? -1 : 1
  );
  const tripItems = sortedTrips.map((trip) => (
    <TripItem
      key={trip.id}
      id={trip.id}
      date={trip.date}
      distance={trip.distance}
      deleteTrip={deleteTrip}
      editTrip={editTrip}
    />
  ));
  return (
    <div className="card">
      <div className="card-header">
        <h5 className="card-title">Мои тренировки</h5>
      </div>
      <div className="container">
        <div className="row justify-content-between font-weight-bold">
          <div className="col-4 text-center">Дата(ДД.ММ.ГГ)</div>
          <div className="col-4 text-center">Пройдено, км</div>
          <div className="col-4 text-center">Действия</div>
        </div>
      </div>
      <div className="card-body">
        <div className="container">{tripItems}</div>
      </div>
    </div>
  );
}
TripList.propTypes = {
  deleteTrip: PropTypes.func.isRequired,
  editTrip: PropTypes.func.isRequired,
  trips: PropTypes.array.isRequired,
};
