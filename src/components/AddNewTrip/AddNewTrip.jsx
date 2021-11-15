import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import shortid from "shortid";
import { convertDate } from "../../utils/convertDate";

export function AddNewTrip({ data, addNewTrip }) {
  const [inputDate, setInputDate] = useState("");
  const [inputDistance, setInputDistance] = useState("");
  const [id, setId] = useState(null);
console.log(shortid.generate());

  useEffect(() => {
    setInputDate(data.date);
    setInputDistance(data.distance);
    setId(data.id);
  }, [data.date, data.distance, data.id]);

  const onSubmitHandler = (event) => {
    debugger;
    event.preventDefault();
   console.log(inputDate);

    const convertedDate = convertDate(inputDate);
    const payload = {
      id: id || shortid.generate(),
      date: convertedDate,
      distance: Number(inputDistance),
    };
    console.log(convertedDate);
    addNewTrip(payload);
    setInputDate("");
    setInputDistance("");
    setId("");
  };

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    name === "date" ? setInputDate(value) : setInputDistance(value);
  };
  return (
    <form className="mb-5" onSubmit={onSubmitHandler}>
      <div className="row">
        <div className="col">
          Дата(ДД.ММ.ГГ)
          <input
            type="text"
            className="form-control"
            placeholder="Введите дату..."
            name="date"
            value={inputDate}
            onChange={onChangeHandler}
          />
        </div>
        <div className="col">
          Пройдено, км
          <input
            type="text"
            className="form-control"
            placeholder="Введите пройденное расстояние..."
            name="range"
            value={inputDistance}
            onChange={onChangeHandler}
          />
        </div>
        <div className="col align-self-end">
          <button className="btn btn-primary">Добавить</button>
        </div>
      </div>
    </form>
  );
}
AddNewTrip.propTypes = {
  addNewTrip: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
};
