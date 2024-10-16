import { CvButtonType } from "../../components/MyTypes";

function CvButton({ cv, to }: CvButtonType) {
  return (
    <>
      <a
        href={to}
        download={cv}
        className="border border-orange text-center text-[1rem] hover:bg-transparent font-semibold p-3 xs:w-[45vw] text-white lg:w-[15vw] rounded-[11px] bg-orange duration-500 hover:shadow-lg hover:shadow-orange/50 hover:text-orange hover:border-orange"
      >
        DOWNLOAD CV
      </a>
    </>
  );
}

export default CvButton;
