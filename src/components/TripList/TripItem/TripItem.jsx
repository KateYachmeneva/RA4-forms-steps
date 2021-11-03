import React, { useRef } from "react";
import PropTypes from "prop-types";

export function TripItem({ date, deleteTrip, distance, editTrip, id }) {
  const ref = useRef();
  const convDate = new Date(date).toISOString().slice(0,10).split('-').reverse().join('.');
  console.log(convDate);
  const onClickHandler = (event) => {
    const { name } = event.target;
    const { id } = ref.current.dataset;
    name === "edit" ? editTrip(id) : deleteTrip(id);
  };
  return (
    <div
      ref={ref}
      className="row justify-content-between align-items-center pb-2 mb-2"
      style={{ borderBottom: "1px solid #dee2e6" }}
      data-id={id}
    >
      <div className="col text-center">{convDate}</div>
      <div className="col text-center">{distance}</div>
      <div className="col text-center">
        <div className="row">
          <div className="col">
            <button
              name="edit"
              className="btn btn-primary"
              onClick={onClickHandler}
            >
              Редактировать
            </button>
          </div>
          <div className="col">
            <button
              name="delete"
              className="btn btn-primary"
              onClick={onClickHandler}
            >
              Удалить
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

TripItem.propTypes = {
  date: PropTypes.number.isRequired,
  deleteTrip: PropTypes.func.isRequired,
  distance: PropTypes.number.isRequired,
  editTrip: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};
