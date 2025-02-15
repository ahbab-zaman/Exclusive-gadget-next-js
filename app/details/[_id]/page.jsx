import React from "react";

export default async function viewDetails({ params }) {
  const data = await params;
  console.log(data);
  return <div>viewDetails</div>;
}
