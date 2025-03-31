import type { NextPage } from "next";

const GMap: NextPage = () => {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3245.641482272384!2d139.7012072757824!3d35.56255557262587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018606e567c989f%3A0x4682f25145c7b633!2z44CSMTQ2LTAwOTQg5p2x5Lqs6YO95aSn55Sw5Yy65p2x55-i5Y-j77yT5LiB55uu77yR77yS4oiS77yS77yQIOODk-ODqeODr-OCs-ODvCAx6ZqO!5e0!3m2!1sja!2sjp!4v1710812313081!5m2!1sja!2sjp"
      width="600"
      height="450"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  );
};

export default GMap;
