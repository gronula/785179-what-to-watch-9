import { useEffect, useRef } from 'react';
import { BaseProps } from '../../types/base-props';

type VideoPlayerProps = BaseProps & {
  height: number;
  isActive: boolean;
  muted?: boolean;
  poster: string;
  src: string;
  width: number;
}

const INITIAL_VIDEO_TIME = 0;

function VideoPlayer(
  {
    height,
    isActive,
    muted = false,
    poster,
    src,
    width,
  }: VideoPlayerProps,
): JSX.Element {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const pauseTime = useRef(INITIAL_VIDEO_TIME);

  useEffect(() => {
    if (videoRef.current === null) {
      return;
    }

    if (isActive) {
      videoRef.current.currentTime = pauseTime.current;
      videoRef.current.play();
    } else {
      pauseTime.current = videoRef.current.currentTime;
      videoRef.current.load();
    }
  }, [isActive]);

  return (
    <video
      ref={videoRef}
      src={src}
      poster={poster}
      width={width}
      height={height}
      muted={muted}
    />
  );
}


export default VideoPlayer;
