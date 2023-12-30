import React, { useState } from "react";
import "../Styles/createnewgraph.css";

const CreateNewGraph = () => {
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [xaxis, setXaxis] = useState("");
  const [yaxis, setYaxis] = useState("");
  const [maxvalue, setMaxValue] = useState("");
  const [minvalue, setMinValue] = useState("");
  const [prefix, setPrefix] = useState("");
  const [suffix, setSuffix] = useState("");

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Do something with the title and subtitle, for example, send them to a server or update state in a parent component
    console.log("Title:", title);
    console.log("Subtitle:", subtitle);
    console.log("Axis X:", xaxis);
    console.log("Axis Y:", yaxis);
    console.log("Max Value:", maxvalue);
    console.log("Min Value:", minvalue);
    console.log("Prefix:", prefix);
    console.log("Suffix:", suffix);
  };

  return (
    <div className="container grpah-parent">
      <div className="container graph-content">
        <div className="container grpah-top">
          <form onSubmit={handleSubmit}>
            <div className="top-input">
              {/* Title Input */}
              <label htmlFor="title">Title:</label>
              <input
                type="text"
                id="title"
                name="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />

              {/* Subtitle Input */}
              <label htmlFor="subtitle">Subtitle:</label>
              <input
                type="text"
                id="subtitle"
                name="subtitle"
                value={subtitle}
                onChange={(e) => setSubtitle(e.target.value)}
                required
              />
            </div>

            <div className="container middle-input">
              <div className="container left-input">
                {/* <label htmlFor="xaxis">Axis X</label> */}
                <input
                  type="text"
                  id="xaxis"
                  name="xaxis"
                  value={xaxis}
                  placeholder="Axis X"
                  onChange={(e) => setXaxis(e.target.value)}
                  required
                />

                {/* Subtitle Input */}
                {/* <label htmlFor="subtitle">Subtitle:</label> */}
                <input
                  type="text"
                  id="yaxis"
                  name="yaxis"
                  placeholder="Axis Y"
                  value={yaxis}
                  onChange={(e) => setYaxis(e.target.value)}
                  required
                />
                <input
                  type="text"
                  id="maximumvalue"
                  name="maximumvalue"
                  placeholder="Maximum Value"
                  value={maxvalue}
                  onChange={(e) => setMaxValue(e.target.value)}
                  required
                />
                <input
                  type="text"
                  id="minvalue"
                  name="minvalue"
                  placeholder="Minimum Value"
                  value={minvalue}
                  onChange={(e) => setMinValue(e.target.value)}
                  required
                />
                <div className="prf_suff">
                <input
                  type="text"
                  id="prefix"
                  name="prefix"
                  placeholder="Prefix"
                  value={prefix}
                  onChange={(e) => setPrefix(e.target.value)}
                  required
                />
                <input
                  type="text"
                  id="suffix"
                  name="suffix"
                  placeholder="Suffix"
                  value={suffix}
                  onChange={(e) => setSuffix(e.target.value)}
                  required
                />
                </div>
              </div>
              <div className="container right-input">
              
                {/* <label htmlFor="xaxis">Axis X</label> */}
                <input
                  type="text"
                  id="xaxis"
                  name="xaxis"
                  value={xaxis}
                  placeholder="Axis X"
                  onChange={(e) => setXaxis(e.target.value)}
                  required
                />

                {/* Subtitle Input */}
                {/* <label htmlFor="subtitle">Subtitle:</label> */}
                <input
                  type="text"
                  id="yaxis"
                  name="yaxis"
                  placeholder="Axis Y"
                  value={yaxis}
                  onChange={(e) => setYaxis(e.target.value)}
                  required
                />
                <input
                  type="text"
                  id="maximumvalue"
                  name="maximumvalue"
                  placeholder="Maximum Value"
                  value={maxvalue}
                  onChange={(e) => setMaxValue(e.target.value)}
                  required
                />
                <input
                  type="text"
                  id="minvalue"
                  name="minvalue"
                  placeholder="Minimum Value"
                  value={minvalue}
                  onChange={(e) => setMinValue(e.target.value)}
                  required
                />
                <div className="prf_suff">
                <input
                  type="text"
                  id="prefix"
                  name="prefix"
                  placeholder="Prefix"
                  value={prefix}
                  onChange={(e) => setPrefix(e.target.value)}
                  required
                />
                <input
                  type="text"
                  id="suffix"
                  name="suffix"
                  placeholder="Suffix"
                  value={suffix}
                  onChange={(e) => setSuffix(e.target.value)}
                  required
                />
                </div>
              
              </div>
            </div>

            {/* Submit Button */}
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateNewGraph;
