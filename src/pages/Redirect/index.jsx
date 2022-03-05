import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

export function Redirect() {
  const { id } = useParams();

  useEffect(() => {
    if (!id) return;
    console.log(id);
    window.location = `vs://videochamada?id=${id}`;
  }, [id]);

  return <p>Loading...</p>;
}
