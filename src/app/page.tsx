"use client";
import { CpI } from '@/icons/icons';
import {
  BouncingBalls,
  BouncingSquares,
  Circle,
  ColorFullSpinner,
  DoubleBounce,
  DoubleRing,
  ExpandingCircle,
  ExpandingRing,
  FlashSquares,
  FlashingDots,
  FlashingSquares,
  FoldingCube,
  Gooey,
  Infinite,
  MorphSquare,
  PulsatingCircle,
  PulsatingCrosses,
  PulsatingHexagon,
  PulsatingRectangles,
  PulsatingRings,
  PulsatingSquare,
  RollingSquares,
  RotatingBars,
  RotatingDots,
  RotatingPlane,
  ScalingSquares,
  SkewedSquares,
  SlidingBars,
  SlidingLines,
  SlidingSquares,
  Spinner,
  SpinnerHalf,
  SpinnerRing,
  WanderingCubes,
  ZigZagLine,
} from "loaders-ui";
import 'loaders-ui/dist/main/index.min.css';
import toast from 'react-hot-toast';

export default function Home() {
  const color = "#623CEA";
  const handleCopy = (copyText: string) => {
    navigator.clipboard.writeText(copyText).then(() => {
      toast.success(copyText) // Reset the copied state after 2 seconds
    }).catch(err => {
      console.error('Failed to copy: ', err);
    });
  };
  const loaders = [
    {
      element: Infinite,
      copy: "Infinite",
      date: "Sun Jul 14 2024 13:02:30 GMT+0530 (India Standard Time)",
    },
    {
      element: BouncingBalls,
      copy: "BouncingBalls",
      date: "Sun June 14 2024 13:02:30 GMT+0530 (India Standard Time)",
    },
    {
      element: BouncingSquares,
      copy: "BouncingSquares",
      date: "Sun June 14 2024 13:02:30 GMT+0530 (India Standard Time)",
    },
    {
      element: Circle,
      copy: "Circle",
      date: "Sun June 14 2024 13:02:30 GMT+0530 (India Standard Time)",
    },
    {
      element: ColorFullSpinner,
      copy: "ColorFullSpinner",
      date: "Sun June 14 2024 13:02:30 GMT+0530 (India Standard Time)",
    },
    {
      element: DoubleBounce,
      copy: "DoubleBounce",
      date: "Sun June 14 2024 13:02:30 GMT+0530 (India Standard Time)",
    },
    {
      element: DoubleRing,
      copy: "DoubleRing",
      date: "Sun June 14 2024 13:02:30 GMT+0530 (India Standard Time)",
    },
    {
      element: ExpandingCircle,
      copy: "ExpandingCircle",
      date: "Sun June 14 2024 13:02:30 GMT+0530 (India Standard Time)",
    },
    {
      element: ExpandingRing,
      copy: "ExpandingRing",
      date: "Sun June 14 2024 13:02:30 GMT+0530 (India Standard Time)",
    },
    {
      element: FlashSquares,
      copy: "FlashSquares",
      date: "Sun June 14 2024 13:02:30 GMT+0530 (India Standard Time)",
    },
    {
      element: FlashingDots,
      copy: "FlashingDots",
      date: "Sun June 14 2024 13:02:30 GMT+0530 (India Standard Time)",
    },
    {
      element: FlashingSquares,
      copy: "FlashingSquares",
      date: "Sun June 14 2024 13:02:30 GMT+0530 (India Standard Time)",
    },
    {
      element: FoldingCube,
      copy: "FoldingCube",
      date: "Sun June 14 2024 13:02:30 GMT+0530 (India Standard Time)",
    },
    {
      element: MorphSquare,
      copy: "MorphSquare",
      date: "Sun June 14 2024 13:02:30 GMT+0530 (India Standard Time)",
    },
    {
      element: PulsatingCircle,
      copy: "PulsatingCircle",
      date: "Sun June 14 2024 13:02:30 GMT+0530 (India Standard Time)",
    },
    {
      element: PulsatingCrosses,
      copy: "PulsatingCrosses",
      date: "Sun June 14 2024 13:02:30 GMT+0530 (India Standard Time)",
    },
    {
      element: PulsatingHexagon,
      copy: "PulsatingHexagon",
      date: "Sun June 14 2024 13:02:30 GMT+0530 (India Standard Time)",
    },
    {
      element: PulsatingRectangles,
      copy: "PulsatingRectangles",
      date: "Sun June 14 2024 13:02:30 GMT+0530 (India Standard Time)",
    },
    {
      element: PulsatingRings,
      copy: "PulsatingRings",
      date: "Sun June 14 2024 13:02:30 GMT+0530 (India Standard Time)",
    },
    {
      element: PulsatingSquare,
      copy: "PulsatingSquare",
      date: "Sun June 14 2024 13:02:30 GMT+0530 (India Standard Time)",
    },
    {
      element: RollingSquares,
      copy: "RollingSquares",
      date: "Sun June 14 2024 13:02:30 GMT+0530 (India Standard Time)",
    },
    {
      element: RotatingBars,
      copy: "RotatingBars",
      date: "Sun June 14 2024 13:02:30 GMT+0530 (India Standard Time)",
    },
    {
      element: RotatingDots,
      copy: "RotatingDots",
      date: "Sun June 14 2024 13:02:30 GMT+0530 (India Standard Time)",
    },
    {
      element: RotatingPlane,
      copy: "RotatingPlane",
      date: "Sun June 14 2024 13:02:30 GMT+0530 (India Standard Time)",
    },
    {
      element: ScalingSquares,
      copy: "ScalingSquares",
      date: "Sun June 14 2024 13:02:30 GMT+0530 (India Standard Time)",
    },
    {
      element: SkewedSquares,
      copy: "SkewedSquares",
      date: "Sun June 14 2024 13:02:30 GMT+0530 (India Standard Time)",
    },
    {
      element: SlidingBars,
      copy: "SlidingBars",
      date: "Sun June 14 2024 13:02:30 GMT+0530 (India Standard Time)",
    },
    {
      element: SlidingLines,
      copy: "SlidingLines",
      date: "Sun June 14 2024 13:02:30 GMT+0530 (India Standard Time)",
    },
    {
      element: SlidingSquares,
      copy: "SlidingSquares",
      date: "Sun June 14 2024 13:02:30 GMT+0530 (India Standard Time)",
    },
    {
      element: Spinner,
      copy: "Spinner",
      date: "Sun June 14 2024 13:02:30 GMT+0530 (India Standard Time)",
    },
    {
      element: SpinnerHalf,
      copy: "SpinnerHalf",
      date: "Sun June 14 2024 13:02:30 GMT+0530 (India Standard Time)",
    },
    {
      element: SpinnerRing,
      copy: "SpinnerRing",
      date: "Sun June 14 2024 13:02:30 GMT+0530 (India Standard Time)",
    },
    {
      element: WanderingCubes,
      copy: "WanderingCubes",
      date: "Sun June 14 2024 13:02:30 GMT+0530 (India Standard Time)",
    },
    {
      element: ZigZagLine,
      copy: "ZigZagLine",
      date: "Sun June 14 2024 13:02:30 GMT+0530 (India Standard Time)",
    },
  ]
  const isNew = (dateStr: string) => {
    const date = new Date(dateStr);
    const now = new Date();
    const oneMonthAgo = new Date();
    oneMonthAgo.setMonth(now.getMonth() - 1);
    return date >= oneMonthAgo;
  };
  return (
    <main className="home_page">
      <div className="header_heading">
        <p>npm i loaders-ui <button onClick={() => handleCopy("npm i loaders-ui")}><CpI /></button></p>
        <p>import &apos;loaders-ui/dist/main/index.min.css&apos;; <button onClick={() => handleCopy("import 'loaders-ui/dist/main/index.min.css';")}><CpI /></button></p>
      </div>
      <div className="banner">
        <h1>Loaders</h1>
      </div>
      <div className="container">
        <div className="row">
          {
            loaders.map((item, index) => {
              return (
                <div key={index} className="col">
                  <button onClick={() => handleCopy(`<${item.copy} />`)} className="box">
                    <item.element color={color} />
                    {isNew(item.date) && <p className="is_new">new</p>}
                  </button>
                </div>
              )
            })
          }
        </div>
      </div>
    </main>
  );
}
