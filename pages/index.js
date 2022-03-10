import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from "react";
import {
  TopHeader,
  Header,
  Carousal,
  Section
} from "../components"

export default function Home() {
  useEffect(() => {
    import('tw-elements')
  }, []);

  return (
    <div className="h-screen bg-white">
      <TopHeader />
      <Header />
      <Section height={128}>
        <Carousal />
      </Section>
      <div>
      </div>
    </div>
  )
}
