import React from 'react';

export default function AddFood(props) {
  const { btnSubmit } = props;
  return (
    <div>
      <form onSubmit={btnSubmit}>
        <div className="field">
          <label className="label">Name</label>
          <div className="control has-icons-right">
            <input
              name="name"
              className="input is-success"
              type="text"
              placeholder="Enter Name"
            />
          </div>
        </div>

        <div className="field">
          <label className="label">calories</label>
          <div className="control has-icons-right">
            <input
              name="calories"
              className="input is-success"
              type="text"
              placeholder="Enter Calories"
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Image</label>
          <div className="control has-icons-right">
            <input
              name="image"
              className="input is-success"
              type="text"
              placeholder="Enter Image"
            />
          </div>
        </div>
        <div className="field is-grouped">
          <div className="control">
            <button className="button is-success">Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
}
