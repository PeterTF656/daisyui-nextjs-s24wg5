import Head from 'next/head';
import { SwatchesPicker, SketchPicker } from 'react-color';

export default function Home() {
  return (
    <div className="flex px-8 flex-row flex-auto space-around w-full">
      <Head>
        <title>This is for UI Testing</title>
      </Head>
      <div className="flex flex-row">
        <div className="flex flex-col">
          <SwatchesPicker />
          <div className="divider">choose color swatch or color sketch</div>
          <SketchPicker />
        </div>
      </div>
      <div className="pl-6">
        <button className="btn">This is for UI Testing</button>
      </div>
    </div>
  );
}
