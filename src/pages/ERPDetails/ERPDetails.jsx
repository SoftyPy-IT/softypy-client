import NavBar from "../Shared/NavBar/NavBar";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";
import '../ERP/ERP.style.css'
import { HiCheck, HiX } from "react-icons/hi";

const ERPDetails = () => {
  return (
    <div>
      <div className="text-white bg-[#680C70]">
        <NavBar />
      </div>
      <div className="pt-10">
        <SectionTitle
          title="PRODUCTS FEATURES & PRICING"
          text="Whatever your requirements, there's a brilliant solution"
        />
      </div>

      <div className="pricingTable mt-20">
        <table border={2} className="priceTable">
          <thead>
            <tr>
              <th rowSpan={3}> Item Master</th>
              <th> Item Master</th>
              <th> Item Master</th>
              <th> Item Master</th>
              <th> Item Master</th>
              <th> Item Master</th>
              <th> Item Master</th>
              <th> Item Master</th>
              <th> Item Master</th>
              <th> Item Master</th>
              <th> Item Master</th>
              <th> Item Master</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td rowSpan={3}>first row</td>
              <td>Item Matrix-Shade/Size</td>
              <td><HiCheck size={25} className="text-[#198759]"/> </td>
              <td> <HiX size={25} className="text-red-700"/> </td>
              <td>first row </td>
              <td>first row </td>
              <td>first row </td>
              <td>first row </td>
              <td>first row </td>
              <td>first row </td>
              <td>first row </td>
              <td>first row </td>
            </tr>
            <tr>
              <td>Item Category-30X5 Grouping</td>
              <td>second row</td>
              <td>second row</td>
              <td>second row</td>
              <td>second row</td>
              <td>second row</td>
              <td>second row</td>
              <td>second row</td>
              <td>second row</td>
              <td>second row</td>
              <td>second row</td>
              <td>second row</td>
            </tr>
            <tr>
              <td>Conversion Factor-Carton/Box/Dozen</td>
              <td>third row</td>
              <td>third row</td>
              <td>third row</td>
              <td>third row</td>
              <td>third row</td>
              <td>third row</td>
              <td>third row</td>
              <td>third row</td>
              <td>third row</td>
              <td>third row</td>
              <td>third row</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>erp details </h3>
    </div>
  );
};

export default ERPDetails;
