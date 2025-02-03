import Utils from "@/app/ReuseFuncs/utils";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { dbConnect } from "@/lib/dbConnect";
import Image from "next/image";
export default async function Category() {
  const gadgetCollection = await dbConnect("allGadgets");
  const data = await gadgetCollection.find().toArray();
  console.log(data);
  const Game = data.filter((item) => item.category === "Gaming");
  return (
    <>
      <section className="w-11/12 mx-auto my-8">
        <div className="mb-8">
          <Utils title="browse by category"></Utils>
        </div>
        <div className="relative">
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-11/12 mx-auto"
          >
            <CarouselContent>
              {data.map((item, index) => (
                <CarouselItem
                  key={index}
                  className="md:basis-1/2 lg:basis-1/4"
                >
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center p-6">
                        <span className="text-xl font-semibold">
                          <figure className="w-14 h-14 mx-auto flex justify-center items-center">
                            <Image
                              src={item.category_image}
                              alt="Category_image"
                              width={56} height={56}
                            />
                          </figure>
                          {item.category}
                        </span>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute -top-6 right-0 left-[88%] transform -translate-y-1/2 bg-[#F5F5F5] hover:bg-[#8986867a] hover:transition-colors hover:duration-300 border-none" />
            <CarouselNext className="absolute -top-6 right-12 transform -translate-y-1/2 bg-[#F5F5F5] hover:bg-[#8986867a] hover:transition-colors hover:duration-300 border-none" />
          </Carousel>
        </div>
      </section>
    </>
  );
}
