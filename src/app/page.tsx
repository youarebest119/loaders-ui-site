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
      element: BouncingBalls,
      copy: "BouncingBalls",
    },
    {
      element: BouncingSquares,
      copy: "BouncingSquares",
    },
    {
      element: Circle,
      copy: "Circle",
    },
    {
      element: ColorFullSpinner,
      copy: "ColorFullSpinner",
    },
    {
      element: DoubleBounce,
      copy: "DoubleBounce",
    },
    {
      element: DoubleRing,
      copy: "DoubleRing",
    },
    {
      element: ExpandingCircle,
      copy: "ExpandingCircle",
    },
    {
      element: ExpandingRing,
      copy: "ExpandingRing",
    },
    {
      element: FlashSquares,
      copy: "FlashSquares",
    },
    {
      element: FlashingDots,
      copy: "FlashingDots",
    },
    {
      element: FlashingSquares,
      copy: "FlashingSquares",
    },
    {
      element: FoldingCube,
      copy: "FoldingCube",
    },
    {
      element: MorphSquare,
      copy: "MorphSquare",
    },
    {
      element: PulsatingCircle,
      copy: "PulsatingCircle",
    },
    {
      element: PulsatingCrosses,
      copy: "PulsatingCrosses",
    },
    {
      element: PulsatingHexagon,
      copy: "PulsatingHexagon",
    },
    {
      element: PulsatingRectangles,
      copy: "PulsatingRectangles",
    },
    {
      element: PulsatingRings,
      copy: "PulsatingRings",
    },
    {
      element: PulsatingSquare,
      copy: "PulsatingSquare",
    },
    {
      element: RollingSquares,
      copy: "RollingSquares",
    },
    {
      element: RotatingBars,
      copy: "RotatingBars",
    },
    {
      element: RotatingDots,
      copy: "RotatingDots",
    },
    {
      element: RotatingPlane,
      copy: "RotatingPlane",
    },
    {
      element: ScalingSquares,
      copy: "ScalingSquares",
    },
    {
      element: SkewedSquares,
      copy: "SkewedSquares",
    },
    {
      element: SlidingBars,
      copy: "SlidingBars",
    },
    {
      element: SlidingLines,
      copy: "SlidingLines",
    },
    {
      element: SlidingSquares,
      copy: "SlidingSquares",
    },
    {
      element: Spinner,
      copy: "Spinner",
    },
    {
      element: SpinnerHalf,
      copy: "SpinnerHalf",
    },
    {
      element: SpinnerRing,
      copy: "SpinnerRing",
    },
    {
      element: WanderingCubes,
      copy: "WanderingCubes",
    },
    {
      element: ZigZagLine,
      copy: "ZigZagLine",
    },
  ]
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
        <div className="row" >
          {
            loaders.map((item, index) => {
              return (
                <div key={index} className="col">
                  <button onClick={() => handleCopy(`<${item.copy} />`)} className="box">
                    <item.element color={color} />
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
