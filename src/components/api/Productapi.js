import React, { useEffect, useState } from "react";

function Apiapp() {
  const [apdata, setapdata] = useState({ products: [] });
  const [query, setQuery] = useState("");

  const fetchData = async () => {
    try {
      const res = await fetch("https://dummyjson.com/products");
      const data = await res.json();
      setapdata(data);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const searchParameters = Object.keys(apdata.products[0] || {});

  const search = (products) => {
    return products.filter((product) =>
      searchParameters.some((parameter) => {
        const value = product[parameter];
        if (value) {
          return value.toString().toLowerCase().includes(query.toLowerCase());
        }
        return false;
      })
    );
  };

  const filteredProducts = search(apdata.products);

  return (
    <div className="container">
      <center>
        <h1>Search component in ReactJS</h1>
      </center>
      <div className="input-box">
        <input
          type="search"
          name="search-form"
          id="search-form"
          className="search-input"
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search user"
        />
      </div>
      <center>
        {filteredProducts.map((item, index) => {
          return (
            <div className="box" key={index}>
              <div className="card">
                <div className="category">@{item.id}</div>
                <div className="heading">
                  {item.price}
                  <div className="author">{item.title}</div>
                </div>
              </div>
            </div>
          );
        })}
      </center>
    </div>
  );
}

export default Apiapp;

