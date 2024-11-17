import React from "react";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import {
  spfOne,
  spfTwo,
  spfThree,
  spfFour,
} from "../../../assets/images/index";

const SpecialOffers = () => {
  return (
    <div className="w-full pb-20">
      <Heading heading="Special Offers" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 gap-10">
        <Product
          _id="1101"
          img={spfOne}
          productName="Study Table For Kids"
          price="35.00"
          color="Green and White"
          badge={true}
          des=""
        />
        <Product
          _id="1102"
          img={spfTwo}
          productName="Sports Watch"
          price="180.00"
          color="Mixed"
          badge={true}
          des=""
        />
        <Product
          _id="1103"
          img={spfThree}
          productName="NCERT Exemplarn Books"
          price="25.00"
          color="Mixed"
          badge={true}
          des=""
        />
        <Product
          _id="1104"
          img={spfFour}
          productName="School Kit"
          price="220.00"
          color="Mixed"
          badge={true}
          des=""
        />
      </div>
    </div>
  );
};

export default SpecialOffers;
