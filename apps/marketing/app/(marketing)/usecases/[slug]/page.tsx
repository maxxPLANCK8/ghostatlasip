import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { UseCasePage } from "@/components/use-case-page";
import { getUseCase, getUseCaseSlugs } from "@/lib/usecases";

const ogImage = "https://ghostatlas.com/og/usecase.png";

type UseCasePageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return getUseCaseSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: UseCasePageProps): Metadata {
  const useCase = getUseCase(params.slug);

  if (!useCase) {
    return {
      title: "Use Case | GHOSTATLAS IP"
    };
  }

  return {
    title: `${useCase.title} | GHOSTATLAS IP Use Cases`,
    description: useCase.description,
    openGraph: {
      title: `${useCase.title} | GHOSTATLAS IP`,
      description: useCase.description,
      images: [ogImage]
    },
    twitter: {
      card: "summary_large_image",
      title: `${useCase.title} | GHOSTATLAS IP`,
      description: useCase.description,
      images: [ogImage]
    }
  };
}

export default function UseCaseRoutePage({ params }: UseCasePageProps) {
  const useCase = getUseCase(params.slug);

  if (!useCase) {
    notFound();
  }

  return <UseCasePage useCase={useCase} />;
}
