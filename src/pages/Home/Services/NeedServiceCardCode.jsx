// <div className="cardsWrap">
// {singleservices.map((card) => (
//   <motion.div 
//   variants={galleryAnimation}
//   initial="hidden"
//   animate="visible"
//   whileHover="hover"
//   key={card.id} className="cards">
//     <div className="inner-box">
//       <div className="cards-front cards-front5">
//         <div className="iconWrap">
//           <img src={card.image} alt="icon" />
//         </div>
//         <p className="mt-2 font-bold">{card.title}</p>
//       </div>

//       <div className="cards-back text-white">
//         <div className="cards-back-content md:px-3 text-center">
//           <b className="block"> {card.title}</b>
//           <small className="my-1 md:my-3">
//            {card.subtitle.slice(0, 80)}...
//           </small>
//           <div onClick={handleDetails}>
//             <Link to={`singleService/${card._id}`}> <div className="flex items-center justify-center"> <span>Read More </span><small><FaArrowRight/></small></div></Link>
//             </div>
//             {/* type=${packageType} */}
//         </div>
//       </div>

//     </div>
//   </motion.div>
// ))}
// </div>