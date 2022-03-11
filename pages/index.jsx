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
      <Section height={128}>
        <div className="flex h-full">
          <div className="flex flex-1 h-full justify-center bg-red-100 items-center">
            IMAGE
          </div>
          <div className="flex flex-1 flex-col h-full justify-center bg-red-100">
            <div className="w-128">
              <div className="text-3xl font-bold">
                About Us
              </div>
              <p className="py-2">
                We work with various professional organizations to provide recruitments for them. Our recruitment process involves best practices and planning, providing the best candidates for a permanent role in any company.
              </p>
              <p className="py-2">
                V3Tech Solutions is involved in developing a wide range of solutions in finding the perfect candidate who has a strong knowledge in his/her work and suits the company&apos;s work culture...
              </p>
            </div>
          </div>
        </div>
      </Section>
      <Section height={128}>
        <div className="flex flex-col h-full">
          <div className="flex flex-col items-center py-10 leading-loose tracking-wide">
            <div className="text-3xl font-bold">
              Services We Offer
            </div>
            <div className="">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus lacinia rhoncus sapien eget venenatis. Vestibulum molestie suscipit vehicula.
            </div>
          </div>
          <div className="flex flex-grow">
            <div className="flex flex-1 bg-red-200 h-full">
            </div>
            <div className="flex flex-1 bg-blue-200 h-full">
            </div>
            <div className="flex flex-1 bg-green-200 h-full">
            </div>
          </div>
        </div>
      </Section>
      <div className="h-64">
        <div className="flex justify-center items-center">
          <p className="text-2xl font-bold py-3 leading-loose">
            Our Clients
          </p>
        </div>
      </div>
      <div className="h-64">
        <div className="flex justify-center items-center">
          <p className="text-2xl font-bold py-6">
            Our Technologies
          </p>
        </div>
      </div>
    </div>
  )
}
