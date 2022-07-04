import { useState, useEffect } from "react";
import { Card } from "../../components/card/Card";
import { Category } from "../../components/category/Category";
import axios from "axios";

const Home = () => {
  return (
    <div className="container">
      <Category />
      <Card />
    </div>
  );
};

export { Home };
