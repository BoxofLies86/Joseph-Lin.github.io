const ZoomImage = ({ src, alt, style }) => {
  return (
    <div className="overflow-hidden rounded-3xl relative">
      <img
        src={src} // Dynamically use the passed `src`
        alt={alt} // Dynamically use the passed `alt`
        style={style} //adjusts size of image
        className="rounded-3xl transition-transform duration-300 hover:scale-110"
      />
    </div>
  );
};

export default ZoomImage;
