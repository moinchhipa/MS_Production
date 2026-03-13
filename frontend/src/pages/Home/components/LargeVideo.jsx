function LargeVideo() {
  return (
    <div className="flex justify-center items-center w-full my-16 px-4">
      <div className="w-full max-w-5xl aspect-video">
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/_jcFTEK9IXI?si=nR2QEwH_Vg3s-jYa"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default LargeVideo;
