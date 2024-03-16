import {
  HiAdjustments,
  HiChevronDoubleRight,
  HiCurrencyDollar,
  HiOfficeBuilding,
  HiOutlineHome,
  HiOutlineIdentification,
  HiOutlineShoppingCart,
  HiOutlineUsers,
} from "react-icons/hi";
import Container from "../../../ui/Container";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import "../ERP.style.css";
import {
  HiClipboardDocument,
  HiMiniShoppingBag,
  HiOutlineHandRaised,
} from "react-icons/hi2";
const ModuleCovered = () => {
  const modulesData = [
    {
      id: 1,
      name: "Warehouse Management ",
    },
    {
      id: 1,
      name: "Inventory Management ",
    },
    {
      id: 1,
      name: "Accounts & Finance ",
    },
    {
      id: 1,
      name: "E-commerce ",
    },
    {
      id: 1,
      name: "Point of Sale ",
    },
    {
      id: 1,
      name: "B2B ",
    },
    {
      id: 1,
      name: "CRM - Loyalty  ",
    },
    {
      id: 1,
      name: "Promotion & Campaign  ",
    },
    {
      id: 1,
      name: "Warehouse Management ",
    },
    {
      id: 1,
      name: "Order Processing ",
    },
    {
      id: 1,
      name: "Production Management ",
    },
    {
      id: 1,
      name: "Payroll ",
    },
  ];
  return (
    <div className="sectionMargin">
      <Container>
        <SectionTitle title="Modules Covered " />
        <div className="grid grid-cols1 md:grid-cols-3 lg:grid-cols-5 gap-3 mt-10">
          {modulesData.map((data, i) => (
            <div key={data.id} className="moduleCard text-center">
              <div>
                <div className="moduleIconWraps">
                  {i === 0 && (
                    <HiOutlineHome
                      className="text-center mx-auto text-[#40C7F4]"
                      size={40}
                    />
                  )}

                  {i === 1 && (
                    <HiOfficeBuilding
                      className="text-center mx-auto text-[#40C7F4]"
                      size={40}
                    />
                  )}

                  {i === 2 && (
                    <HiCurrencyDollar
                      className="text-center mx-auto text-[#40C7F4]"
                      size={40}
                    />
                  )}
                  {i === 3 && (
                    <HiOutlineShoppingCart
                      className="text-center mx-auto text-[#40C7F4]"
                      size={40}
                    />
                  )}
                  {i === 4 && (
                    <HiMiniShoppingBag
                      className="text-center mx-auto text-[#40C7F4]"
                      size={40}
                    />
                  )}
                  {i === 5 && (
                    <HiOutlineUsers
                      className="text-center mx-auto text-[#40C7F4]"
                      size={40}
                    />
                  )}
                  {i === 6 && (
                    <HiOutlineUsers
                      className="text-center mx-auto text-[#40C7F4]"
                      size={40}
                    />
                  )}
                  {i === 7 && (
                    <HiClipboardDocument
                      className="text-center mx-auto text-[#40C7F4]"
                      size={40}
                    />
                  )}
                  {i === 8 && (
                    <HiClipboardDocument
                      className="text-center mx-auto text-[#40C7F4]"
                      size={40}
                    />
                  )}
                  {i === 9 && (
                    <HiAdjustments
                      className="text-center mx-auto text-[#40C7F4]"
                      size={40}
                    />
                  )}
                  {i === 10 && (
                    <HiOutlineIdentification
                      className="text-center mx-auto text-[#40C7F4]"
                      size={40}
                    />
                  )}
                  {i === 11 && (
                    <HiOutlineHandRaised
                      className="text-center mx-auto text-[#40C7F4]"
                      size={40}
                    />
                  )}
                </div>
                <h3 className=" font-semibold mt-3"> {data.name}</h3>
                <HiChevronDoubleRight className="text-[#40C7F4] mx-auto mt-3" />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default ModuleCovered;
