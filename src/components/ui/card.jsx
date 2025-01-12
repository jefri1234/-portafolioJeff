import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";

function Tarjeta() {
  return (
    <Card className="py-4 hover:bg-gray-800  transition-all duration-300 ease-in-out">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">Daily Mix</p>
        <small className="text-default-500">12 Tracks</small>
        <h4 className="font-bold text-large">Frontend Radio</h4>
        <button className="bg-gray-800 p-3 rounded-lg mt-2 hover:bg-gray-950 ">Ver Proyecto</button>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src="https://nextui.org/images/hero-card-complete.jpeg"
          width={270}
        />
      </CardBody>
    </Card>
  );
}

export default Tarjeta;