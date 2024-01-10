import _ from "prop-types";

FloatingAddButton.propTypes = {
  openPopup: _.func,
};
function FloatingAddButton({ openPopup }) {
  return (
    <button
      className="fixed bottom-10 right-10 bg-_designBlue-500 h-[50px] aspect-square rounded-full z-10 flex justify-center items-center md:hidden"
      onClick={openPopup}
    >
      <img src="/icons/add-white.svg" alt="add assessment" />
    </button>
  );
}

export default FloatingAddButton;
