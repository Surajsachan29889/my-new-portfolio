import anime from 'animejs'

// const WaterDropGrid = () => {
//   return (
//     <div className="relative grid place-content-center bg-[#fffefe] px-8 py-12 ">
//       <DotGrid />
//     </div>
//   );
// };

const GRID_WIDTH = 65;
const GRID_HEIGHT = 30;

const DotGrid = () => {
  const handleDotClick = (e) => {
    anime({
      targets: ".dot-point",
      scale: [
        { value: 1.35, easing: "easeOutSine", duration: 100 },
        { value: 1, easing: "easeInOutQuad", duration: 200 },
      ],
      translateY: [
        { value: -15, easing: "easeOutSine", duration: 100 },
        { value: 0, easing: "easeInOutQuad", duration: 200 },
      ],
      opacity: [
        { value: 1, easing: "easeOutSine", duration: 100 },
        { value: 0.5, easing: "easeInOutQuad", duration: 200 },
      ],
      delay: anime.stagger(10, {
        grid: [GRID_WIDTH, GRID_HEIGHT],
        from: e.target.dataset.index,
      }),
    });
  };

  const dots = [];
  let index = 0;

  for (let i = 0; i < GRID_WIDTH; i++) {
    for (let j = 0; j < GRID_HEIGHT; j++) {
      dots.push(
        <div
          className="group  rounded-full p-2 transition-colors hover:bg-pri"
          data-index={index}
          key={`${i}-${j}`}
        >
          <div
            className="dot-point h-2 w-2 rounded-full bg-gradient-to-b bg-[#bbbbbb]  opacity-50 group-hover:from-indigo-600 group-hover:to-white"
            data-index={index}
          />
        </div>
      );
      index++;
    }
  }

  return (
    <div
      onClick={handleDotClick}
      style={{ gridTemplateColumns: `repeat(${GRID_WIDTH}, 1fr)` }}
      className="grid w-fit"
    >
      {dots}
    </div>
  );
};

export default DotGrid;