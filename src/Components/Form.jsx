import React from "react";
import { Link } from "react-router-dom";
import "./Form.css";

const Form = () => {
  return (
    <div className="form-container">
      <div className="form-title">Find Your Space Now</div>
      <div className="form-group">
        <label htmlFor="location" className="form-label">
          Location
        </label>
        <input
          type="text"
          id="location"
          name="location"
          className="form-input location-input"
          placeholder="Guwahati, Assam"
          disabled={true}
        />
      </div>
      <div className="form-group">
        <label htmlFor="type" className="form-label">
          Type
        </label>
        <select
          id="type"
          name="type"
          className="form-input type-input"
          placeholder="Type of Office"
        >
          <option value="coworking">Coworking</option>
          <option value="private">Private</option>
          <option value="meeting">Meeting</option>
          <option value="event">Event</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="date" className="form-label">
          Date
        </label>
        <input
          type="date"
          id="date"
          name="date"
          className="form-input date-input"
        />
      </div>
      <Link
        to="https://docs.google.com/forms/d/e/1FAIpQLSdGhmXNjT0REz7SAyVu4trPve1bt29R1rI-wX6DmitWGGYDRw/viewform"
        target="_blank"
        className="submit-link"
      >
        <button type="submit" className="form-btn">
          <span className="form-btn-text">Book My Space</span>
        </button>
      </Link>
    </div>
  );
};

export default Form;
