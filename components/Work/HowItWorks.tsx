import { MedalIcon, MapIcon, PlaneIcon, GiftIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

interface FeatureProps {
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    title: "Pain Point Identification 😕",
    description:
      "We meet with your team to understand challenges and propose solutions.",
  },
  {
    title: "Software Architecture 🏗️",
    description:
      "We design software architecture and develop MVPs to validate ideas.",
  },
  {
    title: "Feedback Loop 🔄",
    description:
      "We gather feedback during implementation to continuously improve your software.",
  },
];

export const HowItWorks = () => {
  return (
    <section
      id="howItWorks"
      className="container mx-auto max-w-c-1390 py-24 text-center sm:py-32"
    >
      <h2 className="relative mb-6 text-3xl font-bold text-black dark:text-white xl:text-hero">
        How It{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary bg-clip-text text-transparent">
          Works{" "}
        </span>
      </h2>
      <p className="mx-auto mb-8 mt-4 text-xl text-black dark:text-white md:w-3/4">
        We will have periodic meetings with you and your team. We jointly
        quantify the pain points. We then do our research and analysis and
        propose solutions through discussions/documents.
      </p>

      <div className="grid grid-cols-1 gap-8 text-black dark:text-white md:grid-cols-2 lg:grid-cols-3">
        {features.map(({ title, description }: FeatureProps) => (
          <Card key={title} className="bg-muted/50">
            <CardHeader>
              <CardTitle className="grid place-items-center gap-4">
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent>{description}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
