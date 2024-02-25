import { FaLink, FaUserTie } from "react-icons/fa";
import GraphicEqIcon from '@mui/icons-material/GraphicEq';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
const MessageModal = () => {
  return (
    <div className="w-[310px] h-[450px] bg-white fixed right-5 bottom-32 rounded-2xl text-black shadow-sm z-10 overflow-hidden ">
      <div className="flex flex-col justify-between h-full ">
        <div className="bg-[#680C70] w-full h-28 text-white flex justify-center items-center ">
          <div className="flex items-center">
            <div className="bg-white p-1 rounded-full text-[#707584] ">
              {" "}
              <FaUserTie size={20} />
            </div>
            <span className="ml-2 text-sm "> Shahin from SoftyPy</span>
          </div>
        </div>
        <div className="h-[240px] overflow-y-scroll pl-5 pr-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque nemo quod sunt sapiente dignissimos quam amet. Odit vel animi dicta excepturi quod suscipit iste reprehenderit cupiditate, ab rem beatae omnis! Adipisci quibusdam autem magni placeat doloremque atque molestiae quam iure omnis pariatur! Aut ea, possimus sed adipisci suscipit saepe temporibus reprehenderit rem error consequuntur quidem nemo optio qui atque placeat minima laboriosam, repellendus commodi, perspiciatis assumenda itaque eius? Expedita corporis voluptatem maxime laborum maiores id soluta molestiae hic nisi magni, quos nemo! Quod et officia deleniti voluptate illo repellendus. Consectetur minus mollitia voluptas incidunt, dolore provident id odio, at obcaecati assumenda asperiores nemo cum voluptatum qui eligendi sed enim, ea cupiditate. Ipsum omnis numquam laborum repellat tempore impedit fugit quod deleniti quia unde? Autem facilis sequi incidunt consectetur vero minima quia, mollitia eaque et ipsam beatae. Incidunt minima culpa in accusantium. Eius, deserunt eos quam eum veritatis, ab adipisci sed temporibus accusamus nesciunt alias culpa architecto atque saepe aperiam id dolore rem sunt nobis. Officiis perspiciatis voluptate nobis aperiam, iure repudiandae quisquam natus, cupiditate velit amet deserunt. Repellat repellendus error optio a amet ut ea! Similique magnam excepturi necessitatibus ratione in neque nobis? Earum minus tempora architecto tempore veritatis maiores aperiam! Soluta, quod? Vero dolor accusantium laboriosam unde consequuntur? Dicta officia veniam harum nesciunt? Excepturi distinctio qui, maxime tempora ipsam vitae magnam quidem sit possimus ab eaque repellat recusandae est pariatur, vel officia corrupti vero quam sequi quisquam tenetur dignissimos reiciendis aperiam esse! Ab voluptatem eos quae sequi natus minus repellendus veritatis hic praesentium nesciunt. Amet voluptatum maiores tenetur. Aliquid unde blanditiis velit minus! Quis, totam. Culpa praesentium architecto molestias sint eum, omnis voluptatem consequuntur quos, totam laboriosam maxime? A delectus nulla odit debitis maxime voluptas quis officia eum quam? Possimus id dolor minus tempore cupiditate sed accusamus, praesentium eius!
        </div>

        <div className=" w-full h-24 bg-white flex pl-3  items-center border-t-[#ddd] border-[2px] ">
          <div className="flex items-start flex-col ">
          <input type="text" name="" placeholder="Compose your message...." className="w-[100%] bg-transparent  h-10 placeholder:text-[14px] "/>
            <div className=" flex items-center text-[#707584] ">

            <SentimentSatisfiedAltIcon size={15} className="chatIcon"/>
              <FaLink size={15} className="chatIcon"/>
              <GraphicEqIcon size={15} className="chatIcon"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageModal;
